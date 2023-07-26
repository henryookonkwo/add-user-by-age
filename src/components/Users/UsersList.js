import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import UserListItem from "./UserListItem";
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <UserListItem
            key={user.id}
            id={user.id}
            onDelete={props.onDeleteItem}
          >{`${user.username} (${user.age} years old)`}</UserListItem>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
