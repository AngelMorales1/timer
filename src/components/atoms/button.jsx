import PropTypes from "prop-types";
import clsx from "clsx";

function Button({ children, variant, type, form, disabled, onClick }) {
  const ButtonBlue = (props) => (
    <button
      form={form}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={
        "hover:bg-white hover:text-[#3563E9] bg-[#3563E9] border-2 border-[#3563E9] rounded-md mx-2 px-4 py-1 text-white"
      }
    >
      {props.children}
    </button>
  );

  const ButtonWhite = (props) => (
    <button
      form={form}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={
        "hover:bg-[#3563E9] hover:text-white bg-white border-2 border-[#3563E9] rounded-md mx-2 px-4 py-1  text-[#3563E9]"
      }
    >
      {props.children}
    </button>
  );

  const Variants = {
    blue: ButtonBlue,
    white: ButtonWhite,
  };

  const Tag = Variants[variant];

  return <Tag>{children}</Tag>;
}

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  form: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "blue",
  type: "",
  form: "",
  disabled: false,
  onClick: () => {},
};

export default Button;
