export const getGifs = async (category) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=vwwqJRf0C02iHfXE5STsRszg7A0XJmIG`)
    const {data} = await resp.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}