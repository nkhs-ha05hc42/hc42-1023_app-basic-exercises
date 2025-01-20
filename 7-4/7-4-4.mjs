 const tasu = (a,b) => {
    console.log(a + b)
   }

  const callback = (a,b, Tasu) =>{
    setTimeout(() => {
            Tasu(a,b)
            setTimeout(() => {
            console.log("end",new Date())
        },1000) 
    },2000)
  }
  
console.log("start", new Date()) 
callback(1,1,tasu)