for (let i=0; i<100; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = `${Math.random() * 100}vw`;
    document.body.append(drop);
    drop.style.animationDelay = `-${Math.random() * 4}s`;
    drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
}


