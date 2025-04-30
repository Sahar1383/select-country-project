let countrySelectBox = document.querySelector('#countrySelect')
let citySelect = document.querySelector('#citySelect')
let inputValue = document.querySelectorAll("input")
let buttonValue = document.querySelector("button")

let countriesData = {
 Iran: ['Tehran' , 'Shiraz', 'Tabriz', 'Mashhad', 'Isfahan'],
 Turkey: ['Istanbul', 'Izmir', 'Ankara', 'Antalya', 'Bodrum'],
 Italy: ['Rome', 'Venice', 'Milan', 'Turin', 'Verona'],
 Canada: ['toronto', 'vancouver', 'Calgary', 'Ottawa']
};

  countrySelectBox.addEventListener('change' , function () {

  if(countrySelectBox.value === "Select Country"){
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option>Select Country...</option>";
  }
  else
  {
    let mainCountryName = countrySelectBox.value;
    let mainCountryCities = countriesData[mainCountryName];
  
  
    citySelect.innerHTML = "";
  
    mainCountryCities.forEach(function (city) {
      citySelect.innerHTML += '<option>' + city +'</option>';
    });
  }
});
