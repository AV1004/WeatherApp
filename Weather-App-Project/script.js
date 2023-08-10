let Timezone = document.getElementById("Timezone");
let IconNNN = document.getElementById("icon");
let temp = document.getElementById("Second-Temperature");
let Text = document.getElementById("Third-Condtion");

window.addEventListener('load', () => {
  let longitutde;
  let latitutde;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      longitutde = position.coords.longitude;
      latitutde = position.coords.latitude;


      // const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${latitutde}&lon=${longitutde}`; Love Day ka API :)
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitutde},${longitutde}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2dd8ed5016msh79fe8940bcd652dp1a3edbjsnb5d3871ef5c6',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      fetch(url, options).then((response) => {
        return response.json();
      }).then((data) => {
        // console.log(data);

        let tz = `<h3 style="margin-top:55px;" >${data.location.tz_id}</h3>`;
        Timezone.innerHTML = tz;

        // let icon = `<img src="${data.current.condition.icon}" style="height:150px; width:200px;" alt="Error">`;
        // Icon.innerHTML = icon;


        // let icon;

        let condition = `${data.current.condition.text}`;
        if (`${data.current.condition.text}` == "Sunny") {
          condition = "Clear";
          icon = `${condition}`;
          console.log(icon);

          let DayNight;
          if (`${data.current.is_day}` == 1) {
            DayNight = " Day";
            icon = `${condition}${DayNight}`;
            console.log(icon);
          }
          else {
            DayNight = " Night";
            icon = `${condition}${DayNight}`;
            console.log(icon);
          }


        }
        else if (`${data.current.condition.text}` == "Partly cloudy") {
          icon = `${condition}`;
          console.log(icon);

          let DayNight;
          if (`${data.current.is_day}` == 1) {
            DayNight = " Day";
            icon = `${condition}${DayNight}`;
            console.log(icon);
          }
          else {
            DayNight = " Night";
            icon = `${condition}${DayNight}`;
            console.log(icon);
          }


        }
        else if (`${data.current.condition.text}` == "Clear") {
          icon = `${condition}`;
          console.log(icon);

          let DayNight;
          if (`${data.current.is_day}` == 1) {
            DayNight = " Day";
            icon = `${condition}${DayNight}`;
            console.log(icon);
          }
          else {
            DayNight = " Night";
            icon = `${condition}${DayNight}`;
            console.log(icon);
          }


        }
        else if (`${data.current.condition.text}` == "Overcast") {
          condition = "Cloudy"
          icon = `${condition}`;
          console.log(icon);
        }
        else if (`${data.current.condition.text}` == "Blizzard") {
          condition = "Wind"
          icon = `${condition}`;
          console.log(icon);
        }
        else if (`${data.current.condition.text}` == "Light rain" || `${data.current.condition.text}` == "Heavy rain" || `${data.current.condition.text}` == "Moderate rain" || `${data.current.condition.text}` == "Patchy rain possible" || `${data.current.condition.text}` == "Torrential rain shower" || `${data.current.condition.text}` == "Light rain shower" || `${data.current.condition.text}` == "Patchy light rain") {
          condition = "Rain"
          icon = `${condition}`;
          console.log(icon);
        }
        else if (`${data.current.condition.text}` == "Fog" || `${data.current.condition.text}` == "Mist") {
          condition = "Fog"
          icon = `${condition}`;
          console.log(icon);
        }
        else {
          icon = `${condition}`;
          console.log(icon);
        }

        setIcons(icon, IconNNN);



        // temperature
        let Temp = `${data.current.temp_c}°C`;
        temp.innerHTML = Temp;



        temp.addEventListener('click', () => {
          if (Temp == `${data.current.temp_c}°C`) {
            Temp = `${data.current.temp_f} F`;
          }
          else {
            Temp = `${data.current.temp_c}°C`;
          }
          temp.innerHTML = Temp;
        })


        let text = `${data.current.condition.text} `;
        Text.innerHTML = text;


      });
    });
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/ /g, "_").toUpperCase();
    console.log(currentIcon);
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }

});

