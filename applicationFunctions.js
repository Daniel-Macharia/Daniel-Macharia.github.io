document.addEventListener("DOMContentLoaded", ()=>{
    //init page
    document.querySelector("#source-button").addEventListener("click", ()=>{
        let aTag = document.createElement("a");
        aTag.href = "https://github.com/Daniel-Macharia/CrossesAndNaughts";

        document.querySelector("body").append(aTag);
        aTag.click();
        aTag.remove();
    });

    document.querySelector("#download-button").addEventListener("click", ()=>{
        let aTag = document.createElement("a");
        aTag.href = "./apps/tic_tac_toe.apk";

        document.querySelector("body").append(aTag);
        aTag.click();
        aTag.remove();
    });
});