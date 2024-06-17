
document.addEventListener('DOMContentLoaded', ()=>{
  showMenuOptions(false);

  document.querySelectorAll('.option').forEach(
    option => {
      option.addEventListener('click', ()=>{
        //let val = selectedOption.style.dataset.optionValue;
        let val = option.value;
        console.log(`clicked ${val}`);
        loadPage( getLinks()[val] );
        showMenuOptions(false);
      });
    }
  );

  //setMenuListener();
  document.querySelector('#menu-icon').onclick = ()=>{
    showMenuOptions(true);
    console.log('menu icon clicked');
    return true;
  };


  document.querySelector('body').addEventListener('click', function(menuIcon){
    //showMenuOptions(false);
    console.log('body clicked');
  });

  //loadFrames();
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

function loadFrames()
{
  let frameNumber = 1;
  document.querySelectorAll('iframe').forEach(frame=>{
    let component = document.createElement('html');
    component.href = 'resume.html';

    frame.height = "" + (4 * component.height);

    frameNumber++;
  });
}