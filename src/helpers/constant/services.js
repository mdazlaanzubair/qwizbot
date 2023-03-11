const servicesList = [
  {
    title: "Q&A",
    desc: "Answer questions based on existing knowledge. Respond with accurate and concise information.",
    tags: ["Answers", "Generation", "Conversation"],
    url: "/qna",
    icon: "FaQuestionCircle",
  },
  {
    title: "Grammar Correction",
    desc: "Transform sentences into standard English using our advanced algorithm.",
    tags: ["Transformation", "Generation"],
    url: "/gcorrect",
    icon: "FaSpellCheck",
  },
  {
    title: "English to other languages",
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
  {
    title: "Ad from product description",
    desc: "Turn product descriptions into ad copy.",
    tags: ["Generation"],
    icon: "FaAd",
  },
  {
    title: "Product name generator",
    desc: "Create product names from examples. Influenced by community prompt.",
    tags: ["Generation"],
    icon: "FaGgCircle",
  },
  {
    title: "Extract contact information",
    desc: "Extract contact information from text.",
    tags: ["Generation", "Transformation"],
    icon: "FaIdCard",
  },
  {
    title: "Analogy makers",
    desc: "Create analogies. Modified from community prompt to require fewer examples.",
    tags: ["Generation"],
    icon: "FaAccusoft",
  },
  {
    title: "Third-person converter",
    desc: "Converts first-person POV to third-person. Modified from community prompt. #Translation",
    tags: ["Transformation", "Generation", "Translation"],
    icon: "FaQq",
  },
  {
    title: "Notes to summary",
    desc: "Convert your notes into a summary easily with this service. Perfect for quick review or sharing with others.",
    tags: ["Transformation", "Generation"],
    icon: "FaFileSignature",
  },
  {
    title: "Essay outline",
    desc: "Need help with your research paper? Generate an outline for your topic with this service.",
    tags: ["Generation"],
    icon: "FaBorderStyle",
  },
  {
    title: "Marv the sarcastic chat bot",
    desc: "Engage in witty conversations with Marv, the sarcastic chat bot. #Conversation",
    tags: ["Conversation", "Generation"],
    icon: "FaMailchimp",
  },
  {
    title: "Restaurant review creator",
    desc: "Generate restaurant reviews effortlessly with this service.",
    tags: ["Generation"],
    icon: "FaCommentDots",
  },
  {
    title: "Create study notes",
    desc: "Create detailed study notes quickly and efficiently with this service.",
    tags: ["Generation"],
    icon: "FaStickyNote",
  },
  {
    title: "Interview questions",
    desc: "Generate interview questions with ease using this service. Perfect for employers or job seekers.",
    tags: ["Generation"],
    icon: "FaCompressAlt",
  },
];

export default servicesList;
