import hearthLounge from "./assets/hearth-lounge.jpg";
import usefulLinks from "./assets/useful-links.jpg";
import ffc from "./assets/ffc.jpg";
import enhance from "./assets/enhance.jpg";

export default {
  skills: {
    frontend: {
      general: ["html", "css", "scss", "javascript", "jquery", "lodash"],
      react: ["react", "redux", "redux-saga"]
    },
    backend: ["nodejs", "mongodb", "firebase"],
    [window.innerWidth <= 815 ? "tests" : "testing"]: ["jest", "enzyme"]
  },
  projects: [
    {
      title: "Hearth Lounge",
      description:
        "Uni thesis project. WebApp for Hearthstone players that contains major services related to the game in one place.",
      preview: hearthLounge,
      stack: [
        "react",
        "redux",
        "redux-saga",
        "scss",
        "firebase",
        "jest",
        "enzyme",
        "lodash"
      ],
      url: "https://sbsrnt.github.io/HearthLounge/",
      github: "https://github.com/sbsrnt/HearthLounge",
      live: true,
      wip: true
    },
    {
      title: "Useful Links",
      description:
        "Articles, tools and pages I found useful for myself during my programming learning put into one place.",
      preview: usefulLinks,
      stack: ["react", "scss", "lodash"],
      url: "https://sbsrnt.github.io/useful-links/",
      github: "https://github.com/sbsrnt/useful-links",
      live: true,
      wip: false
    },
    {
      title: "Fitness & Family Club",
      description: "My very first project. Website made for my mom's business.",
      preview: ffc,
      stack: ["html", "css", "jquery", "bootstrap"],
      url: "http://clubffc.pl",
      live: true,
      wip: false
    },
    {
      title: "enhance.",
      description:
        "WebApp I'm making for myself and my girlfriend. The goal is to have our relationship goals, problems, ideas in one place.",
      preview: enhance,
      stack: ["react", "redux", "redux-saga", "nodejs", "mongodb", "lodash"],
      url: "",
      live: false,
      wip: true
    }
  ],
  contact: [
    {
      media: "mail",
      value: "eskrzy@gmail.com",
      username: "eskrzy@gmail.com"
    },
    {
      media: "github",
      value: "https://github.com/sbsrnt",
      username: "sbsrnt"
    },
    {
      media: "linkedin",
      value: "https://www.linkedin.com/in/sbsrnt/",
      username: "sbsrnt"
    },
    {
      media: "discord",
      value: null,
      username: "sbsrnt#4780"
    },
    {
      media: "twitch",
      value: "https://www.twitch.tv/sbsrnt",
      username: "sbsrnt"
    }
  ]
};
