const dummyProducts = [
  {
    title: "Vintage Glass Vase",
    subtitle: "Elegant vase for timeless decor",
    image: "https://example.com/vintage-vase.jpg",
    price: 250,
    description:
      "A beautifully crafted vintage glass vase, perfect for displaying fresh flowers and adding a touch of elegance to any space.",
  },
  {
    title: "Handmade Wooden Coasters",
    subtitle: "Eco-friendly coasters for your home",
    image: "https://example.com/wooden-coasters.jpg",
    price: 150,
    description:
      "Set of four handmade wooden coasters that protect your surfaces while adding a rustic charm to your decor.",
  },
  {
    title: "Decorative Throw Blanket",
    subtitle: "Cozy and stylish for any room",
    image: "https://example.com/throw-blanket.jpg",
    price: 600,
    description:
      "Soft and warm decorative throw blanket that enhances your living space with comfort and style.",
  },
  {
    title: "Ceramic Coffee Mug",
    subtitle: "Artisan mug for your morning brew",
    image: "https://example.com/ceramic-mug.jpg",
    price: 200,
    description:
      "A beautifully designed ceramic coffee mug that brings a unique touch to your daily coffee routine.",
  },
  {
    title: "Scented Soy Candles",
    subtitle: "Eco-friendly and aromatic",
    image: "https://example.com/soy-candles.jpg",
    price: 350,
    description:
      "Hand-poured scented soy candles that fill your home with delightful fragrances while being environmentally friendly.",
  },
  {
    title: "Rustic Wall Clock",
    subtitle: "Timeless design for any room",
    image: "https://example.com/wall-clock.jpg",
    price: 450,
    description:
      "A rustic wall clock that combines functionality with vintage charm, perfect for any living space.",
  },
  {
    title: "Stylish Desk Organizer",
    subtitle: "Keep your workspace tidy",
    image: "https://example.com/desk-organizer.jpg",
    price: 300,
    description:
      "A sleek desk organizer that helps keep your workspace organized and stylish.",
  },
  {
    title: "Handcrafted Wooden Frame",
    subtitle: "Showcase your memories",
    image: "https://example.com/wooden-frame.jpg",
    price: 400,
    description:
      "A handcrafted wooden photo frame that adds a personal touch to your cherished memories.",
  },
  {
    title: "Artisan Soap Set",
    subtitle: "Luxurious and natural",
    image: "https://example.com/artisan-soap.jpg",
    price: 250,
    description:
      "A set of artisan soaps made from natural ingredients, perfect for pampering your skin.",
  },
  {
    title: "Charming Table Lamp",
    subtitle: "Illuminate your space with style",
    image: "https://example.com/table-lamp.jpg",
    price: 500,
    description:
      "A charming table lamp that adds warmth and character to your living space.",
  },
  {
    title: "Soft Cotton Pillow",
    subtitle: "Comfort for a restful sleep",
    image: "https://example.com/cotton-pillow.jpg",
    price: 300,
    description:
      "A plush cotton pillow designed for ultimate comfort and support during sleep.",
  },
  {
    title: "Vintage Record Player",
    subtitle: "Bring back the classics",
    image: "https://example.com/record-player.jpg",
    price: 1200,
    description:
      "A vintage-style record player that lets you enjoy your favorite vinyl records in style.",
  },
  {
    title: "Decorative Wall Art",
    subtitle: "Add character to your walls",
    image: "https://example.com/wall-art.jpg",
    price: 700,
    description:
      "A stunning piece of wall art that transforms your space and reflects your personality.",
  },
  {
    title: "Elegant Glass Pitcher",
    subtitle: "Serve in style",
    image: "https://example.com/glass-pitcher.jpg",
    price: 400,
    description:
      "An elegant glass pitcher perfect for serving drinks at any gathering.",
  },
  {
    title: "Rustic Candle Holder",
    subtitle: "Create a warm ambiance",
    image: "https://example.com/candle-holder.jpg",
    price: 350,
    description:
      "A rustic candle holder that enhances your decor and creates a cozy atmosphere.",
  },
  {
    title: "Modern Planter",
    subtitle: "Showcase your plants beautifully",
    image: "https://example.com/modern-planter.jpg",
    price: 450,
    description:
      "A sleek modern planter that showcases your favorite plants while adding a contemporary touch.",
  },
  {
    title: "Handwoven Basket",
    subtitle: "Versatile storage solution",
    image: "https://example.com/handwoven-basket.jpg",
    price: 250,
    description:
      "A beautiful handwoven basket that provides a stylish storage solution for any room.",
  },
  {
    title: "Soft Area Rug",
    subtitle: "Add comfort underfoot",
    image: "https://example.com/area-rug.jpg",
    price: 800,
    description:
      "A plush area rug that brings warmth and style to your living space.",
  },
  {
    title: "Leather Journal",
    subtitle: "Capture your thoughts in style",
    image: "https://example.com/leather-journal.jpg",
    price: 350,
    description:
      "A handcrafted leather journal perfect for jotting down your thoughts and ideas.",
  },
  {
    title: "Decorative Throw Pillows",
    subtitle: "Add a pop of color",
    image: "https://example.com/throw-pillows.jpg",
    price: 200,
    description:
      "A set of colorful throw pillows that enhance the comfort and style of your seating area.",
  },
  {
    title: "Handcrafted Cutting Board",
    subtitle: "Perfect for your kitchen",
    image: "https://example.com/cutting-board.jpg",
    price: 400,
    description:
      "A durable handcrafted cutting board that makes meal prep a breeze.",
  },
  {
    title: "Elegant Wine Glasses",
    subtitle: "Raise a toast in style",
    image: "https://example.com/wine-glasses.jpg",
    price: 600,
    description:
      "A set of elegant wine glasses perfect for special occasions and everyday use.",
  },
  {
    title: "Cozy Slippers",
    subtitle: "Comfort for your feet",
    image: "https://example.com/cozy-slippers.jpg",
    price: 250,
    description:
      "Soft and warm slippers that keep your feet cozy during chilly evenings.",
  },
  {
    title: "Handmade Jewelry Box",
    subtitle: "Store your treasures beautifully",
    image: "https://example.com/jewelry-box.jpg",
    price: 500,
    description:
      "A beautifully crafted jewelry box that keeps your precious items organized and safe.",
  },
  {
    title: "Artisan Tea Set",
    subtitle: "Brew and serve with elegance",
    image: "https://example.com/tea-set.jpg",
    price: 700,
    description:
      "An artisan tea set that makes brewing and serving tea a delightful experience.",
  },
  {
    title: "Stylish Sunglasses",
    subtitle: "Protect your eyes with flair",
    image: "https://example.com/sunglasses.jpg",
    price: 300,
    description:
      "Fashionable sunglasses that offer UV protection while enhancing your style.",
  },
  {
    title: "Unique Wall Hooks",
    subtitle: "Functional art for your home",
    image: "https://example.com/wall-hooks.jpg",
    price: 200,
    description:
      "A set of unique wall hooks that combine functionality with artistic flair.",
  },
  {
    title: "Handcrafted Pottery",
    subtitle: "Add a touch of craftsmanship",
    image: "https://example.com/pottery.jpg",
    price: 450,
    description:
      "Beautifully handcrafted pottery pieces that add character to your decor.",
  },
  {
    title: "Decorative Wall Mirror",
    subtitle: "Reflect your style",
    image: "https://example.com/wall-mirror.jpg",
    price: 800,
    description:
      "A decorative wall mirror that not only serves a purpose but also enhances your space.",
  },
  {
    title: "Stylish Backpack",
    subtitle: "Perfect for everyday adventures",
    image: "https://example.com/backpack.jpg",
    price: 600,
    description:
      "A stylish and functional backpack designed for comfort and convenience.",
  },
];

module.exports = dummyProducts;
