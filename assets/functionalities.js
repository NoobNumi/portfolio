// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// }, false);

// document.addEventListener('keydown', function (e) {
//     if (e.which === 123) {
//         e.preventDefault();
//         return false;
//     }
// });


const graphics = [
    { id: 'evoting_graphs', img: './img/project_img/graphic_1.png' },
    { id: 'csm_graphs', img: './img/project_img/graphic_2.png' },
    { id: 'csm_register_graphs', img: './img/project_img/graphic_3.png' },
    { id: 'pre_register_graphics', img: './img/project_img/graphic_4.png' },
    { id: 'srs_org_graphics', img: './img/project_img/graphic_5.png' },
    { id: 'srs_office_graphics', img: './img/project_img/graphic_6.png' }
];

graphics.forEach(graphic => {
    watermark([graphic.img, './img/logo_sample.png'])
        .image(watermark.image.center(0.1))
        .then(img => {
            img.classList.add('img-fluid', 'w-100', 'object-fit-contain');
            document.getElementById(graphic.id).appendChild(img);
        });
});