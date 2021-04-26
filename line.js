// var arDue20 = {
//   x: ["January", "February", "March","April", "May", "June","July", "August", "September","October", "November", "December"],
//   y: [3418163, 2895239, 3618074, 3965922, 3702453, 3819666, 3858723, 3699495, 3744365,3694123, 3537986,3242059],
//   mode: 'lines+markers+text',
//   name: '2020 Processed AR',
//   type: "line"
// };

// // Create our second trace
// var apDue20 = {
//   x: ["January", "February", "March","April", "May", "June","July", "August", "September","October", "November", "December"],
//   y: [2535453, 1994062, 2046836, 1781241, 2230542,2778134, 2364457, 2340205, 2203273, 2179594, 1875376, 1801086],
//   mode: 'lines+markers+text',
//   name: '2020 Processed AP',
//   type: "line"
// };



var arDue = {
  x: ["January", "February", "March"],
  y: [3832595, 3432667, 5061992],
  mode: 'lines+markers+text',
  name: '2021 Processed AR',
  type: "scatter",
  tickformat: "$,.2f"
};

// Create our second trace
var apDue = {
  x: ["January", "February", "March"],
  y: [2135247, 1913709, 2489292],
  mode: 'lines+markers+text',
  name: '2021 Processed AP',
  type: "scatter",
  tickformat: "$,.2f"
};






// The data array consists of both traces
var data = [arDue, apDue];


// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);
