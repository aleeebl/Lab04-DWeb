(function(){
    console.log("This is the init");
    setTimeout(function cb()  {
        console.log("This is a msg from call back");
    });

    console.log("This is a just msg");

    setTimeout(function cb1() {
        console.log("This is a mss calla back 1");
        
    }, 0);

    console.log("This is the end");
})();