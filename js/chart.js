//doc for chart
'use strict'


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Facebook", "Instagram", "Youtube", "Square-space"],
        datasets: [{
            label: 'Overall statistics',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(43, 41, 39, 0.6)',
                'rgba(145, 65, 26, 0.6)',
                'rgba(43, 41, 39, 0.6)',
                 'rgba(145, 65, 26, 0.6)',
                'rgba(43, 41, 39, 0.6)',
                'rgba(145, 65, 26, 0.6)'
            ],
            borderColor: [
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});