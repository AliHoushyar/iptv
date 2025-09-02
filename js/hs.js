$(document).ready(function () {
    let $backBtn = $("#backBtnHS");
    let $cards = $(".bottonContCardSingle");
    let currentCardIndex = 0;
    let isBackBtnActive = false;

    // Initialize first card
    $cards.removeClass("flipped");
    updateCardActive();

    // Handle keyboard navigation
    $(document).on("keydown", function (e) {
        if (e.key === "ArrowUp") {
            if (isBackBtnActive) {
                // Do nothing if backBtn is already active
                return;
            }
            // Remove flipped class from all cards
            $cards.removeClass("flipped");
            if (currentCardIndex === 0) {
                // Move to backBtn from top card
                $cards.removeClass("active").find(".card-inner").removeClass("active");
                $backBtn.addClass("active");
                isBackBtnActive = true;
            } else {
                // Move to previous card
                currentCardIndex = (currentCardIndex - 1 + $cards.length) % $cards.length;
                updateCardActive();
                isBackBtnActive = false;
                $backBtn.removeClass("active");
            }
        } else if (e.key === "ArrowDown") {
            // Remove flipped class from all cards
            $cards.removeClass("flipped");
            if (isBackBtnActive) {
                // Move to first card from backBtn
                $backBtn.removeClass("active");
                isBackBtnActive = false;
                currentCardIndex = 0;
                updateCardActive();
            } else {
                // Move to next card
                currentCardIndex = (currentCardIndex + 1) % $cards.length;
                updateCardActive();
                isBackBtnActive = false;
                $backBtn.removeClass("active");
            }
        } else if (e.key === "Enter") {
            if (isBackBtnActive) {
                // Trigger backBtn click
                $backBtn.trigger("click");
            } else {
                // Trigger click on active card
                $cards.eq(currentCardIndex).trigger("click");
            }
        }
    });

    // Update active card and its card-inner
    function updateCardActive() {
        $cards.removeClass("active").find(".card-inner").removeClass("active");
        $cards.eq(currentCardIndex).addClass("active").find(".card-inner").addClass("active");
    }

    // Navigate back to index page
    $(document).on("click", "#backBtnHS", function () {
        $cards.removeClass("flipped").removeClass("active").find(".card-inner").removeClass("active");
        window.location = "index.html";
    });

    // Flip card on click
    $(document).on("click", ".bottonContCardSingle", function () {
        $(this).toggleClass("flipped");
    });
});