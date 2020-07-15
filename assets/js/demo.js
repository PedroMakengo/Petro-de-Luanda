$(document).ready(function () {

    // Trabalhar com os cards de informação
    let card1 = $('.noticias_recentes .card_1');
    card1.on("click", function () {
        alert('Olá Mundo');
    });

    // Trabalhar nas fotos dos jogadores 
    $('#card_player').on('mouseover', function () {
        $('#name_player').css({
            "font-size": "90px",
            transition: "2s all ease",
            cursor: "pointer"
        });
    });
});