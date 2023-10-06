import { createPortal } from 'react-dom';


const Modal = () => {
    return createPortal(
        <>
            Mensaje de alerta
        </>, document.getElementById('dialogs')
    );
}

export default Modal;