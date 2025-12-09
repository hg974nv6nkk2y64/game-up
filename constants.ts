import { Product, Category, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'OptiFrame Pro',
    tagline: 'Boost FPS instantly',
    description: 'The ultimate optimization mod for high-fidelity games. Reduces stuttering and optimizes shader compilation.',
    price: 'Free / Premium $5',
    category: Category.MODS,
    image: 'https://picsum.photos/600/400?random=1',
    rating: 4.8,
    reviewCount: 1240,
    features: ['Shader Caching', 'Memory Leak Fix', '4K Support'],
    affiliateLink: '#',
    compatibility: ['PC', 'Steam Deck'],
    lastUpdated: '2023-10-15',
    detailedReview: {
      rating: 9.5,
      pros: ['Incredible performance boost', 'Easy installation', 'Active community'],
      cons: ['Premium version required for 8K textures'],
      verdict: 'A must-have for anyone with mid-tier hardware trying to run AAA titles.'
    }
  },
  {
    id: 'prod-2',
    name: 'IronClad Host',
    tagline: 'Lag-free dedicated servers',
    description: 'Premium game server hosting with 99.9% uptime, DDoS protection, and one-click mod installation.',
    price: 'Starts at $9.99/mo',
    category: Category.HOSTING,
    image: 'https://picsum.photos/600/400?random=2',
    rating: 4.9,
    reviewCount: 850,
    features: ['DDoS Protection', 'NVMe Storage', '24/7 Support'],
    affiliateLink: '#',
    lastUpdated: '2023-11-01',
    detailedReview: {
      rating: 9.8,
      pros: ['Instant setup', 'Great control panel', 'Low ping globally'],
      cons: ['Slightly more expensive than budget hosts'],
      verdict: 'The best choice for serious competitive gaming communities.'
    }
  },
  {
    id: 'prod-3',
    name: 'ShieldVPN Gamer',
    tagline: 'Lower ping, protect IP',
    description: 'A VPN built specifically for gaming. Optimized routing paths to game servers to reduce latency.',
    price: '$3.49/mo',
    category: Category.VPN,
    image: 'https://picsum.photos/600/400?random=3',
    rating: 4.6,
    reviewCount: 3200,
    features: ['Split Tunneling', 'DDoS Protection', 'No Logs'],
    affiliateLink: '#',
    lastUpdated: '2023-09-20',
     detailedReview: {
      rating: 8.5,
      pros: ['Actually reduces ping in some regions', 'Cheap'],
      cons: ['Desktop app UI is a bit dated'],
      verdict: 'Good value for money if you play on international servers.'
    }
  },
  {
    id: 'prod-4',
    name: 'Realistic Water IV',
    tagline: 'Next-gen fluid physics',
    description: 'Replaces default water textures and physics with hyper-realistic simulations.',
    price: 'Free',
    category: Category.RESOURCE_PACKS,
    image: 'https://picsum.photos/600/400?random=4',
    rating: 4.2,
    reviewCount: 450,
    features: ['Ray Tracing Ready', 'Flow Simulation', 'Foam Effects'],
    affiliateLink: '#',
    lastUpdated: '2023-08-12'
  },
   {
    id: 'prod-5',
    name: 'ModManager X',
    tagline: 'Organize your load order',
    description: 'The definitive tool for managing complex mod lists without conflicts.',
    price: 'Free',
    category: Category.TOOLS,
    image: 'https://picsum.photos/600/400?random=5',
    rating: 4.9,
    reviewCount: 5000,
    features: ['Conflict Detection', 'Auto-Update', 'Profile Switching'],
    affiliateLink: '#',
    lastUpdated: '2023-11-05'
  },
  {
    id: 'prod-6',
    name: 'Solo Leveling: Arise',
    tagline: 'Shadow Monarch Power',
    description: "Experience the webtoon's action with stunning graphics and fast-paced combat. Command your army of shadows.",
    price: 'Free-to-Play',
    category: Category.MODS,
    image: 'https://i.postimg.cc/1zsfmhFG/solo-leveling-arise-shadows-tier-list.avif',
    rating: 4.7,
    reviewCount: 8900,
    features: ['Live Action Combat', 'Shadow Army', 'Hunter Guilds'],
    affiliateLink: '#',
    lastUpdated: '2024-05-08',
    compatibility: ['PC', 'Mobile']
  },
  {
    id: 'prod-7',
    name: 'Garena Free Fire',
    tagline: 'Battle in Style!',
    description: 'A fast-paced battle royale game with 50 players, 10-minute matches, and unique character abilities.',
    price: 'Free-to-Play',
    category: Category.MODS,
    image: 'https://i.postimg.cc/3NmkrKtb/aa959aa3d8790d3a44f7f20f16adfa01.jpg',
    rating: 4.5,
    reviewCount: 15000,
    features: ['50-Player BR', 'Character System', 'Fast-Paced Matches'],
    affiliateLink: '#',
    lastUpdated: '2024-04-17',
    compatibility: ['Mobile']
  },
  {
    id: 'prod-8',
    name: 'PUBG: Battlegrounds',
    tagline: 'Winner Winner Chicken Dinner',
    description: 'The original battle royale experience. Land, loot, and survive to be the last one standing on massive, detailed battlegrounds.',
    price: 'Free-to-Play',
    category: Category.MODS,
    image: 'https://i.postimg.cc/SszsVSbC/pubg-despertar-de-la-luna-de-sangre-12834.webp',
    rating: 4.6,
    reviewCount: 22000,
    features: ['Realistic Gunplay', '8x8 km Maps', 'Vehicle Combat'],
    affiliateLink: '#',
    lastUpdated: '2024-05-14',
    compatibility: ['PC', 'Console', 'Mobile']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Top 10 Mods for Open World RPGs in 2024',
    excerpt: 'Transform your vanilla experience with these essential modifications that add depth, graphics, and mechanics.',
    date: 'Oct 24, 2023',
    readTime: '8 min read',
    image: 'https://picsum.photos/600/400?random=10',
    author: { name: 'Alex Rogue', avatar: 'https://picsum.photos/50/50?random=1' }
  },
  {
    id: 'post-2',
    title: 'How to Setup a Dedicated Server for Friends',
    excerpt: 'A step-by-step guide to hosting your own private gaming sessions without breaking the bank.',
    date: 'Oct 20, 2023',
    readTime: '12 min read',
    image: 'https://picsum.photos/600/400?random=11',
    author: { name: 'Sarah Tech', avatar: 'https://picsum.photos/50/50?random=2' }
  },
   {
    id: 'post-3',
    title: 'Do Gaming VPNs Actually Lower Ping?',
    excerpt: 'We tested 5 major VPNs to see if the marketing hype matches the reality.',
    date: 'Oct 15, 2023',
    readTime: '6 min read',
    image: 'https://picsum.photos/600/400?random=12',
    author: { name: 'Mike Frame', avatar: 'https://picsum.photos/50/50?random=3' }
  }
];