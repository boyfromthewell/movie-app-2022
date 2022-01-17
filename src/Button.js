import PropTypes from "prop-types";
import btnStyles from "./Button.module.css";
function Button({ text }) {
  return <button className={btnStyles.btn}>{text}</button>; /* css 모듈 사용하면 원하는 컴포넌트에만 style 적용 가능 */
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
