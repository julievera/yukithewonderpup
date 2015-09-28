$(document).ready({
	$.post("php/blog.php?postindex=0", function(data) {
 		$("#blogpost").html(data);
	});
});
