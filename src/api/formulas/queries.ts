import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/constants/query-client";
import { searchFormulas } from "./module";

enum QueryKeys {
  FORMULAS = "formulas",
}

export const useFormulas = () =>
  useQuery({
    queryKey: [QueryKeys.FORMULAS],
    queryFn: () => searchFormulas(),
  });

export const prefetchFormulas = async () =>
  queryClient.fetchQuery({
    queryKey: [QueryKeys.FORMULAS],
    queryFn: () => searchFormulas(),
  });
