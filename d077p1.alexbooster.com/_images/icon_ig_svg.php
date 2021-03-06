<?php 
header('Content-type: image/svg+xml');

if ( isset($_GET['baseColor']) ) {
    $base = $_GET['baseColor'];
} else {
    $base = '0,0,0,1';
}
if ( isset($_GET["iconColor"]) ) {
    $icon = $_GET["iconColor"];
} else {
    $icon = "255,255,255,1";
}

?>

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
	<defs>
		<style type="text/css"><![CDATA[
            .base_art { fill: rgba(<?php echo $base; ?>); }
            .icon_art { fill: rgba(<?php echo $icon; ?>); }
		]]></style>
	</defs>
	<path class="icon_art" d="M78.204, 73.131c0, 4.076-3.335, 7.411-7.411, 7.411H27.876c-4.076, 0-7.411-3.335-7.411-7.411V30.214 c0-4.076, 3.335-7.411, 7.411-7.411h42.917c4.076, 0, 7.411, 3.335, 7.411, 7.411V73.131z" />
	<path class="base_art" d="M67.281, 52.174c0, 9.604-8.035, 17.389-17.947, 17.389s-17.946-7.785-17.946-17.389c0-1.721, 0.259-3.384, 0.74-4.954h-5.303 v24.39c0, 1.262, 1.033, 2.295, 2.295, 2.295h40.207c1.262, 0, 2.295-1.033, 2.295-2.295V47.22h-5.082 C67.022, 48.79, 67.281, 50.453, 67.281, 52.174z" />
	<ellipse class="base_art" cx="49.334" cy="51.547" rx="11.596" ry="11.236" />
	<path class="base_art" d="M62.47, 40.639h6.526c1.43, 0, 2.599-1.169, 2.599-2.599v-6.222c0-1.43-1.17-2.599-2.599-2.599H62.47 c-1.43, 0-2.599, 1.17-2.599, 2.599v6.222C59.871, 39.469, 61.041, 40.639, 62.47, 40.639z" />
	<path class="base_art" d="M50, 1C22.938, 1, 1, 22.938, 1, 50s21.938, 49, 49, 49c27.062, 0, 49-21.938, 49-49S77.062, 1, 50, 1z M78.149, 73.131 c0, 4.076-3.335, 7.411-7.411, 7.411H27.821c-4.076, 0-7.411-3.335-7.411-7.411V30.214c0-4.076, 3.335-7.411, 7.411-7.411h42.917 c4.076, 0, 7.411, 3.335, 7.411, 7.411V73.131z" />
</svg>
