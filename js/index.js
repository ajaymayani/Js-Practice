let dt = document.getElementById('dt');

function updateMap() {
    console.log("update map function is called");

    fetch("https://corona-api.com/countries?include=1")
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                longitude = element.coordinates.longitude;
                latitude = element.coordinates.latitude;

                cases = element.latest_data.critical;

                dt.innerHTML = "Updated At : "+ element.updated_at.substring(0,10);

                if (cases > 255) {
                    color = "rgb(255,0,0)"
                } else {
                    color = `rgb(${cases},0,0)`
                }

                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map)

            });
        })
}

updateMap();