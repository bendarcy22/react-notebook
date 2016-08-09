import React from 'react';
import Folder from './Folder.js'

const FolderList = props => {
  let folders = props.folders.map(folder => {
    return (
      <Folder
        key={folder.id}
        folder={folder}
        selectedFolder={props.selectedFolder}
      />
    );
  });
  return (
    <div>
      {folders}
    </div>
  )
}

export default FolderList;
