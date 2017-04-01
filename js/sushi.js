$(window).on('load',function(){
	move();
});
function move() {
	$('.itamae').animate({
		left: '-75px'
	}, 1000, 'linear');
	$('.itamae').animate({
		left: '0px'
	}, 0, 'linear');
	setTimeout('move()', 1000);
}
