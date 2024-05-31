$(function() {
    $("#lighthouse").hover(
        function() {
            $(this).attr("src", "Art Page/BTS/Lighthouse_bts.gif");
        },
        function() {
            $(this).attr("src", "Art Page/Lighthouse.jpg");
        }
    );

    $("#chinese_artwork").hover(
        function() {
            $(this).attr("src", "Art Page/BTS/Chinese_Artwork_bts.gif");
        },
        function() {
            $(this).attr("src", "Art Page/Chinese_Artwork.jpg");
        }
    );
});