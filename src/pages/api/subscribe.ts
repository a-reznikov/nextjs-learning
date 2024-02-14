import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  details: null | {
    firstName: string;
    lastName: string;
    email: string;
    section: string;
    gender: boolean;
  };
};

export default function subscribe(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    console.log(req.body);
    res.status(200).json({
      message: "You have successfully subscribed!",
      details: JSON.parse(req.body),
    });
  } else {
    res.status(400).json({ message: "Unavailable method!", details: null });
  }
}
