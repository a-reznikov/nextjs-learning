import { MathJax } from "better-react-mathjax";
import { useFormulas } from "@/api/formulas/queries";
import { Loader } from "../common/loader/Loader";

const example1 = `\\(\\ \\frac{10}{4x} \\approx 2^{12} \\)`;
const example2 = `\\[\\ S_n = \\frac{X_1 + X_2 + \\cdots + X_n}{n}
      = \\frac{1}{n}\\sum_{i}^{n} X_i \\]`;
const example3 = `\\begin{align}x&=y & X&=Y & a&=b+c\\\\x’&=y’ & X’&=Y’ & a’&=b\\\\x+x’&=y+y’ & X+X’&=Y+Y’ & a’b&=c’b\\end{align}`;
const array = `\\begin{array}{cc}
  a & b \\\\
  c & c
\\end{array}`;

//! Issues
const matrix = `\\[\\ \\begin{pmatrix} D_1t&-a_{12}t_2&\\dots&-a_{1n}t_n\\\\
-a_{21}t_1&D_2t&\\dots&-a_{2n}t_n\\\\
\\hdotsfor[2]{4}\\\\
-a_{n1}t_1&-a_{n2}t_2&\\dots&D_nt\\end{pmatrix} \\]`;
const matrixAscii =
  "`((D_1t,-a_{12}t_2, ..., -a_{1n}t_n),(-a_{21}t_1, D_2t, ..., -a_{2n}t_n), (..., ..., ..., ...), (-a_{n1}t_1, -a_{n2}t_2, ..., D_nt))`";

const matrixFixed = `\\[\\ \\begin{pmatrix} D_1t&-a_{12}t_2&\\dots&-a_{1n}t_n\\\\
-a_{21}t_1&D_2t&\\dots&-a_{2n}t_n\\\\
\\dots & \\dots & \\dots & \\dots\\\\
-a_{n1}t_1&-a_{n2}t_2&\\dots&D_nt\\end{pmatrix} \\]`;

const intertext = `\\(\\ \\begin{align}
A_1&=N_0(\\lambda;\\Omega’)-\\phi(\\lambda;\\Omega’),\\\\
A_2&=\\phi(\\lambda;\\Omega’)-\\phi(\\lambda;\\Omega),\\\\
\$ \\intertext{and} \$
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
const simple = `\\frac{10}{4x} \\approx 2^{12}`;

const formula = `\\(\\ \\{ a_{n} \\}_{n\\in\\mathbb{N}}=2+(\\frac{5}{6})^{n} \\)`;

export const Formulas: React.FC = () => {
  const { isPending, isError, data, error } = useFormulas();

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(data[0].attributes);

  const formulaAsciiMathRaw = "{ a_n }_{n in NN}=2+(5/6)^n";
  const formulaAsciiMathRawDef = "`{ a_n }_{n in NN}=2+(5/6)^n`";
  const formulaLatexRaw = `\{ a_{n} \}_{n\in\mathbb{N}}=2+(\frac{5}{6})^{n}`;
  const formulaLatex = `\\{ a_{n} \\}_{n\\in\\mathbb{N}}=2+(\\frac{5}{6})^{n}`;

  return (
    <MathJax>
      <div className="flex flex-col first-line:text-2xl text-center gap-14">
        <h1 className="font-bold">{`1. \\(\\ \\LaTeX{ }\\) and AsciiMath`}</h1>
        {/* //? Latex with JS */}
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">Latex</h2>
          <div>{`Raw Latex \\(\\ ${formulaLatexRaw} \\)`}</div>
          <div>{`With double backslash  \\(\\ ${formulaLatex} \\)`}</div>
        </div>

        {/* //? AsciiMath with JS */}
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">AsciiMath</h2>
          <div>{"With default delimiters `{ a_n }_{n in NN}=2+(5/6)^n`"}</div>
          <div>{`With default delimiters ${formulaAsciiMathRawDef}`}</div>
          <div>{`This item costs 2 $ and this items costs 3 $`}</div>
          <div>{`This item costs ourCustomDelimiter 2 $ and this items costs 3 $ ourCustomDelimiter`}</div>
          <div>{`With custom delimiters $${formulaAsciiMathRaw}$`}</div>
          <div>{`Matrix ${matrixAscii}`}</div>
        </div>
        {/* //? Display */}
        {/* <div className="flex flex-col gap-5">
          <h2 className="font-bold">2. Examples Inline and Block</h2>
          <div>{`Inline. Start some text \\(\\ ${formulaLatex} \\) End some text`}</div>
          <span>{`Block. Start some text \\[\\ ${formulaLatex} \\] End some text`}</span>
          <span>{`Block. Start some text $$  ${formulaLatex} $$ End some text`}</span>
        </div> */}
        {/* //? Strapi */}
        {/* <div>
          <h2 className="font-bold">3. From Strapi:</h2>
          <div className="mt-8">{`Text Format: ${data[0].attributes.textFormat}`}</div>
          <div className="mt-5">
            {`JSON Format: ${data[0].attributes.jsonFormat.formula}`}
          </div>
        </div> */}
        {/* //? Issues */}
        <div>
          <h2 className="font-bold">4. Issues</h2>
          <span>{matrix}</span>
          <span>{matrixFixed}</span>
          <span>{intertext}</span>
          <span>{intertextFixed}</span>
        </div>
        <div className="text-left">
          <h2 className="font-bold text-center">
            5. Possible ways to create formulas
          </h2>
          <p>
            <b>1. Typst.</b>
            {` + Newest technology. - It does not support HTML
            output yet. `}
            <a
              className="underline decoration-solid"
              href="https://typst.app/#:~:text=lock%2Din%2C%20ever.-,There%27s%20more!,-There%20is%20still"
              target="_blanck"
            >
              Link to doc
            </a>
          </p>
          <p>
            <b>2. MathML.</b>{" "}
            {`- Difficult syntax. This should be the end point. `}
            <a
              className="underline decoration-solid"
              href="https://developer.mozilla.org/en-US/docs/Web/MathML/Authoring#mathml_in_html_pages"
              target="_blanck"
            >
              Link to doc
            </a>
          </p>
          <p>
            <b>3. AsciiMath.</b>
            {` + Simpler syntax. + Shorter Documentation (1 page). - Need to be careful with Template strings (\`) `}
            <a
              className="underline decoration-solid"
              href="https://asciimath.org/#syntax"
              target="_blanck"
            >
              Link to doc
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">6. Compar Latex and AsciiMath</h2>
          <div className="font-bold mt-5">{` \\(\\ \\LaTeX{ }\\) vs AsciiMath`}</div>
          <span>{`${String.raw`\\(\\ \\frac{10}{4x} \\approx 2^{12} \\)`} === ${String.raw`10/4x approx 2^12`}`}</span>
          <div>{`${String.raw`\\{ a_{n} \\}_{n\\in\\mathbb{N}}=2+(\\frac{5}{6})^{n}`} === ${String.raw`{ a_n }_{n in NN}=2+(5/6)^n`}`}</div>
        </div>
      </div>
    </MathJax>
  );
};
