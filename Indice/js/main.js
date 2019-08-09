$(document).ready(function(){

	$('#btn-menu').click(function(){

		if( $('.btn-menu span').attr('class') == 'fa fa-windows' ){

			$('.btn-menu span').removeClass('fa fa-windows').addClass('fa fa-close').css({'color':'#fff'});
			$('.full-menu').css({'left':'0'});

		}else{
			$('.btn-menu span').removeClass('fa fa-close').addClass('fa fa-windows').css({'color':'#fff'});
			$('.full-menu').css({'left':'-100%'});
		}

	});

});