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
	<path class="base_art" d="M50, 1C22.938, 1, 1, 22.938, 1, 50s21.938, 49, 49, 49s49-21.938, 49-49S77.062, 1, 50, 1z M72.569, 38.332 c0.023, 0.492, 0.035, 0.987, 0.035, 1.486c0, 15.176-11.547, 32.668-32.664, 32.668c-6.484, 0-12.523-1.9-17.606-5.157 c0.901, 0.105, 1.818, 0.164, 2.739, 0.164c5.384, 0, 10.33-1.837, 14.263-4.919c-5.025-0.094-9.269-3.417-10.728-7.974 c0.698, 0.129, 1.424, 0.203, 2.165, 0.203c1.041, 0, 2.056-0.14, 3.023-0.402c-5.255-1.057-9.214-5.692-9.214-11.255v-0.148 c1.549, 0.866, 3.324, 1.377, 5.204, 1.436c-3.082-2.056-5.11-5.571-5.11-9.554c0-2.103, 0.57-4.081, 1.552-5.774 c5.668, 6.948, 14.126, 11.512, 23.672, 12c-0.195-0.843-0.297-1.72-0.297-2.618c0-6.343, 5.138-11.485, 11.477-11.485 c3.304, 0, 6.292, 1.393, 8.38, 3.628c2.618-0.515, 5.075-1.471, 7.299-2.789c-0.862, 2.684-2.684, 4.935-5.052, 6.355 c2.321-0.277, 4.537-0.893, 6.593-1.806C76.759, 34.689, 74.816, 36.717, 72.569, 38.332z" />
	<path class="icon_art" d="M72.569, 38.332c0.023, 0.492, 0.035, 0.987, 0.035, 1.486c0, 15.176-11.547, 32.668-32.664, 32.668 c-6.484, 0-12.523-1.9-17.606-5.157c0.901, 0.105, 1.818, 0.164, 2.739, 0.164c5.384, 0, 10.33-1.837, 14.263-4.919 c-5.025-0.094-9.269-3.417-10.728-7.974c0.698, 0.129, 1.424, 0.203, 2.165, 0.203c1.041, 0, 2.056-0.14, 3.023-0.402 c-5.255-1.057-9.214-5.692-9.214-11.255v-0.148c1.549, 0.866, 3.324, 1.377, 5.204, 1.436c-3.082-2.056-5.11-5.571-5.11-9.554 c0-2.103, 0.57-4.081, 1.552-5.774c5.668, 6.948, 14.126, 11.512, 23.672, 12c-0.195-0.843-0.297-1.72-0.297-2.618 c0-6.343, 5.138-11.485, 11.477-11.485c3.304, 0, 6.292, 1.393, 8.38, 3.628c2.618-0.515, 5.075-1.471, 7.299-2.789 c-0.862, 2.684-2.684, 4.935-5.052, 6.355c2.321-0.277, 4.537-0.893, 6.593-1.806C76.759, 34.689, 74.816, 36.717, 72.569, 38.332z" />
</svg>