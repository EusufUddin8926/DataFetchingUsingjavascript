function fetchdata(){

    fetch('https://gorest.co.in/public/v1/users').then(response=>{

    return response.json();

    }).then(data=>{

        console.log(data.data); 
        const html = data.data
        .map(user=> {

            return `
            <div class ="users">
                <p> Id: ${user.id}</p>
                <p> Name: ${user.name}</p>
                <p> Email: ${user.email}</p>
                <p> Gender: ${user.gender}</p>
                <p> Status: ${user.status}</p>
            </div>
            ` ;
           
        })
       
       .join("");
       console.log(html);
        document.querySelector("#datafetch").insertAdjacentHTML("afterbegin", html);

        
        
    })
}
fetchdata();