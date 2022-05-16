import React, { Component } from "react";
import ReactDOM from "react-dom";

class FileUpload extends Component {
  handleFileUpload = event => {
    console.log(event.target.files[0].name);
  };

  render() {
    return (
      <React.Fragment>
        <input
          ref="fileInput"
          onChange={this.handleFileUpload}
          type="file"
          style={{ display: "none" }}
          // multiple={false}
        />
        <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
      </React.Fragment>
    );
  }
}

export default FileUpload