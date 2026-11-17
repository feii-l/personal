console.log("Loading global.js...");

const SITE_ROOT = new URL("./", import.meta.url);
const currentPath = location.pathname.replace("index.html", "");
console.log("SITE_ROOT:", SITE_ROOT);

const pages = [
  {url: "", title: "Home首页"},
  {url: "blog/", title: "Blog博客"}
]
console.log("Pages:", pages);

const nav = document.createElement("nav");
const box = document.querySelector(".box");
box.append(nav);

const navi = document.createElement("h4")
navi.textContent = "Navigation导航"
nav.append(navi)

for (const page of pages) {
    if (currentPath === SITE_ROOT.pathname && page.url === "blog/") {
      console.log("Skipping link for Blog:", page.title);
      continue;
  }

  const link = document.createElement('a');
  link.href = new URL(page.url, SITE_ROOT).href;
  if (link.pathname === currentPath) {
    link.classList.add('current');
  }
  link.textContent = page.title;
  nav.append(link);
  console.log("page:", page.title);
}


