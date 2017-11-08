function aPD()
{
	var alcPD = percent/100*amount*volume/price;
	return alcPD;
}
function vPD()
{
	var volPD = amount*volume/price;
	return volPD
}
function btnBeer_onclick()
{
	// get textboxes and assign to variables
	var percentTextbox = document.getElementById("percent");
	var amountTextbox = document.getElementById("amount");
	var volumeTextbox = document.getElementById("volume");
	var priceTextbox = document.getElementById("price");
	var apdTextbox = document.getElementById("apd");
	var vpdTextbox = document.getElementById("vpd");
	//var packaging = "O";
	//apdTextbox.value = "p";
	
	

	// get user input from corresponding textbox
	
	percent = percentTextbox.value;
	percent = parseFloat(percent);
	//var packaging = packagingTextbox.value;
	//var packaging = packagingTextbox.value;
	amount = amountTextbox.value;
	amount = parseFloat(amount);
	volume = volumeTextbox.value;
	volume = parseFloat(volume);
	price = priceTextbox.value;
	price = parseFloat(price);
	// get per dollars and display in textbox
	//var output = "Alcohol Per Dollar: " + aPD() + "		Volume Per Dollar: " + vPD();
	
	//apdTextbox.value = packaging.value;//aPD();
	
	apdTextbox.value = aPD();
	vpdTextbox.value = vPD();
}