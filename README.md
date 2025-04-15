We are making an algorithm to get 
number of welds
distance between welds
length of welds for a pedestal foot 

First I need a prompt for two inputs. 

The inputs would be for length and width of the pedestal foot. 

Now I need to figure out how to store those inputs and what to do with those inputs.

We will call these variable totalLength and widthOfFoot

We will also need a variable for the amount of welds total. We can call it numOfWelds and it will be assigned the number 2

Algorithm first step (length of welds)
Variables needed 
widthOfFoot

For the width. The welds will be one inch bigger than the width of the foot but not smaller than 3 inches and should round up to the nearest whole inch.
To do that, I will use an if else statement 
    If widthOfFoot is less than or equal to 1.5 inches, the weld will be 3 inches.
    Else if widthOfFoot is greater than 1.5 inches long plus one to the variable.
Which will be the output for the length of welds and store that into a variable called lengthOfWelds. 

Algorithm Second Step (number of welds)
Variables needed
widthOfFoot 
numOfWelds
lengthOfWelds
totalLength

Now what to do with the length.

    First, we get the total length (totalLength) and we subtract the weld length (lengthOfWelds) multiplied by the numOfWelds, so we have the remainder of that length stored into a variable we can use for the next step. Which we will call remainingLength

Second, we need a variable telling us the maximum distance between the welds and set up a loop for that weld to fill the space.

So we get the remainder (remainingLength) that we had left over and subtract the lengthOfWelds, and if that remainder is less than the maximum distance between welds, the loop will end.

   Third, if the loop ends right away, then the output will be the original value of numOfWelds. If not, then we need to add an additional weld to the total numOfWelds and redo the loop.

   Once that is complete the output will give us the updated numOfWelds as the final answer. 

Algorithm Third Step 


Variables we need
totalLength 
numOfWelds 
lengthOfWelds

To get the distance between the welds we need to take the totalLength and subtract the outcome of numOfWelds x lengthOfWelds. We will then store that outcome as remaining distance(remainingDistance).

Now we need to find out what to do with that remainingDistance 

We need to divide remainingDistance by the outcome of numOfWelds - 1 which should give us our final return which we will call 

Return lengthOfWelds
Return numOfWelds 
Return distanceBetweenWelds
