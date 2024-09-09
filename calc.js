let count =false

    function clearResult(){
        document.getElementById('result').value = '';
        count =false
    }
    function append(value){
        document.getElementById('result').value+=value
        count =false
    }

    function calculate(){
    var result = eval(document.getElementById("result").value); 
    document.getElementById("result").value = result;
    count = true;
    //console.log(count)
}


  function del() {
    if(!count){
     var x = (document.getElementById("result").value).toString()
   var res =x.slice(0,-1)
   document.getElementById("result").value = res;  
   //console.log(count)
  }
}

function calculateSquareRoot() {
  
    var currentValue = document.getElementById("result").value;
    var result = Math.sqrt(parseFloat(currentValue));
    document.getElementById("result").value = result;
    count = true;
}