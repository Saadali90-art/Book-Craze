import adventure from "../../assets/DashBoard/adventure.jpg";
import atdraw from "../../assets/DashBoard/atdraw.jpg";
import cooking from "../../assets/DashBoard/cooking.jpeg";
import cyber from "../../assets/DashBoard/cyber.jpg";
import healing from "../../assets/DashBoard/healing.jpg";
import hustle from "../../assets/DashBoard/hustle.jpeg";
import japan from "../../assets/DashBoard/japan.jpg";
import lost from "../../assets/DashBoard/lost.jpg";
import robots from "../../assets/DashBoard/robots.jpg";
import loverain from "../../assets/DashBoard/loverain.jpeg";
import secretuniverse from "../../assets/DashBoard/secretsuniverse.jpg";
import shadows from "../../assets/DashBoard/shadows.jpeg";
import artofnego from "../../assets/HomePage/Montly Top/artofnego.webp";
import street from "../../assets/HomePage/Montly Top/street.webp";
import calm from "../../assets/HomePage/Montly Top/calm.jpg";
import daventure from "../../assets/HomePage/Montly Top/daventure.jpg";
import gardening from "../../assets/HomePage/Montly Top/gardening.jpg";
import healthy from "../../assets/HomePage/Montly Top/healthy.png";
import hidden from "../../assets/HomePage/Montly Top/hidden.jpeg";
import ocean from "../../assets/HomePage/Montly Top/ocean.jpg";

