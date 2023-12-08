/** uncomment one of these **/
//import OpenAI from "openai" 
import { HfInference } from '@huggingface/inference'
import { textGeneration } from '@huggingface/inference'

document.getElementById('window-container').addEventListener('click', async function () {
    const prompts = [
        "What do you call an obnoxious reindeer?",
        "What do snowmen eat for breakfast?",
        "What does the gingerbread man put on his bed?",
        "What happened to the man who stole an Advent Calendar?",
        "What is it called when a snowman has a temper tantrum?",
        "What is Santa's favorite kind of candy?"
    ]
    const indexRandom = Math.floor(Math.random() * prompts.length)
    const elementRandom = prompts[indexRandom];
    const textToGenerate = elementRandom
    const response = await textGeneration({
        accessToken: process.env.HF_API_KEY,
        inputs: textToGenerate,
        model: "HuggingFaceH4/zephyr-7b-beta",
        parameters: { max_new_tokens: 17, max_length: 85 }
    })

    console.log(response)

    const generatedText = response.generated_text

    document.getElementById('joke-display').innerHTML = generatedText

    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
})