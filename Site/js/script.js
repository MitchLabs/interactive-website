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



//MAP

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("mapchart", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldHigh;

// Set projection
chart.projection = new am4maps.projections.Mercator();

// Export
chart.exporting.menu = new am4core.ExportMenu();

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

var homeButton = new am4core.Button();
homeButton.events.on("hit", function(){
  chart.goHome();
});

homeButton.icon = new am4core.Sprite();
homeButton.padding(7, 5, 7, 5);
homeButton.width = 20;
homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
homeButton.marginBottom = 10;
homeButton.parent = chart.zoomControl;
homeButton.insertBefore(chart.zoomControl.plusButton);

// Center on the groups by default
chart.homeZoomLevel = 2.5;
chart.homeGeoPoint = { longitude: -12, latitude: 30 };

var groupData = [
  {
    "name": "Teilnehmer an der Studie",
    "color": chart.colors.getIndex(0),
    "data": [
      {
        "title": "Österreich",
        "id": "AT", // With MapPolygonSeries.useGeodata = true, it will try and match this id, then apply the other properties as custom data
        "customData": "268"
      }, {
        "title": "Irland",
        "id": "IE",
        "customData": "169"
      }, {
        "title": "Dänemark",
        "id": "DK",
        "customData": "405"
      }, {
        "title": "Finnland",
        "id": "FI",
        "customData": "298"
      }, {
        "title": "Schweden",
        "id": "SE",
        "customData": "112"
      }, {
        "title": "Vereinigtes Königreich",
        "id": "GB",
        "customData": "169"
      }, {
        "title": "Italien",
        "id": "IT",
        "customData": "285"
      }, {
        "title": "Frankreich",
        "id": "FR",
        "customData": "238"
      }, {
        "title": "Spanien",
        "id": "ES",
        "customData": "297 + 132"
      }, {
        "title": "Griechenland",
        "id": "GR",
        "customData": "829"
      }, {
        "title": "Deutschland",
        "id": "DE",
        "customData": "479"
      }, {
        "title": "Belgien",
        "id": "BE",
        "customData": "286"
      }, {
        "title": "Tschechien",
        "id": "CZ",
        "customData": "146",
      }, {
        "title": "Niederlande",
        "id": "NL",
        "customData": "130"
        }, {
        "title": "Slovenien",
        "id": "SI",
        "customData": "619",
          }, {
        "title": "Estland",
        "id": "EE",
        "customData": "467",
            }, {
        "title": "Serbien",
        "id": "RS",
        "customData": "293"
              }, {
        "title": "Polen",
        "id": "PL",
        "customData": "649"
        }, {
        "title": "Romänien",
        "id": "RO",
        "customData": "878"
           }, {
        "title": "Georgien",
        "id": "GE",
        "customData": "507"
         }, {
           "title": "Brasilien",
           "id": "BR",
           "customData": "507"
            }, {
        "title": "Norwegen",
        "id": "NO",
        "customData": "420"
         }, {
        "title": "Mazedonien",
        "id": "MK",
        "customData": "181"
         }, {
        "title": "Israel",
        "id": "IL",
        "customData": "507"

        }, {
        "title": "Kroatien",
        "id": "HR",
        "customData": "516"
        }, {
        "title": "Portugal",
        "id": "PT",
        "customData": "349"
      }
    ]
  }

];

// This array will be populated with country IDs to exclude from the world series
var excludedCountries = ["AQ"];

// Create a series for each group, and populate the above array
groupData.forEach(function(group) {
  var series = chart.series.push(new am4maps.MapPolygonSeries());
  series.name = group.name;
  series.useGeodata = true;
  var includedCountries = [];
  group.data.forEach(function(country){
    includedCountries.push(country.id);
    excludedCountries.push(country.id);
  });
  series.include = includedCountries;

  series.fill = am4core.color(group.color);

  // By creating a hover state and setting setStateOnChildren to true, when we
  // hover over the series itself, it will trigger the hover SpriteState of all
  // its countries (provided those countries have a hover SpriteState, too!).
  series.setStateOnChildren = true;
  var seriesHoverState = series.states.create("hover");

  // Country shape properties & behaviors
  var mapPolygonTemplate = series.mapPolygons.template;
  // Instead of our custom title, we could also use {name} which comes from geodata
  mapPolygonTemplate.fill = am4core.color(group.color);
  mapPolygonTemplate.fillOpacity = 0.8;

  // States
  var hoverState = mapPolygonTemplate.states.create("hover");
  hoverState.properties.fill = am4core.color("#CC0000");

  // Tooltip
  mapPolygonTemplate.tooltipText = "{title}  {customData}"; // enables tooltip
  // series.tooltip.getFillFromObject = false; // prevents default colorization, which would make all tooltips red on hover
  // series.tooltip.background.fill = am4core.color(group.color);

  // MapPolygonSeries will mutate the data assigned to it,
  // we make and provide a copy of the original data array to leave it untouched.
  // (This method of copying works only for simple objects, e.g. it will not work
  //  as predictably for deep copying custom Classes.)
  series.data = JSON.parse(JSON.stringify(group.data));
});

// The rest of the world.
var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
var worldSeriesName = "world";
worldSeries.name = worldSeriesName;
worldSeries.useGeodata = true;
worldSeries.exclude = excludedCountries;
worldSeries.fillOpacity = 0.8;
worldSeries.hiddenInLegend = true;

// This auto-generates a legend according to each series' name and fill
chart.legend = new am4maps.Legend();

// Legend styles
chart.legend.paddingLeft = 27;
chart.legend.paddingRight = 27;
chart.legend.marginBottom = 15;
chart.legend.width = am4core.percent(90);
chart.legend.valign = "bottom";
chart.legend.contentAlign = "left";

// Legend items
chart.legend.itemContainers.template.interactionsEnabled = false;


//* * * * *


//CHART 1

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart1", am4charts.XYChart);

// Add percent sign to all numbers
chart.numberFormatter.numberFormat = "#.3'%'";

// Add data
chart.data = [{
    "country": "USA",
    "year2004": 3.5,
    "year2005": 4.2
}, {
    "country": "UK",
    "year2004": 1.7,
    "year2005": 3.1
}, {
    "country": "Canada",
    "year2004": 2.8,
    "year2005": 2.9
}, {
    "country": "Japan",
    "year2004": 2.6,
    "year2005": 2.3
}, {
    "country": "France",
    "year2004": 1.4,
    "year2005": 2.1
}, {
    "country": "Brazil",
    "year2004": 2.6,
    "year2005": 4.9
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "GDP growth rate";
valueAxis.title.fontWeight = 800;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "year2004";
series.dataFields.categoryX = "country";
series.clustered = false;
series.tooltipText = "GDP grow in {categoryX} (2004): [bold]{valueY}[/]";

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "year2005";
series2.dataFields.categoryX = "country";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "GDP grow in {categoryX} (2005): [bold]{valueY}[/]";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;


//* * * * *


// Chart 2

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

 // Create chart instance
var chart = am4core.create("chart2", am4charts.XYChart);

// Add data
chart.data = [{
  "year": 2005,
  "income": 23.5,
  "expenses": 18.1
},{
  "year": 2006,
  "income": 26.2,
  "expenses": 22.8
},{
  "year": 2007,
  "income": 30.1,
  "expenses": 23.9
},{
  "year": 2008,
  "income": 29.5,
  "expenses": 25.1
},{
  "year": 2009,
  "income": 24.6,
  "expenses": 25
}];

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
valueAxis.renderer.opposite = true;

// Create series
function createSeries(field, name) {
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueX = field;
  series.dataFields.categoryY = "year";
  series.name = name;
  series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
  series.columns.template.height = am4core.percent(100);
  series.sequencedInterpolation = true;

  var valueLabel = series.bullets.push(new am4charts.LabelBullet());
  valueLabel.label.text = "{valueX}";
  valueLabel.label.horizontalCenter = "left";
  valueLabel.label.dx = 10;
  valueLabel.label.hideOversized = false;
  valueLabel.label.truncate = false;

  var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
  categoryLabel.label.text = "{name}";
  categoryLabel.label.horizontalCenter = "right";
  categoryLabel.label.dx = -10;
  categoryLabel.label.fill = am4core.color("#fff");
  categoryLabel.label.hideOversized = false;
  categoryLabel.label.truncate = false;
}

createSeries("income", "Income");
createSeries("expenses", "Expenses");


//* * * * *


//chart3

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart3", am4charts.PieChart);

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);

// Add data
chart.data = [{
  "country": "Lithuania",
  "litres": 501.9,
  "bottles": 1500
}, {
  "country": "Czech Republic",
  "litres": 301.9,
  "bottles": 990
}, {
  "country": "Ireland",
  "litres": 201.1,
  "bottles": 785
}, {
  "country": "Germany",
  "litres": 165.8,
  "bottles": 255
}, {
  "country": "Australia",
  "litres": 139.9,
  "bottles": 452
}, {
  "country": "Austria",
  "litres": 128.3,
  "bottles": 332
}, {
  "country": "UK",
  "litres": 99,
  "bottles": 150
}, {
  "country": "Belgium",
  "litres": 60,
  "bottles": 178
}, {
  "country": "The Netherlands",
  "litres": 50,
  "bottles": 50
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// Disabling labels and ticks on inner circle
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Disable sliding out of slices
pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;

// Add second series
var pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "bottles";
pieSeries2.dataFields.category = "country";
pieSeries2.slices.template.stroke = am4core.color("#fff");
pieSeries2.slices.template.strokeWidth = 2;
pieSeries2.slices.template.strokeOpacity = 1;
pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;


//* * * * *


//CHART 4

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chart4", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
  {
    category: "One",
    value1: 1,
    value2: 5,
    value3: 3
  },
  {
    category: "Two",
    value1: 2,
    value2: 5,
    value3: 3
  },
  {
    category: "Three",
    value1: 3,
    value2: 5,
    value3: 4
  },
  {
    category: "Four",
    value1: 4,
    value2: 5,
    value3: 6
  },
  {
    category: "Five",
    value1: 3,
    value2: 5,
    value3: 4
  },
  {
    category: "Six",
    value1: 2,
    value2: 13,
    value3: 1
  }
];

chart.colors.step = 2;
chart.padding(30, 30, 10, 30);
chart.legend = new am4charts.Legend();

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;
valueAxis.calculateTotals = true;
valueAxis.renderer.minWidth = 50;


var series1 = chart.series.push(new am4charts.ColumnSeries());
series1.columns.template.width = am4core.percent(80);
series1.columns.template.tooltipText =
  "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
series1.name = "Series 1";
series1.dataFields.categoryX = "category";
series1.dataFields.valueY = "value1";
series1.dataFields.valueYShow = "totalPercent";
series1.dataItems.template.locations.categoryX = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
bullet1.label.fill = am4core.color("#ffffff");
bullet1.locationY = 0.5;

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.columns.template.width = am4core.percent(80);
series2.columns.template.tooltipText =
  "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
series2.name = "Series 2";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "value2";
series2.dataFields.valueYShow = "totalPercent";
series2.dataItems.template.locations.categoryX = 0.5;
series2.stacked = true;
series2.tooltip.pointerOrientation = "vertical";

var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
bullet2.locationY = 0.5;
bullet2.label.fill = am4core.color("#ffffff");

var series3 = chart.series.push(new am4charts.ColumnSeries());
series3.columns.template.width = am4core.percent(80);
series3.columns.template.tooltipText =
  "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
series3.name = "Series 3";
series3.dataFields.categoryX = "category";
series3.dataFields.valueY = "value3";
series3.dataFields.valueYShow = "totalPercent";
series3.dataItems.template.locations.categoryX = 0.5;
series3.stacked = true;
series3.tooltip.pointerOrientation = "vertical";

var bullet3 = series3.bullets.push(new am4charts.LabelBullet());
bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
bullet3.locationY = 0.5;
bullet3.label.fill = am4core.color("#ffffff");

chart.scrollbarX = new am4core.Scrollbar();


//* * * * *


//CHART 4

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart5", am4charts.RadarChart);

// Add data
chart.data = [{
  "category": "Research",
  "value": 80,
  "full": 100
}, {
  "category": "Marketing",
  "value": 35,
  "full": 100
}, {
  "category": "Distribution",
  "value": 92,
  "full": 100
}, {
  "category": "Human Resources",
  "value": 68,
  "full": 100
}];

// Make chart not full circle
chart.startAngle = -90;
chart.endAngle = 180;
chart.innerRadius = am4core.percent(20);

// Set number format
chart.numberFormatter.numberFormat = "#.#'%'";

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.strokeOpacity = 0;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.fontWeight = 500;
categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
  return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
});
categoryAxis.renderer.minGridDistance = 10;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.strictMinMax = true;

// Create series
var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.dataFields.valueX = "full";
series1.dataFields.categoryY = "category";
series1.clustered = false;
series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
series1.columns.template.fillOpacity = 0.08;
series1.columns.template.cornerRadiusTopLeft = 20;
series1.columns.template.strokeWidth = 0;
series1.columns.template.radarColumn.cornerRadius = 20;

var series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.dataFields.valueX = "value";
series2.dataFields.categoryY = "category";
series2.clustered = false;
series2.columns.template.strokeWidth = 0;
series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
series2.columns.template.radarColumn.cornerRadius = 20;

series2.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

// Add cursor
chart.cursor = new am4charts.RadarCursor();