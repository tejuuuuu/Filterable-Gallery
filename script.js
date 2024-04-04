
document.addEventListener("DOMContentLoaded", function() {
    const allBtn = document.querySelector(".allBtn");
    const catBtn = document.querySelector(".catBtn");
    const dogBtn = document.querySelector(".dogbtn");
    const pandaBtn = document.querySelector(".pandaBtn");
    const dogs = document.querySelector(".dogs");
    const cats = document.querySelector(".cats");
    const pandas = document.querySelector(".pandas");

    function hideAll() {
        dogs.style.display = "none";
        cats.style.display = "none";
        pandas.style.display = "none";
    }

    allBtn.addEventListener("click", function() {
        dogs.style.display = "";
        cats.style.display = "";
        pandas.style.display = "";
    });

    catBtn.addEventListener("click", function() {
        hideAll();
        cats.style.display = "";
    });

    dogBtn.addEventListener("click", function() {
        hideAll();
        dogs.style.display = "";
    });

    pandaBtn.addEventListener("click", function() {
        hideAll();
        pandas.style.display = "";
    });
});
