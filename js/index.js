$.fn.ForceNumericOnly =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || 
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};

$("#value").maskMoney();

$("#bitcoin").submit(function(event) {
	event.preventDefault();
  	var valor = $("#value").val().replace(/[^\d]+/g,'')
  	var result = 0;
  	console.info(valor)

  	var test = $.getJSON("https://www.mercadobitcoin.net/api/BTC/ticker/", function(data) {

	  	if ($("#bit").prop("checked") === true) {
	  		result = valor*data.ticker.buy
	  	}else {
	   		result = (valor/100)/data.ticker.buy	
	  	}
	  	$("#result").html(result.toLocaleString());
  	});
 });