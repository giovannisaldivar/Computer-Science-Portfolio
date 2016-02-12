 var count = 0;

 function write_message($message) {
     document.getElementById('messages').innerHTML = $message;
 }

 function refresh() {
  document.body.style.backgroundColor = "black";
     if (count > 0) {
         refreshCounts(-1);
         var one = Math.floor((Math.random() * 9) + 1);
         var two = Math.floor((Math.random() * 9) + 1);
         var three = Math.floor((Math.random() * 9) + 1);

         document.getElementById('first').innerHTML = one;
         document.getElementById('second').innerHTML = two;
         document.getElementById('third').innerHTML = three;
         if (one == two && two == three && three == one) {
             write_message('Winner!');
                count = count + 25
                document.getElementById("p2").innerHTML = count;
                document.body.style.backgroundColor = "red";
         }
         else if(one == two){
          count = count + 10
          document.getElementById("p2").innerHTML = count;
         }
         
     
         
         else if(two == three){
          count = count + 10
          document.getElementById("p2").innerHTML = count;
         }
      
         
         else {
             write_message('Try again!');
         }
     }
     else {
         write_message('Insert credits!');
     }
 }


// Adds a credit everytime you click "Add Credit"
 function refreshCounts(value) {
     count = count + value;
     document.getElementById("p2").innerHTML = count;
 }