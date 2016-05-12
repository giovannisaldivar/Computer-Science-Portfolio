 var count = 0;
//function to wtite the messages
 function write_message($message) {
     document.getElementById('messages').innerHTML = $message;
 }

//picks three random numbers when you click spin
 function refresh() {
  //changes background color to black after you click spin
  document.body.style.backgroundColor = "black";
     if (count > 0) {
         refreshCounts(-1);
         var one = Math.floor((Math.random() * 9) + 1);
         var two = Math.floor((Math.random() * 9) + 1);
         var three = Math.floor((Math.random() * 9) + 1);

         document.getElementById('first').innerHTML = one;
         document.getElementById('second').innerHTML = two;
         document.getElementById('third').innerHTML = three;
         //checks if all three numbers are equal
         if (one == two && two == three && three == one) {
          //writes message "winner!"
             write_message('Winner!');
             //adds 25 credits 
                count = count + 25
                document.getElementById("p2").innerHTML = count;
                //changes background color to red
                document.body.style.backgroundColor = "red";
         }
         //checks if the first number equals the second number
         else if(one == two){
          //add 10 credits
          count = count + 10
          document.getElementById("p2").innerHTML = count;
         }
         
     
         //checks if the last two numbers are equal
         else if(two == three){
          //adds 10 credits
          count = count + 10
          document.getElementById("p2").innerHTML = count;
         }
      
         //if none of the numbers equal eachother it sends message "try again!"
         else {
             write_message('Try again!');
         }
     }
     //says "insert credits!" if there are no credits
     else {
         write_message('Insert credits!');
     }
 }


// Adds a credit everytime you click "Add Credit"
 function refreshCounts(value) {
     count = count + value;
     document.getElementById("p2").innerHTML = count;
 }