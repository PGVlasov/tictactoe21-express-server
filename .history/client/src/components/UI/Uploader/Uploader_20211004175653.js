import React, { Component } from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";
import classes from "./Uploader.module.css";
import axios from "axios";
import Players from "../../../Containers/Field/Player";

export default class Uploader extends Component {
  addAvatar(event) {
    // const fdata = new FormData();
    // console.log(img);
    // fdata.append("image", this.state.image);
    // console.log(fdata);
    // try {
    //   const config = { headers: { "Content-Type": false } };
    //   axios({
    //     method: "post",
    //     url: "/avatar",
    //     data: fdata,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (response) {
    //       console.log(response);
    //     });
    // } catch (error) {
    //   console.log(error.response.data);
    // }

    document.location = "/player";
  }
  state = {
    image: [],
    isAvatarAdded: false,
  };

  onChange = (event, image) => {
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
      isAvatarAdded: true,
    });
    //URL.revokeObjectURL()
    this.state.image.push(event.target.files[0]);
    const img = this.state.image;
    console.log(this.state.isAvatarAdded);
    console.log(img[0]);
    // data   for submit
    // if (event.target.files && event.target.files[0]) {
    //   this.setState({
    // // image: URL.createObjectURL(event.target.files[0]),
    // img: event.target.files,
    //   });
    // const img = event.target.files;
    //return img;
    // }
    // const avatarFile = event.target.files;
    // console.log(avatarFile);
    // return avatarFile;
    const fdata = new FormData();
    console.log(img);
    fdata.append("image", img[0]);
    console.log(fdata);
    try {
      axios({
        method: "post",
        url: "/avatar",
        data: fdata,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
    } catch (error) {
      console.log(error.response.data);
    }
    this.addAvatar();
    // return fdata;
  };

  onSubmit() {
    console.log("!!!!!");
  }

  onImageUpdate() {}

  onImageRemove() {}

  render() {
    return (
      <div className={classes.Uploader}>
        <input
          type="file"
          nv-file-select=""
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <img
          id="target"
          className={classes.Photo}
          src={this.state.image}
          alt={"фото не выбрано"}
        />

        <Button
          type="success"
          onClick={this.addAvatar}
          disabled={!this.state.isAvatarAdded}
        >
          Сохранить фотографию
        </Button>
        {/* {imageList.map((image, index) => (
            <div key={index} className={classes.PlayerPhoto}>
              <div></div>
            </div>
          ))} */}
      </div>
    );
  }
}
