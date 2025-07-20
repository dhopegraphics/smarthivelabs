import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: "1",
    name: "Smart Hive Labs Classic T-Shirt",
    description:
      "Premium 100% cotton t-shirt featuring the iconic Smart Hive Labs logo. Perfect for developers, tech enthusiasts, and anyone who appreciates quality craftsmanship.",
    price: 79.99, // GHS
    images: [
      "/merchandise/tshirt-black-front.jpg",
      "/merchandise/tshirt-black-back.jpg",
      "/merchandise/tshirt-white-front.jpg",
      "/merchandise/tshirt-white-back.jpg",
    ],
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy Blue", hex: "#1E3A8A" },
      { name: "Purple", hex: "#7C3AED" },
    ],
    inStock: true,
    slug: "smart-hive-labs-classic-tshirt",
  },
  {
    id: "2",
    name: "Smart Hive Labs Premium Hoodie",
    description:
      "Ultra-comfortable hoodie made from premium cotton blend. Features embroidered logo and perfect for coding sessions or casual wear.",
    price: 149.99, // GHS
    images: [
      "/merchandise/hoodie-black-front.jpg",
      "/merchandise/hoodie-black-back.jpg",
      "/merchandise/hoodie-grey-front.jpg",
      "/merchandise/hoodie-purple-front.jpg",
    ],
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Charcoal Grey", hex: "#374151" },
      { name: "Purple", hex: "#7C3AED" },
      { name: "Navy Blue", hex: "#1E3A8A" },
    ],
    inStock: true,
    slug: "smart-hive-labs-premium-hoodie",
  },
  {
    id: "3",
    name: "Developer Coffee Mug",
    description:
      "Start your coding sessions right with our premium ceramic mug. Dishwasher safe and perfect for your favorite hot beverage.",
    price: 39.99, // GHS
    images: ["/merchandise/mug-white.jpg", "/merchandise/mug-black.jpg"],
    category: "Accessories",
    sizes: ["One Size"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
    ],
    inStock: true,
    slug: "developer-coffee-mug",
  },
  {
    id: "4",
    name: "Tech Sticker Pack",
    description:
      "Collection of 10 unique Smart Hive Labs stickers. Perfect for laptops, water bottles, or anywhere you want to show your tech pride.",
    price: 24.99, // GHS
    images: [
      "/merchandise/stickers-pack.jpg",
      "/merchandise/stickers-individual.jpg",
    ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: [{ name: "Mixed", hex: "#6366F1" }],
    inStock: true,
    slug: "tech-sticker-pack",
  },
  {
    id: "5",
    name: "Smart Hive Labs Polo Shirt",
    description:
      "Professional polo shirt perfect for client meetings or casual Fridays. Made from breathable cotton blend with embroidered logo.",
    price: 99.99, // GHS
    images: [
      "/merchandise/polo-navy-front.jpg",
      "/merchandise/polo-white-front.jpg",
      "/merchandise/polo-black-front.jpg",
    ],
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy Blue", hex: "#1E3A8A" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
    ],
    inStock: true,
    slug: "smart-hive-labs-polo-shirt",
  },
  {
    id: "6",
    name: "Laptop Sleeve",
    description:
      "Protect your laptop in style with our padded laptop sleeve featuring the Smart Hive Labs logo. Available in multiple sizes.",
    price: 89.99, // GHS
    images: [
      "/merchandise/laptop-sleeve-black.jpg",
      "/merchandise/laptop-sleeve-grey.jpg",
    ],
    category: "Accessories",
    sizes: ["13 inch", "15 inch", "17 inch"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Charcoal Grey", hex: "#374151" },
    ],
    inStock: true,
    slug: "laptop-sleeve",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4);
}
