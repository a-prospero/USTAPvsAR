var month = ["January", "February", "March","April", "May", "June","July", "August", "September","October", "November", "December"];
var ar = [3418163, 2895239, 3618074, 3965922, 3702453, 3819666, 3858723, 3699495, 3744365,3694123, 3537986,3242059];
var apDue = [2535453, 1994062, 2046836, 1781241, 2230542,2778134, 2364457, 2340205, 2203273, 2179594, 1875376, 1801086];

// Create the Trace
var trace1 = {
  x: month,
  y: ar,
  type: "bar",
  name: '2020 Receivables',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 0.7,
  }
};

var trace2 = {
  x: month,
  y: apDue,
  type: "bar",
  name: '2020 Payables',
  marker: {
    color: 'rgb(204,204,204)',
    opacity: 0.5
  }
};

// Create the data array for the plot
var data = [trace1, trace2];

// Define the plot layout
var layout = {
  title: "AP vs AR 2020",
  xaxis: { title: "Month"},
  yaxis: { title: "Amount",
  tickformat: "$,.2f"}
  };

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);