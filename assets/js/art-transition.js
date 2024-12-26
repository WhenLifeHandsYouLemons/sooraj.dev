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

    $("#steaming_cup_anim").hover(
        function() {
            $(this).attr("src", "assets/img/art/bts/Steaming_Cup_Anim_bts.gif");
        },
        function() {
            $(this).attr("src", "assets/img/art/Steaming_Cup_Anim.gif");
        }
    );

    $("#book_loading_anim").hover(
        function() {
            $(this).attr("src", "assets/img/art/bts/Book_Loading_Anim_bts.gif");
        },
        function() {
            $(this).attr("src", "assets/img/art/Book_Loading_Anim.gif");
        }
    );
});