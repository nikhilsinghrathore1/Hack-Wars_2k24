import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], 
});
console.log(openai)
console.log("sdfadsf")

// Pre-recorded responses
const responses = {
  formal: {
    english: "Do you live in Japan?",
    japanese: [
      { word: "日本", reading: "にほん" },
      { word: "に" },
      { word: "住んで", reading: "すんで" },
      { word: "います" },
      { word: "か" },
      { word: "?" },
    ],
    grammarBreakdown: [
      {
        english: "Do you live in Japan?",
        japanese: [
          { word: "日本", reading: "にほん" },
          { word: "に" },
          { word: "住んで", reading: "すんで" },
          { word: "います" },
          { word: "か" },
          { word: "?" },
        ],
        chunks: [
          {
            japanese: [{ word: "日本", reading: "にほん" }],
            meaning: "Japan",
            grammar: "Noun",
          },
          {
            japanese: [{ word: "に" }],
            meaning: "in",
            grammar: "Particle",
          },
          {
            japanese: [{ word: "住んで", reading: "すんで" }, { word: "います" }],
            meaning: "live",
            grammar: "Verb + て form + います",
          },
          {
            japanese: [{ word: "か" }],
            meaning: "question",
            grammar: "Particle",
          },
          {
            japanese: [{ word: "?" }],
            meaning: "question",
            grammar: "Punctuation",
          },
        ],
      },
    ],
  },
  casual: {
    english: "Do you live in Japan?",
    japanese: [
      { word: "日本", reading: "にほん" },
      { word: "に" },
      { word: "住んで", reading: "すんで" },
      { word: "いる" },
      { word: "の" },
      { word: "?" },
    ],
    grammarBreakdown: [
      {
        english: "Do you live in Japan?",
        japanese: [
          { word: "日本", reading: "にほん" },
          { word: "に" },
          { word: "住んで", reading: "すんで" },
          { word: "いる" },
          { word: "の" },
          { word: "?" },
        ],
        chunks: [
          {
            japanese: [{ word: "日本", reading: "にほん" }],
            meaning: "Japan",
            grammar: "Noun",
          },
          {
            japanese: [{ word: "に" }],
            meaning: "in",
            grammar: "Particle",
          },
          {
            japanese: [{ word: "住んで", reading: "すんで" }, { word: "いる" }],
            meaning: "live",
            grammar: "Verb + て form + いる",
          },
          {
            japanese: [{ word: "の" }],
            meaning: "question",
            grammar: "Particle",
          },
          {
            japanese: [{ word: "?" }],
            meaning: "question",
            grammar: "Punctuation",
          },
        ],
      },
    ],
  },
};

export async function GET(req) {
  const speech = req.nextUrl.searchParams.get("speech") || "formal";
  const response = responses[speech];

  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
