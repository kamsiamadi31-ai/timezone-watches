export const products = [
  {
    id: 1,
    name: "Classic Silver",
    category: "Classic",
    price: 45000,
    description: "A clean silver design for everyday confidence.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&auto=format&fit=crop&q=85",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Midnight Black",
    category: "Luxury",
    price: 68000,
    description: "A bold black finish for formal and evening wear.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=900&auto=format&fit=crop&q=85",
    tag: "Popular"
  },
  {
    id: 3,
    name: "Golden Hour",
    category: "Luxury",
    price: 72000,
    description: "A gold-tone statement piece with timeless style.",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=900&auto=format&fit=crop&q=85",
    tag: "New"
  },
  {
    id: 4,
    name: "Sport Active",
    category: "Sport",
    price: 39000,
    description: "A comfortable everyday watch for an active lifestyle.",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&auto=format&fit=crop&q=85",
    tag: "Everyday"
  },
  {
    id: 5,
    name: "Leather Heritage",
    category: "Classic",
    price: 56000,
    description: "A warm leather strap paired with a simple dial.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900&auto=format&fit=crop&q=85",
    tag: "Classic"
  },
  {
    id: 6,
    name: "Ocean Blue",
    category: "Sport",
    price: 49000,
    description: "A fresh blue look made for daily adventures.",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=900&auto=format&fit=crop&q=85",
    tag: "Featured"
  }
];

export function formatPrice(price) {
  return `₦${price.toLocaleString("en-NG")}`;
}