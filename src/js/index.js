import "../css/style.css";
import show from "./show";
import check from "./check";

const form = document.querySelector("#newsletter");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const signupValue = document.getElementById("signup").value;
  if (!check("signup", signupValue)) return;
  show("Form 'Home' has submitted");
});
