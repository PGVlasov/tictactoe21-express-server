import React, { Component } from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";
import axios from "axios";
import Players from "../../../Containers/Field/Player";

export default class Links extends Component {
  state = {
    image: [],
    isAvatarAdded: false,
  };

  render() {
    return (
      <div className={classes.Uploader}>
        <Button
          type="success"
          onClick={this.addAvatar}
          disabled={!this.state.isAvatarAdded}
        >
          Сохранить фотографию
        </Button>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import classes from "./Links.module.css";
// import Button from "../Button/Button";

// class Links extends Component() {
//   render() {
//     return (
//       <div>
//         <p>something</p>
//         <Button></Button>
//       </div>
//     );
//   }
// }
// export default Links;
// const Links = () => {
//   const [links, setLinks] = useState();

//   async function componentDidMount(state) {
//     fetch("/createGame")
//       .then((res) => res.json())
//       .then(console.log("got something"))
//       .then((links) => setLinks({ links }));

//     // .then((links) => this.setState({ links }));
//   }

//   console.log(links);
//   return <div></div>;
// };

// export default Links;

//   {/* {links.map((link) => ( */}
//     <div className={classes.li} key={link.id}>
//       <a href={link.title} className={classes.a}>
//         {" "}
//         {"играть против:  " + link.creator}
//       </a>

//       <Button type="error">&times;</Button>
//     </div>
//   {/* ))} */}
