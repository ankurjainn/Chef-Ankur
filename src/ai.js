// import {HfInference} from "@huggingface/inference";
import axios from 'axios';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a 
recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page
`;

    export async function getRecipeFromGPT(ingredientsArr) {
        const ingredientsString = ingredientsArr.join(", ");
        const apiKey = 'Testing123'; // Replace with your actual OpenAI API key
        const url = 'https://api.openai.com/v1/chat/completions';

        try {
            const response = await axios.post(url, {
                model: "gpt-3.5-turbo",
                messages: [
                    {role: "system", content: SYSTEM_PROMPT},
                    {role: "user", content: `Here are the ingredients I have: ${ingredientsString}. 
                    Please suggest a recipe I can make with them.`}
                ],
                max_tokens: 1024,
                temperature: 0.8,
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data.choices[0].message.content;
        } catch (error) {
            console.error(error.message);
        }
    }