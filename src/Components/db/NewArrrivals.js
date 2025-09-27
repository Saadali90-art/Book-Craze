import digital from "../../assets/HomePage/New Arrivals/digital.jpg";
import quantum from "../../assets/HomePage/New Arrivals/quantum.jpg";
import rise from "../../assets/HomePage/New Arrivals/rise.jpg";
import sand from "../../assets/HomePage/New Arrivals/sand.jpg";
import silent from "../../assets/HomePage/New Arrivals/silent.jpg";
import taste from "../../assets/HomePage/New Arrivals/taste.jpeg";

const newArrivals = [
  {
    userId: "user301",
    title: "Rise of the Phoenix",
    category: "Fantasy",
    gender: "Male",
    description:
      "A magical fantasy tale about a fallen kingdom awaiting its savior. When a young orphan discovers the legendary Phoenix Stone, he embarks on a dangerous quest filled with mythical creatures, betrayal, and hope. This story combines epic battles, emotional depth, and an unforgettable journey of self-discovery.",
    price: 23.99,
    bookImage: rise,
    date: new Date(),
    views: 520,
  },
  {
    userId: "user302",
    title: "Tastes of Tradition",
    category: "Cooking",
    gender: "Female",
    description:
      "A delightful cookbook featuring recipes passed down through generations. From rustic breads to aromatic stews, this collection captures the flavors of family traditions worldwide. Every recipe is accompanied by cultural anecdotes and practical cooking tips, making it both inspiring and educational.",
    price: 28.5,
    bookImage: taste,
    date: new Date(),
    views: 275,
  },
  {
    userId: "user303",
    title: "The Quantum Leap",
    category: "Science",
    gender: "Male",
    description:
      "An accessible introduction to quantum physics for curious minds. This book breaks down the mysteries of particles, time, and space into simple explanations while connecting them to modern technology. Ideal for science enthusiasts who want to understand how the invisible world shapes everything around us.",
    price: 31.0,
    bookImage: quantum,
    date: new Date(),
    views: 845,
  },
  {
    userId: "user304",
    title: "Silent Reflections",
    category: "Self-Help",
    gender: "Female",
    description:
      "A calming guide that teaches the art of self-reflection and journaling. With exercises, prompts, and stories, it helps readers slow down, understand themselves better, and find clarity in a noisy world. A must-read for anyone seeking peace and emotional healing.",
    price: 17.99,
    bookImage: silent,
    date: new Date(),
    views: 198,
  },
  {
    userId: "user305",
    title: "Empires of Sand",
    category: "History",
    gender: "Male",
    description:
      "A sweeping historical account of ancient desert civilizations that rose and fell across North Africa and the Middle East. The book uncovers the secrets of lost cities, powerful rulers, and cultural exchanges that shaped trade, religion, and warfare for centuries.",
    price: 26.75,
    bookImage: sand,
    date: new Date(),
    views: 690,
  },
  {
    userId: "user306",
    title: "Digital Renaissance",
    category: "Technology",
    gender: "Female",
    description:
      "Exploring how technology is transforming art, culture, and human creativity. From digital paintings to AI-driven music, this book highlights the merging of innovation and artistry. It challenges readers to view technology not just as a tool, but as a partner in human expression.",
    price: 34.25,
    bookImage: digital,
    date: new Date(),
    views: 430,
  },
];

export default newArrivals;
