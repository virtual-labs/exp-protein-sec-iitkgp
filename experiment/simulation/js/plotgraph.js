/* Lab name: Experimental Biochemistry
Exp name: Protein purification by size exclusion chromatography (SEC)
File name: main.js
Developer: Prakriti Dhang */

function dataplot(){
    

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,  
	title:{
		text: "Testing Graph view"
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

}
