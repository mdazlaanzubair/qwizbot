const servicesList = [
  {
    title: "Q&A",
    desc: "Answer questions based on existing knowledge. Respond with accurate and concise information.",
    tags: ["Answers", "Generation", "Conversation"],
    url: "/qna",
    icon: "FaQuestionCircle",
  },
  {
    title: "Grammifier",
    desc: "Transform sentences into standard English using our advanced algorithm.",
    tags: ["Transformation", "Generation"],
    url: "/gcorrect",
    icon: "FaSpellCheck",
  },
  {
    title: "Translator",
    desc: "Translate English text into French, Spanish and Japanese with our accurate language translation.",
    tags: ["Transformation", "Generation"],
    url: "/translate_text",
    icon: "FaExchangeAlt",
  },
  {
    title: "Keywords",
    desc: "Extract keywords from text. Lower temp picks keywords. Higher temp generates related keywords.",
    tags: ["Classification", "Transformation"],
    icon: "FaSlackHash",
    url: "/keywords",
  },
];

export default servicesList;
