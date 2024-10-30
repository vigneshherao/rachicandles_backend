const dummyProducts = [
  {
    title: "Vintage Glass Vase",
    subtitle: "Elegant vase for timeless decor",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 250,
    category: "candles",
    description:
      "A beautifully crafted vintage glass vase, perfect for displaying fresh flowers and adding a touch of elegance to any space.",
  },
  {
    title: "Handmade Wooden Coasters",
    subtitle: "Eco-friendly coasters for your home",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 150,
    category: "sweets",
    description:
      "Set of four handmade wooden coasters that protect your surfaces while adding a rustic charm to your decor.",
  },
  {
    title: "Decorative Throw Blanket",
    subtitle: "Cozy and stylish for any room",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 600,
    category: "candles",
    description:
      "Soft and warm decorative throw blanket that enhances your living space with comfort and style.",
  },
  {
    title: "Ceramic Coffee Mug",
    subtitle: "Artisan mug for your morning brew",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 200,
    category: "candles",
    description:
      "A beautifully designed ceramic coffee mug that brings a unique touch to your daily coffee routine.",
  },
  {
    title: "Scented Soy Candles",
    subtitle: "Eco-friendly and aromatic",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 350,
    category: "candles",
    description:
      "Hand-poured scented soy candles that fill your home with delightful fragrances while being environmentally friendly.",
  },
  {
    title: "Rustic Wall Clock",
    subtitle: "Timeless design for any room",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 450,
    category: "candles",
    description:
      "A rustic wall clock that combines functionality with vintage charm, perfect for any living space.",
  },
  {
    title: "Stylish Desk Organizer",
    subtitle: "Keep your workspace tidy",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 300,
    category: "candles",
    description:
      "A sleek desk organizer that helps keep your workspace organized and stylish.",
  },
  {
    title: "Handcrafted Wooden Frame",
    subtitle: "Showcase your memories",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 400,
    category: "candles",
    description:
      "A handcrafted wooden photo frame that adds a personal touch to your cherished memories.",
  },
  {
    title: "Artisan Soap Set",
    subtitle: "Luxurious and natural",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 250,
    category: "candles",
    description:
      "A set of artisan soaps made from natural ingredients, perfect for pampering your skin.",
  },
  {
    title: "Charming Table Lamp",
    subtitle: "Illuminate your space with style",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 500,
    category: "candles",
    description:
      "A charming table lamp that adds warmth and character to your living space.",
  },
  {
    title: "Soft Cotton Pillow",
    subtitle: "Comfort for a restful sleep",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 300,
    category: "candles",
    description:
      "A plush cotton pillow designed for ultimate comfort and support during sleep.",
  },
  {
    title: "Vintage Record Player",
    subtitle: "Bring back the classics",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 1200,
    category: "candles",
    description:
      "A vintage-style record player that lets you enjoy your favorite vinyl records in style.",
  },
  {
    title: "Decorative Wall Art",
    subtitle: "Add character to your walls",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 700,
    category: "candles",
    description:
      "A stunning piece of wall art that transforms your space and reflects your personality.",
  },
  {
    title: "Elegant Glass Pitcher",
    subtitle: "Serve in style",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 400,
    category: "candles",
    description:
      "An elegant glass pitcher perfect for serving drinks at any gathering.",
  },
  {
    title: "Rustic Candle Holder",
    subtitle: "Create a warm ambiance",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 350,
    category: "sweets",
    description:
      "A rustic candle holder that enhances your decor and creates a cozy atmosphere.",
  },
  {
    title: "Modern Planter",
    subtitle: "Showcase your plants beautifully",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 450,
    category: "sweets",
    description:
      "A sleek modern planter that showcases your favorite plants while adding a contemporary touch.",
  },
  {
    title: "Handwoven Basket",
    subtitle: "Versatile storage solution",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 250,
    category: "sweets",
    description:
      "A beautiful handwoven basket that provides a stylish storage solution for any room.",
  },
  {
    title: "Soft Area Rug",
    subtitle: "Add comfort underfoot",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 800,
    category: "sweets",
    description:
      "A plush area rug that brings warmth and style to your living space.",
  },
  {
    title: "Leather Journal",
    subtitle: "Capture your thoughts in style",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 350,
    category: "sweets",
    description:
      "A handcrafted leather journal perfect for jotting down your thoughts and ideas.",
  },
  {
    title: "Decorative Throw Pillows",
    subtitle: "Add a pop of color",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 200,
    category: "sweets",
    description:
      "A set of colorful throw pillows that enhance the comfort and style of your seating area.",
  },
  {
    title: "Handcrafted Cutting Board",
    subtitle: "Perfect for your kitchen",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 400,
    category: "sweets",
    description:
      "A durable handcrafted cutting board that makes meal prep a breeze.",
  },
  {
    title: "Elegant Wine Glasses",
    subtitle: "Raise a toast in style",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 600,
    category: "sweets",
    description:
      "A set of elegant wine glasses perfect for special occasions and everyday use.",
  },
  {
    title: "Cozy Slippers",
    subtitle: "Comfort for your feet",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 250,
    category: "sweets",
    description:
      "Soft and warm slippers that keep your feet cozy during chilly evenings.",
  },
  {
    title: "Handmade Jewelry Box",
    subtitle: "Store your treasures beautifully",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 500,
    category: "sweets",
    description:
      "A beautifully crafted jewelry box that keeps your precious items organized and safe.",
  },
  {
    title: "Artisan Tea Set",
    subtitle: "Brew and serve with elegance",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 700,
    category: "candles",
    description:
      "An artisan tea set that makes brewing and serving tea a delightful experience.",
  },
  {
    title: "Stylish Sunglasses",
    subtitle: "Protect your eyes with flair",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 300,
    category: "sweets",
    description:
      "Fashionable sunglasses that offer UV protection while enhancing your style.",
  },
  {
    title: "Unique Wall Hooks",
    subtitle: "Functional art for your home",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 200,
    category: "sweets",
    description:
      "A set of unique wall hooks that combine functionality with artistic flair.",
  },
  {
    title: "Handcrafted Pottery",
    subtitle: "Add a touch of craftsmanship",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 450,
    category: "sweets",
    description:
      "Beautifully handcrafted pottery pieces that add character to your decor.",
  },
  {
    title: "Decorative Wall Mirror",
    subtitle: "Reflect your style",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 800,
    category: "candles",
    description:
      "A decorative wall mirror that not only serves a purpose but also enhances your space.",
  },
  {
    title: "Stylish Backpack",
    subtitle: "Perfect for everyday adventures",
    image:
      "https://sosacandlesstore.com/cdn/shop/files/81iVAe6v_vL._SL1500.jpg?v=1724952231&width=360",
    price: 600,
    category: "sweets",
    description:
      "A stylish and functional backpack designed for comfort and convenience.",
  },
];

module.exports = dummyProducts;
