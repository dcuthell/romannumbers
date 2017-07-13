# _Romannumbers_

#### _Roman Numeral Converter, July 13, 2017_

#### By _**Paul Guevarra & David Cuthell**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Specs

* _Program will find the length of input
  input - 456
  output - 3_
* _Program will separate input string by ones, tens, hundreds, and thousands place
  input - 456
  output - hundreds = 4 tens = 5 ones = 6_
* _Program will run a conversion function depending on the place of the digit
  input - 100
  output - hunPlace(1)_
* _For ones place, conversion function will return 1-3 I's for 1-3, IV for 4, V and 0-3 I's for 5-8, IX for 9, and nothing for 0
  input - 6
  output - VI_
* _For tens place, conversion function will return 1-3 X's for 1-3, XL for 4, L and 0-3 X's for 5-8, XC for 9, and nothing for 0
    input - 9
    output - XC_
* _For hundreds place, conversion function will return 1-3 C's for 1-3, CD for 4, D and 0-3 C's for 5-8, CM for 9, and nothing for 0
    input - 4
    output - CD_
* _For thousands place, conversion function will return 1-3 M's for 1-3, and nothing for 0, 4-9
    input - 2
    output - MM_
* _Program will combine all conversion function results into single string
  input - 3592
  output - thouPlace(3) + hunPlace(5) + tenPlace(9) + onePlace(2)_
* _Program will check for input range > 0, < 4000
  input - 4000
  output - "Error, invalid number"_
* _Program will check input is a number
  input - hello
  output - "Error, invalid number"_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
