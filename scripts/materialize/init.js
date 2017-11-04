(function($){
  $(function(){

  	$('.button-collapse').sideNav({
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    	edge: 'right',
      menuWidth: 300,
      }
  	);
    $('select').material_select();
 	  $('.collapsible').collapsible();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    }
  );
  $('.tooltipped').tooltip({delay: 50});
  }); // end of document ready
})(jQuery); // end of jQuery name space