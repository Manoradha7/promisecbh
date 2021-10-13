    let a =10;
    const pro = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(a),1000)
    })

    pro
   .then(x => { 
    return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x => {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x => {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x => {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x => {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x => {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x=> {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x => {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x => {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x => {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .then(x => {
        document.querySelector(".msg").innerText = x;
        console.log(x);
        return new Promise((resolve,reject)=>{
            setTimeout(()=> resolve(a--),1000);
        })
    })
    .catch(x=> console.log("ERROR",x))
    .finally(x=> {
        document.querySelector(".msg").innerText = "HAPPY INDEPEDANCE DAY";
        console.log("HAPPY INDEPENDANCE DAY");
    });