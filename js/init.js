var baseRoot = "https://gather.siineserver.com/GatherServerLive/";
var client_id = '57fc9a300a975a4e89011758';
var domain_id = '57fc9edc0a975a4e8901175d';

var domain;
var reports=[];
var bottomBarcart;
var uuid;

$(document).ready(function() {

    uuid=checkCookie("GatherWidgetID");
     // GET DOMAIN
    $.ajax({
        // Post select to url.
        type: 'post',
        url: 'getDomain.php',
        dataType: 'json',
        success: function(data) {
            domain = data;
            console.log(domain)
            drawForm();
        },
        error: function(data) {
            console.log("error");
        },
        complete: function(data) {
            
        }
    });


    getJson("reports",function(){
        reports=this;
        if(reports.length===0){
            reports=[
                {"parameter":"10-20","total":3},
                {"parameter":"21-30","total":6},
                {"parameter":"31-40","total":2},
                {"parameter":"41-50","total":10}, 
                {"parameter":"50-61","total":3},
                {"parameter":"61-70","total":4}, 
                {"parameter":"71-80","total":6},
                {"parameter":"81-90","total":2},
                {"parameter":"91-100","total":1},      
            ];
        }
        //bottomBarcart= new barchart('#barchart',reports);
    });


    


    function getJson(file,callback) {
        $.ajax({
            // Post select to url.
            type: 'post',
            url: 'get.php?file='+file,
            dataType: 'json', // expected returned data format.
            success: function(data) {
                callback.call(data);
            },
            complete: function(data) {
                // do something, not critical.
            }
        });
    }


    function drawReports(data){
        reports=data;
        $('.list').empty();
        for (var i = 0; i < reports.length; i++) {
            $('.list').append('<p>'+reports[i]["value"]+'</p>');
        }

    }
});
