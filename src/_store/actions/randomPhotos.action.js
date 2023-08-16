import axios from "axios";
import { randomPhotos } from '../types';

const ACCESS_KEY = 'x83uqM96Gn6tzTX4mGdEScfWl_gj1xMMAlqTUmKmYeY';

export const getRandomPhotos = () => (dispatch) => {
    dispatch({ type: randomPhotos.GET_RANDOM_PHOTOS_REQUEST });

    axios
        .get('https://api.unsplash.com/photos/random', {
            headers: {
                Authorization: `Client-ID ${ACCESS_KEY}`,
            },
            params: {
                count: 10,
            },
        })
        .then((response) => {
            dispatch({
                type: randomPhotos.GET_RANDOM_PHOTOS_SUCCESS,
                data: response.data,
            });
        })
        .catch((error) => {
            console.error('Error fetching random photos:', error.message);
            dispatch({
                type: randomPhotos.GET_RANDOM_PHOTOS_FAILURE,
                error: error.message,
            });
        });
};
