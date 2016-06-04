$(document).ready(function() {
$('ul').on('click', '.fa-close', function(event){
	$(this).parent().remove();
});
$('.main-items ul').on('click', '.fa-arrow-right', function(event){
	$('.on-boat ul').append($(this).parent());

}); 
$('.on-boat ul').on('click', '.fa-arrow-right', function(event){
	$('.main-items ul').append($(this).parent());

}); 

//add function to move from .on-boat to .main-items

$('.add').on('click', function(event){
	var item= prompt('Please add item');
	$('.main-items ul').append('<li><span>'+item+'</span><i class="fa fa-close"></i><i class="fa fa-arrow-right"></i></li>');
});

});
