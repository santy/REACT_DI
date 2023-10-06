import { useState } from 'react';
import Modal from './Modal';


const AddModal = () => {

    const [show, setShow] = useState(false);

    function ShowModal() {
        setShow(!show);

    }

    return (
        <div>
            <button onClick={ShowModal} > Alerta!!!</button>
            {show && <Modal />}

        </div>
    )


}


export default AddModal;