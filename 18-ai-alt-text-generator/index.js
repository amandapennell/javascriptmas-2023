/** OpenAI setup **/
// import OpenAI from "openai"
// const openai = new OpenAI({
//     dangerouslyAllowBrowser: true
// })

/** HuggingFace setup **/
import { HfInference } from '@huggingface/inference'
const hf = new HfInference(process.env.HF_API_KEY)
import { blobToBase64 } from '/utils'
const imageContainer = document.getElementById('image-container')
const cardButton = document.getElementById('card-button');
const dialogModal = document.getElementById('dialog-modal')
dialogModal.show()

document.addEventListener('submit', function (e) {
    e.preventDefault()
    const imageDescription = document.getElementById('user-input').value
    dialogModal.close()

    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.textContent = '... Loading Image';
    loading.style.fontFamily = 'Inter';
    loading.style.backgroundColor = 'lightgray';
    loading.style.borderRadius = '5px';
    loading.style.padding = '10px';
    loading.style.marginTop = '10px';
    loading.style.textAlign = 'center';
    imageContainer.appendChild(loading);

    generateImage(imageDescription)

})

async function generateImage(imageToGenerate) {
    /** OpenAI **/
    // const response = await openai.images.generate({
    //     model: "dall-e-2",
    //     prompt: imageToGenerate,
    //     size: "256x256"
    // })
    // generateAltText(response.data[0].url)

    /** HuggingFace **/
    const response = await hf.textToImage({
        inputs: imageToGenerate,
        model: "stabilityai/stable-diffusion-2",
    })
    const imageUrl = await blobToBase64(response)
    generateAltText(imageUrl)


}

async function generateAltText(imageUrl) {
    /**
    * 🎄 Challenge:
    * 1. Use AI to generate alt text for the
    *    image provided by generateImage().
    * 2. Pass the alt text to renderImage() 
    *    as a parameter. 
    *
    * 🎁 hint.md for help!
    **/
    const response = await hf.imageToText({
        data: await (await fetch(imageUrl)).blob(),
        model: "Salesforce/blip-image-captioning-base",
    })

    renderImage(imageUrl, response.generated_text)
}

function renderImage(imageUrl, altText) {
    console.log(altText)
    const imageContainer = document.getElementById('image-container')
    const cardButton = document.getElementById('card-button')
    imageContainer.innerHTML = ''
    const image = document.createElement('img')
    image.src = imageUrl
    image.alt = altText
    image.onload = function () {
        cardButton.style.display = 'block'
    }
    imageContainer.appendChild(image)

    cardButton.addEventListener('click', regenerateCard)
}

function regenerateCard() {
    document.getElementById('user-input').value = '';
    document.getElementById('card-button').style.display = 'none';
    dialogModal.show();
}