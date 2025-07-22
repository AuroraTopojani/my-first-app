import { UserContext, WorkContext } from "../App";
export default function ComponentF() {
  return (
    <UserContext.Consumer>
      {(userName) => {
        return (
          <WorkContext.Consumer>
            {(workName) => {
              return (
                <div>
                  HELLO MY NAME IS {userName} , I work at {workName}
                </div>
              );
            }}
          </WorkContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}
