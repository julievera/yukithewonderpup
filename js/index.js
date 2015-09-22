$(document).ready({
	$.post("php/blog.php?postoffset=0", function(data) {
 		$("#blogpost").html(data);
	});
});