import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Cats.scss"
const Cats = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const catsAPI = await axios.get(
                "https://back-pets.vercel.app/cats"
            );
            
            setCats(catsAPI.data.Gaterres);
        };
        getCats();
    }, []);
  return (
    <div className='cats'>
    {cats.length ? (
        <>
          {cats.map((cat) => (
            <figure key={cat._id}>
                <h2>{cat.breed}</h2>
                <img src={cat.picture} alt={cat.breed}></img>
                <p>{cat.size}</p>
            </figure>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Cats