
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
  projectSourceButton.setAttribute("data-githubLink", project.githubLink);

  projectSourceButton.addEventListener("click", clickEvent => {
    try{
      let aTag = document.createElement("a");
      aTag.href = clickEvent.target.getAttribute("data-githubLink");

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
  projectDownloadButton.innerText = "Download App";
  projectDownloadButton.setAttribute("data-downloadLink", project.downloadLink);

  projectDownloadButton.addEventListener("click", clickEvent => {
    try{
      let dLink = clickEvent.target.getAttribute("data-downloadLink");

      if( dLink == "download")
      {
        alert("Sorry, this app is not available for download.");
        return;
      }

      let aTag = document.createElement("a");
      aTag.href = dLink;

      document.querySelector('body').appendChild(aTag);
      aTag.click();
      aTag.remove();
    }catch( error )
    {
      console.log(`could not download document: ${error.message}`);
    }
  });

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
        console.log(line);
        line.replace(/^"([\w\s]+)","(\.\/\w+\/\w+\.\w+)","([\w\s-\.,]+)","(https:\/\/github\.com\/Daniel-Macharia\/\w+)|(https:\/\/mmust-cu-elders-dinner.vercel.app)","([\w\s\/.]+)|(https:\/\/mmust-cu-elders-dinner.vercel.app)"$/, (_, one, two, three, four, five)=>{
          let ob = {};
          ob.name = one;
          ob.imageUrl = two;
          ob.desc = three;
          ob.githubLink = four;
          ob.downloadLink = five;
          console.log(ob);
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
