import "../css/style.css";
import { saveList } from "./storage";

function checkValue(elementId, data) {
  if (data === null || data.trim().length === 0) {
    const element = document.getElementById(elementId);
    const emptyClass =
      elementId === "name" ? "main_input_empty" : "main_textarea_empty";
    const workClass = elementId === "name" ? "main_input" : "main_textarea";
    element.setAttribute("class", emptyClass);
    setTimeout(() => element.setAttribute("class", workClass), 300);
    return false;
  }
  return true;
}

const entry = document.querySelector("#submit");

entry.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = document.getElementById("name").value;
  if (!checkValue("name", nameValue)) return;
  const textValue = document.getElementById("message").value;
  if (!checkValue("message", textValue)) return;
  const record = {
    name: nameValue,
    text: textValue,
    time: new Date().toLocaleDateString(),
  };
  saveList(record);
  window.location.replace("entries.html");
});
