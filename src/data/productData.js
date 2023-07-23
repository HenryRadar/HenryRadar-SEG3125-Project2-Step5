import intelCPU from "../assets/intelProcessor.webp";
import amdCPU from "../assets/amdProcessor.jpeg";
import msiMotherboard from "../assets/msiMotherboard.jpeg";
import asusMotherboard from "../assets/asusMotherboard.jpeg";
import corsairPowersupply from "../assets/corsairPowersupply.jpeg";
import gskillMemory from "../assets/gskillMemory.jpeg";
import fractalDesignFan from "../assets/fan.jpeg";
import liquidCooling from "../assets/liquidCooling.jpeg";

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
  {
    id: 6,
    name: "Corsair RMx Series RM850x 80 PLUS Gold",
    image: corsairPowersupply,
    rating: 4,
    price: "$189.99",
    status: "In Stock",
    section: "powersupply",
    description:
      "CORSAIR RMx Series fully modular power supplies are built with the highest quality components to deliver 80 PLUS Gold efficient power to your PC with the cooling power of potent Magnetic Levitation fans.",
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
      Price: "$100+",
      Brand: "Corsair",
      Power: "850W",
    },
  },
  {
    id: 7,
    name: "G.SKILL Ripjaws V Series 16GB",
    image: gskillMemory,
    rating: 4,
    price: "$59.99",
    status: "In Stock",
    section: "memory",
    description:
      "As the latest addition to the classic Ripjaws family, Ripjaws V series is the newest dual-channel DDR4 memory designed for maximum compatibility and cutting-edge performance with the latest Intel® Core™ processors. Built with the finest components, tested under the most rigorous conditions, and offered in five color options, Ripjaws V is the perfect choice for building a new performance system or for a simple memory upgrade.",
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
      Price: "$50-$99.99",
      Brand: "GSkill",
      Capacity: "16GB",
    },
  },
  {
    id: 8,
    name: "Fractal Design Aspect 12 White 120 mm 1200 RPM Computer Case Fan",
    image: fractalDesignFan,
    rating: 4,
    price: "$14.99",
    status: "In Stock",
    section: "fans",
    description:
      "As the latest addition to the classic Ripjaws family, Ripjaws V series is the newest dual-channel DDR4 memory designed for maximum compatibility and cutting-edge performance with the latest Intel® Core™ processors. Built with the finest components, tested under the most rigorous conditions, and offered in five color options, Ripjaws V is the perfect choice for building a new performance system or for a simple memory upgrade.",
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
      Price: "$0-$19.99",
      Brand: "Fractal Design",
    },
  },
  {
    id: 9,
    name: "DeepCool CASTLE 280EX AIO Liquid CPU Cooler, Anti-Leak Technology",
    image: liquidCooling,
    rating: 4,
    price: "$84.99",
    status: "In Stock",
    section: "cooling",
    description:
      "The CASTLE is equipped with state of the art cooling systems guaranteed to help you keep your PC cold. With this cooling, you might as well be in Canada cause that computer will be so cold.",
    reviews: [
      {
        reviewer: "Jeremy White",
        rating: 4,
        body: "Very cold.",
      },
      {
        reviewer: "Peter Walter",
        rating: 3,
        body: "Decent",
      },
    ],
    filters: {
      Price: "$50-$99.99",
    },
  },
];

export default productData;
