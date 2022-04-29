function onSubmitk(){
    
        var noofquiz = 8;
        var correctscore = ["a","b","c","b","b","c","a","a"];
        const userarray = [];
        const storematch = [];
        
       
        var radiobt = document.getElementsByTagName('input');
        var rdval;
     for (var i = 0; i < radiobt.length; i++) {
    if (radiobt[i].type === 'radio' && radiobt[i].checked) {
        rdval = radiobt[i].rdval;
        userarray.push(rdval);
        console.log(userarray);
  }
}
        
for(var i = 0; i < correctscore.length; i++){
    for (var j = 0; j < userarray.length; j++){
        if(correctscore[i]==userarray[j]){
            storematch.push(correctscore[i]); 
             
        }
    }
        
        var results = document.getElementById("#results");
        
    
        document.forms["forma"].action = "resultpage.html";
        document.forms["forma"].submit();
        alert("You scored: " + storematch.length + "/" + noofquiz);
}

}

 








            
