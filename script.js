const arrows = document.querySelectorAll(".arrow");
const movieLists = querySelectorAll(".movie-list");

arrows.forEach(arrow, i) => {
    const itemNumber = movieLists[1].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if(itemNumber - (4 + clickCounter) >= 0){
            movieLists[i].style.transform = `transilateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300 
            }px)`;
        }else{
            movieLists[i].style.transform = "transilateX(0)";
            clickCounter = 0;
        }
    });
    console.log(movieLists[i].querySelectorAll("img").length);
};