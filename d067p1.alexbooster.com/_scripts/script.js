
var showChart = function() {
    new CanvasXpress("vennCanvas", {
        "venn": {
            "data": {
                "A": 950,
                "B": 650,
                "C": 700,
                "AB": 375,
                "AC": 430,
                "BC": 250,
                "ABC": 25
            },
            "legend": {
                "A": "Product A",
                "B": "Product B",
                "C": "Product C"
            }
        }
    }, {
        "graphType": "Venn",
        "useFlashIE": false,
        "background": "rgb(255, 255, 255)",
        "vennColors": ["rgb(168, 88, 163)", "rgb(2, 99, 174)", "rgb(230, 120, 22)"],
        "vennLegendColors": true,
        "showTransition": true,
        "vennGroups": 3
    })
}