# GollumScript

GollumScript is a language that allows the user to implement solutions like a true LOTR fan should.
### DESCRIPTION
The Gollum language is designed by implementing the famous character “Gollum" from Lord of The Rings.  "Thief, thief, thief! Baggins! We hates it, we hates it, we hates it forever!”  


![Gollum Rules](http://my.cs.lmu.edu/~aalzaid1/gollum/talklikegollum.png "Gollum Rules")



--------------------------------

##Examples

**GollumScript ON THE LEFT, JAVASCRIPT ON THE RIGHT**

**ONE LINE COMPLETE HELLO WORLD SCRIPT**

        printes("Hello my precious")                console.log("Hello my precious");

**VARIABLE DECLARATIONS**

        it yearsOld = "we doesnt know"               var yearsOld = "we doesnt know";

**CONSTANTS**

        forever it CONST_NAME = "The One"            /* No constants in JavaScript */
    
**ASSIGNMENT IS MOST CERTAINLY NOT INITIALIZATION**

        it x = 1                                     var x = 1;
        x = x + 1                                    x = x + 1;
        Printes x                                    console.log(x);
**ARITHMETIC EXPRESSIONS**

        mathes.powes(3/2 - a * b, (300 % c) + mathes.powes(d,2))   Math.pow(3/2 - a * b, (300 % c) + Math.pow(d,2))


**BOOLEANS AND BOOLEAN ARITHMETIC**

        bless                                                   true
        thief                                                   false
        4 < 3                                                   4 < 3
        3 === 5 && x >= 9 | 1 != y / 4 && !weFoundIt            3 === 5 & x >= 9 | 1 != y / 4 & !found

**FUNCTIONS**

        magic it bmi(it pounds, it inches):                 var bmi = function (pounds, inches) {
            forever it KILOGRAM_PER_POUND = 0.45359237          var KILOGRAMS_PER_POUND = 0.45359237;
            forever it METERS_PER_INCH = 0.0254                 var METERS_PER_INCH = 0.0254;
            it kilos = pounds * KILOGRAM_PER_POUND              var kilos = pounds * KILOGRAMS_PER_POUND;
            it inches = inches * METERS_PER_INCH                var inches = inches * METERS_PER_INCH;
            givesUs kilos / (meters * meters)                   return kilos / (meters * meters)
        GollumGollum                                        }
                                            	    
        magic it gcd(x, y):                                 var gcd = function (x, y) {
            givesUs x % y == 0 ? x : gcd(y, x % y)              return x%y == 0 ? x : gcd(y, x%y); 
        GollumGollum                                        }       
    
**KEYWORDS**

        ifes                               if 
        elses                              else 
        ifelses                            else if 
        make Magic                         define function
        make Thing                         define class
        revolve Til                        loop until
        revolves                           for loop
        while                              while loop
        givesUs                            return

**TYPES**

       Riddle                               boolean 
       Num                                  number
       Str                                  string 
       Chr                                  character
       <>                                   type of the null literal
       []                                   array (e.g., [N] is array of number)
       
**CLASSES**

       make Thing ring:
           Num diameter = 10 
           Num height = 0.2
           Num width = 0.1
           Riddle magical = bless;
       GollumGollum
       
Class names automatically become constructor functions, taking as arguments the fields in the order that they were declared:

      ring theOne = ring(11, 0.3, 0.1, bless)
      ring theSecond = ring(13, 0.3, 0.11, thief)

**NUMBERS AND THEIR TYPES**
Numbers in Gollum can be denoted as octal, hexadecimal, or decimal. Octal numbers are prefixed with a 0 and hexadecimal numbers are prefixed with a 0x. Decimal numbers have no prefix.

      Num a = 0227                              var a = 0227;
      Num b = 0x213AAC                          var b = 0x213AAC;
      Num c = 13653                             var c = 13653;
      
**STRINGS AND STRING MANIPULATION**

**LOOPS**

        while (bless):                                     while (true) {
                printes "make it stop"                          console.log("make it stop");
        GollumGollum                                        }
        
        revolves i 1 100 1:                            for (var i = 1; i <= 100; i++) {
                ifes i % 15 == 0:		                if (i % 15 == 0) {
                        printes “Blessed"         		        console.log("FizzBuzz");
                GollumGollum                                    } else if (i % 3 == 0) {
                                                                        console.log("Fizz");
                ifelses i % 5 == 0:                             } else if (i % 5 == 0) {
                        printes “Smeagol"                                   console.log("Buzz");
                GollumGollum                                    } else {
                elses:                                                  console.log(i);
                        printes i                                       }
                GollumGollum                            }
         
**ARRAYS**

**SYNTAX**

**MICROSYNTAX**

    
