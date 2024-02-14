import { queryClient } from "@/constants/query-client";
import { setSubscribe } from "./module";
import { SubscriptionFormData } from "./types";

enum QueryKeys {
  SUBSCRIBE = "subscribe",
}

export const fetchSubscribe = async (data: SubscriptionFormData) =>
  queryClient.fetchQuery({
    queryKey: [QueryKeys.SUBSCRIBE],
    queryFn: () => setSubscribe(data),
  });
