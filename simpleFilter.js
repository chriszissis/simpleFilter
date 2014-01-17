(function ( $ ) {
	
	$.fn.simpleFilter = function(options){
		
		var table = this;
		
		var settings = $.extend({
			fieldAlign: 'right',
			exclusions: []
		}, options);		
		
		this.before('<div class="filterContainer" style="float: ' + settings.fieldAlign + ';"><span class="filterLabel">Filter By:</span>&nbsp;<input type="text" id="filterBy" name="filterBy" /></div><br style="clear:both;"/>');
		
		$(document).on('keyup', '#filterBy', function(){
			checkRows($(this).val());
		});
		
			function checkRows(filterText){
				$('.filter > tbody > tr').each(function(i,v){
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