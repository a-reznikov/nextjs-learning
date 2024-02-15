import { useFormulas } from "@/api/formulas/queries";
import { Loader } from "../common/loader/Loader";

export const Formulas: React.FC = () => {
  const { isPending, isError, data, error } = useFormulas();

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <p>Formulas</p>;{data && <p>{JSON.stringify(data)}</p>}
    </>
  );
};
