// New York Times Search
$( document ).ready(function() {

    //User clicks search button
    $("#searchButton").on("click", function(){

        //Get User input values
        var search = $("#search").val();
        var recordNumber = $("#recordNumber").val();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();
        
        //Create URL based off user input
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "8dfa5a7f87d648b5990c337b634d71ac",
            'q': search,
            'begin_date': startYear + "0101",
            'end_date': endYear + "0101"
        });

        //API Call
        $.ajax({
            url: url,
            method: 'GET',
            }).done(function(result) {
            console.log(result);
                
                //Loops for the requested number of records, creates new div and adds headline
                for(i = 0; i < recordNumber; i++ ){
                    var newDiv = document.createElement("<div>");
                    //Need to add number reminder
                    $(newDiv).append("<p>" + i + " " + response.doc[i].headline.main + "</p>");
                    //Add to articles container
                    $("#articles").append(newDiv);
                }

            }).fail(function(err) {
            throw err;
            });
        });

    //Clear User Inputs
    $("#clearButton").on("click", function(){
        
        $("#search").val("");
        $("#recordNumber").val("");
        $("#startYear").val("");
        $("#endYear").val("");
        $("#articles").empty();
    });
});