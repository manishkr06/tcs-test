fetch('code.test.json')
.then(res => res.json())
.then(data => {
  document.getElementById("page-title").textContent = data.title || "News";

  const container = document.getElementById("news-container");

  data.articles.forEach(article => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="category">${article.primarySectionRouteName}</div>
      <img src="${article.thumbnail.src}" alt="${article.thumbnail.title}">
      <a href="${article.link}" target="_blank" class="headline">${article.headline}</a>
      <p class="description">${article.standfirst}</p>
    `;

    container.appendChild(card);
  });
})
.catch(err => console.error("Failed to load JSON:", err));