import React from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

const Links = ({ links }) => {
  return (
    <ul className={classes.ul}>
      {links.map((link) => (
        <li key={link.id}>
          {link.title}

          <Button type="error" className={classes.button}>
            &times;
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Links;