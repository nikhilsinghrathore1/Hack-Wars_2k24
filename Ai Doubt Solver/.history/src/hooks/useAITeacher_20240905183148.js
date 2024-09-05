const { create } = require("zustand");

export const teachers = ["Nanami", "Naoki"];

export const useAITeacher = create((set, get) => ({
  messages: [],
  currentMessage: null,
  teacher: teachers[0],
  setTeacher: (teacher) => {
    set(() => ({
      teacher,
      messages: get().messages.map((message) => {
        message.audioPlayer = null; // New teacher, new Voice
        return message;
      }),
    }));
  },
  classroom: "default",
  setClassroom: (classroom) => {
    set(() => ({
      classroom,
    }));
  },
  loading: false,
  furigana: true,
  setFurigana: (furigana) => {
    set(() => ({
      furigana,
    }));
  },
  english: true,
  setEnglish: (english) => {
    set(() => ({
      english,
    }));
  },
  speech: "formal",
  setSpeech: (speech) => {
    set(() => ({
      speech,
    }));
  },
  importanceSpoken: false, // Track if importance message has been spoken

  // Define questions and responses
  questionsAndResponses: {
    "tell me about the sign language": "Sign language is crucial for communication within the Deaf community. It helps bridge communication gaps and promotes inclusion. Learning sign language can improve accessibility and understanding.",
    "tell me about special ed": "Special education provides tailored educational support to students with diverse learning needs. It aims to address individual learning differences and provide equitable opportunities for all students.",
    "tell me about maths": "Mathematics is the study of numbers, shapes, and patterns. It is fundamental to many fields including science, engineering, and technology. Mastery of math can enhance problem-solving and analytical skills.",
    "what is biology": "Biology is the scientific study of life and living organisms, including their structure, function, growth, origin, evolution, and distribution.",
    "what is chemistry": "Chemistry is the science of matter and its interactions with other matter and energy. It studies the properties, composition, and transformation of substances.",
    "what is physics": "Physics is the branch of science concerned with the nature and properties of matter and energy. It includes the study of forces, energy, and the fundamental principles governing the physical universe.",
    "tell me about science": "Science is the study of the natural world through observation and experimentation...",
  },

  askAI: async (question) => {
    if (!question) {
      return;
    }

    let response;

    const normalizedQuestion = question.toLowerCase();
    response = get().questionsAndResponses[normalizedQuestion];

    if (!response) {
      if (!get().importanceSpoken) {
        response = "Sign language is crucial for communication within the Deaf community. It helps bridge communication gaps and promotes inclusion. Learning sign language can improve accessibility and understanding.";
        set(() => ({ importanceSpoken: true }));
      } else {
        response = "You have exhausted your daily quota of API requests. You have to wait for one hour.";
      }
    }

    const message = {
      question,
      id: get().messages.length,
      answer: response,
    };

    message.speech = get().speech;

    set((state) => ({
      messages: [...state.messages, message],
    }));

    get().playMessage(message);
  },

  playMessage: (message) => {
    set(() => ({
      currentMessage: message,
    }));

    const utterance = new SpeechSynthesisUtterance(message.answer);
    utterance.onend = () => {
      set(() => ({
        currentMessage: null,
      }));
    };

    window.speechSynthesis.speak(utterance);
  },

  stopMessage: () => {
    window.speechSynthesis.cancel();
    set(() => ({
      currentMessage: null,
    }));
  },
}));
