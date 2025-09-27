import cracking from "../../assets/HomePage/Carousel/cracking.jpg";
import hidden from "../../assets/HomePage/Carousel/hidden.jpg";
import mindful from "../../assets/HomePage/Carousel/mindful.jpg";
import cooking from "../../assets/HomePage/Carousel/cooking.webp";
import history from "../../assets/HomePage/Carousel/history.jpg";

const carouselInfo = [
  {
    userId: "user123",
    title: "The Hidden Path",
    category: "Fiction",
    gender: "Male",
    description:
      "The Hidden Path is a gripping tale that takes readers deep into an unknown world full of suspense, mystery, and danger. As the protagonist ventures into forbidden lands, they discover secrets that challenge everything they thought they knew about loyalty, courage, and survival. With vivid storytelling and unexpected twists, this book keeps readers hooked from the first page until the last, offering a thrilling experience that lingers in the imagination long after it ends.",
    price: 15.99,
    bookImage: hidden,
    date: new Date(),
    views: 120,
  },
  {
    userId: "user456",
    title: "Cooking with Love",
    category: "Cooking",
    gender: "Female",
    description:
      "Cooking with Love is more than just a recipe book—it’s an invitation into the heart of the kitchen, where every dish tells a story and every ingredient holds meaning. Packed with easy-to-follow instructions, mouthwatering recipes, and helpful cooking tips, this book inspires readers to cook with passion and joy. From comforting family meals to elegant dishes for special occasions, each recipe is crafted with love and care, reminding us that food is not just fuel but also an expression of affection and creativity.",
    price: 25.0,
    bookImage: cooking,
    date: new Date(),
    views: 45,
  },
  {
    userId: "user789",
    title: "History of Tomorrow",
    category: "History",
    gender: "Male",
    description:
      "History of Tomorrow offers a fascinating exploration into the evolution of civilizations and how the events of the past continue to shape our present and future. With engaging storytelling and deep analysis, the author sheds light on pivotal moments in human history, from the rise of ancient empires to the challenges of modern society. The book also examines recurring patterns and lessons, giving readers a broader perspective on where humanity has been and where it is headed. It’s a must-read for anyone seeking to understand the bigger picture of human progress.",
    price: 18.5,
    bookImage: history, // history-style
    date: new Date(),
    views: 78,
  },
  {
    userId: "user321",
    title: "Mindful Living",
    category: "Self-Help",
    gender: "Female",
    description:
      "Mindful Living is a gentle yet powerful guide that helps readers navigate the challenges of modern life with clarity, peace, and intention. Filled with practical exercises, meditations, and wisdom, it teaches the art of slowing down, appreciating the present moment, and cultivating inner calm. Whether dealing with stress, distractions, or emotional struggles, this book provides tools to build resilience, balance, and a deeper sense of fulfillment. Perfect for beginners and experienced mindfulness practitioners alike, it serves as a daily companion for a healthier and more meaningful life.",
    price: 12.75,
    bookImage: mindful, // self-help style
    date: new Date(),
    views: 200,
  },
  {
    userId: "user654",
    title: "Code Mastery",
    category: "Technology",
    gender: "Male",
    description:
      "Code Mastery is the ultimate resource for anyone eager to become a skilled programmer. Covering the fundamentals of programming in a clear and approachable way, it also introduces advanced techniques and best practices used by professionals. Each chapter is enriched with hands-on projects, real-world examples, and exercises that challenge readers to think critically and solve problems effectively. More than just a textbook, it’s a roadmap to mastering the art and science of coding, empowering learners to build powerful applications and pursue successful careers in technology.",
    price: 30.0,
    bookImage: cracking, // tech/programming style
    date: new Date(),
    views: 310,
  },
];

export default carouselInfo;
