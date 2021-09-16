const renderCountry = (data, className = "") => {
  const countriesSection = document.querySelector(".countries");
  const html = `

    <div class="country ${className}">

    <img
     src="${data.flag}"
     alt="" 
     class="country_img"
     />
     <div class="country_data">
         <h3 class="country_name">${data.name}</h3>
         <h4 class="country_region">${data.region}</h4>
         <p class="country_row">
             <span><i class="fas fa-lg fa-landmark"></i></span>
             ${data.capital}
         </p>
         <p class="country_row">
             <span><i class="fas fa-lg fa-users"></i></span>
             ${(data.population / 1_000_000).toFixed(1)}M People
         </p>
         <p class="country_row">
             <span><i class="fas fa-lg fa-comments"></i></span>
             ${data.languages[0].name}
         </p>
         <p class="country_row">
             <span><i class="fas fa-lg fa-money-bill-wave"></i></span>
             ${data.currencies[0].name}
         </p>


      </div>
     </div>`;
  countriesSection.insertAdjacentHTML(`beforeend`, html); //countries classlı divin içine bitmeden hemen önceki kısma belilediğimiz html yi yazdır.
  countriesSection.style.opacity = 1;
};

// fetch("https://restcountries.eu/rest/v2/name/turkey")
// .then((response)=> response.json())
// .then(data=>renderCountry(data[0]))
// }








// function getCountryByName(countryName) {
//   fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
//     .then((response) => {
//       // console.log(response)
//       if (!response.ok) throw new Error("something went wrong");
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data)
//       console.log(data[0]);
//       renderCountry(data[0]);
//       
//     })
//     .then((neighbours) => console.log("neighbours:", ...neighbours))
//     .catch((error) => alert(error.message));
// }

// function getCountryByCode(code){
//     fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
//     .then(response =>{
//         if (!response.ok)throw new Error("Something went wrong")
//          return response.json()
            
//         }
//     )
//     .then(data=>{
//     console.log(data);//bir obje döndüğü için data[0] yapmıyoruz
//     renderCountry(data, "neighbours")
// }
//     )

// }
// // getCountryByCode("Tur")



// function getCountryAndNeigbours(countryName) {
//   fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
//     .then((response) => {
//       // console.log(response)
//       if (!response.ok) throw new Error("something went wrong");
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data)//array döndüğü için data[0] yapıyoruz
//       console.log(data[0]);
//       renderCountry(data[0]);
//       return data[0].borders;
//     })
//     .then((neighbours) => {
        
//         if (neighbours.length) {
//             // console.log("neigbours:" ,data)
//             neighbours.forEach(country => {
//                 getCountryByCode(country)

                
//             });
            
//         }

//     })
//     .catch((error) => alert(error.message));
// }


const n =  async (neighbour)=>{
    response= await fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
    data =  await response.json()
    renderCountry(data,`neighbours`)

}




    const getCountryAndNeigbourDataAsync = async (country)=>{
        
            let response =await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
            // if (!response.k) 
            //     throw new Error(`Something went wrong${response.status}`)
                
            
            let data= await response.json()
            renderCountry(data[0]);
            const neighbours=data[0].borders
            
                neighbours.forEach(neighbour => {
                   n(neighbour)
                    
                    
                });
            
            
                
            // if (!response.k) 
            //     throw new Error(`No neighbour${response.status}`)
            
       }
    
// const getCountryAndNeigbourDataAsync1 = async (country)=>{
    
//         let response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         let data =await response.json()
//         renderCountry(data[0])
//         let neighbour=data[0].borders[0]
//         response= await fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//         data=await response.json()
//         renderCountry(data,"neighbours")
        
        

    
// }   









// getCountryAndNeigbours("malta")
// getCountryAndNeigbours("turkey")
// getCountryAndNeigbours("usa")//komşu ülkeleri karışık yazdırdı




getCountryAndNeigbourDataAsync("turkey");
getCountryAndNeigbourDataAsync("usa");
// getCountryAndNeigbourDataAsync("malta");//komşu ülkeleri sırayla yazdırdı.
// getCountryByName("germany");
