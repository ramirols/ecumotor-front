// src/api.js
const API_URL = import.meta.env.VITE_API_URL;

export const fetchMakes = async () => {
    const response = await fetch(`${API_URL}/makes`);
    const data = await response.json();
    return data.data;
};

export const fetchModels = async () => {
    const response = await fetch(`${API_URL}/models`);
    const data = await response.json();
    return data.data;
};

export const fetchGenerations = async () => {
    const response = await fetch(`${API_URL}/generations`);
    const data = await response.json();
    return data;
};

export const fetchEngines = async () => {
    const response = await fetch(`${API_URL}/engines`);
    const data = await response.json();
    return data;
};

export const fetchECUs = async () => {
    const response = await fetch(`${API_URL}/ecus`);
    const data = await response.json();
    return data;
};

export const fetchTunningOptions = async () => {
    const response = await fetch(`${API_URL}/tunning-options`);
    const data = await response.json();
    return data;
};
