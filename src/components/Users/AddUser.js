import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
// const initialValue = { username: "", age: "" };
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userInput, setUserInput] = useState(initialValue);
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    // setUserInput(initialValue);
    // console.log(userInput);
    //This means we are reseting the DOM, we typically shouldn't do this but on rare occasions like resetting an input form, we can allow it
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const inputChangeHandler = (input, value) => {
  //   setUserInput((prevInput) => {
  //     return {
  //       ...prevInput,
  //       [input]: value,
  //     };
  //   });
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={classes["input"]}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // onChange={(event) =>
            //   inputChangeHandler("username", event.target.value)
            // }
            // value={props.enteredName}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            // onChange={(event) => inputChangeHandler("age", event.target.value)}
            // value={props.enteredAge}
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
