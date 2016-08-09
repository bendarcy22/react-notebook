import React from 'react';

import folderList from './FolderList.js';
import folderForm from './FolderForm.js';

const FolderSection = props => {
  return (
    <div className="small-4 columns">
      <FolderList
        folders={props.folders}
        selectedFolder={props.selectedFolder}
      />
      <FolderForm
        newFolderValue={props.newFolderValue}
      />
    </div>
  )
}

export default FolderSection;
