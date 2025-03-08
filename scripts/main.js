// main.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Feature: Dynamic Store Name in Store Details Page
    const params = new URLSearchParams(window.location.search);
    const storeName = params.get("store");
    if (storeName && document.getElementById("store-name")) {
        document.getElementById("store-name").textContent = storeName.replace('-', ' ');
    }

    // Feature: Carousel Functionality
    const carouselItems = document.querySelectorAll(".carousel-item");
    let activeIndex = 0;

    function showNextCarouselItem() {
        // Hide current active item
        carouselItems[activeIndex].classList.remove("active");

        // Move to the next item, looping back to the start if necessary
        activeIndex = (activeIndex + 1) % carouselItems.length;

        // Show the new active item
        carouselItems[activeIndex].classList.add("active");
    }

    // Automatically switch carousel items every 5 seconds
    if (carouselItems.length > 0) {
        setInterval(showNextCarouselItem, 5000);
    }

    // Feature: Add to Cart (Simple Alert Example)
    const cartButtons = document.querySelectorAll(".product button");
    cartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });
});
