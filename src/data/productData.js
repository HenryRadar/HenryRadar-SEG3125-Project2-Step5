import intelCPU from "../assets/intelProcessor.webp";
import amdCPU from "../assets/amdProcessor.jpeg";
import msiMotherboard from "../assets/msiMotherboard.jpeg";
import asusMotherboard from "../assets/asusMotherboard.jpeg";

const productData = [
  {
    id: 0,
    name: "Intel Core i5-12400 6-Core 2.5GHz LGA1700 Processor",
    image: intelCPU,
    rating: 4,
    price: "$249.99",
    status: "In Stock",
    section: "cpu",
    description:
      "Built-in Intel UHD Graphics 770 controller for improved graphics and visual quality. Supports up to 4 monitors.",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 4,
        body: "It works like a charm. Would recommend.",
      },
      {
        reviewer: "Peter Walter",
        rating: 5,
        body: "Best Processor.",
      },
    ],
    filters: {
      Price: "$100-$299.99",
      Brand: "Intel",
    },
  },
  {
    id: 1,
    name: "Intel Core i7-12400 8-Core 5GHz LGA1700 Processor",
    image: intelCPU,
    rating: 5,
    price: "$349.99",
    status: "In Stock",
    section: "cpu",
    description:
      "Built-in Intel UHD Graphics 770 controller for improved graphics and visual quality. Supports up to 4 monitors.",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 4,
        body: "It works like a charm. Would recommend.",
      },
      {
        reviewer: "Peter Walter",
        rating: 5,
        body: "Best Processor.",
      },
    ],
    filters: {
      Price: "$300+",
      Brand: "Intel",
    },
  },
  {
    id: 2,
    name: "AMD Ryzen 7 5800X 8-Core/16-Thread 7nm ZEN 3 Processor",
    image: amdCPU,
    rating: 5,
    price: "$249.99",
    status: "In Stock",
    section: "cpu",
    description:
      "Built-in Ryzen UHD Graphics 770 controller for improved graphics and visual quality. Supports up to 4 monitors.",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 4,
        body: "It works like a charm. Would recommend.",
      },
      {
        reviewer: "Peter Walter",
        rating: 5,
        body: "Best Processor.",
      },
    ],
    filters: {
      Price: "$100-$299.99",
      Brand: "AMD",
    },
  },
  {
    id: 3,
    name: "AMD Ryzen 1 2400X 2-Core/8-Thread 7nm ZEN 1 Processor",
    image: amdCPU,
    rating: 2,
    price: "$89.99",
    status: "In Stock",
    section: "cpu",
    description:
      "Built-in Ryzen UHD Graphics 770 controller for improved graphics and visual quality. Supports up to 4 monitors.",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 2,
        body: "Terrible.",
      },
      {
        reviewer: "Peter Walter",
        rating: 1,
        body: "Utter garbage.",
      },
    ],
    filters: {
      Price: "$0-$99.99",
      Brand: "AMD",
    },
  },
  {
    id: 4,
    name: "MSI PRO Z790-P WIFI, Intel ATX LGA 1700, Supports 12th/13th Gen Intel® Core™",
    image: msiMotherboard,
    rating: 4,
    price: "$259.99",
    status: "In Stock",
    section: "motherboard",
    description:
      "With its dual 8-pin power connectors and exclusive Core Boost technology, the PRO Z790-P WIFI is able to sustain heavy CPU power loads to support system-demanding settings",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 4,
        body: "Pretty good.",
      },
      {
        reviewer: "Peter Walter",
        rating: 3,
        body: "Decent",
      },
    ],
    filters: {
      Price: "$100-$299.99",
      Brand: "MSI",
      Platform: "Intel",
    },
  },
  {
    id: 5,
    name: "ASUS Prime B450M-A II Socket AM4",
    image: asusMotherboard,
    rating: 4,
    price: "$99.99",
    status: "In Stock",
    section: "motherboard",
    description:
      "Compatible Ryzen 3 PRO processor lets you perform all your computational tasks at a swift pace",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 4,
        body: "Pretty good.",
      },
      {
        reviewer: "Peter Walter",
        rating: 3,
        body: "Decent",
      },
    ],
    filters: {
      Price: "$0-$99.99",
      Brand: "ASUS",
      Platform: "AMD",
    },
  },
];

export default productData;
