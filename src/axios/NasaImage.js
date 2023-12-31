import './Nasa.css'
import axios from 'axios'
import { useState } from 'react';

const NasaImage = () => {
    const [images, setImages] = useState();
    const [number, setNumber] = useState(3);

    function onChangeNumber(event){
        setNumber(event.target.value)
    }

    function onSearchSubmit(event){
        event.preventDefault();
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera&page`, {
            params: {api_key: "KSG7zKq9BywPWH2gNFsDkbcB4nkRPvrDxhjxHpIb"}
        })
        .then(res => {
          console.log(res.data.photos[number].img_src);
          setImages(res.data.photos[number].img_src);
          
        })
        .catch(error => {
           console.log(error);
        })
        }

    return(
        <div className="o-container">
            <h1>Search Nasa images</h1>
            <form className="c-search" onSubmit={onSearchSubmit}>
            <input
                type="search"
                name="image-search"
                className="c-search__input" 
                onChange={onChangeNumber}/>
            <button>Search images</button>
            </form>
            <div>
            <img src={images} />
            </div>
        </div>
    )
}

export default NasaImage