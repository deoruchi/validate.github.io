let d = document.getElementById('er1')
let d2 = document.getElementById('er2')
let d3 = document.getElementById('er3')//month
let d4 = document.getElementById('er4')//year
let d5 = document.getElementById('cvv')//cvv three digit


//from the confirmation page

let c=document.getElementById('id1');//card number
let c2 = document.getElementById('id2');
let c4 = document.getElementById('id3');//exp data


function vali()
{
    let flag = 1;

    if(d.value === "" || Number.isInteger(d.value)===true){
       document.getElementById('no').innerText="Enter the user name" ;
        flag=0;
    }
    else{
        document.getElementById('no').innerText="";
        flag=1;
    }

    if(Number.isInteger(d2.value)===false){
        document.getElementById('inner').innerText="Wrong format,numbers only";
        flag =0;
    }
    else
    {
        document.getElementById('inner').innerText="";
        flag=1;
    }

    if(d3.value ==="" || d4.value==="" || d5.value===""){
        document.getElementById('inner2').innerText="Can't be empty"
        flag=0;
    }
    else{
        document.getElementById('inner2').innerText="";
        flag=1;
    }
    
    if(flag===1){
        
        return true;
    }
    else{
        return false;
    }


}

