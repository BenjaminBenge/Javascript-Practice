<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

  let hello = "Be Serious";

  let message;

  //copy 'Hello world' from hello into message

  message = hello;

  //now two vartiables hold the same data

  
  alert(message);//Hello world!

  let myName = 'John'
  
  let admin;
      admin = myName;
      
      
   
   alert(admin);    
        

   planetEarth = 'Green color';

   currentVisitor ='Alex';

  


   let a = 10;

    console.log(a);

    console.log(9 * a);

    let b = 7 * a;

    console.log(b);



    const max = 57;

    let actual = max - 13; 

    let percentage = actual / max;

    console.log(percentage);

    const string = "The revolution will not be televised"

    console.log(string);

     

    const customerName = "Chris";

    const greeting = `Hello, ${customerName}`;

    console.log(greeting);

    const one = "Hello,";

    const two = "how are you?";

    const joined = `${one}${two}`;

    console.log (joined); 

    
         const myString = "123";

    const myNum = Number(myString);

    console.log(typeof myNum);


    const myNum2 = 123;

    const myString2 = myNum2.toString();

    console.log(typeof myString2);

    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let length = text.length;

    console.log(length)

    let text1 = "Apple, Banana, kiwi";

    let part = text1.slice(7,13);

    console.log(part);

    let year = prompt('Im which year was ECMAScript-2015 specification published',''); 

   

    if (year == 2015) {

        alert( "That's correct!" );

        alert( "You're so smart" );

    }

    let cond = (year == 2015); // equality evaluates to true or false

    if (cond) {
         
        alert( 'That is awesome');

        alert( 'Briiliant answer');

    }    

    else if (year < 2015) {

        alert('Too early..');

    }

    else if ( year > 2015){

        alert( 'Too late');
    
    }

    else{

        alert('Exactly!' );
        
    }


    let accessAllowed;
    
    let age =  prompt('How old are you?','');

    if ( age > 18 ){

        accessAllowed = 'You are old enough to access this site';

    }

    else {

        accessAllowed = 'You are too young to access this flight';
    
    }

    alert( accessAllowed);













</script>
</body>
</html> 
