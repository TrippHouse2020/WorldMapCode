function drawChart() {
    google.charts.load('current', {
        'packages': ['geochart'],
    });

    google.charts.setOnLoadCallback(function () {
        drawRegionsMap();
    });

    function drawRegionsMap() {
        let data = google.visualization.arrayToDataTable([
            ['Country', 'Population'],
            ['China', 1439323776],
            ['India', 1380004385],
            ['United States', 331002651],
            ['Indonesia', 273523615],
            ['Pakistan', 220892340],
            ['Brazil', 212559417],
            ['Nigeria', 206139589],
            ['Bangladesh', 164689383],
            ['Russia', 145934462],
            ['Mexico', 128932753],
            ['Japan', 126476461],
            ['Ethiopia', 114963588],
            // Add more countries here with their population values
            // Source of population data: 
            // https://www.worldometers.info/world-population/population-by-country/

        ]);

        let options = {
            colorAxis: {
                colors: ['blue', 'red'],
                minValue: 0,
                maxValue: 1439323776 // China's population 
            }
        };

        let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
    }

    // Redraw the chart when the window is resized
    window.addEventListener('resize', drawChart);
}
