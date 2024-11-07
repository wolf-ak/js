function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        resolve("success : data was saved");
    }else{reject("failure : data was not saved");}
    });
}

// let promise_obj=savetoDB("Lenovo LOQ 15");
// // console.log(promise_obj);
// promise_obj.then(()=>{
//     console.log("promise was resolved");
//     })
// .catch(()=>{
//     console.log("promise was rejected");
    
// });


/// promises improved version
/// 

// let url="https://catfact.ninja/fact";
// fetch(url).then((res)=>{
//     ///console.log(res);
//     return res.json();
    
// })
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((err)=>{
//     console.log("Error is ",err);
    
// });

// async function getFacts() {
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);
               
        
//         let res2=await fetch(url);;
//         let data2=await res2.json();
//         console.log(data2.fact);
               
//     }
//     catch(e){
//         console.log("error - ",e);
        
//     }
//     console.log("bye");
    
// }

// let btn =document.querySelector("button");
// let url2="https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click",async ()=>{
// let link = await getImage();
// // console.log(link);
// let img =document.querySelector("#result");
// img.setAttribute("src",link);
//    })
 

//  async function getImage(){
//      try{
//          let res = await axios.get(url2);
//          return res.data.message;
         
//      } catch (e){
//          console.log("error - ",e);
//          return "No fact found"
//      }
//  }

// btn.addEventListener("click",async ()=>{
//    let fact = await getFacts();
//     //    console.log(fact);
//    let p=document.querySelector("#result");
//    p.innerText= fact; 
// })

// let url ="https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e){
//         console.log("error - ",e);
//         return "No fact found"
//     }
// }

// const url ="https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         const config ={ headers: {Accept: "application/json"}};
//         let res=await axios.get(url, config);
//         console.log(res.data);
        
//     }catch(err){
//         console.log(err);
        
//     }
// }


let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{

    let country=document.querySelector("input").value;
    console.log(country);
    
    let colArr=await getColleges(country);
    show(colArr);    

});

function show(colArr){
    let list = document.querySelector("#list");
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
    list.appendChild(li);
    }
}

// let country ="nepal";

async function getColleges(country){
    try{
        let res =await axios.get(url+country)
return res.data;
    
    }catch(e){
        console.log("error - ",e);
        return [];
    }
}