$(function () {
    console.log("Ready");
    $(".glyphicon-camera").css("color", "#fff");
});

var zoomImage = function(id){
    if(id == 1){
        $("#modalImage").attr("src","http://orion.trafikverket.se/CameraImages/share/wcm/548.jpg");
    }
    if(id == 2){
        $("#modalImage").attr("src","http://orion.trafikverket.se/CameraImages/share/wcm/546.jpg");
    }
    if(id == 3){
        $("#modalImage").attr("src","http://orion.trafikverket.se/CameraImages/share/wcm/466.jpg");
    }
    if(id == 4){
        $("#modalImage").attr("src","http://orion.trafikverket.se/CameraImages/share/itv/285.jpg");
    }                
    if(id == 5){
        $("#modalImage").attr("src","http://orion.trafikverket.se/CameraImages/share/itv/281.jpg");
    }
    if(id == 6){
        $("#modalImage").attr("src","http://orion.trafikverket.se/CameraImages/share/wcm/537.jpg");
    }

    $(".modal").modal("show");
}