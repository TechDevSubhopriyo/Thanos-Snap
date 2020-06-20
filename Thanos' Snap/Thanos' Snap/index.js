var arr=[1,1,1,1,1,1,1,1,1,1,1,1];
function snap(){
    document.getElementById("ref").style.display="inline";
    m=0;
    h = countLeft();
    if(h==0){
        alert("NO ONE IS LEFT IN THE UNIVERSE");
        document.getElementById("gauntlet").style.opacity=0;
        var g = document.getElementById("gauntlet");
        fadeOut(g);
        document.getElementById("note1").style.display="none";
        document.getElementById("note2").style.display="block";
    }
    else{
        setTimeout(function(){ 
            var audio = new Audio('snap.mp3');
            audio.play();
        },1000);
        document.getElementById("gauntlet").src="click.gif";
        setTimeout(function(){ 
            document.getElementById("gauntlet").src="gauntlet.png";
            while(m<(h/2)){
                n=getRandomInt(0,11);
                if(arr[n]==1){
                    arr[n]=0;
                    m=m+1;
                }
            }
            for(j=0;j<12;j++){
                if(arr[j]==0){
                    arr[j]=2;
                    fadeOut(document.getElementById(j+1));
                }
            }
            }, 2500);
    }
}

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
    
}

function countLeft(){
    i=1;
    c=0;
    while(i<=12){
        var em = document.getElementById(i);
        var  temp = window.getComputedStyle(em).getPropertyValue("display");
        if(temp!='none')
        {
            c=c+1;
        }
        else{
            arr[i-1]=2;
        }
        i=i+1;
    }
    return c;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function refresh(){
    location.reload();
}