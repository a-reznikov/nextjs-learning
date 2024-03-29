import type { NextApiRequest, NextApiResponse } from "next";

type SubscriptionFormData = {
  firstName: string;
  lastName: string;
  email: string;
  section: string;
  gender: string;
};

type ResponseSubscription = {
  message: string;
  details: null | SubscriptionFormData;
};

export default function subscribe(
  req: NextApiRequest,
  res: NextApiResponse<ResponseSubscription>
) {
  if (req.method === "POST") {
    console.log("Data from form:", req.body);
    res.status(200).json({
      message: "You have successfully subscribed!",
      details: JSON.parse(req.body),
    });
  } else {
    res.status(400).json({ message: "Unavailable method!", details: null });
  }
}
