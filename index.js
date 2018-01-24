let tbody = document.getElementsByTagName("tbody")[0];




if( localStorage.getItem("db") == null) {
 fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=berlin&units=metric&appid=e269b0432cb35577201f06837e2a5803")
   .then(resp => resp.json()).then((weatherData) => {
     console.log ("nothing in localstorage, lets save the data inside", weatherData );
     localStorage.setItem("db", JSON.stringify(weatherData))
   });
} else {
 console.log("localstorage present")
 console.log( JSON.parse( localStorage.getItem("db") ) )
}
const data = JSON.parse( localStorage.getItem("db") )




//There you go, fill your weather table
	data.list.forEach(function(item){
	let i = document.createElement("tr");
	i.innerHTML += `<td><img class="img-fluid" alt=${data.list[0].weather[0].description} src="./weatherIcons/${item.weather[0].icon}.svg" /></td>`;
	i.innerHTML += "<th>" + item.dt_txt + "</th>";
	i.innerHTML += "<td>" + item.main.temp_max + "</td>";
	i.innerHTML += "<td>" + item.main.temp_min + "</td>";
	i.innerHTML += "<td>" + item.weather[0].description + "<td>" ;
	

	// `<th>${item.dt_txt}</th>
	// <td>${item.main.temp_max}  </td>
	// <td>${item.main.temp_min} </td>"
	// <td>${item.weather[0].description <td>
	// `
	tbody.appendChild(i);


})

