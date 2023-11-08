var earthquakeDataUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

// Create a Leaflet map
var myMap = L.map("map").setView([0, 0], 2);

// Add a tile layer (you can use different map providers)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);

// Fetch earthquake data from the USGS dataset
fetch(earthquakeDataUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Process the GeoJSON data and create earthquake markers
        L.geoJSON(data.features, {
            pointToLayer: function (feature, latlng) {
                // Customize marker properties based on earthquake magnitude and depth
                var magnitude = feature.properties.mag;
                var depth = feature.geometry.coordinates[2];
                var radius = magnitude * 5; 
                var fillColor = getColor(depth);

                // Create a circle marker with custom properties
                return L.circleMarker(latlng, {
                    radius: radius,
                    fillColor: fillColor,
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8,
                }).bindPopup("Magnitude: " + magnitude + "<br>Depth: " + depth);
            }
        }).addTo(myMap);

        // Create a visual legend
        createVisualLegend();
    });

// Define a function to determine marker color based on earthquake depth
function getColor(depth) {
    
    if (depth < 10) {
        return "green";
    } else if (depth < 50) {
        return "yellow";
    } else {
        return "red";
    }
}

// legend
function createVisualLegend() {
    var legend = L.control({ position: "bottomright" });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create("div", "info legend");
        var depthColors = [10, 50]; 
        var labels = [];

        
        div.innerHTML = "<h4>Earthquake Depth (km)</h4>";

        
        for (var i = 0; i < depthColors.length; i++) {
            var from = depthColors[i];
            var to = depthColors[i + 1];
            var color = getColor((from + to) / 2); 

            
            labels.push(
                '<i style="background:' + color + '"></i> ' +
                from + (to ? "&ndash;" + to : "+") + ' km'
            );
        }

        div.innerHTML += labels.join("<br>");
        return div;
    };

    legend.addTo(myMap);
}




