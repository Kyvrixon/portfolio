import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kyvrixon",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Hobby Developer",
  avatar: "/images/avatar.png",
  email: "",
  location: "Australia/Hobart", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <></>,
  description: (
    <>
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kyvrixon",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.gg/rRJuTfDgg7",
  },
];

function getHeadline() {
  const choices = [
    "Oh hi there!"
  ]
  return <> {choices[Math.floor(Math.random() * choices.length)]} </>
}

const home = {
  path: "/",
  image: "",
  label: "Home",
  title: `${person.name}`,
  description: `Welcome to my portfolio!`,
  headline: getHeadline(),
  featured: {
    display: false,
    title: <><i>Currently looking for commissions!</i> </>,
    href: "#",
  },
  subline: (
    <>
      Still working on my portfolio so there isn't much here for now!
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `Kyvrixon`,
  description: "Who I am",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey there! I am Ky and I'm a JavaScript developer and I mainly specialise in creating fun and awesome Discord bots! I
        have been coding for at least half a decade now and I'm always looking to improve my skills!
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Where I've been",
    experiences: [
      {
        company: "Botwiz",
        timeframe: "Since 2024",
        role: "Manager - Management Team",
        achievements: [],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/Botwiz/botwiz-banner.png",
            alt: "Once UI Project",
            width: 32,
            height: 9,
          },
        ],
      }
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "My skillset",
    skills: [
      {
        title: "Discord.JS",
        description: <>A powerful JavaScript library for interacting with the Discord API </>,
        images: [
          // {
          //   src: "/images/skillset/discordjs/banner.png",
          //   alt: "Project image",
          //   width: 32,
          //   height: 9,
          // }
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
