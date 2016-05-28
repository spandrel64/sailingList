$(document).ready(function() {
$('ul').on('click', '.fa-close', function(event){
	$(this).parent().remove();
});
$('ul').on('click', '.fa-arrow-right', function(event){
	$(this).parent().appendTo('ul');
	//$(this).parent().remove();
});
$('.add').on('click','.add', function(event){
	$(this).alertBox();
});

});
