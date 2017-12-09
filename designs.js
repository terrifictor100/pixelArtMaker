
function makeGrid(width, height) {

	for (var x = 0; x < height; x++){
		$('#pixel_canvas').append(`<tr id=row_${x}></tr>`);
		for (var y = 0; y < width; y++ ) {
				$(`#row_${x}`).append(`<td></td>`).css("cursor","pointer");
		}
	};
}

$('input[type="submit"]').on('click', function(){
	init();
	let height, width;
	height = $('#input_height').val();
	width = $('#input_width').val();
	makeGrid(width, height);
	return false;

});

$('table').on('click', 'td', function(evt){
	let colourChosen = $('#colorPicker').val();
	$(evt.target).css("background-color",colourChosen);
});


function init(){
	$('#pixel_canvas').html('<table></table>').css("background-color", "white");
	$('#colorPicker').val('#000000');
};

