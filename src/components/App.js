import React from 'react';
import FolderSection from './folders/FolderSection.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      selectedFolder: null,
      newFolderValue: ''
    };

  }
  render() {
    return (
      <div className="row">
        <FolderSection
          folders={this.state.folders}
          selectedFolder={this.state.selectedFolder}
          newFolderValue={this.state.newFolderValue}
        />
      </div>
    )
  };
};

export default App;
