import React from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

const Links = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li className={classes.Link}>
          {" "}
          <a
            className={classes.a}
            href="http://localhost:3000/game"
            key={link.id}
          >
            {link.title}
            <Button type="error">удалить</Button>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
