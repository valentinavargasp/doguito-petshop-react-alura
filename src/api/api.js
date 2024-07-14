import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api';

export const api = axios.create({
    baseURL: baseURL
});

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
};
