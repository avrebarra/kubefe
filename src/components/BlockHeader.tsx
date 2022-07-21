import * as React from "react";

import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaPowerOff } from "react-icons/fa";

import config from "../config";

type Props = {
  name: string;
};

export const Header: React.FC<Props> = (props) => {
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
      <div id="header" className="flex justify-between items-center">
        <div id="title" className="text-xl">
          <span className="font-bold">
            <Link className="" to={`/`}>
              #kubefe
            </Link>
          </span>
          <span>/{props.name}</span>
        </div>
        <div id="disconnect">
          <Link className="" to={`/`}>
            <Tooltip label="End Session" aria-label="A tooltip">
              <Button colorScheme={"red"} size="md" borderRadius={"full"}>
                <Icon as={FaPowerOff} />
              </Button>
            </Tooltip>
          </Link>
        </div>
      </div>
    </>
  );
};
