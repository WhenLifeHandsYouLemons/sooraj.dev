$(function() {
    $("#lighthouse").hover(
        function() {
            $(this).attr("src", "assets/img/art/bts/Lighthouse_bts.gif");
        },
        function() {
            $(this).attr("src", "assets/img/art/Lighthouse.jpg");
        }
    );

    $("#chinese_artwork").hover(
        function() {
            $(this).attr("src", "assets/img/art/bts/Chinese_Artwork_bts.gif");
        },
        function() {
            $(this).attr("src", "assets/img/art/Chinese_Artwork.jpg");
        }
    );
});