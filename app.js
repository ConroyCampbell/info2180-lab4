onload= function(){
    var btn=document.getElementById('btn');
    var httpRequest=new XMLHttpRequest();
    var character="";
    btn.addEventListener('click',function(event){
        event.preventDefault();
        var url="superheroes.php?charac_data="+character.value;
        httpRequest.onreadystatechange=hrequest;
        // httpRequest.open('GET',url);
        httpRequest.open('GET',url,true);
        httpRequest.send(); 
    });
    
    function hrequest(){
        if(httpRequest.readyState===XMLHttpRequest.DONE){
            if (httpRequest.status===200){
                var response=httpRequest.responseText;
                alert(response);
            }else{
                alert('There was a problem with the request')
            }
        }
    }
}