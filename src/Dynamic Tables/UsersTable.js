import { useState } from "react";

export default function UsersTable() {
  const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@gmail.com" },
    { id: 2, name: "Jack", age: 28, email: "jack@gmail.com" },
    { id: 3, name: "Bob", age: 23, email: "bob@gmail.com" },
    { id: 4, name: "Aurora", age: 24, email: "aurora@gmail.com" },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const filtertedUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h2>SEARCH BY NAME</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filtertedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
