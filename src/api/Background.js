
const ACCESS_KEY =  'LU0tJr-MkvAfaSdJq-FGw2Vs0-0dxO-eQjCsyF2DC7U';
const API_URL = `https://api.unsplash.com/`;


const param = {
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    }
    
};

const Background = {
    async getBackground () {
       
        const response = await fetch(`${API_URL}photos/random`, param)
        const json = await response.json();
        return json.urls.full;
    }
};

export default Background;