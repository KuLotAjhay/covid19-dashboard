console.log("Is it working?") // For checking if the website is working properly

// For default load country data
window.onload = () => {
    getCovidTracker();
}

getCovidTracker = () => {
    var apiForDefault = "https://api.covid19api.com/country/philippines"

    fetch(apiForDefault)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const countryName = document.querySelector(".country-name")
            countryName.innerHTML = `${data.Country} COVID-19 trend`


            document.querySelector(".total-cases-data").innerHTML = data.Confirmed.toLocaleString()
            document.querySelector(".death-cases-data").innerHTML = data.Deaths.toLocaleString()
            document.querySelector(".active-cases-data").innerHTML = data.Active.toLocaleString()
            document.querySelector(".recovered-cases-data").innerHTML = data.Recovered.toLocaleString()
            document.querySelector(".flag-holder").src = data.Country.flag
        })
}

// This is for searching a country
const submitBtn = document.querySelector(".submit-btn")

submitBtn.addEventListener("click", () => {
    const reminder = document.querySelector(".reminder-section")
    const countryName = document.querySelector(".country-placeholder").value
    var apiForSearch = "https://api.covid19api.com/" + countryName

    fetch(apiForSearch)
        .then((response) => response.json())
        .then((data) => {
            const countryName = document.querySelector(".country-name")
            countryName.innerHTML = `${data.Country} COVID-19 trend`


            document.querySelector(".total-cases-data").innerHTML = data.Confirmed.toLocaleString()
            document.querySelector(".death-cases-data").innerHTML = data.Deaths.toLocaleString()
            document.querySelector(".active-cases-data").innerHTML = data.Active.toLocaleString()
            document.querySelector(".recovered-cases-data").innerHTML = data.Recovered.toLocaleString()
            document.querySelector(".flag-holder").src = data.Country.flag
        })
})