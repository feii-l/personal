for (let i=0; i<80; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    document.body.append(star);
    star.style.animationDelay = `-${Math.random() * 2}s`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
}



