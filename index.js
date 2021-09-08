// Code your solution here!

function printString (myString){
    console.log(myString[0]);

    if(myString.length > 1){
        printString(myString.substring(1));
    }else{
        return true;
    }
}

function reverseString(myString){
    if(myString.length <= 1){
        return myString;
    }else{
        return reverseString(myString.substring(1)) + myString[0]
    }
}

function isPalindrome(myString){
    if(myString.length <= 1){
        return true
    }else if(myString[0] == myString[myString.length - 1]){
        return isPalindrome(myString.substring(1, myString.length - 1))
    }else{
        return false
    }
}

function addUpTo(array, index){
    let subArray = array.slice(0, index + 1)
    if(subArray.length <= 1){
        return array[0]
    }else{
        return array[0] + addUpTo(subArray.slice(1), index)
    }
}

function maxOf(array){
    if(array.length <= 1){
        return array[0]
    }else{
        return Math.max(array[0], maxOf(array.slice(1)))
    }
}

function includesNumber(array, element){
    if(array[0] == element){
        return true;
    }else if(array.length <= 1){
        return false;
    }else{
        return includesNumber(array.slice(1), element)
    }
}