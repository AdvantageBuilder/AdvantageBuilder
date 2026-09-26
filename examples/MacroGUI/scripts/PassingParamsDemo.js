function documentLoaded()
{
	//query strings
	document.getElementById("fldPlanet").innerText = QueryString["Planet"];
	document.getElementById("fldCountry").innerText = QueryString["Country"];

	//GUI parameters
	document.getElementById("fldCity").innerText = macroGUIParams["City"];
	document.getElementById("fldSuburb").innerText = macroGUIParams["Suburb"];

	//Macro arguments
	document.getElementById("fldStreetName").innerText = args.StreetName;
	document.getElementById("fldStreetNumber").innerText = args.StreetNumber;

}
