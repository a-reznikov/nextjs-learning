function filterClassNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}

export { filterClassNames };
