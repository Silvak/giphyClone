import { React, useState} from 'react'
import { Link , useLocation} from 'wouter'
import "./home.css"

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Panda']


export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation ] = useLocation()

  const handleSubmit = (e) =>{
    e.preventDefault();
    pushLocation(`/gif/${keyword}`)
  }

  const handleChange = (e) =>{
    setKeyword(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='searchBar'>
        <input 
          type='text' 
          value={keyword}
          onChange={handleChange}
          placeholder='Search all the GIFs and Stickers'
          />
          <button type='submit'>X</button>
      </form>
    
      <div className='links'>
        <h3>Los gif mas populares</h3>
        <ul>
            {
                POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/gif/${popularGif}`}>Gif de {popularGif}</Link>
                    </li>
                ))
            }
        </ul>
      </div>
    </>
  )
}
