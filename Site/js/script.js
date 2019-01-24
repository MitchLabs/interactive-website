$(document).ready(function() {
    
    //activate wow.js
     new WOW().init();
    //activate fullpage.js
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: false,
      //navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
      //loopBottom: true,
      sectionSelector: 'section'
    });
    
    $(".se-pre-con").fadeOut('slow');
    
});

$('.hover').click(function(){
    $('.panel').toggleClass('flip');
    $('.box2').removeClass('activepanel');
    $('.box2', this).addClass('activepanel');
});

    //Flip-function
$('.quizbtn').click(function(e) {
  e.preventDefault();
  $('.flip-box').addClass('flipped');
});
$('.quizbtn-back').click(function(e) {
  e.preventDefault();
  $('.flip-box').removeClass('flipped');
});

//Aktiver Link in Navigation markieren

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    var page1Top = $("#HeroImage").offset().top;
    var page2Top = $("#info").offset().top;
    var page3Top = $("#graph1").offset().top;
      var page4Top = $("#graph2").offset().top;
    var page5Top = $("#graph3").offset().top;
      var page6Top = $("#graph4").offset().top;
    var page7Top = $("#graph5").offset().top;
      var page8Top = $("#quiz").offset().top;
    var page9Top = $("#footer").offset().top;

    if (scrollPos >= page1Top && scrollPos < page2Top) {
      $(".nav01").addClass("active");
      $(".nav02").removeClass("active");
      $(".nav03").removeClass("active");
        $(".nav04").removeClass("active");
      $(".nav05").removeClass("active");
        $(".nav06").removeClass("active");
      $(".nav07").removeClass("active");
        $(".nav08").removeClass("active");
      $(".nav09").removeClass("active");
        
    } else {
      $(".nav01").removeClass("active");
    }
      
      if (scrollPos >= page2Top && scrollPos < page3Top) {
      $(".nav02").addClass("active");
      $(".nav01").removeClass("active");
      $(".nav03").removeClass("active");
        $(".nav04").removeClass("active");
      $(".nav05").removeClass("active");
        $(".nav06").removeClass("active");
      $(".nav07").removeClass("active");
        $(".nav08").removeClass("active");
      $(".nav09").removeClass("active");
    } else {
      $(".nav02").removeClass("active");
    }
      
      if (scrollPos >= page3Top && scrollPos < page4Top) {
      $(".nav03").addClass("active");
      $(".nav02").removeClass("active");
      $(".nav01").removeClass("active");
        $(".nav04").removeClass("active");
      $(".nav05").removeClass("active");
        $(".nav06").removeClass("active");
      $(".nav07").removeClass("active");
        $(".nav08").removeClass("active");
      $(".nav09").removeClass("active");
    } else {
      $(".nav03").removeClass("active");
    }
      
      if (scrollPos >= page4Top && scrollPos < page5Top) {
      $(".nav04").addClass("active");
      $(".nav02").removeClass("active");
      $(".nav03").removeClass("active");
        $(".nav01").removeClass("active");
      $(".nav05").removeClass("active");
        $(".nav06").removeClass("active");
      $(".nav07").removeClass("active");
        $(".nav08").removeClass("active");
      $(".nav09").removeClass("active");
    } else {
      $(".nav04").removeClass("active");
    }
      
      if (scrollPos >= page5Top && scrollPos < page6Top) {
      $(".nav05").addClass("active");
      $(".nav02").removeClass("active");
      $(".nav03").removeClass("active");
        $(".nav04").removeClass("active");
      $(".nav01").removeClass("active");
        $(".nav06").removeClass("active");
      $(".nav07").removeClass("active");
        $(".nav08").removeClass("active");
      $(".nav09").removeClass("active");
          
    } else {
      $(".nav05").removeClass("active");
    }
      
      if (scrollPos >= page6Top && scrollPos < page7Top) {
      $(".nav06").addClass("active");
      $(".nav02").removeClass("active");
      $(".nav03").removeClass("active");
        $(".nav04").removeClass("active");
      $(".nav05").removeClass("active");
        $(".nav01").removeClass("active");
      $(".nav07").removeClass("active");
        $(".nav08").removeClass("active");
      $(".nav09").removeClass("active");
    } else {
      $(".nav06").removeClass("active");
    }
      
      if (scrollPos >= page7Top && scrollPos < page8Top) {
      $(".nav07").addClass("active");
      $(".nav02").removeClass("active");
      $(".nav03").removeClass("active");
        $(".nav04").removeClass("active");
      $(".nav05").removeClass("active");
        $(".nav06").removeClass("active");
      $(".nav01").removeClass("active");
        $(".nav08").removeClass("active");
      $(".nav09").removeClass("active");
    } else {
      $(".nav07").removeClass("active");
    }
      
      if (scrollPos >= page8Top - 10 && scrollPos < page9Top) {
      $(".nav08").addClass("active");
      $(".nav02").removeClass("active");
      $(".nav03").removeClass("active");
        $(".nav04").removeClass("active");
      $(".nav05").removeClass("active");
        $(".nav06").removeClass("active");
      $(".nav07").removeClass("active");
        $(".nav01").removeClass("active");
      $(".nav09").removeClass("active");
    } else {
      $(".nav08").removeClass("active");
    }
      
      if (scrollPos >= page9Top) {
      $(".nav09").addClass("active");
      $(".nav02").removeClass("active");
      $(".nav03").removeClass("active");
        $(".nav04").removeClass("active");
      $(".nav05").removeClass("active");
        $(".nav06").removeClass("active");
      $(".nav07").removeClass("active");
        $(".nav08").removeClass("active");
      $(".nav01").removeClass("active");
    } else {
      $(".nav09").removeClass("active");
    }
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
            target.setFor("name", am4core.color("#e9e9e9"));
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
            am4core.color("#FFE48E"),
            am4core.color("#f9d767"),
            am4core.color("#FFE48E"),
            am4core.color("#f9d767"),
            am4core.color("#FFE48E"),
            am4core.color("#f9d767"),
            am4core.color("#FFE48E"),
            am4core.color("#f9d767"),
            am4core.color("#FFE48E"),
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
        "customData": "429"
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
    "Format": "Buch",
    "deutschland": 25.9,
    "europa": 29.6
}, {
    "Format": "Smartphone",
    "deutschland": 13.2,
    "europa": 12
}, {
    "Format": "Tablet",
    "deutschland": 2.6,
    "europa": 2.5
},{
    "Format": "Computer",
    "deutschland": 58.3,
    "europa": 55.9
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Format";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 60;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "";
valueAxis.title.fontWeight = 800;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "deutschland";
series.dataFields.categoryX = "Format";
series.clustered = false;
series.columns.template.tooltipText = "[bold]{valueY}[/] aller Teilnehmer in Deutschland präferieren {categoryX}";

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "europa";
series2.dataFields.categoryX = "Format";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.columns.template.tooltipText = "[bold]{valueY}[/] aller Teilnehmer präferieren {categoryX}";


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
    "Format": "Buch",
    "deutschland": 29,
    "europa": 30.6
}, {
    "Format": "Smartphone",
    "deutschland": 22.6,
    "europa": 19.6
}, {
    "Format": "Tablet",
    "deutschland": 7.7,
    "europa": 7.3
},{
    "Format": "Computer",
    "deutschland": 40.8,
    "europa": 42.5
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Format";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 60;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "";
valueAxis.title.fontWeight = 800;

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "deutschland";
series.dataFields.categoryX = "Format";
series.clustered = false;
series.columns.template.tooltipText = "[bold]{valueY}[/] aller Teilnehmer in Deutschland nutzen {categoryX}";

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "europa";
series2.dataFields.categoryX = "Format";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.columns.template.tooltipText = "[bold]{valueY}[/] aller Teilnehmer nutzen {categoryX}";


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
categoryAxis.numberFormatter.numberFormat = "#'%'";
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
  series.columns.template.tooltipText = "{name}: [bold]{valueX}[/] der Befragten gaben an [bold]{year}[/] ein Wörterbuch benutzt zu haben.";
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
  categoryLabel.label.fill = am4core.color("#e9e9e9");
  categoryLabel.label.hideOversized = false;
  categoryLabel.label.truncate = false;
}

