"use strict";
const fetchData = async () => {
    const r = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    return await r.json();
};
const renderCatItens = (listData) => {
    const photosContainer = document.querySelector(".photos");
    if (photosContainer) {
        listData.forEach((element) => {
            const item = document.createElement("div");
            item.className = "item";
            const photo = document.createElement("div");
            photo.className = "photo";
            const img = document.createElement('img');
            img.src = element.url;
            photo.appendChild(img);
            const p = document.createElement('p');
            p.textContent = element.id;
            item.appendChild(photo);
            item.appendChild(p);
            photosContainer.appendChild(item);
        });
    }
};
const main = async () => {
    try {
        const catData = await fetchData();
        renderCatItens(catData);
    }
    catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
};
document.addEventListener('DOMContentLoaded', main);
