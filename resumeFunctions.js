

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#download-btn').addEventListener('click', () => {
        console.log("Clicked donwload");
        downloadResume();
    });
});

function downloadResume()
{
    let resume = document.createElement('a');
    //add a href to the resume url
    resume.href = "images/resume.pdf";
    //set the name for the downloaded resume
    resume.download = "daniel-macharia-resume.pdf";

    //set the anchor style so that it does not appear on the body
    resume.style.display = "none";

    //add the created anchor to the body of the html
    document.querySelector('body').append(resume);

    //trigger a click event on the added anchor so the resume downloads
    resume.click();

    //now that the resume has downloaded, remove it from the body
    resume.remove();
}

