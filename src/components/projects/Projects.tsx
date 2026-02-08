export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  viewUrl: string | null;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pull Up",
    description:
      "An availability planner that supports week/day/time calendar modes, drag-to-select, and username-password authentication.",
    tags: ["reactjs", "typescript", "springboot", "mongodb"],
    imgUrl: "./projects/pull-up.png",
    viewUrl: "https://pullup.graceyan.me",
    githubUrl: "https://github.com/xgraceyan/pull-up",
  },
  {
    id: 2,
    title: "Be Well",
    description:
      "A friendly companion that helps you schedule medication, track moods, and encourages a healthy lifestyle. Submission for IrvineHacks 2025",
    tags: [
      "reactjs",
      "javascript",
      "fastapi(python)",
      "google cloud vision api",
    ],
    imgUrl: "./projects/be-well.jpg",
    viewUrl: "https://devpost.com/software/bewell-b1an9m",
    githubUrl: "https://github.com/xgraceyan/be-well/tree/master",
  },
  {
    id: 3,
    title: "Go Zot Go!",
    description:
      "A public transportation navigator with user-recommended routes and experiences, to help find the best way from A to B. Top 9 finalist for WebJam 2025",
    tags: ["reactjs", "javascript", "fastapi(python)", "google maps api"],
    imgUrl: "./projects/pull-up.png",
    viewUrl: "https://pullup.graceyan.me", // TODO: Replace with deployed site url
    githubUrl: "https://github.com/xgraceyan/go-zot-go",
  },
  {
    id: 4,
    title: "Ask a Cougar",
    description:
      "Ask a Cougar is web app developed as part of a service project to help answer questions about the high school experience. Used by over 300 students at Evergreen Valley High School and 200 middle school students.",
    tags: ["reactjs", "supabase", "html", "css"],
    imgUrl: "./projects/ask-a-cougar.png",
    viewUrl: "https://askacougar.graceyan.me",
    githubUrl: "https://github.com/xgraceyan/ask-a-cougar",
  },
  {
    id: 5,
    title: "Musication",
    description:
      "Musication is a website that aims to expose people to the various types of instruments in a classical setting. Second Place, Ctrl+Shift 2022.",
    tags: ["reactjs", "html", "css"],
    imgUrl: "./projects/musication.png",
    viewUrl: "https://musication.graceyan.me",
    githubUrl: "https://github.com/xgraceyan/musication",
  },
  {
    id: 6,
    title: "WhizFin",
    description:
      "I developed and currently maintain the official website for WhizFin, a 501(c)3 nonprofit that aims to educate people on financial literacy.",
    tags: ["reactjs", "firebase", "html", "css"],
    imgUrl: "./projects/whizfin.png",
    viewUrl: "https://whizfin.graceyan.me",
    githubUrl: "https://github.com/xgraceyan/whizfin-ui",
  },
  {
    id: 7,
    title: "Educated Brainstorm",
    description:
      "Educated Brainstorm is a web app developed by me and my hackathon teammates as a hybrid work solution with a task management and point system. Entry for 2022 Cisco Bridgehacks (Cisco High School Shadow Program).",
    tags: ["reactjs", "firebase", "html", "css"],
    imgUrl: "./projects/educated-brainstorm.png",
    viewUrl: "https://educatedbrainstorm.graceyan.me/",
    githubUrl: "https://github.com/xgraceyan/cisco-bridgehacks-8",
  },
  {
    id: 8,
    title: "Growing Tree",
    description:
      "An online school from the cloud. This project was my first React web application and is undergoing heavy modification right now.",
    tags: ["reactjs", "firebase", "html", "css"],
    imgUrl: "./projects/growingtree-2.png",
    viewUrl: "https://growingtree.graceyan.me",
    githubUrl: "https://github.com/xgraceyan/growingtree-old",
  },
  {
    id: 9,
    title: "Kore",
    description:
      "Kore is a multipurpose discord bot that is extremely customizable with moderation, economy, and fun features and commands. Hosting servers are down but the website and source code are still accessible.",
    tags: ["discord.js", "mysql"],
    imgUrl: "./projects/kore.png",
    viewUrl: "https://kore.graceyan.me",
    githubUrl: "https://github.com/xgraceyan/kore",
  },
  {
    id: 10,
    title: "StreamControlMC",
    description:
      "Plug-in to integrate Twitch live chat with Minecraft in-game events. Used by multiple Twitch livestreamers with >6k subscribers.",
    tags: ["java", "twitch4j", "bukkit api"],
    imgUrl: "./projects/streamcontrolmc.png",
    viewUrl: null,
    githubUrl: "https://github.com/xgraceyan/StreamControlMC",
  },
  {
    id: 11,
    title: "MCBingo",
    description:
      "A Minecraft plug-in to play bingo on servers, with dynamic GUI and multiplayer support.",
    tags: ["java", "bukkit api"],
    imgUrl: "./projects/mcbingo.png",
    viewUrl: null,
    githubUrl: "https://github.com/xgraceyan/MCBingo",
  },
];

export default function Projects() {
  return <div>Hello world</div>;
}
