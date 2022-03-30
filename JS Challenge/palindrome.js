function checkPalindrome(string) {

    
    const arrayValues = string.split('');

    
    const reverseArrayValues = arrayValues.reverse();

    
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('yes it is a palindrome');
    }
    else {
        console.log('no it is not a palindrome');
    }
}

const string = "madam"

checkPalindrome(string);