createSeries("deutschland", "D");
createSeries("europa", "EUR");


//* * * * *


//chart3

//    MOUSE ON CHART
    
    $('.answ-1').hover(function() {
        $('.a-1').addClass('active_answer');
    }); $('.answ-1').mouseleave(function() {
        $('.a-1').removeClass('active_answer');
    });
    $('.answ-2').hover(function() {
        $('.a-2').addClass('active_answer');
    }); $('.answ-2').mouseleave(function() {
        $('.a-2').removeClass('active_answer');
    });
    $('.answ-3').hover(function() {
        $('.a-3').addClass('active_answer');
    }); $('.answ-3').mouseleave(function() {
        $('.a-3').removeClass('active_answer');
    });
    $('.answ-4').hover(function() {
        $('.a-4').addClass('active_answer');
    }); $('.answ-4').mouseleave(function() {
        $('.a-4').removeClass('active_answer');
    });
    $('.answ-5').hover(function() {
        $('.a-5').addClass('active_answer');
    }); $('.answ-5').mouseleave(function() {
        $('.a-5').removeClass('active_answer');
    });
    $('.answ-6').hover(function() {
        $('.a-6').addClass('active_answer');
    }); $('.answ-6').mouseleave(function() {
        $('.a-6').removeClass('active_answer');
    });
    $('.answ-7').hover(function() {
        $('.a-7').addClass('active_answer');
    }); $('.answ-7').mouseleave(function() {
        $('.a-7').removeClass('active_answer');
    });
    
