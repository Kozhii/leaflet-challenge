# leaflet-challenge


USGS Earthquake Data Visualization


-Welcome to the USGS Earthquake Data Visualization project. 
  In this project, I'll show you how to create a map that displays earthquake data provided by the United States Geological Survey (USGS) using the Leaflet library. 
  The map will help you understand the location, magnitude, and depth of earthquakes.

-Getting the Earthquake Data
Go to the USGS GeoJSON Feed page.
Choose a dataset, like "All Earthquakes from the Past 7 Days."
Click on your chosen dataset to view its data in JSON format. We'll use this data to create our map.

-Building the Earthquake Map
Here's what our map will do:

1. Show Earthquakes on the Map
We'll use Leaflet to make a map that displays earthquake events on a global map based on their latitude and longitude.
2. Customize the Markers
Earthquake markers will change in size to represent their magnitude. Bigger markers for stronger earthquakes.
Markers will change color to show the depth of earthquakes. Deeper ones will have darker colors.
3. Display Extra Info
When you click on a marker, you'll see additional information about that earthquake, like its magnitude, depth, location, and time.
4. Add a Legend
We'll create a legend to help you understand what the marker size and color mean in terms of magnitude and depth.
