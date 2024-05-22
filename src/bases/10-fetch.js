const api_key = "OtU4iFyWD9XU3G9UCPcuSp1L6UU7o21c";
const baseUrl = "https://api.giphy.com/v1/gifs/random?api_key=";
const fullUrl = `${baseUrl}${api_key}`;


const peticion = fetch(fullUrl);


peticion
.then(res => res.json())
.then(data => { 
    console.log(data.data.images.original.url)
    const {url} = data.data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src =url;
    document.body.append(img);
})
.catch(err => console.log(err))