$("#name").on("keyup",function(){
    var name=document.getElementById('name').value;
    var letters = /^[A-Za-z\s]+$/;
    if(!name.match(letters)&& name!=""){
        document.getElementById('name_error').innerHTML = "enter characters only";
     }else if(name==""){
            document.getElementById('name_error').innerHTML = "come on, you have a name, don't you?";
        }else if(name.match(letters)&& name.length<4){
            document.getElementById('name_error').innerHTML = "your name must contain atleast 4 characters";
        }else{
            document.getElementById('name_error').innerHTML = " ";
        }
});


$("#message, #name, #email, #subject").on("keyup", function(){
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    var name=document.getElementById('name').value;
    var letters = /^[A-Za-z\s]+$/;
    if($("#message").val().trim().length >=2  && $("#name").val().trim().length >=4 &&name.match(letters)
     && $("#email").val().match(mailformat) && $("#subject").val().length >=4){
        $("#submitbutton").removeAttr("disabled");
        $("#submitbutton").removeClass('no-hover');
    }else{
        $("#submitbutton").attr('disabled','disabled');
        $("#submitbutton").addClass('no-hover');
    }
});