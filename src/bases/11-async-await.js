
//ASYNC AWAIT
const api_key = "OtU4iFyWD9XU3G9UCPcuSp1L6UU7o21c";
const baseUrl = "https://api.giphy.com/v1/gifs/random?api_key=";
const fullUrl = `${baseUrl}${api_key}`;

// const getImage = ()=> new Promise((resolve,reject)=> { resolve(fullUrl)});
// getImage().then(res=> console.log(res))


const getImage = async () => {

    try {

        const res = await fetch(fullUrl);
        const { data } = await res.json();
        console.log(data)
        const { url } = data.images.original
        console.log(url);
        const img = document.createElement("img");
        img.src = url;                                                                                                              
        document.body.append(img);

    } catch (error) {
        console.error(error);
    }

}


getImage();