    var H=0;
    var M=0;
    var S=0;
    var MS=0;
    var intervaleMiliseconde;
    var intervaleSeconde;
    var intervaleMinute;
    var intervaleHeure;



function setmiliseconde()
    {
        if(MS==999)
        {
            MS=0;
        }
        MS+=1;
    document.getElementById('MS').innerHTML=MS +' ms'
    }

function setSeconde()
    {
        if(S==59)
        {
            S=0;
        }
        S+=1;
    document.getElementById('S').innerHTML=S +' S'
    }

function setMinute()
    {
        if(M==59)
        {
            M=0;
        }
        M+=1;
    document.getElementById('M').innerHTML=M +' min'
    }

function setHeure()
    {
        if(H==23)
        {
            H=0;
        }
        H+=1;
    document.getElementById('H').innerHTML=H +' h'
    }



function start()
{
    intervaleHeure = setInterval(setHeure, 3600000);
    intervaleMinute = setInterval(setMinute, 60000);
    intervaleSeconde = setInterval(setSeconde, 1000);
    intervaleMiliseconde = setInterval(setmiliseconde, 1);

}

function stop()
{
    clearInterval(intervaleMiliseconde);
    clearInterval(intervaleSeconde);
    clearInterval(intervaleMinute);
    clearInterval(intervaleHeure);
    
}

function reset()
{
    stop();
    H=0;
    M=0;
    S=0;
    MS=0;
    document.getElementById('H').innerHTML='0 h'
    document.getElementById('M').innerHTML='0 min'
    document.getElementById('S').innerHTML='0 s'
    document.getElementById('MS').innerHTML='0 ms'

    
}