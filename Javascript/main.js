var Leafletmap = L.map('mapLeaflet').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaW5lcnNlY3QiLCJhIjoiY2wwc2p0YXJnMDBkZTNjbW04ZjZnaGhubSJ9.Bbr6AwoqVPdthi0AbRTz9A'
    }).addTo(Leafletmap);

// const urlGeoserverWMS = "http://localhost:8080/geoserver/cite/wms?service=WMS&version=1.1.0&request=GetMap&layers=cite:provincie&styles=&bbox=634.5732789819012,306594.5543000576,284300.0254094796,636981.7698870846&width=659&height=768&srs=EPSG:28992&format=application/openlayers"


//arrays

// const geoJsonLayerNieuw= L.geoJSON().addTo(Leafletmap);

// const arrayvanplaatsnamen = ['Amsterdam', 'Deventer', 'Almere', 'Haren', 'Utrecht'];

// for (let index = 0; index < arrayvanplaatsnamen.length; index++) {
//     const woonplaats = arrayvanplaatsnamen [index];
//     console.log(woonplaats)

//     const node = document.createElement("button");
//     node.className = "button";
//     const textnode = document.createTextNode(woonplaats);
//     node.appendChild(textnode);

//     document.getElementById("header").appendChild(node);

//     node.addEventListener('click', function(){
//         console.log( node.id)
//     })

//     fetch('https://geodata.nationaalgeoregister.nl/locatieserver/free?bq=type:woonplaats&q='+ node.id)
//     .then(response => response.json())
//     .then (data => {
//         console.log(data.response.docs[0].id)
//     })

// }

