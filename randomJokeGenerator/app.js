const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let btn=document.getElementById("btn");


    
    btn.addEventListener("click",async()=>{
        let para=document.getElementById("joke");

      let res= await getRandomJOke();
      para.innerText=res;

     

});


async function getRandomJOke() {
    try{
        let res=await axios.get(url);
       return res.data.joke;
    }
    catch(err){
        console.log("error");
    }
}