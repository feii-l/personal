console.log("Loading global.js...");

const pages = [
  {url: "", title: "Home首页"},
 //{url: "Favories收藏"}
]
console.log("Pages:", pages);

const nav = document.createElement('nav');
document.body.prepend(nav);

for (const page of pages) {
  console.log("page:", page.title);
}