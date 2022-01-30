import React from "react";
import { Form, Input } from "semantic-ui-react";
import { inspectUser, duelUsers } from "../../services/userService";
import { useEffect, useState } from "react";
import User from "../User/User";

const Search = () => {
  const [data, setData] = useState({});
  const [userInput, setUserInput] = useState("");

  // Hook that runs after React has updated the DOM
  useEffect(() => {
    setData(inspectUser());
  }, []);

  const handleSearch = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    setData(inspectUser(userInput));
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input
            action="Search"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </Form.Field>
      </Form>

      <User data={data} />
    </div>
  );
};

export default Search;
