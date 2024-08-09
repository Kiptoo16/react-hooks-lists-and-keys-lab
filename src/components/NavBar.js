import React from "react";
//import React from 'react';

function NavBar() {
  const link = ["home", "about", "projects"];

  return <nav>{}</nav>;
  const links = ['home', 'about', 'projects'];
  const Links = links.map((link) => {
    return (
      <a key={link} href={'#' + link}>
        {link}
      </a>
    );
  });
  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {link}
    </nav>
  );
}

export default NavBar;