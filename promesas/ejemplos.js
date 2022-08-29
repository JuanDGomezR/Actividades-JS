let promise = new Promise(function (resolve, reject) {
    // hacer algo que podría tomar un tiempo
    // establezcamos x en su lugar para este ejemplo
    let x = 20;
    if (x > 21) {
    resolve(x); // sobre el exito
    } else {
    reject("Too low"); // por error
    }
    });
    promise.then(
    function (value) {
    console.log("Success:", value);
    },
    function (error) {
    console.log("Error:", error);
    }
    );
    //-------------------------

    const promise2 = new Promise((resolve, reject) => {
        resolve("success!");
        })
        .then(value => {
            console.log(value);
            return "we";
            })
            .then(value => {
            console.log(value);
            return "can";
            })
            .then(value => {
            console.log(value);
            return "chain";
            })
            .then(value => {
            console.log(value);
            return "promises";
            })
            .then(value => {
            console.log(value);
            })
            .catch(value => {
            console.log(value);
            })

            let vector=[]
