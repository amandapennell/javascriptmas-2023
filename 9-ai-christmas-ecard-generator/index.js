/** uncomment one of these **/
// import OpenAI from "openai"
import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HF_API_KEY)
const dialogModal = document.getElementById('dialog-modal')
const imageContainer = document.getElementById('image-container')
const form = document.getElementById('form-container');
const cardButton = document.getElementById('card-button');

/** show dialog on load **/
dialogModal.show()

/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal 
 *    should be hidden.
 * 2. Use the inputted text to generate an image 
 *    for the e-card using an AI model. 
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 * 
 * 🎁 hint.md for help!
 **/

async function submitButton(event) {
    event.preventDefault();
    dialogModal.close();

    const prompt = document.getElementById('user-input').value;

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

    try {
        const response = await hf.textToImage({
            model: 'stabilityai/stable-diffusion-2',
            inputs: prompt,
            parameters: {
                negative_prompt: 'blurry',
            },
        });

        const imageUrl = await blobToBase64(response);

        imageContainer.removeChild(loading);
        imageContainer.querySelector('img').src = imageUrl;

        document.getElementById('card-button').style.display = 'inline-block';

    } catch (error) {
        console.error('Error generating image:', error);
    }
}

cardButton.addEventListener('click', regeneratePrompt);

function regeneratePrompt() {
    document.getElementById('user-input').value = '';
    document.getElementById('card-button').style.display = 'none';
    dialogModal.show();
}

form.addEventListener('submit', submitButton);

async function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

