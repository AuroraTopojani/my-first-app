const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 20 },
  { id: 3, name: "Naser", age: 20 },
];

export default function StudentList() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} {student.age}
        </li>
      ))}
    </ul>
  );
}
