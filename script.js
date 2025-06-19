document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Success message
    alert(`Thank you for reaching out, ${name}!`);
    form.reset(); // Optionally clear the form
  });
});
