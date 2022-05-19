import PropTypes from "prop-types";

function TextField({ placeholder, onSubmit, onChange, name }) {
  return (
    <input
      className="rounded-lg w-full px-3 py-2 my-3"
      type="text"
      placeholder={placeholder}
      onSubmit={onSubmit}
      name={name}
      onChange={onChange}
    />
  );
}

export default TextField;

TextField.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

TextField.defaultProps = {
  placeholder: "",
  onSubmit: () => {},
  onChange: () => {},
  name: "",
};
