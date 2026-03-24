


// SVG Size
var width = 700,
		height = 500;


// Load CSV file
const data = d3.csv("data/wealth-health.csv").then( data => {
	// Analyze the dataset in the web console
	console.log(data);
	console.log("Countries: " + data.length)
});

d3.csv(data).then(
	(data_) => {
		mapped_data = data_.map((d) => {
			return {
				country: d.country,
				lifeExpectancy: +d.lifeExpectancy,
				income: +d.income,
				population: +d.population,
				region: d.region
			}
		});
		console.log(mapped_data);


		const svg_countries = d3.select("chart-area").append("svg")
			.attr("width", width)
			.attr("height", height);




	}
);









