import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import "./App.css";

function App() {
  const [validUsers, setValidUsers] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const addUserHandler = (enteredName, enteredAge) => {
    // if (Number(enteredData.age) > 0) {
    setValidUsers((prevUsersList) => {
      const updatedValidUsers = [...prevUsersList];
      updatedValidUsers.unshift({
        username: enteredName,
        age: enteredAge,
        id: Math.random().toString(),
      });

      // console.log(updatedValidUsers);
      return updatedValidUsers;
    });
    setIsValid(true);
    // }
  };
  const deleteItemHandler = (userId) => {
    setValidUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      // console.log(updatedUsers);
      return updatedUsers;
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />

      {!isValid && <p style={{ textAlign: "center" }}>No users added yet</p>}
      {isValid && (
        <UsersList items={validUsers} onDeleteItem={deleteItemHandler} />
      )}
    </Fragment>
  );
}

export default App;
