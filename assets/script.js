(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a[data-page]").forEach(a => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });

  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get("name") || "").toString().trim();
      const email = (fd.get("email") || "").toString().trim();
      const business = (fd.get("business") || "").toString().trim();
      const goal = (fd.get("goal") || "").toString().trim();
      const message = (fd.get("message") || "").toString().trim();

      const subject = encodeURIComponent(`Website + Messaging enquiry — ${business || name || "New lead"}`);
      const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Business: ${business}
Goal: ${goal}

Message:
${message}
`);
      const to = "YOUR@email.com";
      location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();