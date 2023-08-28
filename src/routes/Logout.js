document.addEventListener("DOMContentLoaded", function() {
  const authButton = document.getElementById("authButton");

  // Check user authentication status
  const isAuthenticated = checkAuthentication(); // Replace with your authentication check logic

  if (isAuthenticated) {
    authButton.textContent = "Logout";
    authButton.addEventListener("click", function(event) {
      event.preventDefault();
      // Perform logout actions, such as clearing session data or tokens
      localStorage.removeItem("userToken");
      window.location.href = "login.jsx"; // Replace with your actual login page URL
    });
  } else {
    authButton.textContent = "Login";
    authButton.addEventListener("click", function() {
      // Redirect the user to the login page
      window.location.href = "login.jsx"; // Replace with your actual login page URL
    });
  }
});

function checkAuthentication() {
  // Replace this function with your actual authentication check logic
  // For example, you might check for a valid user token in localStorage
  return localStorage.getItem("userToken") !== null;
}
