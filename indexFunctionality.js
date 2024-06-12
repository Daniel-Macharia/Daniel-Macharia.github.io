
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

  setMenuListener();
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
      about:"about.html",
      services:"services.html",
      resume:"resume.html",
      contact:"contact.html"
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

