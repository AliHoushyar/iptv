$(document).ready(function () {
    let $menus = $(".singleMenu");
    let $slides = $(".slideShowImg");
    let $rightImg = $(".rightTextImg");
    let $rightTitle = $(".rightTextTxt");
    let $rightSub = $(".rightTextSub");
    let $underTxt = $(".singleMenuIconTxt")
    let $sh1 = $(".shineImg")
    let $sh2 = $(".shineImg2")

    // Data for right text (index-based)
    let rightTextData = [
        {
            img: "./img/logo.png",
            title: "خوش آمدید، جناب آقای هوشیار",
            sub: "خوشحالیم که اقامت در مجموعه ما را برگزیده‌اید و حضور شما برایمان افتخاری بزرگ است . <br> امیدواریم لحظاتی به‌یادماندنی و تجربه‌ای دلنشین در کنار ما داشته باشید."
        },
        {
            img: "./img/roomlogo.png",
            title: "خدمت‌رسانی به شما افتخار ماست",
            sub: "هر آنچه برای راحتی و لذت شما نیاز دارید، با تیم خدمات هتل ما در دسترس است. <br> امیدواریم از خدمات ما بهره‌مند شوید و اقامتی دلنشین و خاطره‌انگیز در هتل داشته باشید."
        },
        {
            img: "./img/reslogo.png",
            title: "لذت طعم‌های ویژه هتل",
            sub: "از تجربه طعم‌های خوشمزه و متنوع رستوران هتل، راحت و مستقیم از اتاق خود لذت ببرید. <br> کافی است سفارش دهید تا تیم ما آن را برای شما آماده کند."
        },
        {
            img: "./img/juice.png",
            title: "لحظاتی دلنشین با نوشیدنی‌های ما",
            sub: "از منوی متنوع کافی‌شاپ هتل می‌توانید به راحتی و مستقیم از اتاق خود سفارش دهید. <br> تیم ما آماده است تا نوشیدنی دلخواهتان را برایتان آماده کند."
        },
        {
            img: "./img/tvb.png",
            title: "اوقات خوش با کانال‌های تلویزیونی",
            sub: "کانال‌های متنوع تلوزیونی برای تجربه لحظاتی آرام و دلنشین در اتاق خود. <br> هر برنامه‌ای که می‌پسندید، آماده است تا اوقات شما را سرگرم و خاطره‌انگیز کند."
        },
        {
            img: "./img/moviet.png",
            title: "تجربه‌ای سینمایی در اتاق شما",
            sub: "فیلم‌های منتخب ما را تماشا کنید و از لحظاتی آرام و دلنشین لذت ببرید. <br> هر ژانر و داستانی که می‌پسندید، آماده است تا تجربه‌ای به‌یادماندنی برای شما رقم بزند."
        },
        {
            img: "./img/moviet.png",
            title: "تجربه‌ای سینمایی در اتاق شما",
            sub: "فیلم‌های منتخب ما را تماشا کنید و از لحظاتی آرام و دلنشین لذت ببرید. <br> هر ژانر و داستانی که می‌پسندید، آماده است تا تجربه‌ای به‌یادماندنی برای شما رقم بزند."
        },
        {
            img: "./img/moviet.png",
            title: "تجربه‌ای سینمایی در اتاق شما",
            sub: "فیلم‌های منتخب ما را تماشا کنید و از لحظاتی آرام و دلنشین لذت ببرید. <br> هر ژانر و داستانی که می‌پسندید، آماده است تا تجربه‌ای به‌یادماندنی برای شما رقم بزند."
        },
        {
            img: "./img/moviet.png",
            title: "تجربه‌ای سینمایی در اتاق شما",
            sub: "فیلم‌های منتخب ما را تماشا کنید و از لحظاتی آرام و دلنشین لذت ببرید. <br> هر ژانر و داستانی که می‌پسندید، آماده است تا تجربه‌ای به‌یادماندنی برای شما رقم بزند."
        },
        {
            img: "./img/moviet.png",
            title: "تجربه‌ای سینمایی در اتاق شما",
            sub: "فیلم‌های منتخب ما را تماشا کنید و از لحظاتی آرام و دلنشین لذت ببرید. <br> هر ژانر و داستانی که می‌پسندید، آماده است تا تجربه‌ای به‌یادماندنی برای شما رقم بزند."
        },
        {
            img: "./img/moviet.png",
            title: "تجربه‌ای سینمایی در اتاق شما",
            sub: "فیلم‌های منتخب ما را تماشا کنید و از لحظاتی آرام و دلنشین لذت ببرید. <br> هر ژانر و داستانی که می‌پسندید، آماده است تا تجربه‌ای به‌یادماندنی برای شما رقم بزند."
        },
        {
            img: "./img/moviet.png",
            title: "تجربه‌ای سینمایی در اتاق شما",
            sub: "فیلم‌های منتخب ما را تماشا کنید و از لحظاتی آرام و دلنشین لذت ببرید. <br> هر ژانر و داستانی که می‌پسندید، آماده است تا تجربه‌ای به‌یادماندنی برای شما رقم بزند."
        },
        {
            img: "./img/moviet.png",
            title: "تجربه‌ای سینمایی در اتاق شما",
            sub: "فیلم‌های منتخب ما را تماشا کنید و از لحظاتی آرام و دلنشین لذت ببرید. <br> هر ژانر و داستانی که می‌پسندید، آماده است تا تجربه‌ای به‌یادماندنی برای شما رقم بزند."
        }
    ];

    // First menu & slide active
    changeActive(0);

    // Handle keyboard navigation
    $(document).on("keydown", function (e) {
        let $currentMenu = $menus.filter(".active");
        let index = $menus.index($currentMenu);

        if (e.key === "ArrowRight") {
            let nextIndex = (index + 1) % $menus.length;
            changeActive(nextIndex);
        } else if (e.key === "ArrowLeft") {
            let prevIndex = (index - 1 + $menus.length) % $menus.length;
            changeActive(prevIndex);
        } else if (e.key === "Enter") {
            $currentMenu.trigger("click");
        }
    });

    // Update active menu and slide
    function changeActive(i) {
        $menus.removeClass("active").eq(i).addClass("active");
        $menus.removeClass("Lpreactive").eq((i-1) % $menus.length).addClass("Lpreactive");
        $menus.removeClass("LLPre").eq((i-2) % $menus.length).addClass("LLPre");
        $menus.removeClass("Rpreactive").eq((i+1) % $menus.length).addClass("Rpreactive");
        $menus.removeClass("RRPre").eq((i+2) % $menus.length).addClass("RRPre");
        $slides.removeClass("active").eq(i).addClass("active");
        $underTxt.removeClass("active").eq(i).addClass("active");
        $sh1.removeClass("active").eq(i).addClass("active");
        $sh2.removeClass("active").eq(i).addClass("active");

        // Update text content
        $(".rightText").fadeOut(300, function () {
            $rightImg.attr("src", rightTextData[i].img);
            $rightTitle.text(rightTextData[i].title);
            $rightSub.html(rightTextData[i].sub);
            $(this).fadeIn(250);
        });
    }

    // Navigate to hotel page
    $(document).on("click", "#hotelServ", function () {
        window.location = "hotel.html";
    });

    $(document).on("click", "#movies", function () {
        window.location = "movie.html";
    });
});