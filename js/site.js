$(document).ready(function() {

	var all = "pho1a pho1b pho2a pho2b pho3a pho3b pho4a pho4b pho5a pho5b pho6a pho6b pho7a pho7b pho8a pho8b ";
	


	$('.check').removeClass('show');
    	$('.check.site1').addClass('show');
    	$('.pho').removeClass(all);
    	$('.pho').eq(0).addClass('pho1a');
    	$('.pho').eq(1).addClass('pho1b');
    	$('.subtext .site1').fadeIn();
    

    $('.site1').click(function(){
    	$('.check').removeClass('show');
    	$('.check.site1').addClass('show');
    	$('.pho').removeClass(all);
    	$('.pho').eq(0).addClass('pho1a');
    	$('.pho').eq(1).addClass('pho1b');
    	$('.subtext span').hide();
    	$('.subtext .site1').fadeIn();
    });
    $('.site2').click(function(){
    	$('.check').removeClass('show');
    	$('.check.site2').addClass('show');
    	$('.pho').removeClass(all);
    	$('.pho').eq(0).addClass('pho2a');
    	$('.pho').eq(1).addClass('pho2b');
    	$('.subtext span').hide();
    	$('.subtext .site2').fadeIn();
    });

    $('.site3').click(function(){
    	$('.check').removeClass('show');
    	$('.check.site3').addClass('show');
    	$('.pho').removeClass(all);
    	$('.pho').eq(0).addClass('pho3a');
    	$('.pho').eq(1).addClass('pho3b');
    	$('.subtext span').hide();
    	$('.subtext .site3').fadeIn();
    });

    $('.site4').click(function(){
    	$('.check').removeClass('show');
    	$('.check.site4').addClass('show');
    	$('.pho').removeClass(all);
    	$('.pho').eq(0).addClass('pho4a');
    	$('.pho').eq(1).addClass('pho4b');
    	$('.subtext span').hide();
    	$('.subtext .site4').fadeIn();
    });

    $('.site5').click(function(){
    	$('.check').removeClass('show');
    	$('.check.site5').addClass('show');
    	$('.pho').removeClass(all);
    	$('.pho').eq(0).addClass('pho5a');
    	$('.pho').eq(1).addClass('pho5b');
    	$('.subtext span').hide();
    	$('.subtext .site5').fadeIn();
    });

    $('.site6').click(function(){
    	$('.check').removeClass('show');
    	$('.check.site6').addClass('show');
    	$('.pho').removeClass(all);
    	$('.pho').eq(0).addClass('pho6a');
    	$('.pho').eq(1).addClass('pho6b');
    	$('.subtext span').hide();
    	$('.subtext .site6').fadeIn();
    });

    $('.site7').click(function(){
    	$('.check').removeClass('show');
    	$('.check.site7').addClass('show');
    	$('.pho').removeClass(all);
    	$('.pho').eq(0).addClass('pho7a');
    	$('.pho').eq(1).addClass('pho7b');
    	$('.subtext span').hide();
    	$('.subtext .site7').fadeIn();
    });

    $('.site8').click(function(){
    	$('.check').removeClass('show');
    	$('.check.site8').addClass('show');
    	$('.pho').removeClass(all);
    	$('.pho').eq(0).addClass('pho8a');
    	$('.pho').eq(1).addClass('pho8b');
    	$('.subtext span').hide();
    	$('.subtext .site8').fadeIn();
    });
   

});

