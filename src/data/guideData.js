import guideImage from "../assets/guideImage.jpeg";

const guideData = [
  {
    id: 0,
    title: "Guide: How to replace a PSU",
    description: "This guide teaches you how to replace your faulty PSU",
    numSteps: 3,
    filters: {
      Topic: "Replacing Parts",
    },
    steps: [
      {
        stepNumber: 1,
        title: "Getting Set Up",
        description:
          "Lorem, ipsum dolor sit  elit. Accusamus temporibus, nemo deleniti laudantium quasi suscipit esse voluptatibus tempore.",
        image: guideImage,
      },
      {
        stepNumber: 2,
        title: "Removing the old PSU",
        description:
          "Lorem, ipsum dolor sit amet temporibus, nemo deleniti laudantium quasi suscipit esse voluptatibus tempore.",
        image: guideImage,
      },
      {
        stepNumber: 3,
        title: "Putting in the new PSU",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus, nemo deleniti laudantium quasi suscipit esse voluptatibus tempore.",
        image: guideImage,
      },
    ],
  },
  {
    id: 1,
    title: "Guide: How to install a new hard drive",
    description:
      "This guide teaches you how to install a new hard drive in your computer.",
    numSteps: 2,
    filters: {
      Topic: "Part Installation",
    },
    steps: [
      {
        stepNumber: 1,
        title: "Open the computer.",
        description:
          "Lorem, adipisicing elit. Accusamus temporibus, nemo deleniti laudantium quasi suscipit esse voluptatibus tempore.",
        image: guideImage,
      },
      {
        stepNumber: 2,
        title: "Plug in the hard drive",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus, nemo deleniti laudantium quasi suscipit esse voluptatibus tempore.",
        image: guideImage,
      },
    ],
  },
];

export default guideData;
