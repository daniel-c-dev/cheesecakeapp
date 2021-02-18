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
    }
    // Hide the thank you message when the page loads.
    $(document).ready(function(){
        $(".thankyou_message").hide();
    });
    // Resource: https://www.tutorialrepublic.com/faq/how-to-change-the-
    //           text-of-a-button-using-jquery.php#:~:text=Answer%3A%20Use%20the%20
    //           jQuery%20prop,use%20the%20html()%20method.
    // Usage: Changing the hover dropdown's text.
    function select_month(month) {
        $(".dropbtn").html(month);
    }