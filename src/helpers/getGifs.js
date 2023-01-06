
export const getGifs = async( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6w42LY91ZY5gGa8YsB2rVC9PBmy5N2qd&q=${ category }&limit=10`;
    const resp = await fetch( url );
    
    const { data } = await resp.json();
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}