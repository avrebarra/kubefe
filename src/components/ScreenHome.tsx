import * as React from "react";
import { Link } from "react-router-dom";

import { useToast, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { GiDiceFire } from "react-icons/gi";
import icon from "../../public/icon.png";
import * as kubeapi from "../services/kubeapi";

import config from "../config";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  // context, vars, and states
  const toast = useToast();
  const [readiness, setReadiness] = React.useState<boolean>(false);
  const [diceval, setDiceval] = React.useState<number>(0);

  // helper funcs
  const funcLoadData = async () => {};
  const funcToast = async (
    mode: "info" | "warning" | "success" | "error",
    title: string,
    msg: string
  ) => {
    toast({
      title: title,
      description: msg,
      status: mode,
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };

  // effects
  React.useEffect(() => {
    funcLoadData();
  }, [readiness]);

  return (
    <>
      <div className="">
        <div className="mb-3 mt-20">
          <img className="w-32 inline-block justify-center" src={icon} alt="" />
        </div>
        <div className="font-bold mb-2 text-5xl">
          <Link className="" to={`/`}>
            #kubefe~{diceval}
          </Link>
        </div>
        <div className="text-2xl mb-4">
          <div>A basic frontend app.</div>
        </div>
        <div>
          <Button
            colorScheme={"red"}
            size="lg"
            borderRadius={0}
            leftIcon={<Icon as={GiDiceFire} />}
            onClick={async () => {
              const connected = await kubeapi.ping();
              if (!connected) {
                return funcToast(
                  "error",
                  "Failure",
                  "Cannot connect to server."
                );
              }

              const diceresult = await kubeapi.rolldice(1);
              setDiceval(diceresult);
              if (!diceresult) {
                return funcToast("error", "Failure", "Cannot roll dice.");
              }

              funcToast("success", "Success", "Dice rolled nicely!");
            }}
          >
            Roll a Dice
          </Button>
        </div>
      </div>
    </>
  );
};
