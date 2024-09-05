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
"what are some assistive technologies available for students with visual impairments": "Assistive technologies include screen readers, braille displays, and magnification software.",
"how can i find accessible textbooks for my courses": "You can find accessible textbooks through services like Bookshare, your library’s accessibility resources, or by requesting digital copies from your professors.",
"what accommodations can be provided for students with mobility issues": "Accommodations may include accessible classrooms, adaptive furniture, extended time for assignments, and accessible transportation services.",
"how can i request extra time for exams": "Contact your school’s disability services office to request accommodations, including extra time for exams, and provide necessary documentation of your disability.",
"what are some strategies for managing anxiety related to schoolwork": "Strategies include practicing mindfulness, using relaxation techniques, seeking counseling support, and breaking tasks into smaller, manageable steps.",
"how can i access accessible online learning materials": "Check if your educational institution provides accessible versions of materials or use tools like screen readers and text-to-speech software.",
"are there scholarships available for students with disabilities": "Yes, many organizations and institutions offer scholarships specifically for students with disabilities. Check with your school's financial aid office and look for external scholarships.",
"how can i find a tutor who understands my specific needs": "Ask your school’s disability services office for recommendations, or search for tutors with experience working with students with disabilities.",
"what are the best practices for accessible web design": "Best practices include using clear navigation, providing text alternatives for images, ensuring color contrast, and making sure content is accessible with keyboard-only navigation.",
"how can i communicate my needs to my teachers effectively": "Be clear and specific about your needs, provide any required documentation, and discuss accommodations early in the semester to ensure they are implemented.",
"what resources are available for students with hearing impairments": "Resources include sign language interpreters, captioning services, and assistive listening devices.",
"how can i advocate for myself in academic settings": "Know your rights, communicate your needs clearly, and work with disability services to ensure you receive appropriate accommodations.",
"what types of assistive listening devices are available": "Assistive listening devices include hearing aids, FM systems, infrared systems, and induction loop systems.",
"how can i get support for managing chronic pain while studying": "Consider discussing your needs with your school’s disability services office, exploring accommodations, and working with a healthcare provider for pain management strategies.",
"are there disability support services on campus": "Most campuses have a disability support office that provides a range of services, including accommodations, counseling, and academic support.",
"how can i access mental health resources as a student with a disability": "Reach out to your school’s counseling center, explore campus and community resources, and consider seeking support from mental health professionals specializing in disability issues.",
"what are some tips for organizing my study space to accommodate my needs": "Ensure your study space is comfortable and accessible, use adaptive equipment if needed, and keep your materials organized to minimize physical strain.",
"how can i find peer support groups for disabled students": "Check with your school’s disability services office, student organizations, or online communities for peer support groups and resources.",
"what are the best ways to manage fatigue during study sessions": "Take regular breaks, use energy management techniques, and create a comfortable study environment to help manage fatigue.",
"how can i make my study materials more accessible": "Use digital formats that can be easily read by screen readers, provide alternative text for images, and ensure that materials are organized and easy to navigate.",
"are there specific software programs that can help with dyslexia": "Software programs for dyslexia include text-to-speech tools, audiobooks, and specialized reading and writing software like Ghotit and Kurzweil 3000.",
"what strategies can help with concentration difficulties": "Strategies include using a quiet, distraction-free study environment, breaking tasks into smaller steps, and using tools like timers or focus apps.",
"how can i find internships or job opportunities that accommodate my disability": "Look for organizations that have inclusive hiring practices, use job search platforms that allow filtering for disability-friendly employers, and reach out to disability employment services.",
"what are some effective communication tools for students with speech impairments": "Communication tools include augmentative and alternative communication (AAC) devices, speech-generating devices, and communication apps.",
"how can i get assistance with note-taking in class": "Request note-taking accommodations from your school’s disability services office, or use tools like audio recorders and note-taking apps.",
"what are some tips for using voice-to-text software effectively": "Practice using the software, ensure clear speech, and use features like voice commands to improve accuracy and efficiency.",
"how can i ensure my classroom is accessible": "Discuss accessibility needs with your school’s disability services office and work with them to make any necessary adjustments to the classroom environment.",
"what should i do if i face discrimination related to my disability": "Document the incidents, report them to your school’s administration or disability services office, and seek support from advocacy organizations if needed.",
"how can i work with my school to develop a personalized learning plan": "Meet with your school’s disability services office to discuss your needs and develop a plan that outlines accommodations and support services tailored to your requirements.",
"what are some accessible options for online learning platforms": "Look for platforms that offer screen reader compatibility, captioning, and customizable text and navigation features.",
"how can i get help with transportation to and from school": "Explore transportation services provided by your school, local community services, or consider using ride-sharing options that offer accessible vehicles.",
"what are some strategies for managing stress related to schoolwork": "Practice stress management techniques, such as mindfulness, deep breathing, time management, and seeking support from counselors or mentors.",
"how can i access adaptive physical education programs": "Check with your school’s physical education department or disability services office for adaptive programs and resources that accommodate your needs.",
"what types of assistive devices are available for students with fine motor difficulties": "Assistive devices include adaptive keyboards, mice, styluses, and voice recognition software.",
"how can i find mentors who understand my experiences as a disabled student": "Seek out mentors through disability organizations, support groups, or by contacting your school’s disability services office for recommendations.",
"what are some accessible recreational activities on campus": "Look for inclusive recreational programs, adaptive sports teams, or clubs that cater to students with disabilities.",
"how can i use technology to enhance my learning experience": "Utilize educational apps, adaptive software, and online resources designed to support your learning needs and preferences.",
"what are some effective study techniques for students with learning disabilities": "Techniques include using visual aids, breaking tasks into smaller steps, and employing assistive technology like text-to-speech and graphic organizers.",
"how can i access adaptive software for my computer": "Check with your school’s disability services office or look for software providers specializing in adaptive technology for specific needs.",
"what are some ways to improve my time management skills": "Use planners, digital calendars, and time management apps to help organize and prioritize tasks effectively.",
"how can i make sure my online assignments are accessible": "Ensure that your assignments are formatted for accessibility, use accessible file formats, and provide alternative text for images.",
"what are some resources for learning sign language": "Resources include sign language classes, online courses, and community organizations that offer sign language training.",
"how can i get support for managing ADHD in an academic setting": "Work with your school’s disability services office to implement accommodations and strategies tailored to managing ADHD challenges.",
"what are some strategies for managing sensory overload in a classroom": "Strategies include using noise-canceling headphones, taking breaks, and communicating your sensory needs to your teachers.",
"how can i find accessible housing options on campus": "Contact your school’s housing office to inquire about accessible dorms and living accommodations that meet your needs.",
"what are some assistive technologies for students with cognitive impairments": "Assistive technologies include memory aids, organizational apps, and cognitive training software designed to support learning and daily activities.",
"how can i access support services for students with autism": "Look for autism support services provided by your school, including counseling, specialized programs, and peer support groups.",
"what are some tips for working with a personal care assistant": "Clearly communicate your needs, establish a routine, and provide training on specific tasks and"
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
