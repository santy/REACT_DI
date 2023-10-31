import classes from './TextBox.module.css';

function TextBox() {
  let cssClasses;
  let mode = "info";

  if (mode === 'alert') {
    cssClasses = classes.alert;
  } else if (mode === 'info') {
    cssClasses = classes.info;
  }

  return <p className={cssClasses}>CSS Modules can be very helpful!</p>;
}

export default TextBox;