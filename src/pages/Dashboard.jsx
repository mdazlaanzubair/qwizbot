import ServiceCard from "../components/dashboard/ServiceCard";
import UserProfile from "../components/dashboard/UserProfile";

const Dashboard = () => {
  const services = [
    {
      title: "Q&A",
      desc: "Answer questions based on existing knowledge. Respond with accurate and concise information. #Answers #Generation #Conversation",
      tags: ["Answers", "Generation", "Conversation"],
    },
    {
      title: "Grammar Correction",
      desc: "Transform sentences into standard English using our advanced algorithm. #Transformation #Generation",
      tags: ["Transformation", "Generation"],
    },
    {
      title: "Summarize for a 2nd grader",
      desc: "Translate complex text into simpler concepts suitable for 2nd graders. #Transformation #Generation",
      tags: ["Transformation", "Generation"],
    },
    {
      title: "English to other languages",
      desc: "Translate English text into French, Spanish and Japanese with our accurate language translation. #Transformation #Generation",
      tags: ["Transformation", "Generation"],
    },
    {
      title: "Classification",
      desc: "Categorize items based on examples provided. Our advanced algorithm will ensure accurate classification. #Classification",
      tags: ["Classification"],
    },
    {
      title: "Translate programming languages",
      desc: "Translate code between programming languages using comments to specify source and target languages. #Code #Translation",
      tags: ["Code", "Translation"],
    },
    {
      title: "Advanced tweet classifier",
      desc: "Detect sentiment in status updates using our advanced prompt. Provides sentiment for each status update. #Classification",
      tags: ["Classification"],
    },
    {
      title: "Explain Code",
      desc: "Explain complicated code with our advanced algorithm that provides accurate and easy-to-understand explanations. #Code #Translation",
      tags: ["Code", "Translation"],
    },
    {
      title: "Keywords",
      desc: "Extract keywords from text. Lower temp picks keywords. Higher temp generates related keywords. #Classification #Transformation",
    },
    {
      title: "Ad from product description",
      desc: "Turn product descriptions into ad copy. #Generation",
      tags: ["Generation"],
    },
    {
      title: "Product name generator",
      desc: "Create product names from examples. Influenced by community prompt. #Generation",
      tags: ["Generation"],
    },
    {
      title: "Extract contact information",
      desc: "Extract contact information from text. #Generation #Transformation",
      tags: ["Generation", "Transformation"],
    },
    {
      title: "Analogy makers",
      desc: "Create analogies. Modified from community prompt to require fewer examples. #Generation",
      tags: ["Generation"],
    },
    {
      title: "Third-person converter",
      desc: "Converts first-person POV to third-person. Modified from community prompt. #Transformation #Generation #Translation",
      tags: ["Transformation", "Generation", "Translation"],
    },
    {
      title: "Notes to summary",
      desc: "Convert your notes into a summary easily with this service. Perfect for quick review or sharing with others. #Transformation #Generation",
      tags: ["Transformation", "Generation"],
    },
    {
      title: "Essay outline",
      desc: "Need help with your research paper? Generate an outline for your topic with this service. #Generation",
      tags: ["Generation"],
    },
    {
      title: "Marv the sarcastic chat bot",
      desc: "Engage in witty conversations with Marv, the sarcastic chat bot. #Conversation #Generation",
      tags: ["Conversation", "Generation"],
    },
    {
      title: "Restaurant review creator",
      desc: "Generate restaurant reviews effortlessly with this service. #Generation",
      tags: ["Generation"],
    },
    {
      title: "Create study notes",
      desc: "Create detailed study notes quickly and efficiently with this service. #Generation",
      tags: ["Generation"],
    },
    {
      title: "Interview questions",
      desc: "Generate interview questions with ease using this service. Perfect for employers or job seekers. #Generation",
      tags: ["Generation"],
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 p-5 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-end">
        <UserProfile />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services?.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
