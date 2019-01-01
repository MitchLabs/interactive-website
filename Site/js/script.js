$(document).ready(function() {
    //activate wow.js
     new WOW().init();
    //activate fullpage.js
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      //navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
      //loopBottom: true,
      sectionSelector: 'section'
    });
});

//chart 1
var colors = ['#f9d767', '#f9d767', '#f9d767', '#f9d767', '#f9d767', '#f9d767', '#f9d767', '#f9d767'];
     var options = {
         chart: {
             height: 350,
             type: 'bar',
             events: {
                 click: function(chart, w, e) {
                     console.log(chart, w, e )
                 }
             },
         },
         colors: colors,
         plotOptions: {
             bar: {
                 columnWidth: '45%',
                 distributed: true
             }
         },
         dataLabels: {
             enabled: false,
         },
         series: [{
             data: [21, 22, 10, 28, 16, 21, 13, 30]
         }],
         xaxis: {
             categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
             labels: {
                 style: {
                     colors: colors,
                     fontSize: '14px'
                 }
             }
         }
     }

var chart = new ApexCharts(
    document.querySelector("#chart1"),
 options
);
chart.render();

// Chart 2

 var options = {
     chart: {
         height: 350,
         type: 'bar',
         stacked: true,
         toolbar: {
             show: true
         },
         zoom: {
             enabled: true
         }
     },
     responsive: [{
         breakpoint: 480,
         options: {
             legend: {
                 position: 'bottom',
                 offsetX: -10,
                 offsetY: 0
             }
         }
     }],
     plotOptions: {
         bar: {
             horizontal: false,
         },
     },
     series: [{
         name: 'PRODUCT A',
         data: [44, 55, 41, 67, 22, 43]
     },{
         name: 'PRODUCT B',
         data: [13, 23, 20, 8, 13, 27]
     }],
     xaxis: {
         type: 'datetime',
         categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
     },
     legend: {
         position: 'right',
     },
     fill: {
         opacity: 1
     },
 }

var chart = new ApexCharts(
     document.querySelector("#chart3"),
     options
 );

 chart.render();

//chart3
var options = {
       chart: {
           type: 'donut',
       },
       series: [44, 55, 41, 17, 15],
       responsive: [{
           breakpoint: 480,
           options: {
               chart: {
                   width: 200
               },
               legend: {
                   position: 'bottom'
               }
           }
       }]
   }

  var chart = new ApexCharts(
       document.querySelector("#chart2"),
       options
   );

   chart.render();
