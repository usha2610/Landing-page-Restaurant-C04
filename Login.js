function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!validateEmail(email)) {
    alert("❌ Enter a valid email.");
    return;
  }

  if (password.length < 6) {
    alert("❌ Password must be at least 6 characters.");
    return;
  }

  alert("✅ Login successful!");
  window.location.href = "page1.html";
}
