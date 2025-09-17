// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


      // initialize EmailJS immediately
      (function () {
        emailjs.init({
          publicKey: "rBxBzG1awwwVA-3j7", // your public key
        });
      })();

      function sentmail(event) {
        event.preventDefault(); // stop form refresh

        const params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        };

        emailjs.send("service_48dbkum", "template_5l2or7o", params).then(
          function (response) {
            alert("Email sent!!");
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            alert("Email failed to send. Check console.");
            console.error("FAILED...", error);
          }
        );
      }

      // attach to your form
      document.getElementById("contact-form").addEventListener("submit", sentmail);

    