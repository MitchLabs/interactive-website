function am4themes_wd3blau(target) {
        target.list = [
            am4core.color("#C3C4DE"),
            am4core.color("#9395BF"),
            am4core.color("#C3C4DE"),
            am4core.color("#9395BF"),
            am4core.color("#C3C4DE"),
            am4core.color("#9395BF"),
            am4core.color("#C3C4DE"),
            am4core.color("#9395BF"),
            am4core.color("#C3C4DE"),
            am4core.color("#9395BF")
        ];
        if (target instanceof am4core.InterfaceColorSet) {
            target.setFor("text", am4core.color("#E9E9E9"));
            target.setFor("grid", am4core.color("#B6B7BA"));
            target.setFor("secondaryButton", am4core.color("#51565E"));
            target.setFor("secondaryButtonHover", am4core.color("#9395BF").lighten(-0.2));
            target.setFor("secondaryButtonDown", am4core.color("#e9e9e9").lighten(-0.2));
            target.setFor("secondaryButtonActive", am4core.color("#9395BF").lighten(-0.2));
            target.setFor("secondaryButtonText", am4core.color("#E9E9E9"));
            target.setFor("secondaryButtonStroke", am4core.color("#6C7178"));
        }
}

//CHART 5-2

// Themes begin
am4core.useTheme(am4themes_wd3blau);
// Themes end

// Create chart instance
var chart5 = am4core.create("chart5-2", am4charts.RadarChart);

// Add data
chart5.data = [{

"category": "Interessiert hauptsächlich AkademikerInnen: [bold]8,3%[/]",
  "value": 8.3,
  "full": 25
}, {
    "category": "Nationales Symbol: [bold]4,8%[/]",
  "value": 4.8,
  "full": 25
}, {
  "category": "Nützlich für Kinder: [bold]10,6%[/]",
  "value": 10.6,
  "full": 25
}, {
  "category": "Nachschlagewerk für spezielle Interessen: [bold]13,3%[/]",
  "value": 13.3,
  "full": 25
}, {
    "category": "Nützlich für AusländerInnen: [bold]9,5%[/]",
  "value": 9.5,
  "full": 25
}, {
  "category": "Autorität: [bold]11,9%[/]",
  "value": 11.9,
  "full": 25
}, {
  "category": "Quelle für umfassende Sprachkenntnisse: [bold]19,1%[/]",
  "value": 19.1,
  "full": 25
}, {
"category": "Nützlich für die Allgemeinheit: [bold]20%[/]",
  "value": 20,
  "full": 25
}];

// Make chart not full circle
chart5.startAngle = -90;
chart5.endAngle = 180;
chart5.innerRadius = am4core.percent(20);

// Set number format
chart5.numberFormatter.numberFormat = "#.#'%'";

// Create axes
var categoryAxis = chart5.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.strokeOpacity = 0;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.fontWeight = 500;
categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
  return (target.dataItem.index >= 0) ? chart5.colors.getIndex(target.dataItem.index) : fill;
});
categoryAxis.renderer.minGridDistance = 10;

var valueAxis = chart5.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = 0;
valueAxis.max = 25;
valueAxis.strictMinMax = true;

// Create series
var series1 = chart5.series.push(new am4charts.RadarColumnSeries());
series1.dataFields.valueX = "full";
series1.dataFields.categoryY = "category";
series1.clustered = false;
//series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
series1.columns.template.fillOpacity = 0.08;
series1.columns.template.cornerRadiusTopLeft = 0;
series1.columns.template.strokeWidth = 0;
series1.columns.template.radarColumn.cornerRadius = 0;

var series2 = chart5.series.push(new am4charts.RadarColumnSeries());
series2.dataFields.valueX = "value";
series2.dataFields.categoryY = "category";
series2.clustered = false;
series2.columns.template.strokeWidth = 0;
series2.columns.template.tooltipText = "{category}";
series2.columns.template.radarColumn.cornerRadius = 0;

series2.columns.template.adapter.add("fill", function(fill, target) {
  return chart5.colors.getIndex(target.dataItem.index);
});