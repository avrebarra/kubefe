import * as React from "react";
import { Link } from "react-router-dom";

import { useToast, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { GiDiceFire } from "react-icons/gi";
import icon from "../../public/icon.png";

import config from "../config";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  // context, vars, and states
  const toast = useToast();
  const [readiness, setReadiness] = React.useState<boolean>(false);

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
            #kubefe
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
            onClick={() => {
              funcToast("success", "Connected!", "Success!");
            }}
          >
            Roll a Dice
          </Button>
        </div>
      </div>
    </>
  );
};