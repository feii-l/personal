const response = await fetch(new URL("./posts.json", import.meta.url));
const posts = await response.json();
console.log("Posts:", posts);

const postsBox = document.querySelector(".posts");

const params = new URLSearchParams(location.search)
const post_id = params.get("post")

for (const post of posts) {
    if (post_id && post.id !== post_id) {
        continue;
    }

    const card = document.createElement("article");

    // card.innerHTML = `
    // <h2> <a href="?post=${post.id}">${post.title}</a></h2>
    // <p>${post.date}</p>
    // <p>${post.text}</p>
    // `;

    let body;
    if (post_id) {
        body = post.text;
    }   else {
        body = `<a href="?post=${post.id}">${post.text.slice(0, 80)}...(read more & comment →)</a>`;
    }

    card.innerHTML = `
    <h2> <a href="?post=${post.id}">${post.title}</a></h2>
    <p>${post.date}</p>
    <p>${body}</p>
    `;

    postsBox.append(card);
}

if (post_id) {
    const giscus = document.createElement("script");
    giscus.setAttribute("src", "https://giscus.app/client.js");
    giscus.setAttribute("data-repo", "feii-l/personal");
    giscus.setAttribute("data-repo-id", "R_kgDOVw8WEg");
    giscus.setAttribute("data-category", "Announcements");
    giscus.setAttribute("data-category-id", "DIC_kwDOVw8WEs4DLXg3");
    giscus.setAttribute("data-mapping", "specific");
    giscus.setAttribute("data-term", post_id);
    giscus.setAttribute("data-strict", "1");
    giscus.setAttribute("data-reactions-enabled", "1");
    giscus.setAttribute("data-input-position", "bottom");
    giscus.setAttribute("data-theme", "transparent_dark");
    giscus.setAttribute("data-lang", "en");
    giscus.setAttribute("data-loading", "lazy");
    giscus.setAttribute("crossorigin", "anonymous");
    postsBox.append(giscus);
}

// add posts in posts.json on the top (newest)
