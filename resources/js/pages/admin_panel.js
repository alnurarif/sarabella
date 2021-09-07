$(document).ready(function(){
	$(document).on('click','.main_left_menu',function(){
		// let submenu_number = $(this).find('.sub_menu_side_wrapper .submenu_div').length;
		let submenu_number = $(this).parent().find('.sub_menu_side_wrapper .submenu_div').length;
		// let submenu_height = $(this).find('.sub_menu_side_wrapper').find('.submenu_div:first').outerHeight();
		let submenu_height = $(this).parent().find('.sub_menu_side_wrapper').find('.submenu_div:first').outerHeight();

		let total_height = (submenu_height * submenu_number) + submenu_number;
		$('.sub_menu_side_wrapper').css('height','0px');
		if($(this).parent().find('.sub_menu_side_wrapper').height() == 0){
			$(this).parent().find('.sub_menu_side_wrapper').css('height', total_height+'px');
		}
	});

});