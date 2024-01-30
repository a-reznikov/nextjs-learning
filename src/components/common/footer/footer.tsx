const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 p-3">
      <p className="text-slate-100 text-center">{new Date().getFullYear()}</p>
    </footer>
  );
};

export { Footer };
