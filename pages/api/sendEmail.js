const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    membershipType,
    companyName,
    fullName,
    email,
    country,
    username,
    password,
  };

  // ارسال به API
  const res = await fetch("/api/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("Registration successful! Please check your email.");
  } else {
    alert("Error sending confirmation email.");
  }
};
