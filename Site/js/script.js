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

//COLOR THEME

function am4themes_wd3(target) {
        target.list = [
            am4core.color("#E8CF88"),
            am4core.color("#686BA2"),
          am4core.color("#f9d767"),
            am4core.color("#434685"),
          am4core.color("#967928"),
          am4core.color("#272A68")
        ];
        if (target instanceof am4core.InterfaceColorSet) {
            target.setFor("text", am4core.color("#E9E9E9"));
            target.setFor("grid", am4core.color("#B6B7BA"));
            target.setFor("secondaryButton", am4core.color("#51565E"));
            target.setFor("secondaryButtonHover", am4core.color("#f9d767").lighten(-0.2));
            target.setFor("secondaryButtonDown", am4core.color("#35393F").lighten(-0.2));
            target.setFor("secondaryButtonActive", am4core.color("#f9d767").lighten(-0.2));
            target.setFor("secondaryButtonText", am4core.color("#E9E9E9"));
            target.setFor("secondaryButtonStroke", am4core.color("#6C7178"));
        }
}

function am4themes_map(target) {
        target.list = [
            am4core.color("#E9E9E9")
        ];
        if (target instanceof am4core.InterfaceColorSet) {
            target.setFor("text", am4core.color("#35393F"));
            target.setFor("grid", am4core.color("#B6B7BA"));
            target.setFor("secondaryButton", am4core.color("#51565E"));
            target.setFor("secondaryButtonHover", am4core.color("#f9d767").lighten(-0.2));
            target.setFor("secondaryButtonDown", am4core.color("#35393F").lighten(-0.2));
            target.setFor("secondaryButtonActive", am4core.color("#f9d767").lighten(-0.2));
            target.setFor("secondaryButtonText", am4core.color("#E9E9E9"));
            target.setFor("secondaryButtonStroke", am4core.color("#6C7178"));
        }
}

function am4themes_wd3gelb(target) {
        target.list = [
            am4core.color("#E8CF88"),
            am4core.color("#f9d767"),
            am4core.color("#E8CF88"),
            am4core.color("#f9d767"),
            am4core.color("#E8CF88"),
            am4core.color("#f9d767"),
            am4core.color("#E8CF88"),
            am4core.color("#f9d767"),
            am4core.color("#E8CF88"),
            am4core.color("#f9d767")
        ];
        if (target instanceof am4core.InterfaceColorSet) {
            target.setFor("text", am4core.color("#E9E9E9"));
            target.setFor("grid", am4core.color("#B6B7BA"));
            target.setFor("secondaryButton", am4core.color("#51565E"));
            target.setFor("secondaryButtonHover", am4core.color("#f9d767").lighten(-0.2));
            target.setFor("secondaryButtonDown", am4core.color("#35393F").lighten(-0.2));
            target.setFor("secondaryButtonActive", am4core.color("#f9d767").lighten(-0.2));
            target.setFor("secondaryButtonText", am4core.color("#E9E9E9"));
            target.setFor("secondaryButtonStroke", am4core.color("#6C7178"));
        }
}

//MAP

// Themes begin
am4core.useTheme(am4themes_map);
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
    "name": "Anzahl der Teilnehmer an der Studie",
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
  hoverState.properties.fill = am4core.color("#f9d767");

  // Tooltip
  mapPolygonTemplate.tooltipText = "{customData} Teilnehmer aus {title}"; // enables tooltip
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


//CHART 1-1

// Themes begin
am4core.useTheme(am4themes_wd3);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart1-1", am4charts.XYChart);

// Add percent sign to all numbers
chart.numberFormatter.numberFormat = "#.'%'";

