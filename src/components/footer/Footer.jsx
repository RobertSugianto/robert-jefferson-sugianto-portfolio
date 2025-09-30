import './footer.css'

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form["full-name"].value.trim();
    const email = form["email"].value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      form["full-name"].setCustomValidity("Name should only contain letters and spaces.");
      form["full-name"].reportValidity();
      return;
    } else {
      form["full-name"].setCustomValidity("");
    }

    // Email validation
    if (!emailRegex.test(email)) {
      form["email"].setCustomValidity("Please enter a valid email address.");
      form["email"].reportValidity();
      return;
    } else {
      form["email"].setCustomValidity("");
    }

    fetch("https://formsubmit.co/591567b3cb2e08a817396b8d95a879f2", {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => {
        if (res.ok) {
          alert("Thank you for sending me email!");
          form.reset();
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch(() => alert("Failed to send email."));
  };

  return (
    <footer id="footer">
        <h3>Contact me</h3>
        <form onSubmit={handleSubmit} className='form-hire'>
            <input
            type="text"
            className='text-input'
            name="full-name"
            placeholder="Full Name"
            required
            onInput={(e) => e.target.setCustomValidity("")}
            />
            <input
            type="email"
            className='text-input'
            name="email"
            placeholder="Email"
            required
            onInput={(e) => e.target.setCustomValidity("")}
            />
            <textarea name="message" className='message-input' placeholder="Your message" id='message-box' required></textarea>
            <button type="submit" id="send" className='send-btn'>Send</button>
        </form>
    </footer>
  );
}

export default Footer