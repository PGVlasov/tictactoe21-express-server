import React from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";
import classes from "./Uploader.module.css";
import axios from "axios";

export default function Uploader() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data   for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    console.log(imageList);
    const data = new FormData();
    console.log(imageList[0]);
    data.append("image", imageList[0]);
    console.log(data);

    return data;
  };
  function addAvatar(data) {
    try {
      let uploading = true;
      //using a variable because setState did not trigger fast enough to avoid redundant function calls

      // const data = new FormData();
      // console.log(imageList[0]);
      // data.append("yourFieldHere", "yourValueHere");
      // data.append("image", imageList[0]);
      console.log(data);
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const string = "test";
      axios
        .post("/avatar", string)
        .then(console.log("added"))
        //   .then(({ data }) => {
        //     uploading = false;
        //     if (data && data.length > 0) {
        //       this.setState({ imagePath: data[0] });
        //     } else {
        //       console.log("No URL returned");
        //     }
        //   })
        .catch((error) => {
          uploading = false;
          console.log(error.response.data);
        });
      // fetch("/avatar", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   //   body: JSON.stringify(imageList[0]),
      //   body: imageList[0],
      // })
      //   .then(console.log("avatar added"))
      //   .then(console.log(imageList[0]));
      // // document.location.href = "/Player";
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className={classes.Uploader}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          //   addAvatar,
          dragProps,
        }) => (
          <div className={classes.PlayerPhoto}>
            <Button type="success" onClick={onImageUpload} {...dragProps}>
              Выберите фотографию
            </Button>
            {imageList.map((image, index) => (
              <div key={index} className={classes.PlayerPhoto}>
                <img src={image.data_url} alt="Аватара пока нет" width="100" />
                <div className={classes.ImageWrapper}>
                  <Button type="primary" onClick={() => onImageUpdate(index)}>
                    Обновить фотографию
                  </Button>
                  <Button type="error" onClick={() => onImageRemove(index)}>
                    Удалить фотографию
                  </Button>
                </div>
                <Button type="success" onClick={() => addAvatar(imageList)}>
                  Сохранить фотографию
                </Button>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

// import React, { Component } from "react";
// //import ReactDOM from "react-dom";
// import ImageUploading from "react-images-uploading";
// import Button from "../../UI/Button/Button";
// import classes from "./Uploader.module.css";

// export default class Uploader extends Component {
//   //     const [images, setImages] = React.useState([]);
//   //  const maxNumber = 1

//   state = {
//     imageList: [],
//     maxNumber: 1,
//   };
//   onChange = (imageList, addUpdateIndex) => {
//     // data   for submit
//     let images;
//     imageList.push(images);
//     console.log(imageList, addUpdateIndex);
//     // setImages(imageList);
//   };

//   addAvatar(event) {
//     event.preventDefault();
//     let photo;
//     fetch("/avatar", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(photo),
//     }).then(console.log("avatar added"));
//   }
//   render() {
//     return (
//       <div className={classes.Uploader}>
//         <ImageUploading
//           multiple
//           value={this.images}
//           onChange={this.onChange}
//           maxNumber={this.maxNumber}
//           dataURLKey="data_url"
//         >
//           {({
//             imageList,
//             onImageUpload,
//             onImageUpdate,
//             onImageRemove,
//             dragProps,
//           }) => (
//             // write your building UI
//             <div className={classes.PlayerPhoto}>
//               <Button type="success" onClick={onImageUpload} {...dragProps}>
//                 Выберите фотографию
//               </Button>
//               {imageList.map((image, index) => (
//                 <div key={index} className={classes.PlayerPhoto}>
//                   <img
//                     src={image.data_url}
//                     alt="Аватара пока нет"
//                     width="100"
//                   />
//                   <div className={classes.ImageWrapper}>
//                     <Button type="primary" onClick={() => onImageUpdate(index)}>
//                       Обновить фотографию
//                     </Button>
//                     <Button type="error" onClick={() => onImageRemove(index)}>
//                       Удалить фотографию
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {/* <Button type="success" onClick={addAvatar}>
//           Добавить фотографию
//         </Button> */}
//         </ImageUploading>
//       </div>
//     );
//   }
// }
