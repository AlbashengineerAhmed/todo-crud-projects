import React from "react";

const date = new Date();

function Footer(){
  return(
    <footer>
      <p> Copyright {date.getFullYear()} {`/${date.getMonth}`}. </p>
    </footer>
  )
}

export default Footer;
