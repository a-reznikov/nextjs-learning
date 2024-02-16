import { MathJax } from "better-react-mathjax";
import { useFormulas } from "@/api/formulas/queries";
import { Loader } from "../common/loader/Loader";

const example1 = `\\(\\ \\frac{10}{4x} \\approx 2^{12} \\)`;
const example2 = `\\[\\ S_n = \\frac{X_1 + X_2 + \\cdots + X_n}{n}
      = \\frac{1}{n}\\sum_{i}^{n} X_i \\]`;
const array = `\\begin{array}{cc}
  a & b \\\\
  c & c
\\end{array}`;

const fromDoc = `\\(\\ \\{ a_{n} \\}_{n\\in \\mathbb{N}=2+(\\frac{5}{6})^{n} \\)`;

//! Issues
const matrix = `\\[\\ \\begin{pmatrix} D_1t&-a_{12}t_2&\\dots&-a_{1n}t_n\\\\
-a_{21}t_1&D_2t&\\dots&-a_{2n}t_n\\\\
\\hdotsfor[2]{4}\\\\
-a_{n1}t_1&-a_{n2}t_2&\\dots&D_nt\\end{pmatrix} \\]`;

const matrixFixed = `\\[\\ \\begin{pmatrix} D_1t&-a_{12}t_2&\\dots&-a_{1n}t_n\\\\
-a_{21}t_1&D_2t&\\dots&-a_{2n}t_n\\\\
\\dots & \\dots & \\dots & \\dots\\\\
-a_{n1}t_1&-a_{n2}t_2&\\dots&D_nt\\end{pmatrix} \\]`;

const intertext = `\\(\\ \\begin{align}
A_1&=N_0(\\lambda;\\Omega’)-\\phi(\\lambda;\\Omega’),\\\\
A_2&=\\phi(\\lambda;\\Omega’)-\\phi(\\lambda;\\Omega),\\\\
\\intertext{and}
A_3&=\\mathcal{N}(\\lambda;\\omega).
\\end{align} \\)`;

const intertextFixed = `\\[\\ \\begin{align}
A_1&=N_0(\\lambda;\\Omega’)-\\phi(\\lambda;\\Omega’),\\\\
A_2&=\\phi(\\lambda;\\Omega’)-\\phi(\\lambda;\\Omega),\\\\
\\text{and}\\\\
A_3&=\\mathcal{N}(\\lambda;\\omega).
\\end{align} \\]`;

const customBegin = `\\begin{equation}
E=mc^2
\\end{equation}`;

export const Formulas: React.FC = () => {
  const { isPending, isError, data, error } = useFormulas();

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const simple = `\\frac{10}{4x} \\approx 2^{12}`;

  const fromDoc = `\\(\\ \\{ a_{n} \\}_{n\\in \\mathbb{N}=2+(\\frac{5}{6})^{n} \\)`;
  const formula = `\\begin{align}x&=y & X&=Y & a&=b+c\\\\x’&=y’ & X’&=Y’ & a’&=b\\\\x+x’&=y+y’ & X+X’&=Y+Y’ & a’b&=c’b\\end{align}`;

  console.log(data[0].attributes);

  return (
    <MathJax>
      <div className="flex flex-col first-line:text-2xl text-center gap-14">
        {/* //? Inline */}
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">Examples Inline and Block</h2>
          <span>{`Start some text \\(\\  ${simple} \\) End some text`}</span>
          <span>{`Start some text \\[\\  ${simple} \\] End some text`}</span>
          <span>{`Start some text $$  ${simple} $$ End some text`}</span>
        </div>
        {/* //? Issues */}
        <div>
          <h2 className="font-bold">Issues</h2>
          <span>{matrix}</span>
          <span>{matrixFixed}</span>
          <span>{intertext}</span>
          <span>{intertextFixed}</span>
          <span>{customBegin}</span>
        </div>
        {/* //? From Doc */}
        {/* <div>
        <h2 className="font-bold">From Doc</h2>
        <MathJax className="mt-10">{fromDoc}</MathJax>
      </div> */}
        {/* //? Strapi */}
        <div>
          <h2 className="font-bold">From Strapi Text Field</h2>
          <span className="mt-10">{data[0].attributes.textLong}</span>
          <span className="mt-10">{data[0].attributes.align}</span>
          <span className="mt-10">{data[0].attributes.formula}</span>
          <span className="mt-10">{data[0].attributes.pmatrix}</span>
        </div>
        {/* <div>
        <h2 className="font-bold">From Strapi JSON</h2>
        <MathJax className="mt-10">
          {data[0].attributes.jsonFormat.latex}
          {data[0].attributes.jsonFormat.block}
        </MathJax>
      </div> */}
      </div>
    </MathJax>
  );
};
