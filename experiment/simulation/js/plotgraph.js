/* Lab name: Experimental Biochemistry
Exp name: Protein purification by size exclusion chromatography (SEC)
File name: main.js
Developer: Prakriti Dhang */




document.getElementById('step4').addEventListener('click', function () {
	// Specify the URL of your Excel file
	const excelUrl = './plotdata/proteindata.xlsx';

	const xhr = new XMLHttpRequest();
	xhr.open('GET', excelUrl, true);
	xhr.responseType = 'arraybuffer';

	xhr.onload = function () {
		if (xhr.status === 200) {
			const data = new Uint8Array(xhr.response);
			const workbook = XLSX.read(data, { type: 'array' });

			// Assuming the data is in the first sheet
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];

			// Convert worksheet to JSON
			const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

			// Prepare data for plotting
			const dataPoints = jsonData.map(row => ({ x: parseFloat(row[0]), y: parseFloat(row[1]) }));

			// Plot the data using CanvasJS with spline
			plotData(dataPoints);
		} else {
			console.error('Error fetching the file:', xhr.statusText);
		}
	};

	xhr.onerror = function () {
		console.error('Network error while fetching the file.');
	};

	xhr.send();
});

// Function to plot data using CanvasJS with spline
function plotData(dataPoints) {
	const chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,  
		title: {
			text: "Absorbance Vs Volume"
		},
		axisY: {
			title: "Absorbance (mAU)",
			minimum: -1,
			maximum: 15
			
		},
		axisX: {
			title: "Volume in mL",
			minimum: 0,
			maximum: 120
			
		},
		data: [{
			type: "spline",
			dataPoints: dataPoints
		}]
	});

	chart.render();
}


























/*function dataplot(){
    

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,  
	title:{
		text: "Protein Graph view"
	},
	axisY: {
		title: "A (mAU)",
      
		valueFormatString: "#0,,.",
		//suffix: "mn",
		//stripLines: [{
		//	value: 3366500,
		//	label: "Average"
		//}]
	},
    axisX: {
		title: "Volume (ml)",
        //valueFormatString: "#0,,.",
    },
	data: [{
		yValueFormatString: "",
		xValueFormatString: "",
		type: "spline",
		dataPoints: [
            {x: 2, y: 2506000},
			{x: 3, y: 2506000},
			{x: 4, y: 2506000},
			{x:5, y: 2506000},
			{x: 6, y: 2506000},
			{x: 7, y: 2506000},
			{x: 8, y: 1872000},
			{x: 9, y: 2140000},
			{x: 10, y: 7289000},
			{x: 11, y: 4830000},
			{x: 12, y: 2009000},
			{x: 13, y: 2840000},
			{x: 14, y: 2396000},
			{x: 15, y: 1613000},
			{x: 16, y: 2821000},
			{x:17, y: 2000000}	
		]
	}]
});
chart.render();

}*/
