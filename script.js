import { movies } from "/seeds/movies.js";
const cardOnlyOn = document.querySelector(".card__onlyon__list");
const onlyOnRightClick = document.querySelector(".card__onlyon__svgright");
const onlyOnLeftClick = document.querySelector(".card__onlyon__svgleft");
const cardTop10 = document.querySelector(".card__top10__list");
const top10RightClick = document.querySelector(".card__top10__svgright");
const top10LeftClick = document.querySelector(".card__top10__svgleft");
const cardCentre = document.querySelector(".card__center__slider__list");
const cardCentreimg = document.querySelector(".card__center__slider__item");

const navigationHomeButton = document.querySelector(".navigation__list__home");
const navigationHome = document.querySelector(".navigation__home");

const navigationList = document.querySelector(".navigation__list");

let onlyonchildElementSize = 0;
let top10childElementSize = 0;
document.addEventListener("DOMContentLoaded", function () {
  const cardOnlyOnon = document.querySelector(".card__onlyon__img");
  onlyonchildElementSize = cardOnlyOnon.clientWidth;
  const cardTop1010 = document.querySelector(".card__top10__img");
  top10childElementSize = cardTop1010.clientWidth;
});

const cardTop10item = document.querySelector(".card__top10__item");
// const cardonlyonhover = document.querySelector(".card__onlyon__item");

// const hoverr = () => {
//   cardonlyonhover.addEventListener("", () => {
//     console.log("HELLLOOOOO");
//   });
// };
// hoverr();

//New Array
const newmovieslist = [];

//states

let numOnlyOn = 0;
let numTop10 = 0;

const addnewmovies = () => {
  movies.forEach((movie, i) => {
    const movielist = { movie };
    movie.value = i;
    newmovieslist.push(movielist);
  });
};
addnewmovies();
// ------------------------------ONLY ON STREAMIT SLIDER-----------------------------------

const onlyOnInterval = () => {
  cardOnlyOn.scrollBy(onlyonchildElementSize + 20, 0);
};
setInterval(onlyOnInterval, 3000);

const updatemovies = () => {
  let htmlstring = "";
  newmovieslist.map((movie) => {
    htmlstring =
      htmlstring +
      `<div class="card__onlyon__item">
        <div class="card__onlyon__imgdiv">
             <img
                src="${movie.movie.thumbnail}"
                class="card__onlyon__img"
                alt="King of Jungle"
              />
        </div>
        <div class="card__onlyon__content">
              <h1 class="card__onlyon__title">${movie.movie.title}</h1>
              <h2 class="card__onlyon__duration">Year : ${movie.movie.year}</h2>
        </div>
      </div>`;
  });
  cardOnlyOn.innerHTML = htmlstring;
};
updatemovies();

onlyOnRightClick.addEventListener("click", () => {
  cardOnlyOn.scrollBy(onlyonchildElementSize + 20, 0);
  console.log(onlyonchildElementSize);
});

onlyOnLeftClick.addEventListener("click", () => {
  cardOnlyOn.scrollBy(-(onlyonchildElementSize + 20), 0);
  console.log(onlyonchildElementSize);
});

// ------------------------------TOP 10 MOVIES-----------------------------------
// const Top10Click = () => {
//   top10RightClick.addEventListener("click", () => {
//     if (numTop10 < 5) {
//       numTop10 = numTop10 + 1;
//       updateTop10();
//     }
//   });

// top10LeftClick.addEventListener("click", () => {
//     if (numTop10 < 10) {
//       if (numTop10 > 0) {
//         numTop10 = numTop10 - 1;
//         updateTop10();
//       } else return;
//     }
//   });
// };
// Top10Click();

// const updateTop10 = () => {
//   let htmlstring = "";
//   let num = 0;
//   newmovieslist.forEach((movie) => {
//     if (movie.movie.value >= numTop10 && num < 5) {
//       htmlstring =
//         htmlstring +
//         `<div class="card__top10__item">
//              <img
//                  src="${movie.movie.thumbnail}"
//                     class="card__top10__img"
//                       alt="image"
//                           />
//                     <p class="card__top10__number">${movie.movie.value + 1}</p>
//         </div>`;
//       num++;
//     }
//   });
//   cardTop10.innerHTML = htmlstring;
// };
// updateTop10();

top10RightClick.addEventListener("click", () => {
  cardTop10.scrollBy(top10childElementSize + 80, 0);
});
top10LeftClick.addEventListener("click", () => {
  cardTop10.scrollBy(-(top10childElementSize + 80), 0);
});
const updateTop10 = () => {
  let htmlstring = "";
  newmovieslist.map((movie) => {
    if (movie.movie.value < 10) {
      htmlstring =
        htmlstring +
        `<div class="card__top10__item">
             <img
                 src="${movie.movie.thumbnail}"
                    class="card__top10__img"
                      alt="image"
                          />
                <p class="card__top10__number">${movie.movie.value + 1}</p>
        </div>`;
    }
  });
  cardTop10.innerHTML = htmlstring;
};
updateTop10();
// ------------------------------CARD CENTER-----------------------------------
// const updateCardCenter = async () => {
//   let htmlstring = "";
//   newmovieslist.map((movie) => {
//     htmlstring =
//       htmlstring +
//       `<div class="card__center__slider__item">
// <h1 class="card__center__slider__item__title">
//   ${movie.movie.title}
// </h1>
// <h2 class="card__center__slider__item__time">${movie.movie.genres}</h2>
// </div>`;
//     // cardCentreimg.style.backgroundImage =
//     //   "url(`https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/11/another-danger.jpg`)";
//   });
//   cardCentre.innerHTML = htmlstring;
// };
// updateCardCenter();

// navigationHomeButton.addEventListener("mouseover", () => {
//   navigationHome.classList.remove("hidden");
//   navigationHomeButton.style.color = "red";
//   navigationHomeButton.children.item(1).style.fill = "red";
// });

// navigationHome.addEventListener("mouseleave", () => {
//   navigationHome.classList.add("hidden");
//   navigationHomeButton.style.color = "#d1d0cf";
//   navigationHomeButton.children.item(1).style.fill = "#d1d0cf";
// });

console.log(navigationList.children);
