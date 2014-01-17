(function ( $ ) {
	
	$.fn.simpleFilter = function(options){
		
		var table = this;
		
		var settings = $.extend({
			fieldAlign: 'right',
			exclusions: []
		}, options);		
		
		this.before('<div class="filterContainer" style="float: ' + settings.fieldAlign + ';"><span class="filterLabel">Filter By:</span>&nbsp;<input type="text" class="filterBy" /></div><br style="clear:both;"/>');
		
		$(document).on('keyup', '.filterBy', function(){
			checkRows($(this).val(), $(this).parent('div').siblings('table'));
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