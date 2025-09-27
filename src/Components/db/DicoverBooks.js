import whispers from "../../assets/Discover/whispers.jpg";
import codingart from "../../assets/Discover/codingart.jpg";
import flavors from "../../assets/Discover/flavors.jpg";
import beyond from "../../assets/Discover/beyond.jpg";
import kingdom from "../../assets/Discover/kingdom.jpeg";
import balance from "../../assets/Discover/balance.jpg";

const discoverBooks = [
  {
    userId: "user201",
    title: "Whispers in the Wind",
    category: "Fiction",
    gender: "Female",
    description:
      "Set in a quiet coastal town, this emotional fiction explores the intertwined lives of three strangers who discover unexpected connections. Themes of loss, love, and resilience flow through the story, showing how even the smallest encounters can reshape destinies. The writing paints vivid landscapes and deep emotions, immersing readers into a heartfelt journey.",
    price: 16.99,
    bookImage: whispers,
    date: new Date(),
    views: 190,
  },
  {
    userId: "user202",
    title: "Beyond the Stars",
    category: "Science Fiction",
    gender: "Male",
    description:
      "A gripping sci-fi adventure that follows a team of explorers traveling to distant galaxies in search of habitable planets. When they stumble upon an alien civilization with advanced technology, they must navigate political intrigue, survival, and questions of humanity’s place in the universe. The book mixes thrilling space travel with thought-provoking ideas.",
    price: 29.5,
    bookImage: beyond,
    date: new Date(),
    views: 780,
  },
  {
    userId: "user203",
    title: "The Art of Balance",
    category: "Self-Help",
    gender: "Female",
    description:
      "A modern self-help guide that emphasizes the importance of balancing work, relationships, and personal well-being. The book provides actionable strategies, mindfulness practices, and real-life examples to help readers overcome burnout and build healthier habits. It is designed to empower individuals to create meaningful change in their daily lives.",
    price: 21.25,
    bookImage: balance,
    date: new Date(),
    views: 410,
  },
  {
    userId: "user204",
    title: "Kingdoms and Crowns",
    category: "History",
    gender: "Male",
    description:
      "A detailed historical narrative covering the rise and fall of medieval kingdoms across Europe. With fascinating accounts of battles, rulers, and cultural shifts, this book provides a clear picture of how history shaped modern civilization. It blends storytelling with research, making it engaging for both history enthusiasts and casual readers.",
    price: 26.0,
    bookImage: kingdom,
    date: new Date(),
    views: 560,
  },
  {
    userId: "user205",
    title: "Flavors of the Earth",
    category: "Cooking",
    gender: "Female",
    description:
      "A cookbook that brings together recipes from around the globe. From spicy Asian curries to classic Mediterranean dishes, it celebrates the diversity of world cuisine. Each recipe comes with cultural background, step-by-step instructions, and tips for making authentic flavors accessible in any kitchen. Perfect for food lovers who want to explore new tastes.",
    price: 32.75,
    bookImage: flavors,
    date: new Date(),
    views: 330,
  },
  {
    userId: "user206",
    title: "Code and Creativity",
    category: "Technology",
    gender: "Male",
    description:
      "A unique look at how programming blends with creativity. The book covers not just the technical side of coding but also how it can be used for art, music, design, and problem-solving. With inspiring examples, case studies, and beginner-friendly projects, it motivates readers to see programming as both a science and an art form.",
    price: 27.5,
    bookImage: codingart,
    date: new Date(),
    views: 640,
  },
];

export default discoverBooks;
