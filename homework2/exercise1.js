/* 

QUESTION 1. 
When we call function by setTimeout, it is not executed immediately. But it goes to queue so that it is executed after all the currently queued eventhandlers finish first. If we use setTimeout(, 0) it means execute after all current functions queue get executed. And nothing be known about how long could it take. setTimeout(, 0) is slow because it will check the timer once before the executing.

setImmediate is similar but it doesn't use queue of functions. In this case it checks I/O queue eventhandlers. After all I/O events in the current snapshot are processed, it executes the callback. It queues them immediately after the last I/O handler. That's why it's faster than setTimeout().

QUESTION 2. 
As I mentioned before, setImmediate runs after all I/O events in the event queue. But process.nextTick goes to priority queue, which has highest priority and runs immediately after the current function completes in V8.

QUESTION 3.
10 core modules provided by Node:
assert (Provides a set of assertion tests)
buffer (To handle binary data)
cluster (To split a single Node process into multiple processes)
crypto (To handle OpenSSL cryptographic functions)
fs (To handle the file system)
http (To make Node.js act as an HTTP server)
path (To handle file paths)
stream (To handle streaming data)
util (To access utility functions)
vm (To compile JavaScript code in a virtual machine)

*/