import PropTypes from "prop-types";
import clsx from "clsx";

function Typography({ children, variant, className }) {
  const H1 = (props) => (
    <h1 className={clsx("text-[20px]", props.className)} {...props}>
      {props.children}
    </h1>
  );

  const STRONG = (props) => (
    <strong className={props.className} {...props}>
      {props.children}
    </strong>
  );

  const TEXT = (props) => (
    <p className={clsx("text-[15px]", props.className)} {...props}>
      {props.children}
    </p>
  );

  const Variants = {
    h1: H1,
    strong: STRONG,
    text: TEXT,
  };

  const Tag = Variants[variant];

  return <Tag className={className}>{children}</Tag>;
}

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "strong", "text"]),
  className: PropTypes.string,
};

Typography.defaultProps = {
  variant: "h1",
  className: "",
};

export default Typography;
