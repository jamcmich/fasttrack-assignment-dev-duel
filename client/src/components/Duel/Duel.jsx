import { React, useState } from "react";
import Search from "../Search/Search";
import { Container } from "./Duel.styles";
import { Icon } from "semantic-ui-react";

const Duel = () => {
  const [data, setData] = useState({});

  const handleClick = (userdata) => {
    console.log("this is a test");
  };

  return (
    <Container>
      <Search />

      <div className="container--crosshairs">
        <Icon name="crosshairs" onClick={handleClick} />
        <p>Click the icon to duel!</p>
      </div>

      <Search />
    </Container>
  );
};

export default Duel;
