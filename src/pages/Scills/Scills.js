import React from "react";
import Header from "../../components/header/Header";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

function Scills(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Scills;