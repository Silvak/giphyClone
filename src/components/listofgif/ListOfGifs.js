import{useState, useEffect} from 'react'
import Gif from '../gif/Gif'
import getGifs from '../../services/getGifs'
import Spinner from '../spinner/Spinner';

export default function ListOfGifs({params}) {
    const {keyword} = params;
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([]);

    useEffect(function (){
        setLoading(true)
        getGifs({keyword})
            .then(gifs =>{
                setGifs(gifs)
                setLoading(false)
            });
    }, [keyword])

    if(loading) return <Spinner/>
    return <>{ 
        gifs.map(({id, title, url}) => 
            <Gif 
                key={id} 
                id={id} 
                title={title} 
                url={url}
            /> 
        )
    }</> 
}
