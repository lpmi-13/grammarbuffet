/*
 * Grammar Buffet — small vanilla-JS enhancements.
 * Replaces the old jQuery / Bootstrap / plugin stack.
 */
(function () {
    "use strict";

    var nav = document.querySelector(".site-nav");
    var toggle = document.querySelector(".nav-toggle");
    var navLinks = document.getElementById("nav-links");
    var scrollTop = document.querySelector(".scroll-top");

    // Shrink the nav and reveal the scroll-to-top button once the page scrolls.
    function onScroll() {
        var scrolled = window.pageYOffset > 60;
        if (nav) {
            nav.classList.toggle("is-scrolled", scrolled);
        }
        if (scrollTop) {
            scrollTop.classList.toggle("show", window.pageYOffset > 400);
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mobile navigation toggle.
    if (toggle && navLinks) {
        toggle.addEventListener("click", function () {
            var open = navLinks.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });

        // Close the menu after tapping a link.
        navLinks.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                navLinks.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Scroll-to-top button.
    if (scrollTop) {
        scrollTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Dynamic copyright year.
    var yearEl = document.getElementById("copyright-year");
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }
})();
