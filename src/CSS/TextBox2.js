import classes from './TextBox.module.css';

function TextBox() {
  let cssClasses;
  cssClasses = classes.alert;


  return <p className={cssClasses}>Cargamos la clase con nombre unico de Rect en el segundo componente</p>
}

export default TextBox;