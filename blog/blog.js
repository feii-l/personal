const response = await fetch(new URL("./posts.json", import.meta.url));
const posts = await response.json();
console.log("Posts:", posts);

const postsBox = document.querySelector(".posts");

for (const post of posts) {

  const card = document.createElement("article");

  card.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.date}</p>
    <p>${post.text}</p>
  `;
  postsBox.append(card);
}

// add posts in posts.json on the top (newest)
