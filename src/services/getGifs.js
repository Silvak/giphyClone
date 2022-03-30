const apiURL = 'https://api.giphy.com/v1/gifs/search?'

const params = {
    limit:'10',
    api_key:'BtqijkkPeu16Qyc4y2khRdUVfqjEnSCw',
}


export default function getGifs ({keyword='marvel'}={}){

    const apiURLs = `${apiURL}q=${keyword}&api_key=${params.api_key}&limit=${params.limit}`;

    return fetch(apiURLs)
        .then(res => res.json())
        .then(response =>{
            const {data = []} = response;
            const gifs = data.map(image => {
                const {images, title, id} = image;
                const {url} = images.downsized_medium;
                return {title, id, url};   
            });
            return gifs
        })
        .catch(err => console.error(err))
}