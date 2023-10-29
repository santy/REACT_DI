import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

//Componente principal
export default function FormContext() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}


//Componente Form
function Form() {
  return (
    <Panel title="Welcome">
      <Button>Registrarse</Button>
      <Button>Iniciar sesión</Button>
    </Panel>
  );
}

//Componente Panel
function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

//Componente Button
function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
