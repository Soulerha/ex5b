
$(document).ready(function(){
    $("button").click(function(){
       var t = $('#temp').val();//celsius
       var u = $('#unit').val();
       
       validate(t,u);
       

       var t1;
       var u1;
       
       if(u == "F"){
            t1 = t * (9/5) + 32;
            u1 = "Fahrenheit";
       }else if(u == "K"){
            t1 =  t + 273.15;
            u1 = "Réaumur";
       }else if(u == "R"){
            t1 = t * (4/5);
            u1 = "Kelvin";
       }
       
       alert("Temperature is "+t1+" in "+u1);
    });
});


function validate (t,u){
    if(isNaN(t)){
        msg = "Please verify whether the temperature value is correct!!!";
        alert(msg);
        
        
   }
   if(!(t >= -100 && t <= 100)){
        msg = "Tempurature entered (in Celsius) must be between 0 and 100 C'";
        alert(msg);
        
 }
    
}
