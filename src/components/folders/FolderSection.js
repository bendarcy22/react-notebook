import React from 'react';

import folderList from './folderList.js';
import folderForm from './folderForm.js';

const FolderSection = props => {
  return (
    <div className="small-4 columns">
      <folderList />
      <folderForm />
    </div>
  )
}


export default FolderSection;
