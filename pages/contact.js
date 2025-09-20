async function handleSubmit(e) {
  e.preventDefault();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });

  const data = await res.json();
  if (data.success) {
    alert("Your message has been sent!");
  } else {
    alert("Failed to send message. Please try again.");
  }
}
