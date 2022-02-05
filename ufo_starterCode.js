// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    var changeElement = d3.select(this).select("input");
    // 4b. Save the value that was changed as a variable.
    var elementValue = changeElement.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    var filterId = changeElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if(elementValue){
      filters[filterId] = elementValue;
    }
    else{
      delete filters[filterId];
    }
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
    
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredTable = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(function([key, value])){

  

    // 10. Finally, rebuild the table using the filtered data
    filteredData =filterData.filter(filter(row) => row[key] === value)
    }
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("#filter-btn").on("change", updateFilters)
  
  // Build the table when the page loads
  buildTable(tableData);


//// Module NOTES
// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// // Simple JavaScript console.log statement
// function printHello() {
//     console.log("Hello there!");
//   }

//  // Takes two numbers and adds them
// function addition(a, b) {
//     return a + b;
//   } 

// //11.4.1 Use a JavaScript for Loop

// let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// function listLoop(userList) {
//     for (var i = 0; i < userList.length; i++) {
//       console.log(userList[i]);
//     }
//  }

// // 11.4.2 Practice Using for Loops in JavaScript 

// let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// for (var i = 0; i < vegetables.length; i++) {
//     console.log("I love " + vegetables[i]);
// }

//11.5.1 Introduction to Dynamic Tables

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

//11.5.3 Add Filters

// //handleClick
// function handleClick() {
//     let date = d3.select("#datetime").property("value");

//     let filteredData = tableData;

//11.5.4 Use the “If” Statement final code

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
  
  
