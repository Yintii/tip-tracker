
function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.2673, lng: -97.7431},
        zoom: 12
    });
    var geocoder = new google.maps.Geocoder();
    var infoWindow = new google.maps.InfoWindow;
    var submitButton = document.getElementById("query");

    submitButton.addEventListener("click", function(){
        geocodeAddress(geocoder, map)
    });


    function geocodeAddress(geocoder, resultsMap){
        var address = document.getElementById("inputbox").value;
        geocoder.geocode({'address': address}, function(results, status){
            if(status === 'OK'){
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            }else{
                alert('Geocode was not successful because ' + status);
            }
        });
    }


}

