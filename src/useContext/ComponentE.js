import { useContext } from "react";
import { UserContext, WorkContext } from "../App";

export default function ComponentE() {
  const userName = useContext(UserContext);
  const workName = useContext(WorkContext);
  return (
    <div>
      mY NAME IS {userName} , I work at {workName}
    </div>
  );
}
