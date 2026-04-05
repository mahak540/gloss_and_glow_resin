/* ===================================
   GLOSS & GLOW RESIN ART - Product Data
   =================================== */

const products = [
  {
    id: 1,
    name: 'Resin Photo Frame 4 inch',
    category: 'photo-frames',
    price: 350,
    sizes: ['4 inch'],
    image: 'frame.jpg',
    description: 'Beautiful handmade 4 inch resin photo frame, perfect for small memories and desk decor.',
    details: 'Crafted with premium resin and embedded with elegant elements, each frame is unique and handmade. Dimensions: 4x4 inches.',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Resin Photo Frame 8 inch',
    category: 'photo-frames',
    price: 950,
    sizes: ['8 inch'],
    image: 'frame8inch.jpeg',
    description: 'Premium 8 inch resin photo frame for wall display and special occasions.',
    details: 'An exquisite 8 inch frame perfect for showcasing your favorite photographs. Each piece is handcrafted with meticulous attention to detail. Dimensions: 8x8 inches.',
    badge: 'Bestseller'
  },
  {
    id: 3,
    name: 'Resin Photo Frame 12 inch',
    category: 'photo-frames',
    price: 1500,
    sizes: ['12 inch'],
    image: 'frame12inch.jpeg',
    description: 'Large luxurious 12 inch resin photo frame, statement piece for your home.',
    details: 'Our most prestigious frame size, perfect for creating a stunning focal point. Meticulously handcrafted from premium resin with embedded decorative elements. Dimensions: 12x12 inches.',
    
  },
  {
    id: 4,
    name: 'Resin Keyrings',
    category: 'keyrings',
    price: 150,
    sizes: ['One Size'],
    image: 'keyring.jpeg',
    description: 'Adorable handmade resin keyrings featuring unique designs and embedded elements.',
    details: 'Each keyring is a miniature work of art. Made with durable resin and equipped with sturdy metal keyring attachment. Perfect gift for resin lovers!',
    
  },
  {
    id: 5,
    name: 'Resin Wall Clock',
    category: 'clocks',
    price: 1800,
    sizes: ['12 inch diameter'],
    image: 'clock.jpg',
    description: 'Elegant handmade resin wall clock with modern design and smooth operation.',
    details: 'A functional work of art. Features a silent quartz mechanism and beautiful resin design. Perfect for any room in your home. Diameter: 12 inches.',
    badge: 'New'
  },
  {
    id: 6,
    name: 'Flower Preservation Service',
    category: 'preservation',
    price: 0,
    sizes: ['Custom'],
    image: 'flower.jpg',
    description: 'Preserve your special flowers forever in beautiful resin. Contact us for custom pricing.',
    details: 'We preserve your precious flower bouquets in crystal-clear resin. Perfect for anniversaries, weddings, and special occasions. Custom pricing based on flower type and size.',
    badge: 'Custom'
  },
  {
    id: 7,
    name: 'Resin Nameplate',
    category: 'nameplate',
    price: 1800,
    sizes: ['Custom'],
    image: 'namplate.jpeg',
    description: 'Make your entrance special with a beautifully crafted resin nameplate. Fully customizable with elegant designs, flowers, or gold accents. Long-lasting shine and weather resistant.',
    details: 'Our premium handmade resin nameplates are designed to add elegance to your home or office entrance. Personalize with your name, house number, colors, dried flowers, or theme design. Made with high-quality epoxy resin for durability, glossy finish, and long-lasting beauty. Contact us for custom size and design options.',
    badge: 'Custom'
  },
  
  
];

// Category grouping
const categories = {
  'photo-frames': 'Resin Photo Frames',
  'keyrings': 'Resin Keyrings',
  'clocks': 'Wall Clocks',
  'preservation': 'Preservation Services',
  'nameplate':'Nameplates'
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products, categories };
}
