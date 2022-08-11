$(document).ready(function(){
  var query = Modernizr.mq('(min-width: 768px)');
    if (query) {

      if ($('.collection-list-block').length > 0) {
        $('.collection-list-block').each(function() {

          var $this = $(this),
              currentTallest = 0,
              currentDiv = 0,
              currentRowStart = 0,
              rowDivs = [],
              topPosition = 0;
                
          var $box = $this.find('.dg-product-box');
          $.each($box, function(){
              
            var $this = $(this);
            topPosition = $this.position().top;

            if (currentRowStart != topPosition) {

            // we just came to a new row.  Set all the heights on the completed row
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
             rowDivs[currentDiv].height(currentTallest);
            }

            // set the variables for the new row
            rowDivs.length = 0; // empty the array
            currentRowStart = topPosition;
            currentTallest = $this.height();
            rowDivs.push($this);

            } else {

            // another div on the current row.  Add it to the list and check if it's taller
            rowDivs.push($this);
              currentTallest = (currentTallest < $this.height()) ? ($this.height()) : (currentTallest);
            }

            // do the last row
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
            }
          });
        });
      }
  
    }
});