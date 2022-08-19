import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '29382218-658c00587cdc538c34af9f2b1';

export async function fetchImages(
    { searchTxt, pgCurrent, cardsPerPg}) { 
    
    console.log('searchTxt: ', searchTxt);
    console.log('pgCurrent: ', pgCurrent);

    const config = {
        params: {
            key: API_KEY,
            q: searchTxt,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: pgCurrent,
            per_page: cardsPerPg,
        },
    };

    const resp = await axios.get('', config);
    return resp;
}

