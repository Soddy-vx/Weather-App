//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
var xhttp = new XMLHttpRequest();

function getWeather(){
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        let res = JSON.parse(xhttp.responseText);
        document.getElementById("icon").innerHTML = '<img src="images/'+res.currently.icon+'.png">';
        document.getElementById("location").innerHTML = res.timezone;
        document.getElementById("tem").innerHTML = parseInt(res.currently.temperature)+'&degc';
        document.getElementById("per").innerHTML = res.currently.precipProbability*100+'%';

      }
    };
    let url='https://api.darksky.net/forecast/75c42131b896d01538ed5fe9a9b9f670/16.3881638,120.5851134?si';
    xhttp.open("GET",'https://cors-anywhere.herokuapp.com/'+url, true);
    xhttp.send();
}

function getNow(){
    let now = new Date();
    let hour= now.getHours();
    let min= now.getMinutes();
    let sec= now.getSeconds();
    if(min < 10){
        return  hour+":"+"0"+min;
    }else{
    return hour+":"+min;
    }
}
document.getElementById("time").innerHTML=getNow();

function getDays(){
    let now = new Date();
    let mon = now.getMonth();
    let day = now.getDate();
    let youbi= now.getDay();

    var youbi1 = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
    var month = new Array("Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec")
    return youbi1[youbi]+"."+day+" "+month[mon];
}
document.querySelector('#date').innerHTML=getDays();
document.querySelector('body').addEventListener('click',getWeather);

// function getLocation(){
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         document.getElementById("location").innerHTML= "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) { 
//     var place = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude;;
//     document.getElementById("location").innerHTML = res.timezone;  
    
// }

