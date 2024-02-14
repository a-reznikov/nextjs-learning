import { ResponseSubscription, SubscriptionFormData } from "./types";

export const setSubscribe = async (data: SubscriptionFormData) => {
  const response: Response = await fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Oops. Something bad happened!");
  }

  const result: ResponseSubscription = await response.json();

  return result;
};
