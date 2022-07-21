import axios from "axios";

export const ping = async (): Promise<boolean> => {
  type ResponseData = {
    id: string;
    state: string;
    start_time: string;
    uptime: string;
  };

  type Response = {
    code: string;
    data: ResponseData;
  };

  try {
    const { data, status } = await axios.get<Response>(
      "http://localhost:2323/",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (data.code != "ok") return false;

    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
    } else {
      console.log("unexpected error: ", error);
    }
    return false;
  }
};

export const rolldice = async (dicenumber: number): Promise<number> => {
  type ResponseData = {
    total: number;
    sequence: number[];
  };

  type Response = {
    code: string;
    data: ResponseData;
  };

  try {
    const { data, status } = await axios.post<Response>(
      "http://localhost:2323/diceroll",
      {
        dice_number: dicenumber,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (data.code != "ok") return data.data.total;

    return 0;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
    } else {
      console.log("unexpected error: ", error);
    }
    return 0;
  }
};
