// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("active");
});

// Hero button alert
function showAlert() {
  alert("Welcome! Let's start exploring 🚀");
}

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Thanks ${name}! Your message has been sent.`);
    document.getElementById("contact-form").reset();
  } else {
    alert("Please fill out all fields.");
  }
});
