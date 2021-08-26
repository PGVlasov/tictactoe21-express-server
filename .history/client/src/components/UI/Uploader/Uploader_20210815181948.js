import React, { Component } from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";
import classes from "./Uploader.module.css";
import axios from "axios";

const state = {
  image: [],
  isAvatarAdded: true,
};
const fdata = new FormData();

function addAvatar(event) {
  //event.preventDefault();
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
}

export default function Uploader() {
  //   const [images, setImages] = React.useState([])

  function onChange(event) {
    console.log(event.target.files[0]);
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
      isAvatarAdded: true,
    });
    this.state.image.push(event.target.files[0]);
    const img = this.state.image;
    console.log(this.state.isAvatarAdded);
    console.log(img[0]);

    const fdata = new FormData();
    console.log(img);
    fdata.append("image", img[0]);
    console.log(fdata);

    return fdata;
  }

  //   onImageUpdate() {}

  //   onImageRemove() {}

  return (
    <div className={classes.Uploader}>
      <form>
        <input type="file" nv-file-select="" onChange={() => onChange} />
        <img
          id="target"
          className={classes.Photo}
          src={state.image}
          alt={"фото не выбрано"}
        />

        <Button
          type="success"
          onClick={() => addAvatar()}
          disabled={!state.isAvatarAdded}
        >
          Сохранить фотографию
        </Button>
      </form>

      {/* {imageList.map((image, index) => (
          <div key={index} className={classes.PlayerPhoto}>
            <div></div>
          </div>
        ))} */}
    </div>
  );
}
