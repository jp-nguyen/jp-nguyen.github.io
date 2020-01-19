import React from "react";

import "../css/components.css";

const SocialItem = props => {
  const { href, classes } = props;
  return (
    <li class="social-item">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <i className={classes} />
      </a>
    </li>
  );
};

const Socials = () => {
  const items = [
    {
      href: "mailto:jeanpaul.m.nguyen@gmail.com",
      classes: "fas fa-envelope"
    },
    {
      href: "https://facebook.com/jean.paul.m.nguyen",
      classes: "fab fa-facebook"
    },
    {
      href:
        "https://open.spotify.com/user/1214933193?si:mAytVOO5Tzy2ctNTvjIuqQ",
      classes: "fab fa-spotify"
    },
    {
      href: "https://linkedin.com/in/jeanpaul-nguyen/",
      classes: "fab fa-linkedin"
    },
    {
      href: "https://github.com/jp-nguyen",
      classes: "fab fa-github"
    },
    {
      href: "resume",
      classes: "fas fa-file"
    }
  ];

  return (
    <ul class="socials">
      {items.map((item, index) => (
        <SocialItem href={item.href} classes={item.classes} key={index} />
      ))}
    </ul>
  );
};

export default Socials;
