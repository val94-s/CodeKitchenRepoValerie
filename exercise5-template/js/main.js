
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

		const incomeScale = d3.scaleLinear()
			.domain([0, d3.max(mapped_data, d => d.income[0])])
			.range([0, width]);

		const lifeExcpectancyScale = d3.scaleLinear()
			.domain([0, d3.max(mapped_data, d => d.lifeExpectancy[1])])
			.range([0, height]);


		const svg_countries = d3.select("chart-area").append("svg")
			.attr("width", width)
			.attr("height", height);


		svg_countries.selectAll("circle")
			.data(mapped_data)
			.enter()
			.append("circle")
			.attr("cx", d => incomeScale(d[0]))
			.attr("cy", d => lifeExcpectancyScale(d[1]))
			.attr("r", d => d.population <= 10000 ? 4 : 8)
			.attr("fill", d => d.population <= 10000 ? "#d88e04" : "#0000ff")
			.attr("stroke", "black")
			.attr("stroke-width" , 1);





	}
);









