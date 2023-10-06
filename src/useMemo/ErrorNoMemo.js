


function Error({ message }) {
  console.log('<Error /> component function is executed.');

  if (!message) {
    return null;
  }


  return (
    <div >
      <p>{message}</p>
      <button  >X</button>
    </div>

  );
}

export default Error; //memo por si solo no funciona es necesario añadir callbacks