import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestUsers } from "../state/ducks/users/actions";
import { User } from "../state/ducks/users/types";

const userItem = (user: User): React.ReactElement => (
  <div key={user.email} id="details">
    <label>Firstname: {user.firstname}</label>
    <br />
    <label>Lastname: {user.lastname}</label>
    <br />
    <label>Email: {user.email}</label>
  </div>
);

const UsersList: React.FC = (): React.ReactElement => {
  const users = useSelector(
    (state: { users: { data: User[]; loading: boolean } }) => state.users
  );
  const dispatch = useDispatch();
  const onClick = (): void => {
    dispatch(requestUsers());
  };

  return (
    <>
      <button onClick={onClick}>Get Users</button>
      <br />
      {users.loading ? <div>...loading</div> : users.data.map(userItem)}
    </>
  );
};

export default UsersList;
