    var snd = new Audio("alert.mp3");

function alert(volume){
    snd.volume = volume;
    snd.play();
    setTimeout(function(){
        snd.pause();
        snd.currentTime = 0;
        document.body.style.display = "none";
    }, 9000);
}

function hide() {
    var x = document.getElementById("frl");
    if (document.body.style.display === "none") {
        document.body.style.display = "block";
    } else {
        document.body.style.display = "none";
    }
} 

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '<span  style="margin-left: 3px; margin-right: 3px; color: #000000"/>' + '$2');
    }
    return x1 + x2;
}

$(function() {
	window.addEventListener('message', function(event) {
		if (event.data.type == "alert") {
            $('.frl_alerter').html('<h5>Mesaj:                                                                                                                        '+event.data.message+'</h5></marquee>');
            document.body.style.display = event.data.enable ? "block" : "none";
            alert(event.data.volume)
		}
	});
});