// Add data
chart.data = [{
    "Format": "Computer",
    "deutschland": 58.3,
    "europa": 55.9

}, {
    "Format": "Smartphone",
    "deutschland": 13.2,
    "europa": 12
}, {
    "Format": "Tablet",
    "deutschland": 2.6,
    "europa": 2.5
},{
    "Format": "Buch",
    "deutschland": 25.9,
    "europa": 29.6
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Format";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Präferiertes Format";
valueAxis.title.fontWeight = 800;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "deutschland";
series.dataFields.categoryX = "Format";
series.clustered = false;
series.tooltipText = "[bold]{valueY}[/] aller Teilnehmer in Deutschland präferieren {categoryX}";

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "europa";
series2.dataFields.categoryX = "Format";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "[bold]{valueY}[/] aller Teilnehmer präferieren {categoryX}";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;



//* * * * *


//CHART 1-2

// Themes begin
am4core.useTheme(am4themes_wd3);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart1-2", am4charts.XYChart);

// Add percent sign to all numbers
chart.numberFormatter.numberFormat = "#.'%'";

// Add data
chart.data = [{
    "Format": "Computer",
    "deutschland": 40.8,
    "europa": 42.5
}, {
    "Format": "Smartphone",
    "deutschland": 22.6,
    "europa": 19.6
}, {
    "Format": "Tablet",
    "deutschland": 7.7,
    "europa": 7.3
},{
    "Format": "Buch",
    "deutschland": 29,
    "europa": 30.6
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Format";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Tatsächlich genutztes Format";
valueAxis.title.fontWeight = 800;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "deutschland";
series.dataFields.categoryX = "Format";
series.clustered = false;
series.tooltipText = "[bold]{valueY}[/] aller Teilnehmer in Deutschland nutzen {categoryX}";

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "europa";
series2.dataFields.categoryX = "Format";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "[bold]{valueY}[/] aller Teilnehmer nutzen {categoryX}";

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;


//* * * * *


// Chart 2

// Themes begin
am4core.useTheme(am4themes_wd3);
am4core.useTheme(am4themes_animated);
// Themes end

 // Create chart instance
var chart = am4core.create("chart2", am4charts.XYChart);

// Add data
chart.data = [{
  "year": "Gestern oder heute",
  "deutschland": 35.3,
  "europa": 32.9
},{
  "year": "Innerhalb der letzten Woche",
  "deutschland": 28.2,
  "europa": 24.4
},{
  "year": "Innerhalb des letzten Monats",
  "deutschland": 18.2,
  "europa": 18.4
},{
  "year": "Innerhalb des letzten Jahres",
  "deutschland": 9.4,
  "europa": 11
},{
    "year": "Vor mindestens über einem Jahr" ,
  "deutschland": 4.2,
  "europa": 7.7
},{
  "year": "Noch nie",
  "deutschland": 4.8,
  "europa": 5.6
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

createSeries("deutschland", "Deutschland");
createSeries("europa", "Europa");


//* * * * *


//chart3

// Themes begin
am4core.useTheme(am4themes_wd3);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart3", am4charts.PieChart);

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);

// Add data
chart.data = [{
  "antwort": "Ja, sie sind kulturelles Erbe",
  "deutschland": 219,
  "europa": 4618
}, {
  "antwort": "Ja, sie helfen der Öffentlichkeit",
  "deutschland": 197,
  "europa": 3209
}, {
  "antwort": "Ja, aber es gibt z. Z. wichtigere Dinge",
  "deutschland": 33,
  "europa": 612
}, {
  "antwort": "Ja, aus einem anderen Grund",
  "deutschland": 10,
  "europa": 320
}, {
  "antwort": "Nein, private Hersteller bieten gute Wörterbücher an",
  "deutschland": 8,
  "europa": 300
}, {
  "antwort": "Nein, es gibt wichtigere Dinge, die finanziert werden sollten",
  "deutschland": 9,
  "europa": 177
}, {
  "antwort": "Nein, aus einem anderen Grund",
  "deutschland": 3,
  "europa": 131
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "deutschland";
pieSeries.dataFields.category = "antwort";
pieSeries.slices.template.stroke = am4core.color("#6C7178");
pieSeries.slices.template.strokeWidth = 1;
pieSeries.slices.template.strokeOpacity = 1;

// Disabling labels and ticks on inner circle
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Disable sliding out of slices
pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;

// Add second series
var pieSeries2 = chart.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "europa";
pieSeries2.dataFields.category = "antwort";
pieSeries2.slices.template.stroke = am4core.color("#6C7178");
pieSeries2.slices.template.strokeWidth = 1;
pieSeries2.slices.template.strokeOpacity = 1;
pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;


//* * * * *


//CHART 4

// Themes begin
am4core.useTheme(am4themes_wd3);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chart4", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
  {
    country: "Österreich",
    yes: 130,
    no: 138
  },
  {
    country: "Baskenland",
    yes: 84,
    no: 48
  },
  {
    country: "Belgien",
    yes: 90,
    no: 196
  },
  {
    country: "Brasilien",
    yes: 122,
    no: 152
  },
  {
    country: "Kroatien",
    yes: 214,
    no: 302
  },
  {
    country: "Tschechische Republik",
    yes: 84,
    no: 62
  },
    {
    country: "Dänemark",
    yes: 172,
    no: 233
  },
  {
    country: "Estland",
    yes: 96,
    no: 371
  },
  {
    country: "Finnland",
    yes: 120,
    no: 177
  },
  {
    country: "Frankreich",
    yes: 60,
    no: 178
  },
  {
    country: "Georgien",
    yes: 451,
    no: 56
  },
  {
    country: "Deutschland",
    yes: 256,
    no: 221
  },
    {
    country: "Griechenland",
    yes: 271,
    no: 558
  },
  {
    country: "Israel",
    yes: 69,
    no: 76
  },
  {
    country: "Italien",
    yes: 113,
    no: 172
  },
  {
    country: "Mazedonien",
    yes: 113,
    no: 67
  },
  {
    country: "Niederlande",
    yes: 53,
    no: 77
  },
  {
    country: "Norwegen",
    yes: 142,
    no: 277
  },
    {
    country: "Polen",
    yes: 314,
    no: 334
  },
  {
    country: "Portugal",
    yes: 134,
    no: 215
  },
  {
    country: "Rumänien",
    yes: 327,
    no: 551
  },
  {
    country: "Serbien",
    yes: 118,
    no: 175
  },
  {
    country: "Slowenien",
    yes: 203,
    no: 416
  },
  {
    country: "Spanien",
    yes: 131,
    no: 166
  },
    {
    country: "Schweden",
    yes: 34,
    no: 78
  },
  {
    country: "Großbritannien & Irland",
    yes: 87,
    no: 82
  }
];


chart.colors.step = 1;
chart.padding(30, 30, 10, 30);
chart.legend = new am4charts.Legend();

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
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
  "{name}: {valueY.totalPercent.formatNumber('#.0')}%";
series1.name = "Ja";
series1.dataFields.categoryX = "country";
series1.dataFields.valueY = "yes";
series1.dataFields.valueYShow = "totalPercent";
series1.dataItems.template.locations.categoryX = 0.5;
series1.stacked = true;
series1.tooltip.pointerOrientation = "vertical";

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.label.text = "{valueY.totalPercent.formatNumber('#.')}%";
bullet1.label.fill = am4core.color("#ffffff");
bullet1.locationY = 0.5;

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.columns.template.width = am4core.percent(80);
series2.columns.template.tooltipText =
  "{name}: {valueY.totalPercent.formatNumber('#.0')}%";
series2.name = "Nein";
series2.dataFields.categoryX = "country";
series2.dataFields.valueY = "no";
series2.dataFields.valueYShow = "totalPercent";
series2.dataItems.template.locations.categoryX = 0.5;
series2.stacked = true;
series2.tooltip.pointerOrientation = "vertical";

var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
bullet2.label.text = "{valueY.totalPercent.formatNumber('#.')}%";
bullet2.locationY = 0.5;
bullet2.label.fill = am4core.color("#ffffff");

chart.scrollbarX = new am4core.Scrollbar();


//* * * * *


//CHART 5-1

// Themes begin
am4core.useTheme(am4themes_wd3gelb);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart5-1", am4charts.RadarChart);

// Add data
chart.data = [{
/*  "category": "Keine der genannten Möglichkeiten",
  "value": 0.3,
  "full": 25
}, {
"category": "Weiß ich nicht",
  "value": 1.2,
  "full": 25
}, {*/
"category": "Interessiert hauptsächlich AkademikerInnen",
  "value": 5.3,
  "full": 25
}, {
    "category": "Nationales Symbol",
  "value": 5.8,
  "full": 25
}, {
  "category": "Nützlich für Kinder",
  "value": 8,
  "full": 25
}, {
  "category": "Nachschlagewerk für spezielle Interessen",
  "value": 9,
  "full": 25
}, {
    "category": "Nützlich für AusländerInnen",
  "value": 11.4,
  "full": 25
}, {
  "category": "Autorität",
  "value": 13.5,
  "full": 25
}, {
  "category": "Quelle für umfassende Sprachkenntnisse",
  "value": 22.4,
  "full": 25
}, {
"category": "Nützlich für die Allgemeinheit",
  "value": 23.1,
  "full": 25
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
valueAxis.max = 25;
valueAxis.strictMinMax = true;

// Create series
var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.dataFields.valueX = "full";
series1.dataFields.categoryY = "category";
series1.clustered = false;
//series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
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



//CHART 5-2

// Themes begin
am4core.useTheme(am4themes_wd3gelb);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chart5-2", am4charts.RadarChart);

// Add data
chart.data = [{
/*  "category": "Keine der genannten Möglichkeiten",
  "value": 0.3,
  "full": 25
}, {
"category": "Weiß ich nicht",
  "value": 1.2,
  "full": 25
}, {*/
"category": "Interessiert hauptsächlich AkademikerInnen",
  "value": 8.3,
  "full": 25
}, {
    "category": "Nationales Symbol",
  "value": 4.8,
  "full": 25
}, {
  "category": "Nützlich für Kinder",
  "value": 10.6,
  "full": 25
}, {
  "category": "Nachschlagewerk für spezielle Interessen",
  "value": 13.3,
  "full": 25
}, {
    "category": "Nützlich für AusländerInnen",
  "value": 9.5,
  "full": 25
}, {
  "category": "Autorität",
  "value": 11.9,
  "full": 25
}, {
  "category": "Quelle für umfassende Sprachkenntnisse",
  "value": 19.1,
  "full": 25
}, {
"category": "Nützlich für die Allgemeinheit",
  "value": 20,
  "full": 25
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
valueAxis.max = 25;
valueAxis.strictMinMax = true;

// Create series
var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.dataFields.valueX = "full";
series1.dataFields.categoryY = "category";
series1.clustered = false;
//series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
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