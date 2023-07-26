import React from "react";

const UserListItem = (props) => {
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default UserListItem;
