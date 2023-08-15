let searchBtn = document.getElementById("search-btn");
let countryInp= document.getElementById("country-input");
let result = document.getElementById("result");
searchBtn.addEventListener("click",()=>{
    let countryName=countryInp.value;
    let finalURL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    .then(response=>response.json())
    .then(data=>{
        result.innerHTML=`
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
        <span class="data-span-wrapper">Capital: <span class="data-span">${data[0].capital[0]}</span></span>
        <span class="data-span-wrapper">Continent: <span class="data-span">${data[0].continents[0]}</span></span>
        <span class="data-span-wrapper">Population: <span class="data-span">${data[0].population}</span></span>
        <span class="data-span-wrapper">Currency: <span class="data-span">${data[0].currencies[Object.keys(data[0].currencies)].name}-${Object.keys(data[0].currencies)[0]}</span></span>
        <span class="data-span-wrapper">Languages: <span class="data-span">${Object.values(data[0].languages).toString().split(",").join(", ")}</span></span>
        </div>
        `

    }).catch(()=>{
        if(countryName.length==0){
            result.innerHTML=`<h3>The input field cannot be empty</h3>`;
        }else{
            result.innerHTML=`<h3>Please enter valid country name</h3>`;
        }
    })
})