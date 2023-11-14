import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});
console.log(process.env.REACT_APP_OPEN_AI_KEY);
export default openai;