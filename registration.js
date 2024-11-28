function clearErrors(){
    errors = document.getElementsByClassName('error');
    for(let item of errors)
    {
        item.innerHTML = ""
        
    }
}

function validation(){
    var returnval= true;
    clearErrors()

    var uname= document.getElementById('user').value;
    var name= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var mob= document.getElementById('mob').value;
    var pass= document.getElementById('pass').value;
    var rpass= document.getElementById('rpass').value;
    var checkbox= document.getElementById('check');
    var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var validPass= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    var vname= /^[A-Za-z]+$/;

    if(uname.length<8)
    {
        
        document.getElementsByClassName("error")[0].innerHTML= "*Username should be atleast 8 characters long"
        
        returnval = false;
        
    }
    
    
    if( !name.match(vname) ||name.length<5 || name.length>15)
    {
        document.getElementsByClassName("error")[1].innerHTML = "*Name should be between 5-15 characters"
        
        returnval = false
    }
    if( !email.match(validRegex) )
    {
        returnval= false
        document.getElementsByClassName("error")[2].innerHTML = "*Provide email in correct format"
    }
    
    if(mob.length != 10)
    {
        document.getElementsByClassName("error")[3].innerHTML = "*Mobile Number should be of 10 numbers"
        returnval= false
    }

    if(!pass.match(validPass))
    {
        returnval= false
        document.getElementsByClassName("error")[4].innerHTML= "*Password should contain atleast one lowercase,one Uppercase,numeric value,"
    }
   
    
    if(rpass != pass && pass !== "")
    {
        returnval = false;
        document.getElementsByClassName("error")[5].innerHTML= "*Password Doesn't match"
    }
    if(!checkbox.checked)
    {
        returnval= false
        document.getElementsByClassName("error")[6].innerHTML= "*You have to agree to the terms and condition"
    }
    
    return returnval;
    
    
}