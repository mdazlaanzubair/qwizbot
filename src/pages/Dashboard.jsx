import { useState } from "react";
import ServiceCard from "../components/dashboard/ServiceCard";

const Dashboard = () => {
  const services = [
    {
      title: "Q&A",
      desc: "Answer questions based on existing knowledge. Respond with accurate and concise information.",
      tags: ["Answers", "Generation", "Conversation"],
    },
    {
      title: "Grammar Correction",
      desc: "Transform sentences into standard English using our advanced algorithm.",
      tags: ["Transformation", "Generation"],
    },
    {
      title: "Summarize for a 2nd grader",
      desc: "Translate complex text into simpler concepts suitable for 2nd graders.",
      tags: ["Transformation", "Generation"],
    },
    {
      title: "English to other languages",
      desc: "Translate English text into French, Spanish and Japanese with our accurate language translation.",
      tags: ["Transformation", "Generation"],
    },
    {
      title: "Classification",
      desc: "Categorize items based on examples provided. Our advanced algorithm will ensure accurate classification.",
      tags: ["Classification"],
    },
    {
      title: "Translate programming languages",
      desc: "Translate code between programming languages using comments to specify source and target languages.",
      tags: ["Code", "Translation"],
    },
    {
      title: "Advanced tweet classifier",
      desc: "Detect sentiment in status updates using our advanced prompt. Provides sentiment for each status update.",
      tags: ["Classification"],
    },
    {
      title: "Explain Code",
      desc: "Explain complicated code with our advanced algorithm that provides accurate and easy-to-understand explanations.",
      tags: ["Code", "Translation"],
    },
    {
      title: "Keywords",
      desc: "Extract keywords from text. Lower temp picks keywords. Higher temp generates related keywords.",
      tags: ["Classification", "Transformation"],
    },
    {
      title: "Ad from product description",
      desc: "Turn product descriptions into ad copy.",
      tags: ["Generation"],
    },
    {
      title: "Product name generator",
      desc: "Create product names from examples. Influenced by community prompt.",
      tags: ["Generation"],
    },
    {
      title: "Extract contact information",
      desc: "Extract contact information from text.",
      tags: ["Generation", "Transformation"],
    },
    {
      title: "Analogy makers",
      desc: "Create analogies. Modified from community prompt to require fewer examples.",
      tags: ["Generation"],
    },
    {
      title: "Third-person converter",
      desc: "Converts first-person POV to third-person. Modified from community prompt. #Translation",
      tags: ["Transformation", "Generation", "Translation"],
    },
    {
      title: "Notes to summary",
      desc: "Convert your notes into a summary easily with this service. Perfect for quick review or sharing with others.",
      tags: ["Transformation", "Generation"],
    },
    {
      title: "Essay outline",
      desc: "Need help with your research paper? Generate an outline for your topic with this service.",
      tags: ["Generation"],
    },
    {
      title: "Marv the sarcastic chat bot",
      desc: "Engage in witty conversations with Marv, the sarcastic chat bot. #Conversation",
      tags: ["Conversation", "Generation"],
    },
    {
      title: "Restaurant review creator",
      desc: "Generate restaurant reviews effortlessly with this service.",
      tags: ["Generation"],
    },
    {
      title: "Create study notes",
      desc: "Create detailed study notes quickly and efficiently with this service.",
      tags: ["Generation"],
    },
    {
      title: "Interview questions",
      desc: "Generate interview questions with ease using this service. Perfect for employers or job seekers.",
      tags: ["Generation"],
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen p-5 rounded-lg">
      <div className="grid grid-cols mb-5">
        <div className="flex flex-row items-center justify-center">
          <div className="flex grow m-3">
            <h1 className="text-2xl font-bold grow">Filters</h1>
          </div>
          <div className="flex shrink m-3">
            <input
              type="text"
              placeholder="Realtime search..."
              className="input input-sm input-ghost rounded-none border-0 border-b-2 focus:border-opacity-5 focus:border-neutral-focus focus:outline-none focus:bg-transparent transition-colors ease-in-out duration-500"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {services
          ?.filter((service) => {
            return search.toLowerCase() === ""
              ? service
              : service.title.toLowerCase().includes(search.toLowerCase()) ||
                  service.desc.toLowerCase().includes(search.toLowerCase());
          })
          .map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
