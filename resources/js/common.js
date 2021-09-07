$(document).ready(function(){
	$(document).on('click','.track_my_order_menu',function(){
		let track_menu_top = $(this).offset().top;
		let track_menu_left = $(this).offset().left;
		let track_menu_height = $(this).height();
		let pop_up_position_top = track_menu_top + track_menu_height + 10;
		if($('#track_order_pop_up').hasClass('display_none')) {
			$('#track_order_pop_up').addClass('display_block').removeClass('display_none');
		}else{
			$('#track_order_pop_up').addClass('display_none').removeClass('display_block');
		}
		$('#track_order_pop_up').css({'top': pop_up_position_top+'px','left' : track_menu_left+'px'});

	});
	$(document).on('click','.close_pop_up',function(){
		$(this).parent().parent().addClass('display_none').removeClass('display_block');
	});
});