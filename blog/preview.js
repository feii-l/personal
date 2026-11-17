const response = await fetch(new URL("./posts.json", import.meta.url));
const posts = await response.json();

const newest = posts[0];
// add posts in posts.json on the top (newest)

const blog_link= document.querySelector(".blog_link a");
const snippet = newest.text.slice(0, 50) + "...";

blog_link.innerHTML= `
    <strong>${(newest.title)}</strong>
    <p>${snippet}</p>
`

console.log("Posts:", posts);