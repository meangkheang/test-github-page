 
async function fetchPlayers(){
    const endPoint = 'https://exampleplayers.herokuapp.com/players';
    const res = await fetch(endPoint);
    const data= await JSON.stringify(res.json());

    console.log(data);
} 

fetchPlayers();