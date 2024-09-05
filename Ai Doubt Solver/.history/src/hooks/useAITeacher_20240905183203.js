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
    "what is physics": "Physics is a branch of science that deals with the study of the fundamental forces of nature...",
"explain gravity": "Gravity is the force that attracts two bodies towards each other...",
"who is Albert Einstein": "Albert Einstein was a theoretical physicist known for his theory of relativity...",
"what is quantum mechanics": "Quantum mechanics is a fundamental theory in physics that describes nature at the smallest scales...",
"tell me about chemistry": "Chemistry is the science that deals with the properties, composition, and structure of substances...",
"what is photosynthesis": "Photosynthesis is the process used by plants to convert light energy into chemical energy...",
"what is the theory of relativity": "The theory of relativity, developed by Albert Einstein, describes the laws of physics in different reference frames...",
"what is evolution": "Evolution is the process by which different kinds of living organisms develop and diversify from earlier forms...",
"explain the big bang theory": "The Big Bang theory is the leading explanation for the origin of the universe...",
"what is biology": "Biology is the study of living organisms, their structure, function, growth, and evolution...",
"tell me about ecosystems": "An ecosystem is a community of living organisms in conjunction with the non-living components of their environment...",
"what is an atom": "An atom is the smallest unit of ordinary matter that forms a chemical element...",
"what is the periodic table": "The periodic table is a tabular display of the chemical elements, organized by atomic number...",
"explain the water cycle": "The water cycle describes how water evaporates from the surface of the earth, rises into the atmosphere, cools, and falls again as precipitation...",
"tell me about global warming": "Global warming refers to the long-term rise in the average temperature of the Earth's climate system...",
"what is renewable energy": "Renewable energy is derived from natural processes that are replenished constantly...",
"explain DNA": "DNA, or deoxyribonucleic acid, is the molecule that carries the genetic instructions for life...",
"what is artificial intelligence": "Artificial Intelligence is the simulation of human intelligence in machines that are programmed to think like humans...",
"what is machine learning": "Machine learning is a subset of AI that enables a system to automatically learn and improve from experience...",
"tell me about the solar system": "The solar system consists of the Sun and all the celestial bodies that are bound by its gravity...",
"what is a black hole": "A black hole is a region of space where the gravitational pull is so strong that nothing, not even light, can escape...",
"explain the human brain": "The human brain is the central organ of the human nervous system...",
"what is neuroscience": "Neuroscience is the scientific study of the nervous system...",
"tell me about the internet": "The internet is a global network of computers that communicate using standardized protocols...",
"what is cybersecurity": "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks...",
"what is blockchain": "Blockchain is a distributed ledger technology that allows data to be stored globally on thousands of servers...",
"explain cryptocurrency": "Cryptocurrency is a digital or virtual currency that uses cryptography for security...",
"what is climate change": "Climate change refers to long-term changes in temperature, precipitation, and other atmospheric conditions on Earth...",
"what is a virus": "A virus is a small infectious agent that replicates only inside the living cells of an organism...",
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
