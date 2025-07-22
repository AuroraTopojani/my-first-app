import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
