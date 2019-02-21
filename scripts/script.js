//Namespacing our app
const app = {};

//Variables - do this later

//Function for event listeners (form submit and button to return to form page)
app.eventHandler = () => {
    $("form").on("submit", function(e) {
        e.preventDefault();
        const gender = $("#gender").val();
        const country = $("#country").val();
        const date = $("#date").val();
        const year = $("#years").val();
        const month = $("#months").val();
        console.log(gender, country, date, year, month);
        app.getResult(gender, country, date, year, month);
    })
}

//Assign form values to varibale

//make Ajax request using variables

app.getResult = (gender, country, date, year, month) => {
    $.ajax({
        url: `http://api.population.io:80/1.0/life-expectancy/remaining/${gender}/${country}/${date}/${year}y${month}m/`,
        method: "GET",
        data: "json"
    }).then((data) => {
        console.log(data.remaining_life_expectancy);
    });
};

//extract remaining life expectancy from returned data

//convert data into years / months / days / hours / minutes / seconds

//display data on page

// reset form





//Create app init!
app.init = () => {
    app.eventHandler();
};



//Document Ready
$(function(){
    app.init();
});