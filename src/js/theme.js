// icons

const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector('.moon');

const themeSwicherBtns = document.querySelectorAll(".theme-switcher");

// theme vars

const userThme = localStorage.getItem("theme");
const systemThme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if( userThme === "dark" || (!userThme && systemThme)){
    document.documentElement.classList.add("dark");
    sunIcon.classList.add("hidden");
}else{
    document.documentElement.classList.remove("dark");
    moonIcon.classList.add("hidden");
    }


// icon switch

// function iconSwith (theme){ 
//     if((theme = "dark")){
//         sunIcon.classList.add("hidden");
//         moonIcon.classList.remove("hidden");
//     }
//     else if(theme === "light"){
//         sunIcon.classList.remove("hidden");
//         moonIcon.classList.add("hidden");
//     }
// }



//switch

themeSwicherBtns.forEach((item) =>{
    item.addEventListener("click" , (e) =>{
        const theme = e.target.dataset;
        console.log(theme);
    });
});
