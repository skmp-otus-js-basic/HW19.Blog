export function readList() {
  const items = JSON.parse(localStorage.getItem("items"));
  return items || [];
}

export function saveList(cityName) {
  const items = readList();
  if (items.includes(cityName)) return false;
  if (items.length === 10) items.shift();
  items.push(cityName);
  localStorage.setItem("items", JSON.stringify(items));
  return true;
}

function addArticle(comments, record) {
  const article = document.createElement("article");
  // eslint-disable-next-line no-param-reassign
  article.innerHTML = `
            <div class="avatar"></div>
            <section>
              <h4>${record.name}</h4>
              <p>${record.text}</p>
              <div class="time">${record.time}</div>
            </section>
        
          <hr/>`;
  comments.appendChild(article);
}

function addTemplate(comments) {
  let record = {
    name: "Sergey Potysev",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at aut cupiditate ea et facilis, laboriosam nisi quas, quibusdam rerum sint ut vel, voluptatum! Animi fuga iure nesciunt tempore vel.",
    time: "20.06.2022",
  };
  addArticle(comments, record);
  record = {
    name: "Elena Fomina",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at aut cupiditate ea et facilis, laboriosam nisi quas, quibusdam rerum sint ut vel, voluptatum! Animi fuga iure nesciunt tempore vel.",
    time: "21.06.2022",
  };
  addArticle(comments, record);
}

export default function showTestimonials(comments) {
  const items = readList();
  if (items.length === 0) {
    addTemplate(comments);
    return;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= items.length; i++) {
    addArticle(comments);
  }
}
