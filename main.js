const body = document.querySelector("body");

function makeSnowflake() {
    const snowflake = document.createElement("div");
    const delay = Math.random() * 10;
    const initialOpacity = Math.random();

    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * window.screen.width}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = initialOpacity;

    body.append(snowflake);
}

makeSnowflake();
for (let index = 0; index < 50; index++) {
    makeSnowflake();
}