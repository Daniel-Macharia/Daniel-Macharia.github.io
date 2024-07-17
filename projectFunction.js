
document.addEventListener('DOMContentLoaded', ()=>{
  for( let i = 0; i < 10; i++ )
  {
    document.querySelector('#wrapper').append( getProject(i) );
  }
});

function getProject(id)
{
  let projectImage = document.createElement('img');
  projectImage.className = "project-image";
  projectImage.src = "images/android_icon.png";

  let projectName = document.createElement('p');
  projectName.className = "project-name";
  projectName.innerText = `project ${id + 1}`;

  let buttonDiv = document.createElement('div');
  buttonDiv.className = "project-button-div";

  let projectSourceButton = document.createElement('button');
  projectSourceButton.className = "project-button";
  projectSourceButton.innerText = "Source Code";

  let projectDownloadButton = document.createElement('button');
  projectDownloadButton.className = "project-button";
  projectDownloadButton.innerText = "Download App";

  buttonDiv.append(projectSourceButton);
  buttonDiv.append(projectDownloadButton);

  let projectNode = document.querySelector('.project-item').cloneNode();
  projectNode.append(projectImage);
  projectNode.append(projectName);
  projectNode.appendChild(buttonDiv);

  return projectNode;
}


function readFromCSVFile(path)
{
  fetch(path)
  .then(response=>{
    let fileReader = response.body.getReader();
    let decoder = new TextDecoder();
    let currentLineData = "";
    let totalLines = [];

    fileReader.read()
    .then( function readData(progress){

      let data = decoder.decode(progress.value || "", {stream:progress.done});
      let lines = data.split("\n");

      if( lines.length < 2 )
      {
        currentLineData += lines[0];
      }
      else
      {
        lines.forEach(( element, index, array)=>{
          currentLineData += element;
          totalLines.push(currentLineData);

          if( index < (lines.length - 1) )
          {
            currentLineData = "";
          }

        });
      }

      totalLines.forEach(line=>{
        console.log(line);
      });

      totalLines = [];

      if(progress.done)
      {
        console.log({done:progress.done});
      }

      return readData();

    });
  });
}

//readFromCSVFile("./data.txt");


// import {readTextBasedData} from "portfolio_module";

// readTextBasedData("./data.txt")
// .then( response => { response.text() })
// .then( text => {
//   console.log(text);
// });

function readCSVFile(path)
{
  fetch(path)
  .then( response => {
    return response.text();
  })
  .then( text => {
    try
    {
      console.log(text);
    }catch( error )
    {
      console.log(`Error getting projects: ${error.message}`);
    }
  })
  .catch( error => {
    console.log(`Error: ${error}`);
  });
}

readCSVFile("./data.txt");