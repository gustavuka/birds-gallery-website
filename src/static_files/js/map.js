// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.seriesContainer.draggable = false;
chart.seriesContainer.resizable = false;
chart.maxZoomLevel = 1;
// chart.scale = 2;

// Set map definition
chart.geodata = am4geodata_brazilLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

// Add shadow
// var shadow = polygonSeries.filters.push(new am4core.DropShadowFilter());
// shadow.color = am4core.color("#60666b");
// shadow.blur = 0;

let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");
polygonTemplate.polygon.fillOpacity = 0.8;

// Create hover state and set alternative fill color
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0);

// Create imageseries with circle and label
let imageSeries = chart.series.push(new am4maps.MapImageSeries());
let imageTemplate = imageSeries.mapImages.template;
imageTemplate.propertyFields.longitude = "longitude";
imageTemplate.propertyFields.latitude = "latitude";
imageTemplate.nonScaling = true;
imageTemplate.tooltipText = "{title}";

let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
circle.radius = 5;
circle.propertyFields.fill = "color";
circle.verticalCenter = "middle";
circle.horizontalCenter = "middle";

var label = imageSeries.mapImages.template.createChild(am4core.Label);
label.text = "{value}";
label.fill = am4core.color("#fff");
label.verticalCenter = "middle";
label.horizontalCenter = "middle";
label.nonScaling = true;

// Heat rule for circle size
imageSeries.heatRules.push({
  target: circle,
  property: "radius",
  min: 7,
  max: 25,
  dataField: "value",
  // "logarithmic": true
});

var colorSet = new am4core.ColorSet();
// example data
imageSeries.data = [
  {
    title: "Amazonas",
    latitude: -3.1,
    longitude: -65.02,
    color: colorSet.next(),
    value: 1,
  },
  {
    title: "Distrito Federal",
    latitude: -15.7801,
    longitude: -47.9292,
    color: colorSet.next(),
    value: 3,
  },
  {
    title: "Santa Catarina",
    latitude: -27.6118,
    longitude: -49.7073,
    color: colorSet.next(),
    value: 20,
  },
];
