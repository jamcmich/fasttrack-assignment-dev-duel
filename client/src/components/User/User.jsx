import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const User = (props) => {
  const handleTitles = async () => {
    let result = await props.data.titles.join(", ");
    return result;
  };

  return (
    <div className="container">
      <Card>
        <Image src={props.data["avatar-url"]} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {props.data.name}
            <br></br>({props.data.username})
          </Card.Header>

          <Card.Meta>
            <span className="location">{props.data.location}</span>
          </Card.Meta>

          <Card.Description>{props.data.bio}</Card.Description>

          <br></br>

          <Card.Description>
            <Icon name="certificate" />
            titles
          </Card.Description>

          <br></br>

          <Card.Description>
            <Icon name="code" />
            {props.data["favorite-language"]}
          </Card.Description>

          <br></br>

          <Card.Description>
            <Icon name="star" />
            {props.data["total-stars"]} Stars
          </Card.Description>

          <Card.Description>
            <Icon name="star outline" />
            {props.data["highest-starred"]} Highest Starred
          </Card.Description>

          <br></br>

          <Card.Description>
            <Icon name="folder open" />
            {props.data["public-repos"]} Public Repos
          </Card.Description>

          <Card.Description>
            <Icon name="folder open outline" />
            {props.data["perfect-repos"]} Perfect Repos
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Followers: {props.data.followers}
          </a>

          <a>
            <Icon name="user" />
            Following: {props.data.following}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default User;
