document.addEventListener("DOMContentLoaded", ()=>{
    //console.log("page ready");
    document.querySelector("input").addEventListener("focus", event=>{
        //console.log(`focus on input ${event.target.placeholder}`);
        event.preventDefault();
    });

    document.querySelector("#file-download-button").addEventListener("click", ()=>{
        let input = document.querySelector("#file-download-url");
        if(input.value == "")
        {
            alert("please enter a name or url to search");
            return;
        }

        console.log(`searching "${input.value}"`);
        searchFile(input.value);
        input.value = "";
    });
});

function getFileByName(name)
{

}

function getFileByUrl(url)
{

}

function createResult(imageUrl, name, downloadUrl)
{
    let resultDiv = document.createElement("div");
    let resultImage = document.createElement("img");
    let resultName = document.createElement("p");
    let resultDownloadButton = document.createElement("button");

    resultDiv.className = "result-div";
    resultImage.className = "result-image";
    resultName.className = "result-name";
    resultDownloadButton.className = "result-download-button";

    resultImage.src = imageUrl;
    resultName.innerHTML = name;
    resultDownloadButton.innerHTML = "download";

    resultDownloadButton.addEventListener("click", ()=>{
        let aTag = document.createElement("a");
        aTag.href = downloadUrl;
        
        document.querySelector("body").appendChild(aTag);
        aTag.click();
        aTag.remove();
    });

    resultDiv.appendChild(resultImage);
    resultDiv.appendChild(resultName);
    resultDiv.appendChild(resultDownloadButton);

    return resultDiv;
}

function searchFile( input )
{
    for( let i = 0; i < 20; i++ )
    {
        document.querySelector("#result").appendChild(createResult(input, input, input));
    }
}