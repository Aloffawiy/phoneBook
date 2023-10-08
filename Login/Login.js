function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform authentication here (e.g., check against a database).
    // You should implement your server-side logic for authentication.

    // For this example, we'll just do a simple check.
    if (username === "user" && password === "password") {
        alert("Login successful!");
        // Redirect to the phonebook page after successful login
        window.location.href = "phonebook.html";
    } else {
        alert("Login failed. Please check your credentials.");
    }
}