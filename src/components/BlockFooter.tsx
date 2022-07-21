import * as React from "react";

import config from "../config";

type Props = {};

export const Footer: React.FC<Props> = ({}) => {
  // context, vars, and states
  const [readiness, setReadiness] = React.useState<boolean>(false);

  // helper funcs
  const funcLoadData = async () => {};

  // effects
  React.useEffect(() => {
    funcLoadData();
  }, [readiness]);

  return (
    <>
      <div className="footer mb-4 text-sm text-gray-400">
        <div className="text-gray-400 mb-4">. . . . . . . . </div>
        <div className="mb-3">
          <div>
            small experiment by
            <a href="https://avrebarra.github.io/"> @avrébarra</a>
          </div>
          <div>
            <a href="https://github.com/avrebarra/kubefe">
              check out the repo in github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
