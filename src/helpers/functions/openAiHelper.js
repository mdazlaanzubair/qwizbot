import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getAnswer = async (
  prompt,
  model = "text-davinci-003",
  max_tokens = 100
) => {
  const response = await openai.createCompletion({
    model,
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  return response.data.choices[0].text;
};

export const codeCompletion = async (
  prompt,
  model = "code-davinci-002",
  max_tokens = 100
) => {
  const response = await openai.createCompletion({
    model,
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  return response;
};
