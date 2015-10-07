<?php
	$post_offset = htmlspecialchars($_GET['postindex']);
	$api_uri = "http://api.tumblr.com/v2/blog/yukithewonderpup.tumblr.com/";
	$api_uri .= "posts?api_key=9qEk24ATIQWXXWwuix1JpQ6dQeiJdEfwGloFO4ADgYs9r60tHV";
	$api_uri .= "&limit=2&offset=";

	$result = json_decode(file_get_contents($api_uri . $post_offset), true);
	
	$first_post = $result['response']['posts'][0];
	$first_post_date = $first_post['date'];
	$first_post_title = $first_post['title'];
	$first_post_body = $first_post['body'];

	$second_post = $result['response']['posts'][1];
	$second_post_date = $second_post['date'];
	$second_post_title = $second_post['title'];
	$second_post_body = $second_post['body'];

	$blog_template = "
		<div id='first_post'>
                    	<div id='post_date'>
				<h5>" . $first_post_date . "</h5>
			    </div>
			    <div id='post_title'>
				<h2>" . $first_post_title . "</h2>
			    </div>
			    <div id='post_text'>
			    " . $first_post_body . "
			    </div>
		</div>
		<div id='second_post'>
			    <div id='post_date'>
				<h5>" . $second_post_date . "</h5>
			    </div>
			    <div id='post_title'>
				<h2>" . $second_post_title . "</h2>
			    </div>
			    <div id='post_text'>
			    " . $second_post_body . "
			    </div>
		</div>";
	print $blog_template;
?>
