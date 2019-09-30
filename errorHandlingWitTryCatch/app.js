const user = {email: `berni@gmail.com`};

try {
    // something that is going to fail:

    // Produce a ReferenceError:
    //myFunction();

    // Produce a TypeError:
    //null.myFunction();

    // Will produce a SyntaxError:
    // eval('Hello World');

    // Will produce a URIError
    // decodeURIComponent('%');

    if(!user.name){
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
    
}catch (e) {
    console.log(`User Error: ${e.message}`);
    //console.log(e);
    // console.log(`${e.name}: ITS NULL STUPID!!!`);
    /*console.log(e.message);
    console.log(e.name);
    console.log(e instanceof TypeError);*/
} finally {
    console.log('Finally runs regardless of result...');
}

console.log('Program continues...');