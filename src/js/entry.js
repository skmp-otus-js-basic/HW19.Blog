import "../css/style.css";

const entry = document.querySelector("#submit");
entry.addEventListener("click", (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log("Form 'Entry' has submited");
});
