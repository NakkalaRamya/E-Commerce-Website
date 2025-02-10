let favouritee = document.querySelector(".favouritee");

document.querySelector('#favouritee').onclick = () =>{
  favouritee.classList.toggle('active');
  shoppingbag.classList.remove('active');
  loginn.classList.remove('active'); 
}

let shoppingbag = document.querySelector(".shoppingbag");

document.querySelector('#shoppingbag').onclick = () =>{
  shoppingbag.classList.toggle('active');
  favouritee.classList.remove('active');
  loginn.classList.remove('active'); 
}

let loginn = document.querySelector(".loginn");

document.querySelector('#loginn').onclick = () =>{
  loginn.classList.toggle('active');
  favouritee.classList.remove('active');
  shoppingbag.classList.remove('active');
}

Window.onscroll = () => {
  favouritee.classList.remove('active');
  shoppingbag.classList.remove('active');
  loginn.classList.remove('active'); 
};

document.querySelector('.button-search').addEventListener('click', function() {
  // Get the user input from the search input field
  const userInput = document.getElementById('searchInput').value.trim().toLowerCase();

  // Perform a search operation here based on the userInput
  // This can include filtering or searching through your product data

  // For this example, we'll simply display an alert with the user's input
  alert('You searched for: ' + userInput);
});    

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const buttonSearch = document.querySelector(".button-search");

  buttonSearch.addEventListener("click", function() {
    const searchTerm = searchInput.value;
    
    // Send the search term to the server using AJAX or Fetch API
    fetch(`/search?term=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        // Process and display search results here
        console.log(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
});
