import React from "react";
import { Form, Input } from "semantic-ui-react";
import { inspectUser, duelUsers } from "../../services/userService";
import { useEffect, useState } from "react";
import User from "../User/User";

const Search = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("");

  const handleFetch = () => {
    setLoading(true);
    inspectUser().then((result) => {
      setData(result); // sets user data from github api
      setLoading(false); // then set 'loading' to false
    });
  };

  const handleSearch = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    setLoading(true);
    inspectUser(userInput).then((result) => {
      setData(result); // sets user data from github api
      setLoading(false); // then set 'loading' to false
    });
  };

  // Hook that runs after React has updated the DOM
  useEffect(() => {
    handleFetch();
  }, []);

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

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <User data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
