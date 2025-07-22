import { useState } from "react";

export default function SortTable() {
  const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@gmail.com" },
    { id: 2, name: "Jack", age: 28, email: "jack@gmail.com" },
    { id: 3, name: "Bob", age: 23, email: "bob@gmail.com" },
    { id: 4, name: "Aurora", age: 24, email: "aurora@gmail.com" },
  ];
  const [sortOrder, setSortOrder] = useState("asc");

  const sortUsers = [...users].sort((a, b) => {
    if (sortOrder === "asc") return a.age - b.age;
    else return b.age - a.age;
  });
  return (
    <div>
      <h2>SORT BY AGE</h2>
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        SORT AGE :{sortOrder}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {sortUsers.map((user) => (
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
