	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli $1.99",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		notorganic: false,
		price: 1.99
	},
	{
		name: "eggs $1.99",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		notorganic: false,
		price: 1.99
	},
	{
		name: "bread $2.35",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		notorganic: false,
		price: 2.35
	},
	{
		name: "noodles $2.35",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		notorganic: false,
		price: 2.35
	},
	{
		name: "cookies $2.99",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		notorganic: true,
		price: 2.99
	},
	{
		name: "potato chips $2.99",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		notorganic: true,
		price: 2.99
	},
	{
		name: "donuts $3.35",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		notorganic: true,
		price: 3.35
	},
	{
		name: "milk $3.99",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		notorganic: false,
		price: 3.99
	},
	{
		name: "chicken $8.00",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		notorganic: false,
		price: 8.00
	},
	{
		name: "beef $9.00",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		notorganic: false,
		price: 9.00
	},
	{
		name: "salmon $10.00",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		notorganic: false,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "notOrganic") && (prods[i].notorganic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree&Vegetarian") && (prods[i].glutenFree == true)&& (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}

	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
