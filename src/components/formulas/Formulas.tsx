import { MathJax } from "better-react-mathjax";
import { useFormulas } from "@/api/formulas/queries";
import { Loader } from "../common/loader/Loader";

export const Formulas: React.FC = () => {
  const { isPending, isError, data, error } = useFormulas();

  console.log(data);
  console.log(data[0].attributes.jsonFormat.latex);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const inline = `$$\\text{E}[X_i] = \\mu$$`;
  const block = `\\[S_n = \\frac{X_1 + X_2 + \\cdots + X_n}{n}
      = \\frac{1}{n}\\sum_{i}^{n} X_i\\]`;

  return (
    <div className="flex flex-col text-2xl text-center gap-14">
      <div>
        <h2 className="font-bold">Inline</h2>
        <MathJax className="mt-10">
          {`\\(\\frac{10}{4x} \\approx 2^{12}\\)`}
          {`\\(\\{ a_{n} \\}_{n\\in N}=2+(\\frac{5}{6})^{n}\\)`}
        </MathJax>
      </div>
      <div>
        <h2 className="font-bold">From Strapi Text Field</h2>
        <MathJax className="mt-10">
          {data[0].attributes.textLong}
          {data[0].attributes.formula}
          {data[1].attributes.formula}
        </MathJax>
      </div>
      <div>
        <h2 className="font-bold">From Strapi JSON</h2>
        <MathJax className="mt-10">
          {data[0].attributes.jsonFormat.latex}
          {data[0].attributes.jsonFormat.block}
        </MathJax>
      </div>
      <div>
        <h2 className="font-bold">Experiment</h2>
        <MathJax className="mt-10">{`$$(3\\times 4) \\div (5-3)$$`}</MathJax>
      </div>
    </div>
  );
};
