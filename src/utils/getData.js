
const API = 'https://api.spacexdata.com/v5/launches';

const getData = async () => {
    const apiURL = API;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData;