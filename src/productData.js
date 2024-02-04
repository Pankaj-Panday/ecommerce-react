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
		thumbnail:
			"https://images.pexels.com/photos/11112735/pexels-photo-11112735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
		colors: ["#FF5733", "#004080", "#8B4513"],
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
		discountPercent: 0,
		featured: true,
		isNew: false,
		isWishlisted: false,
		thumbnail:
			"https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 3.7,
		reviewCount: 7,
		stock: 12,
		relatedProducts: [11, 12, 28, 23],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/2369535/pexels-photo-2369535.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/5793641/pexels-photo-5793641.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112732/pexels-photo-11112732.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#7CFC00", "#8A2BE2"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/11112750/pexels-photo-11112750.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 3.3,
		reviewCount: 45,
		stock: 0,
		relatedProducts: [25, 11, 20, 28],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/11112750/pexels-photo-11112750.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112749/pexels-photo-11112749.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112745/pexels-photo-11112745.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112732/pexels-photo-11112732.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#FFD700", "#8B4513", "#4682B4"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/11112731/pexels-photo-11112731.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 4.2,
		reviewCount: 123,
		stock: 13,
		relatedProducts: [19, 24, 26, 15],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/11112731/pexels-photo-11112731.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112738/pexels-photo-11112738.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112739/pexels-photo-11112739.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112740/pexels-photo-11112740.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#2E8B57", "#8B008B", "#FF4500", "#00CED1"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/11112741/pexels-photo-11112741.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 0,
		reviewCount: 0,
		stock: 8,
		relatedProducts: [24, 12, 19, 20],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/11112741/pexels-photo-11112741.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112744/pexels-photo-11112744.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112746/pexels-photo-11112746.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112728/pexels-photo-11112728.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#FF6347", "#008080"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/11112733/pexels-photo-11112733.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 4.1,
		reviewCount: 12,
		stock: 4,
		relatedProducts: [20, 3, 2, 10],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/11112733/pexels-photo-11112733.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112736/pexels-photo-11112736.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112742/pexels-photo-11112742.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/11112742/pexels-photo-11112742.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#800080", "#FFFF00"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/11112742/pexels-photo-11112742.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 4.5,
		reviewCount: 18,
		stock: 6,
		relatedProducts: [29, 8, 25, 22],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/11112742/pexels-photo-11112742.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/13509190/pexels-photo-13509190.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/12269761/pexels-photo-12269761.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/4451667/pexels-photo-4451667.jpeg?auto=compress&cs=tinysrgb&w=6002",
				name: "Chair",
			},
		],
		colors: ["#4B0082", "#BDB76B", "#A52A2A"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/4075680/pexels-photo-4075680.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 3.7,
		reviewCount: 1,
		stock: 3,
		relatedProducts: [8, 11, 10, 28],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/4075680/pexels-photo-4075680.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/10493902/pexels-photo-10493902.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/10937129/pexels-photo-10937129.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/8837965/pexels-photo-8837965.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#1E90FF", "#FF1493", "#32CD32", "#8B0000"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/13718035/pexels-photo-13718035.png?auto=compress&cs=tinysrgb&w=600",
		rating: 3.2,
		reviewCount: 78,
		stock: 2,
		relatedProducts: [18, 25, 3, 17],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/13718035/pexels-photo-13718035.png?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/12269762/pexels-photo-12269762.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/12269764/pexels-photo-12269764.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/12497792/pexels-photo-12497792.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#6A5ACD", "#8B4513"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/10965604/pexels-photo-10965604.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 4.3,
		reviewCount: 89,
		stock: 7,
		relatedProducts: [26, 21, 30, 19],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/10965604/pexels-photo-10965604.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/4582820/pexels-photo-4582820.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/10587899/pexels-photo-10587899.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/18665475/pexels-photo-18665475/free-photo-of-classroom-containing-old-wooden-furniture.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#00FF7F", "#8B008B", "#8B0000"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/12269763/pexels-photo-12269763.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 5,
		reviewCount: 113,
		stock: 0,
		relatedProducts: [22, 1, 3, 27],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/12269763/pexels-photo-12269763.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/12543935/pexels-photo-12543935.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/12251080/pexels-photo-12251080.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/18115390/pexels-photo-18115390/free-photo-of-vintage-chair-on-a-terrace.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#7B68EE", "#FFD700", "#8B4513"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/709767/pexels-photo-709767.png?auto=compress&cs=tinysrgb&w=600",
		rating: 2.9,
		reviewCount: 173,
		stock: 10,
		relatedProducts: [5, 9, 6, 13],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/709767/pexels-photo-709767.png?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/3104526/pexels-photo-3104526.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/3104527/pexels-photo-3104527.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#9370DB", "#00FA9A", "#FF8C00", "#4169E1"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/20035935/pexels-photo-20035935/free-photo-of-bedside-design-ikea.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 5,
		reviewCount: 2,
		stock: 3,
		relatedProducts: [5, 27, 9, 30],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/20035935/pexels-photo-20035935/free-photo-of-bedside-design-ikea.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/5262675/pexels-photo-5262675.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/12190227/pexels-photo-12190227.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/19672569/pexels-photo-19672569/free-photo-of-nd-casa-cor-sp-2021.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#20B2AA", "#8A2BE2"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/16249600/pexels-photo-16249600/free-photo-of-xanadu-outdoor-spani-hot-rope-armchair-aluminum-frame-with-sunproof-cushion.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 2.9,
		reviewCount: 15,
		stock: 5,
		relatedProducts: [13, 21, 10, 17],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/16249600/pexels-photo-16249600/free-photo-of-xanadu-outdoor-spani-hot-rope-armchair-aluminum-frame-with-sunproof-cushion.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/15585620/pexels-photo-15585620/free-photo-of-empty-picture-frame-on-the-wall-mockup.png?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/17264276/pexels-photo-17264276/free-photo-of-living-room-picture-frame-mockup-a01_01-3d-rendering.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/17264327/pexels-photo-17264327/free-photo-of-living-room-interior-mockup-b_01-3d-rendering.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#8B0000", "#00CED1"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/17488642/pexels-photo-17488642/free-photo-of-silla-3d-lateral.png?auto=compress&cs=tinysrgb&w=600",
		rating: 3.7,
		reviewCount: 17,
		stock: 10,
		relatedProducts: [29, 11, 30, 10],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/17488642/pexels-photo-17488642/free-photo-of-silla-3d-lateral.png?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/17488644/pexels-photo-17488644/free-photo-of-silla-3d-frontal.png?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/17488645/pexels-photo-17488645/free-photo-of-silla-3d-perspectiva.png?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/16805285/pexels-photo-16805285/free-photo-of-a-turquoise-blanket-on-a-wooden-floor-next-to-a-plant.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#2F4F4F", "#FF4500", "#87CEEB"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/16249628/pexels-photo-16249628/free-photo-of-xanadu-outdoor-mordern-stylish-armchair-garden-teak-rope-chair.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 4.3,
		reviewCount: 1125,
		stock: 205,
		relatedProducts: [7, 18, 27, 1],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/16249628/pexels-photo-16249628/free-photo-of-xanadu-outdoor-mordern-stylish-armchair-garden-teak-rope-chair.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/17264275/pexels-photo-17264275/free-photo-of-living-room-picture-frame-mockup-a01_02-3d-rendering.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/14521681/pexels-photo-14521681.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/18620049/pexels-photo-18620049/free-photo-of-plants.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#48D1CC", "#FF00FF", "#8B4513"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 5,
		reviewCount: 12,
		stock: 0,
		relatedProducts: [30, 20, 4, 21],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/5806958/pexels-photo-5806958.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/5806958/pexels-photo-5806958.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#4682B4", "#B8860B", "#FF6347", "#32CD32"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/10559701/pexels-photo-10559701.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 1.3,
		reviewCount: 12,
		stock: 9,
		relatedProducts: [1, 26, 29, 28],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/10559701/pexels-photo-10559701.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1420902/pexels-photo-1420902.png?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/6636021/pexels-photo-6636021.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/6782466/pexels-photo-6782466.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#800000", "#6A5ACD"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/5716714/pexels-photo-5716714.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 5,
		reviewCount: 10,
		stock: 45,
		relatedProducts: [14, 25, 18, 7],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/5716714/pexels-photo-5716714.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/4846432/pexels-photo-4846432.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/7631731/pexels-photo-7631731.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/5824499/pexels-photo-5824499.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#D8BFD8", "#2F4F4F", "#8B008B"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/13554883/pexels-photo-13554883.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 2.6,
		reviewCount: 4,
		stock: 3,
		relatedProducts: [14, 12, 6, 26],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/13554883/pexels-photo-13554883.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/6633450/pexels-photo-6633450.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/7319279/pexels-photo-7319279.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/4846437/pexels-photo-4846437.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#8B4513", "#008080", "#FA8072"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 2.8,
		reviewCount: 0,
		stock: 0,
		relatedProducts: [30, 28, 16, 2],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/6297088/pexels-photo-6297088.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#00FFFF", "#8B4513"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/930390/pexels-photo-930390.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 4.8,
		reviewCount: 102,
		stock: 53,
		relatedProducts: [13, 29, 3, 5],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/930390/pexels-photo-930390.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/3190541/pexels-photo-3190541.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/2079294/pexels-photo-2079294.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#20B2AA", "#FF69B4", "#556B2F"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 0.5,
		reviewCount: 112,
		stock: 97,
		relatedProducts: [8, 25, 3, 14],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#8A2BE2", "#008000", "#CD853F", "#FF4500"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 1.3,
		reviewCount: 1150,
		stock: 25,
		relatedProducts: [9, 8, 12, 23],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#2E8B57", "#FF8C00", "#8B4513"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 0,
		reviewCount: 0,
		stock: 11,
		relatedProducts: [24, 23, 27, 4],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/105004/pexels-photo-105004.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#483D8B", "#FF4500", "#556B2F"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 3.9,
		reviewCount: 139,
		stock: 75,
		relatedProducts: [29, 11, 25, 7],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/260046/pexels-photo-260046.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#8B4513", "#000080"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/1125135/pexels-photo-1125135.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 3.1,
		reviewCount: 13,
		stock: 10,
		relatedProducts: [27, 19, 10, 5],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/1125135/pexels-photo-1125135.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1090092/pexels-photo-1090092.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#8B4513", "#FFD700", "#8A2BE2"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 2.3,
		reviewCount: 890,
		stock: 70,
		relatedProducts: [16, 20, 5, 27],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1362385/pexels-photo-1362385.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#8B008B", "#2F4F4F", "#32CD32"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 3.7,
		reviewCount: 0,
		stock: 8,
		relatedProducts: [30, 16, 22, 13],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1778353/pexels-photo-1778353.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1067556/pexels-photo-1067556.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#8B4513", "#48D1CC", "#8B0000"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
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
		thumbnail:
			"https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&cs=tinysrgb&w=600",
		rating: 4.1,
		reviewCount: 25,
		stock: 3,
		relatedProducts: [6, 13, 4, 25],
		sizes: ["S", "M", "L"],
		images: [
			{
				url: "https://images.pexels.com/photos/3965534/pexels-photo-3965534.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/96940/pexels-photo-96940.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
			{
				url: "https://images.pexels.com/photos/96940/pexels-photo-96940.jpeg?auto=compress&cs=tinysrgb&w=600",
				name: "Chair",
			},
		],
		colors: ["#32CD32", "#8B0000"],
		shortDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
		tags: ["sofa", "chair", "home", "shop"],
		longDescription:
			"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
	},
];

// Add more products with unique id values as needed

export default productsList;
