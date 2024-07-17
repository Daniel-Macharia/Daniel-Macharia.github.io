
document.addEventListener('DOMContentLoaded', ()=>{
  //document.querySelector('#wrapper').append( getProject(i) );
  readCSVFile("./data.csv");
});

function addProject(project)
{
  let projectImage = document.createElement('img');
  projectImage.className = "project-image";
  projectImage.src = project.imageUrl;

  let projectName = document.createElement('p');
  projectName.className = "project-name";
  projectName.innerText = project.name;

  let projectDesc = document.createElement('p');
  projectDesc.className = "project-desc";
  projectDesc.innerText = project.desc;

  let buttonDiv = document.createElement('div');
  buttonDiv.className = "project-button-div";

  let projectSourceButton = document.createElement('button');
  projectSourceButton.className = "project-button";
  projectSourceButton.innerText = "View Source Code";
  projectSourceButton.data.link = project.githubLink;

  projectSourceButton.addEventListener("click", btn => {
    try{
      let aTag = document.createElement("a");
      aTag.href = btn.dataset.link;
      
      document.querySelector('body').append(aTag);
      aTag.click();
      aTag.remove();
    }catch( error )
    {
      console.log(`Error loading github source code: ${error}`);
    }
  });

  let projectDownloadButton = document.createElement('button');
  projectDownloadButton.className = "project-button";
  projectDownloadButton.innerText = project.desc;//"Download App";

  buttonDiv.append(projectSourceButton);
  buttonDiv.append(projectDownloadButton);

  let projectNode = document.createElement('div');
  projectNode.className = "project-item";
  projectNode.append(projectImage);
  projectNode.append(projectName);
  projectNode.append(projectDesc);
  projectNode.appendChild(buttonDiv);

  document.querySelector("#wrapper").append(projectNode);
  //return projectNode;
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
      let lines = text.split(/\r?\n/);

      for( let line of lines )
      {
        line.replace(/^"([\w\s]+)","(\.\/\w+\/\w+\.\w+)","([\w\s-\.,]+)","(https:\/\/github\.com\/Daniel-Macharia\/\w+)","([\w\s]+)"$/, (_, one, two, three, four, five)=>{
          let ob = {};
          ob.name = one;
          ob.imageUrl = two;
          ob.desc = three;
          ob.githubLink = four;
          ob.downloadLink = five;
          addProject(ob);
          return ob;
        });
      }
    }catch( error )
    {
      console.log(`Error getting projects: ${error.message}`);
    }
  })
  .catch( error => {
    console.log(`Error: ${error}`);
  });
}

//readCSVFile("./data.csv");