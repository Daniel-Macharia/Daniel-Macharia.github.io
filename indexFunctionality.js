
document.addEventListener('DOMContentLoaded', ()=>{

  document.querySelectorAll('.option').forEach(
    option => {
      option.addEventListener('click', ()=>{
        //let val = selectedOption.style.dataset.optionValue;
        let val = option.value;
        console.log(`clicked ${val}`);
        showMenuOptions(false);
      });
    }
  );

  setMenuListener();
});


function showMenuOptions(showOptions){
  if( showOptions )
  {
    document.querySelector('#menu-icon').style.display = "none";
    document.querySelector('#options').style.display = "block";
  }
  else{
    document.querySelector('#options').style.display = "none";
    document.querySelector('#menu-icon').style.display = "block";
    setMenuListener();
  }
  
}


function setMenuListener()
{
  document.querySelector('#menu-icon').addEventListener('click', ()=>{
    showMenuOptions(true);
  });
}
