$(document).ready(function() {

    $('button').click(function() {

        if ($('input[type=text]').val() && $('input[type=email]').val() && $('textarea').val()) {
            alert("Name:" + $('input[type=text]').val()+"\n"+ "email:" + " " + $('input[type=email]').val()+"\n" + "感謝您！");
        } else {}
    });
});
