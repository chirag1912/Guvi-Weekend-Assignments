//To print 10..9..8..7..6upto 1 and then Happy New Year!;

function countDown(startingpt,cb){
   setTimeout(function(){
    let numres=startingpt-1;
    cb(numres);
   },2000)
}                       //With Dealy of 2 seconds..

function countDown2(_num,funcCallback){
    res_num=_num-1;
    funcCallback(res_num);
}

function countDown3(_num,funcCallback){
    res_num=_num-1;
    funcCallback(res_num);
}

function countDown4(_num,funcCallback){
    res_num=_num-1;
    funcCallback(res_num);
}

function countDown5(_num,funcCallback){
    res_num=_num-1;
    funcCallback(res_num);
}

function countDown6(_num,funcCallback){
    res_num=_num-1;
    funcCallback(res_num);
}

function countDown7(_num,funcCallback){
    res_num=_num-1;
    funcCallback(res_num);
}

function countDown8(_num,funcCallback){
    res_num=_num-1;
    funcCallback(res_num);
}

function countDown9(_num,funcCallback){
    res_num=_num-1;
    funcCallback(res_num);
}

function finalCountDown(_num,funcCallback){
    res_num=_num-1;
    funcCallback(res_num);
}

let str="";
countDown(10,function(num1){
    
    console.log("10");
    str+="10";
    console.log(".."+num1);
    str+=".."+num1;
    countDown2(num1,function(num2){     //Value of num2=res_num; of the function being called;
        console.log(".."+num2);
        str+=".."+num2;
        countDown3(num2,function(num3){
            console.log(".."+num3);
            str+=".."+num3;
            countDown4(num3,function(num4){
                console.log(".."+num4);
                str+=".."+num4;
                countDown5(num4,function(num5){
                    console.log(".."+num5);
                    str+=".."+num5;
                    countDown6(num5,function(num6){
                        console.log(".."+num6);
                        str+=".."+num6;
                        countDown7(num6,function(num7){
                            console.log(".."+num7);
                            str+=".."+num7;
                            countDown8(num7,function(num8){
                                console.log(".."+num8);
                                str+=".."+num8;
                                countDown9(num8,function(num9){
                                    console.log(".."+num9);
                                    str+=".."+num9;
                                    finalCountDown(num9,function(num10){
                                        str+=".."+num10+".."+"Happy New Year Here The Assignment is Done!!";
                                        console.log(".."+num10+".."+"Happy New Year Here The Assignment is Done!!");
                                    }) 
                                }) 
                            }) 
                        }) 
                    }) 
                }) 
            })  
        })
    })
})  //End of Main CountDwon Function;

console.log(str);
//To display in the HTML Page for ease of Checking:
let var1=document.createElement('div');
var1.innerHTML=str;
document.body.appendChild(var1);