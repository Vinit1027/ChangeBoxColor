


function fun10(m){

    console.log(m)
    
    var g = document.getElementById(m);

    console.log(g)

    var i = Math.round(Math.random()*255);

    var j = Math.round(Math.random()*255);

    var k = Math.round(Math.random()*255);

    
    g.style.backgroundColor = "rgb("+i+","+j+","+k+")";


    if(m === 'box2'){

        document.getElementById(m).onmouseover = function(){

        var c = document.getElementById('box4').style.backgroundColor;
        document.getElementById('box2').style.backgroundColor = c;
        
        }
    }


    if(m === 'box3'){
        
        document.getElementById(m).onmouseover = function(){
    
        var h = document.getElementById('box5').style.backgroundColor;
        document.getElementById('box3').style.backgroundColor = h;
            
        }

    }

    


}