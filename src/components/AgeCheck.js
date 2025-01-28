export default function AgeCheck({ userAge }) {
  return (
    <>
      {userAge >= 18 ? (
        <p>You are allowed to drive</p>
      ) : (
        <p>You are too young to drive</p>
      )}
    </>
  );
}
