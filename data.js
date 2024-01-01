// FETCH FOR DEPARTMENTS
async function getDepartments (){
  try{
    let rawData = await fetch("https://collectionapi.metmuseum.org//public/collection/v1/departments")
    let jsonData = await rawData.json(); // --> object that has single "departments" property: an array of objects; each object has department id, and name as properties
    let data = jsonData.departments;
    let sort =  data.sort((a,b)=>{a.displayName-b.displayName})

    return sort; // array of objects representing each department, including properties for department ID and name
  }catch(error){
  }
} 


//RETURN LISTINGS FOR EACH DEPARTEMENT
  async function getDept (n){
    try{
      let data =  await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${n}`);  
      if(!data.ok){
        throw Error;
      }
        let results =  await data.json();
        let departmentListing = results.objectIDs;
        console.log(departmentListing);
        return departmentListing; // array of art IDS (from department)
    }
    catch(error){
      console.log("here's an error:", error);
    }
  }



//RETURN LISTINGS FROM DEPARTMENT THAT INCLUDE PHOTOS ONLY 
  async function getDept10 (arr){
    let promises = [];

      try{
        for (let i = 0; promises.length < 10; i++ ){
          let data =  await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arr[i]}`);  
          let result = await data.json();
  
          if(result.primaryImage ){
            promises.push(result);
          }
         
        }
        return promises;
    
      }catch(error){
        console.error(error);
      }
   
    }





//FETCH FOR DEFAULT HOMEPAGE IMAGES

async function getArt (){
  let promises = []
  try{
    for(let i = 1; i < 10; i++){
      let num = Math.floor(Math.random() * 47000 ) +1;
      let art = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`);
      let resolve = await art.json();
   
      promises.push(resolve);
    } 
    const result = promises.filter((word) => word.primaryImage);

    console.log(result)
   return result;

  } catch(error){
    console.log(error)
  }
}



  export { getDept, getDept10, getArt,getDepartments};

  