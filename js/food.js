$(document).ready(function() {

    var url = location.href;
    var q = url.split("?");


    console.log(q[1]);
    load(q[1]);

    $('.box.a').click(function() {
        load('a');
    });
    $('.box.b').click(function() {
        load('b');
    });
    $('.box.c').click(function() {
        load('c');
    });


});


function load(x) {
        var content1 = "北海道水產資源豐富，使得壽司、蟹肉料理等各類海鮮料理成為北海道具代表性的高級料理。北海道的海鮮丼亦有多個種類，其中又以松前金槍魚三色丼、函館的活烏賊丼、釧路的勝手丼等最為知名。";
        var content2 = "北海道是日本拉麵文化最為興盛的地區之一。北海道拉麵中，以旭川拉麵（醬油風味）、札幌拉麵、函館拉麵三種拉麵最具代表性。現在北海道是日本拉麵文化最為興盛的地區，札幌還有拉麵共和國和拉麵橫丁等聚集大量拉麵店的飲食街。";
        var content3 = "位於北海道中部地區，曾經因為煤礦業而繁榮、卻也因為煤礦業的沒落而蕭條和破產。近年來，在日本政府的大力推廣種植哈密瓜，成為北海道哈密瓜的代表城市。";
	    var textcont = new Array(content1,content2,content3);

    switch (x) {
        case 'a':
            $('.box').removeClass('show');
            $('.box.a').addClass('show');
            $('.img').removeClass('b c');
            $('.img').addClass('a');
            $('.text').html(textcont[0]);
            break;
        case 'b':
            $('.box').removeClass('show');
            $('.box.b').addClass('show');
            $('.img').removeClass('a c');
            $('.img').addClass('b');
            $('.text').html(textcont[1]);
            break;

        case 'c':
            $('.box').removeClass('show');
            $('.box.c').addClass('show');
            $('.img').removeClass('a b');
            $('.img').addClass('c');
            $('.text').html(textcont[2]);
            break;

    }
}
