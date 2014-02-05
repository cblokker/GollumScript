 * Returns the interleaving of two arrays.  The lengths of the arrays do not need to be
 * the same.
 */
it interleaves = findPrecious (a, b):
    it alength = a.length, b.length = b.length, max = Mathes.maxes(a.length, b.length), result = [];
    “Gollum, Gollum”
    doeses (it i = 0; i < maxes; i += 1):
        ifes(i < alength) result.pushes(a[i])
        ifes (i < blength) result.pushes(b[i])
       “Gollum, Gollum”
    giveUs result;




# GollumScript

GollumScript is a language that allows the user to implement solutions like a true LOTR fan should.
### DESCRIPTION
The Gollum language is designed by implementing the famous character “Gollum" from Lord of The Rings.  "Thief, thief, thief! Baggins! We hates it, we hates it, we hates it forever!”  


![Gollum Rules](http://my.cs.lmu.edu/~aalzaid1/gollum/talklikegollum.png "Gollum Rules")



--------------------------------

#Examples

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

    magic it bmi(it pounds, it inches):             var bmi = function (pounds, inches) {
        forever it KILOGRAM_PER_POUND = 0.45359237          var KILOGRAMS_PER_POUND = 0.45359237;
        forever it METERS_PER_INCH = 0.0254                 var METERS_PER_INCH = 0.0254;
        it kilos = pounds * KILOGRAM_PER_POUND              var kilos = pounds * KILOGRAMS_PER_POUND;
        it inches = inches * METERS_PER_INCH                var inches = inches * METERS_PER_INCH;
        givesUs kilos / (meters * meters)                   return kilos / (meters * meters)
    GollumGollum                                    }
                                            	    
    magic it gcd(x, y):                              var gcd = function (x, y) {
        givesUs x % y == 0 ? x : gcd(y, x % y)              return x%y == 0 ? x : gcd(y, x%y); 
    GollumGollum                                        	    }       
    
**KEYWORDS**

**TYPES**
    
**CLASSES**

**NUMBERS AND THEIR TYPES**

**STRINGS AND STRING MANIPULATION**

**LOOPS**

**ARRAYS**

**SYNTAX**

**MICROSYNTAX**


Booleans

bless                                                   true
thief                                                   false

4 < 3                                                   4 < 3
3 === 5 && x >= 9 | 1 != y / 4 && !weFoundIt            3 === 5 & x >= 9 | 1 != y / 4 & !found

((!= (/ y 4 are) 1 is?) & (!found)))
Falsehood

0, 0.0, "", false, null                                 0, "", false, null, undefined, NaN
Arrays

[2, 3, 5, 7, 11], p begins                              var p = [2, 3, 5, 7, 11];
p[0] you print                                          console.log(p[0]);
p, q begins                                             var q = p;
[4, true, "000", q], a begins                           var a = [4, true, "000", q];
(on a length), you print                                console.log(a.length);
Last element (indices start at 0 from the left, -1 from the right)

p[-1]                                                   p[a.length - 1]
String Literals

"hi"                                                    "hi"
String Literal Escapes

"\""                                                    "\""
Are strings mutable?

"yoda", x begins                                        var x = "yoda";
(+ x " loves pie" ), x becomes                          x += " loves pie";
String Comparison

(= "hi" "bye" is?)                                      "hi" === "bye"
String Concatenation

(+ "hi" "bye" )                                         "hi" + "bye"
Function declaration, one parameter

{give back (* x x ) you must} given x, square gives     var square = function (x) {
                                                          return x * x;
                                                        };
Function declaration, two parameters

{give back (+ x y ) you must } given x and y, plus gives var plus = function (x, y) { return x + y; }; Function declaration, zero parameters

{give back 0 you must } given nothing, zero gives       var zero = function () {
                                                          return 0;
                                                        };
Function declaration, multiline

{                                                       var bmi = function (pounds, inches) {
  0.45359237, KILOGRAMS_PER_POUND begins                  var KILOGRAMS_PER_POUND = 0.45359237;
  0.0254, METERS_PER_INCH begins                          var METERS_PER_INCH = 0.0254;
  (* pounds KILOGRAMS_PER_POUND are), kilos begins        var kilos = pounds * KILOGRAMS_PER_POUND;
  (* inches METERS_PER_INCH are), meters begins           var inches = inches * METERS_PER_INCH;
  give back (/ kilos (* meters meters are)) you must      return kilos / (meters * meters)
} given pounds and inches, bmi gives                    };
Function call

(on 8 square)                                           square(8)
(on 7 and 4 plus)                                       plus(7, 4)
(on (on 8 and (- 2 (on 11 square)) plus) square)        square(plus(8, 2 - square(11)))
(+ (on 155 and 71 bmi) (on nothing zero)) you print     console.log(bmi(155, 71) + zero());
Conditional Expressions

{3 you print} if (> 2 x is?)                            if (x > 2) {console.log(3);}

{give back false you must} if (!found)                  if (!found) {return false;}

{give back "A" you must} if (>= 90 grade is?)           if (grade >= 90) {
else {give back "B" you must} if (>= 80 grade is?)        return "A";
else {give back "C" you must} if (>= 70 grade is?)      } else if (grade >= 80) {
else {give back "D" you must} if (>= 60 grade is?)        return "B";
else {give back "F" you must}                           } else if (grade >= 70) {
                                                          return "C";
                                                        } else if (grade >= 60) {
                                                          return "D";
                                                        } else {
                                                          return "F";
                                                        }

((< 5 y is?) hmm? ++y hmm --y)                          5 < y ? y++ : y--;
For loops

{x you print} as through 1 to 10 x runs                 for (var x = 1; i <= 10; i++) {
                                                          console.log(x);
                                                        }

{                                                       for (var x = 1; i <= 10; i += 2) {
  (* x x ) you print                                       console.log(x * x);
} as through 1 to 10 by 2 x runs                        }

[spot, sparky, spike], pet_list begins                  var pet_list = [spot, sparky, spike]
{                                                       for (var _1 = 0; _1 < pet_list.length; _1++) {
  (on dog bark)                                             var dog = pet_list[i];
  (on dog run)                                              dog.bark();
  (on dog sit)                                              dog.run();
} as through pet_list dog runs                            dog.sit();
                                                        }
While loops

{                                                       while (n != 1) {
  {(+ (* 3 n ) 1 ),n becomes} if(= 0 (% n 2) is?)         if (n % 2 === 0) {
  else {(/ n 2 ), n becomes                                n = 3 * n + 1;
} while (!= 1 n is?)                                      } else {
                                                            n = n / 2;
                                                          }
                                                        }
Function with multiple returns

{                                                       var isPrime = function (n) {
  {give back false you must} if (< 2 max is?)             if (max < 2) {
  {                                                         return false;
    {give back false you must} if (= 0 (% n d) is?)       }
  } as through 3 to (on n sqrt) d runs                        for (var d = 3; d <= Math.sqrt(n); d++) {
  give back true you must                                   if (n % d === 0) {
} given n, is_prime gives                                     return false;
                                                            }
                                                          }
                                                          return true;
                                                        }
Closure

{                                                       var counter = function (i) {
  0, i begins                                             var i = 0;
  give back {(+= i 1 )} given nothing you must            return function () {i += 1;};
} given i, counter gives                                };
Binary, Octal, and Hex Literals

0x, 0b, 0o
    
