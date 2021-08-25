var db = require('../db');
const axios = require('axios');


const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

axios.get('https://skimap.org/SkiAreas/index.json')
.then((data) => {
    return JSON.parse(data);
})
.then((skiAreas) => {
  for (var i = 0; i < skiAreas.length; i ++) {
    const { SkiArea, Region } = skiAreas[i];
    if (SkiArea.has_downhill && states.indexOf(Region[0].name) !== -1 ) {
      db.query(
        `INSERT INTO "ski-areas"(id, lat, long, name, website)
        VALUES(${SkiArea.id}, ${SkiArea.geo_lat}, ${SkiArea.geo_lng}, '${SkiArea.name}', '${SkiArea.official_website}');`
      )
    }
  }
})
.catch((err) => {
  console.log(err)
})

