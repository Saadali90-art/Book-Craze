import artofnego from "../../assets/HomePage/Montly Top/artofnego.webp";
import street from "../../assets/HomePage/Montly Top/street.webp";
import calm from "../../assets/HomePage/Montly Top/calm.jpg";
import daventure from "../../assets/HomePage/Montly Top/daventure.jpg";
import gardening from "../../assets/HomePage/Montly Top/gardening.jpg";
import healthy from "../../assets/HomePage/Montly Top/healthy.png";
import hidden from "../../assets/HomePage/Montly Top/hidden.jpeg";
import ocean from "../../assets/HomePage/Montly Top/ocean.jpg";

const MontlyTop = [
  {
    userId: "user201",
    title: "Ocean Dreams",
    category: "Fantasy",
    gender: "Female",
    description: "Dive into a magical underwater kingdom full of mysteries.",
    price: 14.5,
    bookImage: ocean,
    date: new Date(),
    views: 65,
  },
  {
    userId: "user202",
    title: "Street Photography 101",
    category: "Photography",
    gender: "Male",
    description: "Master the art of capturing everyday life through your lens.",
    price: 27.99,
    bookImage: street,
    date: new Date(),
    views: 180,
  },
  {
    userId: "user203",
    title: "The Art of Negotiation",
    category: "Business",
    gender: "Male",
    description:
      "Strategies to improve communication and close deals effectively.",
    price: 21.0,
    bookImage: artofnego,
    date: new Date(),
    views: 240,
  },
  {
    userId: "user204",
    title: "Gardening for Beginners",
    category: "Lifestyle",
    gender: "Female",
    description: "Step-by-step guide to grow your own plants and vegetables.",
    price: 16.75,
    bookImage: gardening,
    date: new Date(),
    views: 92,
  },
  {
    userId: "user205",
    title: "Adventures in Space",
    category: "Science Fiction",
    gender: "Male",
    description: "A thrilling tale of astronauts exploring distant galaxies.",
    price: 19.25,
    bookImage: daventure,
    date: new Date(),
    views: 300,
  },
  {
    userId: "user206",
    title: "Healthy Habits",
    category: "Health",
    gender: "Female",
    description: "Simple lifestyle changes that bring long-term wellness.",
    price: 12.99,
    bookImage: healthy,
    date: new Date(),
    views: 155,
  },
  {
    userId: "user207",
    title: "The Hidden Village",
    category: "Mystery",
    gender: "Male",
    description: "A detective unravels secrets buried deep in a quiet town.",
    price: 17.5,
    bookImage: hidden,
    date: new Date(),
    views: 420,
  },
  {
    userId: "user208",
    title: "Art of Calm",
    category: "Self-Help",
    gender: "Female",
    description: "Techniques to reduce stress and live a peaceful life.",
    price: 15.0,
    bookImage: calm,
    date: new Date(),
    views: 130,
  },
];
export default MontlyTop;
