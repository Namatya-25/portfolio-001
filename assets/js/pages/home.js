const fvSwiper = new Swiper(".fv-slider", {
    // デフォルト設定（一番小さい画面用）
    slidesPerView: "auto",
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    
    // 要素が動的に変わる場合に備えてセットで書く
    observer: true,
    observeParents: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // 769px以上の場合
        769: {
            slidesPerView: 2.2,
            spaceBetween: 30,
        }
    }
    // 特別な理由がなければ on: { resize: ... } は削除しても自動で最適化されます
});