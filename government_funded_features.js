function generate_data(){
  
	  $.getJSON("javascript/EcoAction.json", function(result){
	  	// console.log(result);
	  	// console.log(result["features"]);

// foreloop
	  for(each_program of result["features"]) {
		  document.write(each_program["properties"]["Name"]["PopupInfo"]+ "<br >");
		 
// Comment out document write when wanting to make changes to page
	  }

	  });
	//   var project_list = document.createElement("a");
	//   project_list.innerHTML="";
	

// First we have to access features within the JCON file. Features has one big array. Arrays can be found when they have a square bracket around them. The Array has many jcon objects which can be found with curly brackets. We then have to access the properties to get the individual names of each of the arrays.


// 	var json_example={

// 		"occupation":"programmer",
// 		"sport":"soccer",
// 		"phone number":"123 123 1231",
// 		"favourite food":"pizza",
// 		"customers":[
// 			{
// 				"name":"Joey",
// 				"number":"123 234 1234",
// 				"address":"91 yonge street"
// 			},
// 			{
// 				"name":"bob",
// 				"number":"415 131 1313",
// 				"address":"100 avenue road"
// 			}

// 		]
// 	}

// console.log(json_example["favourite food"]);
// console.log(json_example["customers"][1]["number"]);




}