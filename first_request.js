var request = require("request");

request('http://www.google.com', function(error, response, body){
    // if(!error && response.statusCode == 200){ //why not ===????
    //     console.log(body); //Show the HTML for the google homepage
    // }
    
    if(error){
        console.log("SOMETHING WENT WRONG");
        console.log(error);
    }else{
        if(response.statusCode == 200){
            console.log(body);
        }
    }
});