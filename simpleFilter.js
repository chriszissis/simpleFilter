(function ( $ ) {
	
	$.fn.simpleFilter = function(options){
		
		var table = this;
		
		var settings = $.extend({
			autoPlacement: true,
			fieldAlign: 'right',
			exclusions: []
		}, options);		
		
		$(table).each(function(){
			var rndID = Math.floor(Math.random() * 1000000);
			$(this).attr('data-sf', rndID );
			
			if (settings.autoPlacement) {
				$(this).before('<div class="filterContainer" style="float: ' + settings.fieldAlign + ';"><span class="filterLabel">Filter By:</span>&nbsp;<input type="text" class="filterBy" placeholder="Filter" data-sfT="' + rndID + '"/></div><br style="clear:both;"/>');
			}
			else {
				$(this).parents('.filter_wrapper').find('.filterContainer').append('<input type="text" class="filterBy" placeholder="Filter" data-sfT="' + rndID + '"/>');
			}
		});
		
		$(document).on('keyup', '.filterBy', function(){
			var t = $(this).attr('data-sfT');
			checkRows($(this).val(), $('table[data-sf=' + t + ']'));
		});
		
		function checkRows(filterText,el){
			
			$('tbody > tr', el).each(function(i,v){
				if ( ! ( $(v).text().toUpperCase().match(filterText.toUpperCase())) )
				{
					$(v).hide();
				}	
				else {
					$(v).show();
				}					
			});
		}
		
		return this;
	};

}( jQuery ));