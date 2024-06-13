

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

