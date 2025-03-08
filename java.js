onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        document.querySelector(".image-box").style.opacity = 1; // Hiển thị ảnh sau 1s
        // document.querySelector(".image-box2").style.opacity = 1; // Hiển thị ảnh sau 1s
        document.querySelector(".image-box3").style.opacity = 1; // Hiển thị ảnh sau 1s
        document.querySelector(".image-box4").style.opacity = 1; // Hiển thị ảnh sau 1s
        // document.querySelector(".image-box5").style.opacity = 1; // Hiển thị ảnh sau 1s
        document.querySelector(".image-box6").style.opacity = 1; // Hiển thị ảnh sau 1s
        clearTimeout(c);
    }, 1000);
};

document.addEventListener("mousemove", (event) => {
    const images = document.querySelectorAll(".image-box, .image-box3, .image-box4, .image-box6");

    if (!images.length) return;

    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    images.forEach((image, index) => {
        const depth = (index + 0.5) * 0.02; // Mỗi ảnh có tỷ lệ khác nhau
        const moveX = (clientX - centerX) * depth;
        const moveY = (clientY - centerY) * depth;
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});