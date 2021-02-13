 var inputs = [];
 
 
 function getParagraph1()
 {

    for(var i = 1; i <=6; i++)
    {
        inputs.push(document.getElementById("InputBox_1" + i).value);
        inputs.join(".");
        document.getElementById("paragraphShow1").innerHTML = inputs.join(".");
        
    }

    function getParagraph2()
 {

    for(var i = 1; i <=6; i++)
    {
        inputs.push(document.getElementById("InputBox_1(p2)" + i).value);
        inputs.join(".");
        document.getElementById("paragraphShow2").innerHTML = inputs.join(".");
       
    }
    
   
 }
/*
 function getParagraph2()
 {

    for(var i = 1; i <=6; i++)
    {
        inputs.push(document.getElementById("InputBox_2" + i).value);
    }
    inputs.join(".");
    document.getElementById("paragraphShow2").innerHTML = inputs.join(".");
 }

 function getParagraph3()
 {

    for(var i = 1; i <=6; i++)
    {
        inputs.push(document.getElementById("InputBox_3" + i).value);
    }
    inputs.join(".");
    document.getElementById("paragraphShow3").innerHTML = inputs.join(".");
 }

 function getParagraph4()
 {

    for(var i = 1; i <=6; i++)
    {
        inputs.push(document.getElementById("InputBox_4" + i).value);
    }
    inputs.join(".");
    document.getElementById("paragraphShow4").innerHTML = inputs.join(".");
 }
 
 function getParagraph5()
 {

    for(var i = 1; i <=6; i++)
    {
        inputs.push(document.getElementById("InputBox_5" + i).value);
    }
    inputs.join(".");
    document.getElementById("paragraphShow5").innerHTML = inputs.join(".");
 }

 function getParagraph6()
 {

    for(var i = 1; i <=6; i++)
    {
        inputs.push(document.getElementById("InputBox_6" + i).value);
    }
    inputs.join(".");
    document.getElementById("paragraphShow6").innerHTML = inputs.join(".");
 }