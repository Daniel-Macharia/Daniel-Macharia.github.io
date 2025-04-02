document.addEventListener("DOMContentLoaded", ()=>{
    //init page
    /*document.querySelector("#source-button").addEventListener("click", ()=>{
        let aTag = document.createElement("a");
        aTag.href = "https://github.com/Daniel-Macharia/soko";

        document.querySelector("body").append(aTag);
        aTag.click();
        aTag.remove(); 
    });*/

    document.querySelector("#download-button").addEventListener("click", ()=>{
        let aTag = document.createElement("a");
        aTag.href = "./apps/mmust_cu_elders_dinner_release.apk";

        document.querySelector("body").append(aTag);
        aTag.click();
        aTag.remove();
    });
});
