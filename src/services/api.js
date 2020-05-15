import axios from "axios";
import md5 from "md5";

const baseURl = 'http://gateway.marvel.com/v1/public';
const ts = Date.now();
const apiKey = process.env.VUE_APP_MARVEL_API_KEY;
const privateKey = process.env.VUE_APP_MARVEL_PRIVATE_KEY;
const hash = md5(ts + privateKey + apiKey);

export default {
    getCharacters: () => {
        const urlCharacters = `${baseURl}/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

        return axios.get(urlCharacters);
    },

    getComics: () => {
        const urlComics = `${baseURl}/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

        return axios.get(urlComics);
    }
}
