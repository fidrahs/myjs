
const {firstName = a,lastName = b} = obj;
console.log(a);
console.log(b);


const getIDs = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve([523,883,422,974]);
    })
});

getIDs.then(IDs => {
    console.log(IDs);
}).catch(error => { console.log();}
)