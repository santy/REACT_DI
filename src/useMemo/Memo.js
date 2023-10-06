import { memo, useState } from 'react';
import Greeting from './Greeting';

const Memo = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
        <>
        <label>
            Nombre{': '}
            <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
            Dirección{': '}
            <input value={address} onChange={e => setAddress(e.target.value)} />
        </label>
        <Greeting name={name} />
        </>
    );
}

export default Memo;