import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const User = (props) => {
  console.log(`user component rendered`);
  return (
    <div className="container">
      <Card>
        <Image src={props["avatar-url"]} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>{props.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default User;
