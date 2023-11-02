import classes from './TextBox.module.css';

function TextBox() {
  let cssClasses;
  cssClasses = classes.info;

  return <p className={cssClasses}>Cargamos la clase con nombre unico de Rect</p>
}

export default TextBox;