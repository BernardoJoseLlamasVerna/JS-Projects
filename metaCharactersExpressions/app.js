let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;    // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; //must be an a or an e
re = /[GF]ray/i; //must be an G or  F
re = /[^GF]ray/i; //match anything except G or  F
re = /[A-Z]ray/; //match any uppercase letter
re = /[a-z]ray/; //match any lowercase letter
re = /[A-Za-z]ray/; //match any letter
re = /[0-9]ray/; //match any digit
re = /[0-9][0-9]ray/; //match any number

// Braces {} - Quantifiers
re = /Hel{2}o/i; // must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // must occur exactly {m} amount of times
re = /Hel{2,}o/i; // must occur at least {m} amount of times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand character classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // += one or more
re = /\W/; // Non-word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any digit 0 or more times
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; //match x if only followed by y
re = /x(?!y)/; //match x if NOT followed by y


// String to match
const str = 'e';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

// -to execute function reTest():
reTest(re, str);