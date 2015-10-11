$(document).ready(function() {
	$.get('php/post_limit.php', function(data) {
		$('#post_content').attr('data-postlimit', data);
	});
	
	$.get('php/blog.php', {postindex: 0}, function(data) {
		$('#post_content').html(data);
 		$('#post_content').attr('data-postoffset', 0);
	});

	$('#newerbutton').click(function(){
		var offset = parseInt($('#post_content').attr('data-postoffset'));
		if (offset > 0) {
			$.get('php/blog.php?postindex=' + String(offset-2), function(data) {
 				$('#post_content').html(data);
 				$('#post_content').attr('data-postoffset', offset-2);
			});
		};
	});

	$('#olderbutton').click(function(){
		var offset = parseInt($('#post_content').attr('data-postoffset'));
		var limit = parseInt($('#post_content').attr('data-postlimit'));
		if (offset < limit-1) {
			$.get('php/blog.php?postindex=' + String(offset+2), function(data) {
				$('#post_content').html(data);
 				$('#post_content').attr('data-postoffset', offset+2);
			});
		};
	});
});
