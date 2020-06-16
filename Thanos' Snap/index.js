function snap(){
    
    m=0;
    h = countLeft();
    if(h==0){
        alert("NO ONE IS LEFT IN THE UNIVERSE");
        document.getElementById("gauntlet").style.opacity=0;
        var g = document.getElementById("gauntlet");
        g.parentNode.removeChild(g);
        document.getElementById("note1").style.display="none";
        document.getElementById("note2").style.display="block";

    }
    else{
        var audio = new Audio('snap.mp3');
        audio.play();
    }
    while(m<(h/2)){
        n=getRandomInt(1,12);
        var em = document.getElementById(n);
        var  temp = window.getComputedStyle(em).getPropertyValue("opacity");
        if(temp==1)
        {
            document.getElementById(n).style.opacity=0;
            m=m+1;
        }
    }
}

function countLeft(){
    i=1;
    c=0;
    while(i<=12){
        var em = document.getElementById(i);
        var  temp = window.getComputedStyle(em).getPropertyValue("opacity");
        if(temp==1)
        {
            c=c+1;
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