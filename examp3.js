(function(){
    console.log("this is the init");
    setTimeout(function cb()  {
        console.log("This is a msg from call back");
    });

    console.log("This is a jist msg");

    setTimeout(function cb1() {
        console.log("This is a mss calla back 1");
        
    }, 0);

    console.log("This is the end");
})();