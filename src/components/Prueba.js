
   
    const pedido =  fetch('https://jsonplaceholder.typicode.com/users')



        pedido.then((response) => {

        return response.json()
        })
        .then((response)=>{

            console.log(response)
        })
            .catch((error)=>{
                console.log(error)
            })
        

