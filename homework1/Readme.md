// EXPLANATIONS:

EXERCISE 1:
// First we called console.log('Start') statement, so JS engine puts in Stack. 
// It will print 'Start' message and finishes so that this line will pop.
// Then we called array.removeNum() function, it also goes to stack. But, because it is 
// asynchronous by Promise object, it will disappear from Stack and Web API is gonna handle it.
// Because Stack is empty, next line console.log('Finish') will be pushed to Stack.
// Even if removeNum() function runs immediately, it will go to the Task Queue.
// We know that only if Stack is empty JS puts someething in it. So, the result of removeNum() still
// will wait for other lines to finish running.
// That's why 'Finish' will be printed and pops from Stack before.
// Then, the result of removeNum function console.log(result) will go to Stack, prints array, and pops. 

EXERCISE 2:
// All 3 methods are asynchronous.