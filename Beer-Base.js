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
function packaging()
{
	var canRadioButton = document.getElementById("can");
	var bottleRadioButton = document.getElementById("bottle");
	var kegRadioButton = document.getElementById("keg");

	if(canRadioButton.checked){
		return "C";}
	else if(bottleRadioButton.checked){
		return "B";}
	else if(kegRadioButton.checked){
		return "K";}
}
function btnBeer_onclick()
{
	// get textboxes and assign to variables
	var nameTextbox = document.getElementById("name");
	var breweryTextbox = document.getElementById("brewery");
	var categoryTextbox = document.getElementById("category");
	var percentTextbox = document.getElementById("percent");
	var amountTextbox = document.getElementById("amount");
	var volumeTextbox = document.getElementById("volume");
	var priceTextbox = document.getElementById("price");
	var apdTextbox = document.getElementById("apd");
	var vpdTextbox = document.getElementById("vpd");
	var sqlTextbox = document.getElementById("txtOutput");
	//var packaging = "O";
	//apdTextbox.value = "p";
	
	

	// get user input from corresponding textbox
	var name = nameTextbox.value;
	var brewery = breweryTextbox.value;
	var category = categoryTextbox.value;
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
	var sqlOut = "(\'"  + name + "\', \'" + brewery + "\', \'"  + category + "\', "  + percent + ", \'" + packaging() + "\', "  + amount + ", " + volume + ", " + price + ", " + aPD() + "),\n";
	apdTextbox.value = aPD();
	vpdTextbox.value = vPD();
	sqlTextbox.value = sqlOut;
}