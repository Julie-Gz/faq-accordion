"use strict"
$(document).ready(() => {
    const questions = $(".accordion__question");

    $.each(questions, function (idx, el) {
        // Get parent element
        const parentEl = $(this).parent().get(0);
        // Get answer
        const answer = $(parentEl).find(".accordion__answer").get(0);
        // Hide content by default
        $(answer).not(".first").hide()
        // Get icons
        const icon = $(parentEl).find("img").get(0);

        // Open and close answers on click
        $(el).on("click", function () {
            // Toggle active class
            $(parentEl).toggleClass("active");

            if ($(parentEl).hasClass("active")) {
                $(this).attr("aria-expanded", true);
                $(answer).attr("aria-hidden", false);
                $(answer).slideDown();
                $(icon).attr("src", "./assets/images/icon-minus.svg");
            } else {
                $(this).attr("aria-expanded", false);
                $(answer).attr("aria-hidden", true);
                $(answer).slideUp();
                $(icon).attr("src", "./assets/images/icon-plus.svg");
            }
        })

    })
})
