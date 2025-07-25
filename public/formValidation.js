const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop default submission

  const name = form.querySelector("input[placeholder='Your Name']").value;
  const email = form.querySelector("input[placeholder='Your Email']").value;
  const message = form.querySelector("textarea").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields ✍️");
    return;
  }

  alert("Thank you, Pavann! Your message was sent 💌");
  form.reset(); // Clear the form
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[placeholder='Your Name']").value.trim();
    const email = form.querySelector("input[placeholder='Your Email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("🚫 Please fill in all fields.");
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert(`✅ Thank you, ${name}! Your message has been sent.`);
    form.reset();
  });
});
