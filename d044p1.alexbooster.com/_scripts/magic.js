document.addEventListener('DOMContentLoaded', function(){
	let magic = document.getElementById('magic');
	let topLayer = magic.querySelector('.bottom');
	let handle = magic.querySelector('.handle');
	let skew = 0;
	let delta = 0;

	if(magic.className.indexOf('wand') != -1){
		skew = 1000;
	}

	magic.addEventListener('mousemove', function(e){
		delta = (e.clientX - window.innerWidth / 2) * 0.5; 
		handle.style.left = e.clientX + delta +'px';
		topLayer.style.width = e.clientX + skew + delta + 'px';
	});
});
