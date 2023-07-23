import guideImage from "../assets/guideImage.jpeg";
import toolBoxImage from "../assets/toolBox.jpeg";
import motherboardImage from "../assets/msiMotherboard.jpeg";

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
          "Make sure your set up is clear of any hazards, you should have all the tools you need.",
        image: guideImage,
      },
      {
        stepNumber: 2,
        title: "Removing the old PSU",
        description:
          "Take out the old PSU using the appropriate tools. Make sure all of the wires are disconnected before removing the PSU.",
        image: toolBoxImage,
      },
      {
        stepNumber: 3,
        title: "Putting in the new PSU",
        description:
          "Put in your new PSU and start plugging all the components into the PSU. You can put back the screws and casing once you are done.",
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
        description: "Use the correct tools to open up your computer.",
        image: toolBoxImage,
      },
      {
        stepNumber: 2,
        title: "Plug in the hard drive",
        description:
          "The hard drive should be connected to the correct wiring and placed in a secure manner.",
        image: guideImage,
      },
    ],
  },
  {
    id: 2,
    title: "Guide: Starter Guide",
    description: "This guide covers the basics of building a computer.",
    numSteps: 4,
    filters: {
      Topic: "Getting Started",
    },
    steps: [
      {
        stepNumber: 1,
        title: "Knowing what parts you need.",
        description:
          "To build a computer, you will need a few parts. This includes a CPU, a Motherboard, a Powersupply, some Fans, memory, and a Graphics card.",
        image: motherboardImage,
      },
      {
        stepNumber: 2,
        title: "Order your parts.",
        description:
          "You can order the parts you need online in our store, or find them at a location near you. Once you have the parts you can get to building.",
        image: guideImage,
      },
      {
        stepNumber: 3,
        title: "Getting Set Up",
        description:
          "Make sure you have all the tools you need, as it will be helpful later. You will need a screwdriver, a clear open area, and a power outlet to ground yourself with the powersupply.",
        image: toolBoxImage,
      },
      {
        stepNumber: 4,
        title: "Find the appropriate guides.",
        description:
          "Now that you are all set up, go to out guides section and check out the guide relating to the part you are installing. You can get started with installing the motherboard.",
        image: guideImage,
      },
    ],
  },
];

export default guideData;
