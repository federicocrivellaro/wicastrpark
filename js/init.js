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


    
    $('form').on('submit', function(e) {
        e.preventDefault();


        var $active=$('.active');
        if($active.next().length>0){
            var next=$active.next();
            $active.removeClass('active');
            next.addClass('active');
        }


        $('form button').trigger( "blur" );   
        var formData = $(this).serializeObject();
        var val=formData.volume;


        var index=0;
        
        if(val>20 && val<31){
            index=1;
        }else if(val>30 && val<41){
            index=2;
        }else if(val>40 && val<51){
            index=3;
        }else if(val>50 && val<61){
            index=4;
        }else if(val>60 && val<71){
            index=5;
        }else if(val>70 && val<81){
            index=6;
        }else if(val>80 && val<91){
            index=7;
        }else if(val>90){
            index=8;
        }

        reports[index].total=reports[index].total+1;

        jsonString=JSON.stringify(reports);
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            type: 'POST',
            url: 'post.php',
            cache: false,
            timeout: 2000,
            dataType: 'json',
            data: jsonString,
            success: function(data, status) {
                //bottomBarcart.update(data);
            },
            error: function(request, status, error) {

            }
        });
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
