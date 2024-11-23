const images = [
    'Manasvi pics/392b5a26-488f-44d0-87d3-11150567f486.jpeg',
    'Manasvi pics/4a09ad73-993e-41db-a172-4cec5e1777d5.jpeg',
    'Manasvi pics/04cb9968-ec72-4c2e-9298-7558d9fcd979.jpeg',
    'Manasvi pics/02fbd4c0-68fd-4004-aceb-5ed4817f9038.jpeg',
    'Manasvi pics/527c6700-a7ed-4bfb-aa68-11b049644bbe.jpeg',
    'Manasvi pics/fc50ac86-c1e7-4d66-b467-a9882e0c5c38.jpeg',
    'Manasvi pics/7947ae72-3000-428e-b893-60e7c8648a86.jpeg',
    'Manasvi pics/ad7d5594-a803-45f7-91e8-df5d97e571d8.jpeg',
    'Manasvi pics/5da79ff6-010e-4403-a0f2-f3932e827afb.jpeg',
    'Manasvi pics/d7a10af2-34b5-4271-ae8b-964901efc753.jpeg',
    'Manasvi pics/326a25a0-62fa-482e-8cbd-5b374063fe90.jpeg',
    'Manasvi pics/f6d1712d-1083-40de-ac62-d9e8b9d38621.jpeg',
    'Manasvi pics/adebf3a5-08d7-4b52-8461-e63f9190c8d1.jpeg',
    'Manasvi pics/4b20b4e8-8221-4a14-b6d3-c995d48aa817.jpeg',
    'Manasvi pics/f02dd661-4482-4e9f-828d-5919795f57ea.jpeg',
    'Manasvi pics/0c55675e-9827-4344-8562-0a31fcf79a18.jpeg',
    'Manasvi pics/f55b3c82-4e0a-40c0-9f71-56224d2b2e27.jpeg',
    'Manasvi pics/22ec80f1-902f-4ab3-a65a-016702e3214c.jpeg',
    'Manasvi pics/aa9f92f3-aa00-44a5-b50c-bffedfc2f503.jpeg',
    'Manasvi pics/ec674511-c2cc-433a-8755-0b6b3a26e6cc.jpeg',
    'Manasvi pics/034d14a4-43bb-401c-bc24-e9774385c910.jpeg',
    'Manasvi pics/85b7fd20-1bc3-466f-8719-7d734aebcab7.jpeg',
    'Manasvi pics/88059e04-edff-444c-bbbb-d18437aee1e6.jpeg',
    'Manasvi pics/c9bae6ed-48ac-4f68-8dd1-8c01a0b86edc.jpeg',
    'Manasvi pics/bce90bb2-685a-455d-9b8d-416088fac01d.jpeg',
    'Manasvi pics/985ffdc9-58e0-439f-8446-127a13b0ec99.jpeg',
    'Manasvi pics/eb24934a-5097-4b47-a984-3870f3cea8ca.jpeg',
    'Manasvi pics/044f4a03-cd99-48a3-8966-b2d233940c12.jpeg',
    'Manasvi pics/9bf9cbad-fda1-4d3f-8e6c-1228a928bb51.jpeg',
    'Manasvi pics/313ed59e-4b3b-4b8d-8788-7ea29cd49edb.jpeg',
    'Manasvi pics/835eb244-f73b-4b7b-ab41-dc44e955150a.jpeg',
    'Manasvi pics/6cbca324-b29a-48e7-87a4-9d5b1ee482b4.jpeg',
    'Manasvi pics/296508ee-d5e0-4782-856f-ee26a0ec63d2.jpeg',
    'Manasvi pics/ee862148-cabc-495b-9c90-e7f6f6d27e19.jpeg',
    'Manasvi pics/6cc6b1c2-4560-4463-913f-719fd4e78835.jpeg',
    'Manasvi pics/bf254028-96df-4612-bdb8-16446c13e03d.jpeg',
    'Manasvi pics/cc86c26f-9cbf-41ef-8e12-086782e90efe.jpeg',
    'Manasvi pics/3c45efec-5c1f-4f14-ac1a-4c1407e008fd.jpeg',
    'Manasvi pics/4dab4e7e-a01e-461f-b822-008981f1b485.jpeg',
    'Manasvi pics/3dbea6c1-0fb2-4cd6-89d2-bdb883484421.jpeg',
    'Manasvi pics/0c923052-20ac-4a22-a67a-7aca3e8340c2.jpeg',
    'Manasvi pics/e2eea48f-2f46-4c95-a8fe-976a9e5befb9.jpeg',
    'Manasvi pics/e59d2db3-7c3d-4a0a-ac38-311c37971cc7.jpeg',
    'Manasvi pics/c45c39e9-2a0a-4c94-8f07-aec7c86df885.jpeg',
    'Manasvi pics/288c5a36-05a2-40ef-a218-1a24f6429e08.jpeg',
    'Manasvi pics/30d838dc-1a59-4ad7-ad5c-f124e44334a9.jpeg',
    'Manasvi pics/9bb6ac0a-9c3d-48bc-9a89-03e4f3baf405.jpeg',
    'Manasvi pics/3dc55a30-40db-4f54-bc1a-7c0fd0a33458.jpeg',
    'Manasvi pics/4abeb600-127a-4725-aabf-2284437e3e96.jpeg',
    'Manasvi pics/3433090f-4fb1-48a8-8498-2844f8f86645.jpeg',
    'Manasvi pics/eefd9bd6-9852-44da-9d05-00333a77ac0f.jpeg',
    'Manasvi pics/33ab690e-f472-4fe6-8bbd-071baf5b3557.jpeg',
    'Manasvi pics/a45b0a87-0cc4-49d7-8078-6fc4387b2379.jpeg',
    'Manasvi pics/db310b6d-bb49-4d37-9404-c14853338c73.jpeg',
    'Manasvi pics/2b8088c0-3e93-4b5a-b4be-cda40a1fb8ca.jpeg',
    'Manasvi pics/21e9c092-df27-4bea-8ef2-5f589a0578de.jpeg',
    'Manasvi pics/9102c764-b04b-4b6a-92ae-666c77c80704.jpeg',
    'Manasvi pics/6abdd925-2c07-458d-9d6b-9387e8e1dc18.jpeg',
    'Manasvi pics/1a10b6cb-941e-4cc4-b742-b7130fb0885f.jpeg',
    'Manasvi pics/64e92dc8-dc6b-48f3-a286-e93d9753981e.jpeg',
    'Manasvi pics/f1707963-e4fc-47e7-8c82-5f48354b463e.jpeg',
    'Manasvi pics/e756cf67-b3bc-4a13-9663-67bcabbb6c64.jpeg',
    'Manasvi pics/34c36f97-189b-4400-8e11-e206758bcb2a.jpeg',
    'Manasvi pics/c0cc1c6d-3f9d-43bc-943b-6788a7d33328.jpeg',
    'Manasvi pics/b35566b0-7db0-413a-bc12-dce55b3249cc.jpeg'
];

let currentIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function updateCarousel() {
    const carouselImage = document.getElementById('carousel-image');
    carouselImage.src = images[currentIndex];
}

function createThumbnails() {
    const thumbnailsContainer = document.querySelector('.thumbnails');
    thumbnailsContainer.innerHTML = ''; 
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.classList.add('thumbnail');
        img.addEventListener('click', () => showInCarousel(index)); 
        thumbnailsContainer.appendChild(img);
    });
}

function showInCarousel(index) {
    currentIndex = index; 
    updateCarousel(); 
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

shuffleArray(images);
createThumbnails();
updateCarousel();