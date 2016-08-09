import React from 'react';

const Folder = props => {
  let wrapperClass = "folder-row";
  let folderClass = "folder-name";
  if (props.folder.id === props.selectedFolder) {
    wrapperClass = wrapperClass + "blue-background";
    folderClass = folderClass + "white";
  }

  return (
    <div className={wrapperClass} id={props.folder.id}>
      <i id={props.folder.id} className="fa fa-folder color-blue" aria-hidden="true"></i>
      <span id={props.folder.id} className={folderClass}>{props.folder.name}</span>
    </div>
  )
}


export default Folder;
