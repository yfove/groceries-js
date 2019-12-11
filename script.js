// Document.ready
var app = {};

app.ul = $(".groceries"); //when variables represent a jQuery object

//function for adding items
app.addItem = function(item){
    //create list item and add it to .groceries
    const groceryItem = ` <li>${item}</li>`;
    app.ul.append(groceryItem);
}

//new function for adding headings


$(function() {
    console.log("linked");
    // app.addItem('veg'); //test addItem function
});

