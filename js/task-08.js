const form = document.querySelector(".login-form");
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  evt.currentTarget.reset();
});
