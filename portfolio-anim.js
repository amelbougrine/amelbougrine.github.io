$(function () {	
	var filterList = {
        init: function () {
			// https://mixitup.kunkalabs.com/
			$('#gallery').mixItUp({
				selectors: {
  			  target: '.gallery-item',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: '.Design' // show filter on page load.
    		}     
			});								
		}
	};
    // console.log('test'); 
	// Filter ALL the things
	filterList.init();
});


