const productsList = [
	{
		id: 1,
		name: "Aurora",
		category: "Stylish cafe chair",
		price: 3500,
		discountPercent: 30,
		featured: true,
		isNew: true,
		isWishlisted: true,
		thumbnail: "/images/product1.jpg",
		rating: 4.5,
		reviewCount: 5,
		stock: 10,
		relatedProducts: [2, 4, 6, 7],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/11112735/pexels-photo-11112735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112734/pexels-photo-11112734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112744/pexels-photo-11112744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112731/pexels-photo-11112731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
				name: "Chair",
			},
		],
		colors: ["#816DFA", "#000000", "#B88E2F"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
	},
	{
		id: 2,
		name: "Zenith",
		category: "Sofa",
		price: 800,
		discountPercent: 20,
		featured: true,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product2.jpg",
	},
	{
		id: 3,
		name: "Cascade",
		category: "Table",
		price: 550,
		discountPercent: 15,
		featured: true,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product3.jpg",
	},
	{
		id: 4,
		name: "Serenity",
		category: "Chair",
		price: 700,
		discountPercent: 25,
		featured: true,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product4.jpg",
	},
	{
		id: 5,
		name: "Harmony",
		category: "Shelf",
		price: 650,
		discountPercent: 10,
		featured: true,
		isNew: false,
		isWishlisted: true,
		thumbnail: "/images/product5.jpg",
	},
	{
		id: 6,
		name: "Elysian",
		category: "Table",
		price: 900,
		discountPercent: 18,
		featured: true,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product6.jpg",
	},
	{
		id: 7,
		name: "Tranquil",
		category: "Desk",
		price: 800,
		discountPercent: 15,
		featured: true,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product7.jpg",
	},
	{
		id: 8,
		name: "Vivid",
		category: "Chair",
		price: 600,
		discountPercent: 12,
		featured: true,
		isNew: true,
		isWishlisted: true,
		thumbnail: "/images/product8.jpg",
	},
	{
		id: 9,
		name: "Aspen",
		category: "Table",
		price: 530,
		discountPercent: 8,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product1.jpg",
	},
	{
		id: 10,
		name: "Luminary",
		category: "Wardrobe",
		price: 1000,
		discountPercent: 22,
		featured: false,
		isNew: true,
		isWishlisted: true,
		thumbnail: "/images/product2.jpg",
	},
	{
		id: 11,
		name: "Sundown",
		category: "Bed",
		price: 700,
		discountPercent: 15,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product3.jpg",
	},
	{
		id: 12,
		name: "Echo",
		category: "Mirror",
		price: 600,
		discountPercent: 10,
		featured: false,
		isNew: true,
		isWishlisted: true,
		thumbnail: "/images/product4.jpg",
	},
	{
		id: 13,
		name: "Oasis",
		category: "Chair",
		price: 800,
		discountPercent: 20,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product5.jpg",
	},
	{
		id: 14,
		name: "Horizon",
		category: "Table",
		price: 700,
		discountPercent: 5,
		featured: false,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product6.jpg",
	},
	{
		id: 15,
		name: "Zen",
		category: "Stool",
		price: 600,
		discountPercent: 15,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product7.jpg",
	},
	{
		id: 16,
		name: "Crest",
		category: "Shelf",
		price: 700,
		discountPercent: 12,
		featured: false,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product8.jpg",
	},
	{
		id: 17,
		name: "Breeze",
		category: "Outdoor",
		price: 600,
		discountPercent: 8,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product1.jpg",
	},
	{
		id: 18,
		name: "Astral",
		category: "Dresser",
		price: 800,
		discountPercent: 25,
		featured: false,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product2.jpg",
	},
	{
		id: 19,
		name: "Verve",
		category: "Desk",
		price: 700,
		discountPercent: 15,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product3.jpg",
	},
	{
		id: 20,
		name: "Lux",
		category: "Chair",
		price: 750,
		discountPercent: 18,
		featured: false,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product4.jpg",
	},
	{
		id: 21,
		name: "Nova",
		category: "Entertainment",
		price: 900,
		discountPercent: 20,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product5.jpg",
	},
	{
		id: 22,
		name: "Eden",
		category: "Outdoor",
		price: 1000,
		discountPercent: 10,
		featured: false,
		isNew: true,
		isWishlisted: true,
		thumbnail: "/images/product6.jpg",
	},
	{
		id: 23,
		name: "Plush",
		category: "Ottoman",
		price: 700,
		discountPercent: 15,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product7.jpg",
	},
	{
		id: 24,
		name: "Majestic",
		category: "Bed",
		price: 800,
		discountPercent: 22,
		featured: false,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product8.jpg",
	},
	{
		id: 25,
		name: "Vista",
		category: "Shelf",
		price: 600,
		discountPercent: 8,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product1.jpg",
	},
	{
		id: 26,
		name: "Zenith",
		category: "Desk",
		price: 900,
		discountPercent: 15,
		featured: false,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product2.jpg",
	},
	{
		id: 27,
		name: "Cozy",
		category: "Chair",
		price: 700,
		discountPercent: 10,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product3.jpg",
	},
	{
		id: 28,
		name: "Meadow",
		category: "Table",
		price: 700,
		discountPercent: 18,
		featured: false,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product4.jpg",
	},
	{
		id: 29,
		name: "Sway",
		category: "Stool",
		price: 600,
		discountPercent: 12,
		featured: false,
		isNew: false,
		isWishlisted: false,
		thumbnail: "/images/product5.jpg",
	},
	{
		id: 30,
		name: "Cabinet",
		category: "Storage",
		price: 700,
		discountPercent: 15,
		featured: false,
		isNew: true,
		isWishlisted: false,
		thumbnail: "/images/product6.jpg",
	},
];

// Add more products with unique id values as needed

export default productsList;