const dashboardInfo = [
  {
    userId: "user201",
    title: "Ocean Dreams",
    category: "Fantasy",
    gender: "Female",
    description: "Dive into a magical underwater kingdom full of mysteries.",
    price: 14.5,
    bookImage: ocean,
    date: "2025-09-10T00:00:00.000Z",
    views: 65,
    quantity: 1,
  },
  {
    userId: "user202",
    title: "Street Photography 101",
    category: "Photography",
    gender: "Male",
    description: "Master the art of capturing everyday life through your lens.",
    price: 27.99,
    bookImage: street,
    date: "2025-09-31T00:00:00.000Z",
    views: 180,
    quantity: 1,
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
    date: "2025-11-26T00:00:00.000Z",
    views: 240,
    quantity: 1,
  },
  {
    userId: "user204",
    title: "Gardening for Beginners",
    category: "Lifestyle",
    gender: "Female",
    description: "Step-by-step guide to grow your own plants and vegetables.",
    price: 16.75,
    bookImage: gardening,
    date: "2025-05-26T00:00:00.000Z",
    views: 92,
    quantity: 1,
  },
  {
    userId: "user205",
    title: "Adventures in Space",
    category: "Science Fiction",
    gender: "Male",
    description: "A thrilling tale of astronauts exploring distant galaxies.",
    price: 19.25,
    bookImage: daventure,
    date: "2025-02-26T00:00:00.000Z",
    views: 300,
    quantity: 1,
  },
  {
    userId: "user206",
    title: "Healthy Habits",
    category: "Health",
    gender: "Female",
    description: "Simple lifestyle changes that bring long-term wellness.",
    price: 12.99,
    bookImage: healthy,
    date: "2025-01-26T00:00:00.000Z",
    views: 155,
    quantity: 1,
  },
  {
    userId: "user207",
    title: "The Hidden Village",
    category: "Mystery",
    gender: "Male",
    description: "A detective unravels secrets buried deep in a quiet town.",
    price: 17.5,
    bookImage: hidden,
    date: "2025-12-26T00:00:00.000Z",
    views: 420,
    quantity: 1,
  },
  {
    userId: "user208",
    title: "Art of Calm",
    category: "Self-Help",
    gender: "Female",
    description: "Techniques to reduce stress and live a peaceful life.",
    price: 15.0,
    bookImage: calm,
    date: "2025-05-26T00:00:00.000Z",
    views: 130,
    quantity: 1,
  },
  {
    userId: "user1",
    title: "The Lost Kingdom",
    category: "Fantasy",
    gender: "Unisex",
    description:
      "The Lost Kingdom unfolds in a realm where ancient magic and forgotten dynasties lie buried beneath the sands of time. Readers are swept into the life of a reluctant hero who uncovers a hidden legacy tied to a kingdom erased from history. As the hero journeys across treacherous mountains, cursed forests, and cities teeming with secrets, alliances form and enemies emerge from the shadows. Every revelation leads closer to a truth that could restore a world or plunge it into eternal chaos. With richly detailed landscapes, unpredictable battles, and a sense of wonder that grows page by page, this tale invites readers to step into a myth reborn, where courage and betrayal dance in the same breath.",
    price: 15.99,
    bookImage: lost,
    date: "2025-10-26T00:00:00.000Z",
    views: 120,
    quantity: 1,
  },
  {
    userId: "user2",
    title: "Love in the Rain",
    category: "Romance",
    gender: "Female",
    description:
      "Love in the Rain is a heartfelt saga of two souls colliding in the most unexpected storm. Beneath the sound of falling rain, a quiet city street becomes the stage for a love story filled with hesitation, longing, and discovery. As the characters navigate heartbreak, unspoken dreams, and the weight of their pasts, the rain becomes both a symbol of cleansing and the veil under which their deepest emotions awaken. Every chapter uncovers the fragile beauty of trust, the sweetness of vulnerability, and the power of love to heal scars no one else can see. With vivid imagery and unforgettable moments, this story lingers like the scent of rain-soaked earth, reminding readers that sometimes the storms we dread bring us the blessings we never expected.",
    price: 9.99,
    bookImage: loverain,
    date: "2025-04-26T00:00:00.000Z",
    views: 87,
    quantity: 1,
  },
  {
    userId: "user3",
    title: "Robots Among Us",
    category: "Science Fiction",
    gender: "Male",
    description:
      "In Robots Among Us, the line between man and machine blurs into a haunting reality that challenges everything we believe about identity. Set in a future where artificial intelligence has seamlessly integrated into daily life, the story follows ordinary citizens who discover that their neighbors, co-workers, and even loved ones may not be entirely human. As questions of morality and control rise, tensions ignite into conflicts that test the foundation of society itself. Through moments of awe, fear, and revelation, readers are drawn into a gripping exploration of technology’s potential to both save and enslave humanity. With thought-provoking twists and an atmosphere of relentless suspense, this book forces us to ask: when machines walk among us, what does it truly mean to be human?",
    price: 12.49,
    bookImage: robots,
    date: "2025-06-26T00:00:00.000Z",
    views: 210,
    quantity: 1,
  },
  {
    userId: "user4",
    title: "The Healing Path",
    category: "Self-Help",
    gender: "Unisex",
    description:
      "The Healing Path offers more than guidance—it is a journey toward rediscovering the strength hidden within. Through the art of mindfulness, the power of forgiveness, and the quiet wisdom of self-reflection, readers are invited to break free from the burdens of pain and embrace the freedom of renewal. Each page serves as a companion in navigating life’s storms, reminding us that healing is not an end but an ongoing process. With personal stories, practical techniques, and inspiring words, this book empowers readers to confront their shadows, nurture their inner light, and walk with courage toward peace. The Healing Path is a reminder that resilience is born from hardship, and the most powerful transformation often begins with a single, gentle step inward.",
    price: 8.5,
    bookImage: healing,
    date: "2025-07-26T00:00:00.000Z",
    views: 65,
    quantity: 1,
  },
  {
    userId: "user5",
    title: "Battlefield Shadows",
    category: "War",
    gender: "Male",
    description:
      "Battlefield Shadows plunges readers into the chaos of war, where loyalty and survival collide in haunting ways. Following soldiers trapped between duty and despair, the story reveals the untold cost of battles fought not only on muddy fields but also within the human soul. Through firelit nights, shattered landscapes, and moments of fleeting camaraderie, courage becomes both a weapon and a curse. Each chapter paints a vivid picture of sacrifice and resilience, while raising piercing questions about honor, freedom, and the scars left behind. Far beyond a simple war narrative, this book captures the fragile humanity hidden beneath uniforms, showing that even in the darkest shadows of battle, the human spirit refuses to surrender.",
    price: 13.75,
    bookImage: shadows,
    date: "2025-08-26T00:00:00.000Z",
    views: 142,
    quantity: 1,
  },
  {
    userId: "user6",
    title: "Cooking with Love",
    category: "Cooking",
    gender: "Female",
    description:
      "Cooking with Love is more than a recipe book—it is a celebration of flavors, family, and the joy of sharing meals. Each dish carries a story, from generations-old traditions passed down in quiet kitchens to bold experiments born of passion and creativity. Readers are guided through comforting meals and adventurous tastes that bring people closer, reminding us that food is both nourishment and memory. With detailed instructions, heartfelt anecdotes, and vibrant imagery, the book turns cooking into an act of love, making every bite a reminder that the best meals are seasoned with laughter, togetherness, and care.",
    price: 11.0,
    bookImage: cooking,
    date: "2022-09-26T00:00:00.000Z",
    views: 99,
    quantity: 1,
  },
  {
    userId: "user7",
    title: "The Startup Hustle",
    category: "Business",
    gender: "Unisex",
    description:
      "The Startup Hustle captures the relentless journey of entrepreneurs who dare to dream beyond the ordinary. From the sleepless nights of uncertainty to the exhilaration of groundbreaking success, the narrative takes readers into the high-stakes world of innovation. With stories of failures that spark resilience, mentors who shape destinies, and decisions that change everything, this book paints a vivid picture of what it truly means to build something from nothing. More than just business lessons, it is a roadmap of ambition, courage, and persistence that will resonate with anyone determined to chase their vision against all odds.",
    price: 18.2,
    bookImage: hustle,
    date: "2021-09-26T00:00:00.000Z",
    views: 173,
    quantity: 1,
  },
  {
    userId: "user8",
    title: "Secrets of the Universe",
    category: "Science",
    gender: "Male",
    description:
      "Secrets of the Universe invites readers into the boundless expanse of space, where galaxies swirl like cosmic tapestries and black holes conceal the mysteries of existence. Through vivid storytelling, complex theories are unraveled with clarity, offering a journey that balances wonder with scientific insight. From the birth of stars to the unfathomable depths of dark matter, every chapter expands our understanding of the cosmos while sparking awe at the vastness that surrounds us. This book is not just about the science of space—it is about humanity’s timeless quest to understand our place in the infinite.",
    price: 14.5,
    bookImage: secretuniverse,
    date: "2026-09-26T00:00:00.000Z",
    views: 200,
    quantity: 1,
  },
  {
    userId: "user9",
    title: "The Art of Drawing",
    category: "Art",
    gender: "Female",
    description:
      "The Art of Drawing is a gateway into the creative soul, guiding readers through the delicate craft of turning blank pages into visual stories. With patience, practice, and passion, each chapter reveals techniques that empower beginners and refine the skills of seasoned artists. More than instruction, it explores the emotions, inspirations, and challenges behind the strokes of a pencil. From capturing fleeting expressions to breathing life into landscapes, this book becomes a companion in the pursuit of artistic freedom, reminding readers that every line drawn is a step toward expressing what words often cannot.",
    price: 10.99,
    bookImage: atdraw,
    date: "2023-09-26T00:00:00.000Z",
    views: 75,
    quantity: 1,
  },
  {
    userId: "user10",
    title: "Cyberpunk Streets",
    category: "Fiction",
    gender: "Male",
    description:
      "Cyberpunk Streets thrusts readers into a neon-lit metropolis where corruption thrives, technology rules, and rebellion simmers in the shadows. Following a renegade determined to defy a system built on greed and oppression, the story crackles with energy, suspense, and unrelenting action. From underground markets pulsing with danger to skyscrapers hiding sinister secrets, the world unfolds with cinematic intensity. Every choice is a gamble, every ally a potential traitor, and every heartbeat a reminder that freedom comes at a cost. This tale is more than a dystopian thrill ride—it is a mirror reflecting the consequences of power, ambition, and unchecked progress.",
    price: 16.3,
    bookImage: cyber,
    date: "2025-09-26T00:00:00.000Z",
    views: 300,
    quantity: 1,
  },
  {
    userId: "user11",
    title: "Adventures in the Wild",
    category: "Adventure",
    gender: "Unisex",
    description:
      "Adventures in the Wild takes readers on a breathtaking expedition into untamed wilderness, where survival depends on instinct, courage, and resilience. The journey brims with danger—raging rivers, dense forests, and towering cliffs—but also moments of profound beauty that awaken a deep respect for nature’s power. As characters confront both external perils and internal fears, the wilderness transforms from an enemy into a teacher, revealing lessons about adaptability, perseverance, and the human spirit’s determination to endure. This story is not just about adventure; it is a reminder that sometimes the greatest discoveries are found when we dare to leave the familiar behind.",
    price: 13.0,
    bookImage: adventure,
    date: "2025-09-26T00:00:00.000Z",
    views: 95,
    quantity: 1,
  },
  {
    userId: "user12",
    title: "Legends of Japan",
    category: "Mythology",
    gender: "Unisex",
    description:
      "Legends of Japan opens the doors to an ancient world where gods, spirits, and mythical creatures walk among mortals. Each story breathes life into folklore that has shaped centuries of tradition, weaving together tales of courage, trickery, and divine encounters. From the haunting beauty of yokai to the wisdom of Shinto legends, this collection immerses readers in a culture rich with symbolism and timeless lessons. The book is not only a celebration of Japanese heritage but also an exploration of universal themes—love, honor, betrayal, and destiny—echoing across generations and borders.",
    price: 12.75,
    bookImage: japan,
    date: "2025-09-26T00:00:00.000Z",
    views: 123,
    quantity: 1,
  },
];

export default dashboardInfo;
