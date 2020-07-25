import React, { Component } from "react";

class Upload extends Component {
  state = {};

  onChange(e) {
    let files = e.target.files[0];
    console.log("file", files);

    // let reader = new FileReader();
    // console.log(reader);
    // reader.readAsDataURL(files[0]);

    // console.log(reader);

    let data = new FormData();
    data.append("my file", files, files.name);

    console.log("form data", data);

    const formData = { file: e.target.result };
    console.log("form data", formData);
    // reader.onload = (e) => {
    //   console.log("data", e.target.result);
    //   const formData = { file: e.target.result };
    //   console.log("form data", formData);
    // };
  }

  render() {
    return (
      <div>
        <h1>hello</h1>

        <div onSubmit={this.onFormSubmit}>
          <input type="file" name="file" onChange={(e) => this.onChange(e)} />
        </div>
        {/* <div>
          <h4> this is code is from mosh</h4>
          <input type="file" name="file" onChange={this.onChangeHandler} />

          <button onClick={this.onFileUpload}> Upload </button>
        </div> */}
      </div>
    );
  }
}

export default Upload;
