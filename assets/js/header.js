document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".humberger");
    const mobileNav = document.querySelector(".mobile-nav");

    const toggleMenu = () => {
        const isActive = mobileNav.classList.contains("active");

        if (!isActive) {
            mobileNav.classList.add("active");
            hamburger.classList.add("active");
            document.body.style.overflow = "hidden"; // スクロール無効
        } else {
            mobileNav.classList.remove("active");
            hamburger.classList.remove("active");
            document.body.style.overflow = ""; //スクロール有効
        }
    };

    hamburger.addEventListener("click", toggleMenu);

    // メニュー内リンククリックで閉じる
    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            hamburger.classList.remove("active");
            document.body.style.overflow = "";
        })
    })
})


const h3 = document.querySelector("h3");

// for (let aaa of h3) {
//     aaa.style.color = "blue";
// }
