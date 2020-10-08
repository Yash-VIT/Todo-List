//Check off specific todo
$('ul').on('click', 'li', function() {
	//if li is grey turn it blac
	$(this).toggleClass('completed');
});

//Click on X to delete To dO
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	//Grabbing new input text from todo input
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val('');
		//create a new li and add to ul
		$('ul').append('<li><span> <i class="fa fa-trash"></i> </span>' + todoText + '</li>');
	}
});

$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle();
});
