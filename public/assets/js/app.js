$(".devour").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burgerID = $(this).attr("data-attr");

    // Send the POST request.
    $.ajax("/api/burgers/" + burgerID, {
      type: "PUT",
    }).then(
      function() {
        console.log("devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  function validateForm () {
      var x = document.forms["add-a-burger"]["burger_name"].value;
      if (x == "") {
          alert("You must put in a burger name");
          return false;
      }
  }