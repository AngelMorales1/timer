import clsx from "clsx";

function Template({ children, className }) {
  return (
    <div className={clsx("max-w-[1200px] mx-auto px-[50px] md:p-5", className)}>
      {children}
    </div>
  );
}

export default Template;
