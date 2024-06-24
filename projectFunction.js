
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