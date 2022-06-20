import "../css/style.css";
import showMessage from "./showMessage";

const form = document.querySelector("#newsletter");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  showMessage("Form 'Home' has submited");
});
