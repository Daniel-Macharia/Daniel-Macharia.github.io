
document.addEventListener('DOMContentLoaded', ()=>{

  document.querySelector("#home").addEventListener("click", event=>{
    console.log("home is clicked")
    let a = document.createElement("a");
    a.href = "#home-section";

    document.querySelector("body").appendChild(a);
    a.click();
    a.remove();
  });

  document.querySelectorAll('.option').forEach(
    option => {
      option.addEventListener('click', ()=>{
        let val = option.value;

        loadPage( getLinks()[val] );
        showMenuOptions(false);
      });
    }
  );

  document.querySelector('#menu-icon').onclick = (menuClickEvent)=>{
    showMenuOptions(true);
    menuClickEvent.stopPropagation();
  };


  document.querySelector('body').addEventListener('click', function(menuIcon){
    const menuOptionsShown = (document.querySelector('#option-div').style.display === 'none') ? false : true;

    if( menuOptionsShown )
    {
      showMenuOptions(false);
    }
  });

  document.querySelectorAll('.footer-contact-item').forEach(contact=>{
    contact.addEventListener('click', ()=>{
      loadPage(getContact()[contact.dataset.destinationUrl]);
    });
  });
});


function showMenuOptions(showOptions){
  if( showOptions )
  {
    document.querySelector('#option-div').style.display = "block";
    document.querySelector('#menu-icon').style.display = 'none';
  }
  else{
    document.querySelector('#option-div').style.display = "none";
    document.querySelector('#menu-icon').style.display = 'block';
  }
  
}


function setMenuListener()
{
  document.querySelector('#menu-icon').addEventListener('click', ()=>{
    showMenuOptions(true);
  });
}


function getLinks(){
  return {
       X:"#",
      about:"#about-section",
      services:"#services-section",
      resume:"#resume-section",
      contact:"#contact-section"
  }
}

function loadPage(url)
{
  if( url === '#')
  {
    return;
  }
  let anchor = document.createElement('a');
  anchor.href = url;
  anchor.style.display = "none";

  document.querySelector('body').append(anchor);
  anchor.click();

  anchor.remove();
}


function getContact(){
return {
  linkedIn: "https://www.linkedin.com/in/danny-ndung-u-46818a235?trk=contact-info",
  email: "mailto:ndungudanny444@gmail.com",
  github: "https://github.com/Daniel-Macharia"
};
}


/* about functions */

document.addEventListener('DOMContentLoaded', ()=>{
  let sectionCount = 0;
  document.querySelectorAll('.about-sub-section').forEach( section=>{

    if( sectionCount % 2 == 0 )
    {
      section.style.flexDirection = 'row-reverse';
    }

    sectionCount++;
  });
});


/* resume functions */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#resume-download-btn').addEventListener('click', () => {
      
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

//services function
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector("#more-projects").addEventListener("click", ()=>{
    loadPage("project.html");
  });
});


//contact function
document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector('#phone-call').addEventListener('click', ()=>{
    loadPage("tel:+254 712696965");
  });

  document.querySelector('#whatsapp-messenger').addEventListener('click', ()=>{
    loadPage("https://wa.me/254712696965?text=Hello!%20I`m%20interested%20in%20your%20services.");
  });

});


