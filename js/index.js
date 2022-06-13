function updateMap(){
    console.log("update map function is called");

    fetch("../data.json")
    .then(response => response.json())
    .then(rsp =>{
        rsp.data.forEach(element => {
            longitude = element.longitude;
            latitude = element.latitude;
            cases = element.infected;
            if(cases > 255)
            {
                color = "rgb(255,0,0)"
            }else{
                color = `rgb(${cases},0,0)`
            }

            new mapboxgl.Marker({
                draggable : true,
                color : color
            })
            .setLngLat([longitude,latitude])
            .addTo(map)

        });
    })
}

updateMap();