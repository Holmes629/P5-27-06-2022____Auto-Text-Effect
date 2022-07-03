str = document.getElementById("index-input");
i=0;
time =300;
sec1 = document.getElementById("sectionid1");
sec2= document.getElementById("sectionid2");
timeinput= document.getElementById("input");
div = document.getElementById("output");

function textgener() {
    div.innerHTML= str.value.slice(0,i+1);
    i++;
    if (maxlen == i){
            i=0;
    }
    var timer= setTimeout(textgener,time);
}
timeinput.addEventListener("input",(e)=> time= 300/e.target.value );


function click1(){
    sec1.className= "section";
    sec2.className= "sectionClass";
    alert(str.value);
    maxlen = str.value.length;
    textgener();
}

