// Daniel Co

// If the notes section contains the word 'vegan', display a warning.
// Otherwise, hide the forms.
function warning()
{
    if (document.getElementById('notes').value.toLowerCase().indexOf('vegan') != -1)
    {
        alert('Warning: Cheesecakes contain dairy.'); 
    }
    else
    {
        $("form").hide();
        $(".form_text").hide();
        $(".thankyou_message").show();
    }
}

// Display the user's order details.
// Resource: https://stackoverflow.com/questions/14939010/get-value-from-text-area
// Usage: Getting the value of a textarea.
function order_details()
{
    var thankyou = "Thank you! Your order has been placed.";
    var orderdetails = "Order details:"
    var quantity = document.getElementById("quantity").value;
    var topping = $('input[name=answer]:checked').val();
    while (topping == 'undefined'){topping = $('input[name=answer]:checked').val();}
    var notes = $("#notes").val();

    document.getElementById("message1").innerHTML = thankyou;
    document.getElementById("message2").innerHTML = orderdetails
    document.getElementById("message3").innerHTML = "Quantity: " + quantity;
    document.getElementById("message4").innerHTML = "Topping: " + topping;
    document.getElementById("message5").innerHTML = "Notes: " + notes;

    //send_order(quantity, topping, notes);

    var d = {quantity, topping, notes};

    $.post("http://localhost:3000/neworder",
    d, function(){
        alert("Success.");
    });
}

// Send a POST to the server to add new orders to the database.
// Resource: https://stackoverflow.com/questions/6587221/send-json-data-with-jquery
// Usage: Sending data using a post request.
function send_order(quantity, topping, notes)
{
    var d = {quantity, topping, notes};

    $.post("http://localhost:3000/neworder", 
    function(){
        alert("Success.");
    });
}

// Hide the thank you message when the page loads.
$(document).ready(function()
{
    $(".thankyou_message").hide();
});

// Resource: https://www.tutorialrepublic.com/faq/how-to-change-the-
//           text-of-a-button-using-jquery.php#:~:text=Answer%3A%20Use%20the%20
//           jQuery%20prop,use%20the%20html()%20method.
// Usage: Changing the hover dropdown's text.
function select_month(month) {
    $(".dropbtn").html(month);
    display_data(month);
}

// Resource: https://stackoverflow.com/questions/50450342/display-json-array-in-html-ul
// Usage: Getting the parsed json objects to show up correctly on the web page
function display_data(month) 
{
    $.post("http://localhost:3000/orders/" + month,
    function(data){

        // Convert data to formatted string, then parse it
        var string_data = JSON.stringify(data);
        var cheesecake_data = JSON.parse(string_data);

        // Create variable to store cheesecake display data
        var displayed_data = '';

        // Loop through data and convert it the displayed format "quantity topping"
        if (cheesecake_data.data.length < 1){
            displayed_data +='<li>' + 'There are no orders for this month.' + '</li>'
        } else {
            for (var i = 0; i < cheesecake_data.data.length; i++){
                displayed_data +='<li>' + cheesecake_data.data[i]["TOTAL"] + " " + cheesecake_data.data[i]["TOPPING"] + '</li>';
            }

        // Empty cheesecakes from list, then display new cheesecake data in list
        document.getElementById("myList").innerHTML = "";
        document.getElementById("myList").innerHTML += displayed_data;
        
    });
}
