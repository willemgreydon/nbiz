console.log( "TODO: SignetOptions - Check why this isn't working proberly" );
//- Provides additional configruation values for signet - developer console
//- CAUTION: Basic values are taken from meta-information defined in head, like: 
//-
//- <meta name="application-name" content="Example Title">
//- <meta name="description" content="Example description. More info: http://example.com">
//- <meta name="author" content="Example Author">
var signetOptions = {
	// "title"          	 : "String" 	//- title of your page (required to show color bars signet)
	// , "author"            : "String"		//- author of your page
	// , "description"       : "String"		//- description of your page
	// , "hue"               : "Integer"	//- integer - hue offset for the color bars
	// , "image"             : ""		//- url of an image to dipslay instead of the color bars
	"baseStyles"        : 'color: red !important; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;'		//- base style string for all parst of the singet (best used to set base font or color)
	// , "titleStyles"       : "String"		//- title styles
	// , "authorStyles"      : "String"		//- author styles
	// , "descriptionStyles" : "String" 	//- description styles
}
console.log(signetOptions);