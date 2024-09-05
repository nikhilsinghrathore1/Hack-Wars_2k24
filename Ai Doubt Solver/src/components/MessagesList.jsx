import { useEffect, useRef } from "react";

// Pre-recorded responses
const preRecordedMessages = [
  {
    speech: "formal",
    answer: {
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
  },
  {
    speech: "casual",
    answer: {
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
  },
];

export const MessagesList = () => {
  const container = useRef();

  useEffect(() => {
    container.current.scrollTo({
      top: container.current.scrollHeight,
      behavior: "smooth",
    });
  }, [preRecordedMessages.length]);

  const renderEnglish = (englishText) => (
    <>
      <p className="text-4xl inline-block px-2 rounded-sm font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-300/90 to-white/90">
        {englishText}
      </p>
    </>
  );

  const renderJapanese = (japanese) => (
    <p className="text-white font-bold text-4xl mt-2 font-jp flex flex-wrap gap-1">
      {japanese.map((word, i) => (
        <span key={i} className="flex flex-col justify-end items-center">
          {word.reading && (
            <span className="text-2xl text-white/65">{word.reading}</span>
          )}
          {word.word}
        </span>
      ))}
    </p>
  );

  return (
    <div
      className={`w-[1288px] h-[676px] p-8 overflow-y-auto flex flex-col space-y-8 bg-transparent opacity-80`}
      ref={container}
    >
      {/* {preRecordedMessages.length === 0 && ( */}
        <div className="h-full w-full grid place-content-center text-center">
          <h2 className="text-8xl font-bold text-white/90 italic">
            Niko Teaches
            <br />
            Empower
          </h2>
          <h2 className="text-8xl font-bold font-jp text-red-600/90 italic">
            Better Learn
          </h2>
        </div>
      {/* )} */}
      {/* {preRecordedMessages.map((message, i) => (
        <div key={i}>
          <div className="flex">
            <div className="flex-grow">
              <div className="flex items-center gap-3">
                <span
                  className={`text-white/90 text-2xl font-bold uppercase px-3 py-1 rounded-full  ${
                    message.speech === "formal"
                      ? "bg-indigo-600"
                      : "bg-teal-600"
                  }`}
                >
                  {message.speech}
                </span>
                {renderEnglish(message.answer.english)}
              </div>

              {renderJapanese(message.answer.japanese)}
            </div>
          </div>
          <div className="p-5 mt-5 bg-gradient-to-br from-pink-200/20 to-pink-500/20 rounded-xl">
            <span className="pr-4 italic bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/70 text-3xl font-bold uppercase inline-block">
              Grammar Breakdown
            </span>
            {message.answer.grammarBreakdown.map((grammar, i) => (
              <div key={i} className="mt-3">
                {message.answer.grammarBreakdown.length > 1 && (
                  <>
                    {renderEnglish(grammar.english)}
                    {renderJapanese(grammar.japanese)}
                  </>
                )}

                <div className="mt-3 flex flex-wrap gap-3 items-end">
                  {grammar.chunks.map((chunk, i) => (
                    <div key={i} className="p-2 bg-black/30 rounded-md">
                      <p className="text-white/90 text-4xl font-jp">
                        {renderJapanese(chunk.japanese)}
                      </p>
                      <p className="text-pink-300/90 text-2xl">
                        {chunk.meaning}
                      </p>
                      <p className="text-blue-400/90 text-2xl">
                        {chunk.grammar}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};