//    MOUSE ON TEXT 
    
    $('.a-1').hover(function() {
        $('.answ-1').addClass('active_chart');
    }); $('.a-1').mouseleave(function() {
        $('.answ-1').removeClass('active_chart');
    });
    $('.a-2').hover(function() {
        $('.answ-2').addClass('active_chart');
    }); $('.a-2').mouseleave(function() {
        $('.answ-2').removeClass('active_chart');
    });
    $('.a-3').hover(function() {
        $('.answ-3').addClass('active_chart');
    }); $('.a-3').mouseleave(function() {
        $('.answ-3').removeClass('active_chart');
    });
    $('.a-4').hover(function() {
        $('.answ-4').addClass('active_chart');
    }); $('.a-4').mouseleave(function() {
        $('.answ-4').removeClass('active_chart');
    });
    $('.a-5').hover(function() {
        $('.answ-5').addClass('active_chart');
    }); $('.a-5').mouseleave(function() {
        $('.answ-5').removeClass('active_chart');
    });
    $('.a-6').hover(function() {
        $('.answ-6').addClass('active_chart');
    }); $('.a-6').mouseleave(function() {
        $('.answ-6').removeClass('active_chart');
    });
    $('.a-7').hover(function() {
        $('.answ-7').addClass('active_chart');
    }); $('.a-7').mouseleave(function() {
        $('.answ-7').removeClass('active_chart');
    });


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
    country: "Georgien",
    yes: 451,
    no: 56  
  },
  {
    country: "Baskenland",
    yes: 84,
    no: 48
  },
  {
    country: "Mazedonien",
    yes: 113,
    no: 67
  },
  {
    country: "Tschechische Republik",
    yes: 84,
    no: 62
  },
  {
    country: "Deutschland",
    yes: 256,
    no: 221
  },
  {
    country: "Großbritannien & Irland",
    yes: 87,
    no: 82
  },
  {
    country: "Österreich",
    yes: 130,
    no: 138
  },
    {
    country: "Polen",
    yes: 314,
    no: 334
  },
  {
    country: "Israel",
    yes: 69,
    no: 76
  },
  {
    country: "Brasilien",
    yes: 122,
    no: 152
  },
  {
    country: "Spanien",
    yes: 131,
    no: 166
  },
  {
    country: "Dänemark",
    yes: 172,
    no: 233
  },
  {
    country: "Kroatien",
    yes: 214,
    no: 302
  },
  {
    country: "Niederlande",
    yes: 53,
    no: 77
  },
  {
    country: "Finnland",
    yes: 120,
    no: 177
  },
  {
    country: "Serbien",
    yes: 118,
    no: 175
  },
  {
    country: "Italien",
    yes: 113,
    no: 172
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
    country: "Norwegen",
    yes: 142,
    no: 277
  },
  {
    country: "Griechenland",
    yes: 271,
    no: 558
  },
  {
    country: "Slowenien",
    yes: 203,
    no: 416
  },
  {
    country: "Belgien",
    yes: 90,
    no: 196
  },
  {
    country: "Schweden",
    yes: 34,
    no: 78
  },
  {
    country: "Frankreich",
    yes: 60,
    no: 178
  },
  {
    country: "Estland",
    yes: 96,
    no: 371
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
  "In [bold]{country}[/] antworteten [bold]{valueY.totalPercent.formatNumber('#.0')}%[/] der Befragten mit [bold]{name}[/]";
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
  "In [bold]{country}[/] antworteten [bold]{valueY.totalPercent.formatNumber('#.0')}%[/] der Befragten mit [bold]{name}[/]";
series2.name = "Nein";
series2.dataFields.categoryX = "country";
series2.dataFields.valueY = "no";
series2.dataFields.valueYShow = "totalPercent";
series2.dataItems.template.locations.categoryX = 0.5;
series2.stacked = true;
series2.tooltip.pointerOrientation = "vertical";

var bullet2 = series2.bullets.push(new am4charts.LabelBullet());
bullet2.label.text = "";
bullet2.locationY = 0.5;
bullet2.label.fill = am4core.color("#ffffff");

//chart.scrollbarX = new am4core.Scrollbar();


//* * * * *


//CHART 5-1

// Themes begin
am4core.useTheme(am4themes_wd3gelb);
// Themes end

// Create chart instance
var chart = am4core.create("chart5-1", am4charts.RadarChart);

// Add data
chart.data = [{

"category": "Interessiert hauptsächlich AkademikerInnen: [bold]5,3%[/]",
  "value": 5.3,
  "full": 25
}, {
    "category": "Nationales Symbol: [bold]5,8%[/]",
  "value": 5.8,
  "full": 25
}, {
  "category": "Nützlich für Kinder: [bold]8%[/]",
  "value": 8,
  "full": 25
}, {
  "category": "Nachschlagewerk für spezielle Interessen: [bold]9%[/]",
  "value": 9,
  "full": 25
}, {
    "category": "Nützlich für AusländerInnen: [bold]11,4%[/]",
  "value": 11.4,
  "full": 25
}, {
  "category": "Autorität: [bold]13,5%[/]",
  "value": 13.5,
  "full": 25
}, {
  "category": "Quelle für umfassende Sprachkenntnisse: [bold]22,4%[/]",
  "value": 22.4,
  "full": 25
}, {
"category": "Nützlich für die Allgemeinheit: [bold]23,1%[/]",
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
series1.columns.template.cornerRadiusTopLeft = 0;
series1.columns.template.strokeWidth = 0;
series1.columns.template.radarColumn.cornerRadius = 0;

var series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.dataFields.valueX = "value";
series2.dataFields.categoryY = "category";
series2.clustered = false;
series2.columns.template.strokeWidth = 0;
series2.columns.template.tooltipText = "{category}";
series2.columns.template.radarColumn.cornerRadius = 0;

series2.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});


// Q U I Z

am4core.useTheme(am4themes_wd3);
am4core.useTheme(am4themes_animated);
// create chart instance
var quiz = am4core.create("quizChart", am4charts.XYChart);

// Add data
quiz.data = [{
  "antwort": "Ich behalte und verwende es",
  "de-wert": -40.1,
  "eu-wert": 58.5
}, {
  "antwort": "Ich behalte es, da es sich im Regal gut machen wird",
  "de-wert": -17.3,
  "eu-wert": 6.3
}, {
  "antwort": "Ich spende es einer Bibliothek",
  "de-wert": -10.9,
  "eu-wert": 9.9
}, {
  "antwort": "Ich werfe es weg",
  "de-wert": -9.4,
  "eu-wert": 3.1
}, {
  "antwort": "Keine der genannten Möglichkeiten",
  "de-wert": -8.6,
  "eu-wert": 6.3
}, {
  "antwort": "Ich versuche, es zu verkaufen",
  "de-wert": -7.3,
  "eu-wert": 2.3
}, {
  "antwort": "Ich behalte es, denn es hat meinem Verwandten gehört",
  "de-wert": -6.5,
  "eu-wert": 13.4
}];

// Use only absolute numbers
quiz.numberFormatter.numberFormat = "#.#s";
// Create axes
var categoryAxis = quiz.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "antwort";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.inversed = true;

var valueAxis = quiz.xAxes.push(new am4charts.ValueAxis());
valueAxis.extraMin = 0.1;
valueAxis.extraMax = 0.1;
valueAxis.renderer.minGridDistance = 40;
valueAxis.renderer.ticks.template.length = 5;
valueAxis.renderer.ticks.template.disabled = false;
valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
valueAxis.renderer.labels.template.adapter.add("text", function(text) {
  return text == "DE" || text == "EUR" ? text : text + "%";
})

// Create series
var deutschland = quiz.series.push(new am4charts.ColumnSeries());
deutschland.dataFields.valueX = "de-wert";
deutschland.dataFields.categoryY = "antwort";
deutschland.clustered = false;
deutschland.columns.template.tooltipText = "[bold]{de-wert}%[/] der deutschen Teilnehmer antworteten: '[bold]{antwort}[/].'";

var deutschlandLabel = deutschland.bullets.push(new am4charts.LabelBullet());
deutschlandLabel.label.text = "{valueX}%";
deutschlandLabel.label.hideOversized = false;
deutschlandLabel.label.truncate = false;
deutschlandLabel.label.horizontalCenter = "right";
deutschlandLabel.label.dx = -10;

var europa = quiz.series.push(new am4charts.ColumnSeries());
europa.dataFields.valueX = "eu-wert";
europa.dataFields.categoryY = "antwort";
europa.clustered = false;
europa.columns.template.tooltipText = "[bold]{eu-wert}%[/] aller Teilnehmer antworteten: '[bold]{antwort}[/]'.";

var europaLabel = europa.bullets.push(new am4charts.LabelBullet());
europaLabel.label.text = "{valueX}%";
europaLabel.label.hideOversized = false;
europaLabel.label.truncate = false;
europaLabel.label.horizontalCenter = "left";
europaLabel.label.dx = 10;

var deutschlandRange = valueAxis.axisRanges.create();
deutschlandRange.value = -25;
deutschlandRange.endValue = 0;
deutschlandRange.label.text = "DE";
deutschlandRange.label.fill = chart.colors.list[0];
deutschlandRange.label.dy = 20;
deutschlandRange.label.fontWeight = '600';
deutschlandRange.grid.strokeOpacity = 1;
deutschlandRange.grid.stroke = deutschland.stroke;

var europaRange = valueAxis.axisRanges.create();
europaRange.value = 0;
europaRange.endValue = 35;
europaRange.label.text = "EUR";
europaRange.label.fill = chart.colors.list[2];
europaRange.label.dy = 20;
europaRange.label.fontWeight = '600';
europaRange.grid.strokeOpacity = 1;
europaRange.grid.stroke = europa.stroke;
