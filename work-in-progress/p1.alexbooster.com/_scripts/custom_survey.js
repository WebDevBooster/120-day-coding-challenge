var init = function() {
  var box = document.querySelector('#cubeContainer').children[0],
      showPanelButtons = document.querySelectorAll('.show-buttons input'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
		box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }

	formElement = document.getElementById("desiredCourse");
	formElement.addEventListener("blur", desiredCourseChanged, false);	
	
	formElement = document.getElementById("desiredCourse");
	formElement.addEventListener("change", desiredCourseChanged, false);	
	
	formElement = document.getElementById("artistLength1");
	formElement.addEventListener("change", artistLengthChanged, false);	
	
	formElement = document.getElementById("artistLength2");
	formElement.addEventListener("change", artistLengthChanged, false);	
	
	formElement = document.getElementById("artistLength3");
	formElement.addEventListener("change", artistLengthChanged, false);	
	
	formElement = document.getElementById("artistLength4");
	formElement.addEventListener("change", artistLengthChanged, false);	
	
	formElement = document.getElementById("artistLength5");
	formElement.addEventListener("change", artistLengthChanged, false);	
	
	formElement = document.getElementById("hoursPractice");
	formElement.addEventListener("change", hoursPracticeChanged, false);	

}

window.addEventListener( 'DOMContentLoaded', init, false);

function desiredCourseChanged(e) {
	target =  e.target;
	theValue = target.value;
	localStorage.setItem('desiredCourse',theValue);
}
	
function artistLengthChanged(e) {
	target =  e.target;
	theValue = target.value;
	localStorage.setItem('artistLength',theValue);
}

function hoursPracticeChanged(e) {
	target =  e.target;
	theValue = target.value;
	localStorage.setItem('hoursPractice',theValue);
}

