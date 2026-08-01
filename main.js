const baseId = 'apppNbWVfsRHW10fh';
const token = 'z demo';
async function getRecords("sites%20to%20watch%20dragon%20ball") {
const response = await fetch(
`https://api.airtable.com/v0/apppNbWVfsRHW10fh/sites%20to%20watch%20dragon%20ball`,
{ headers: { Authorization: `Bearer ${token}` } }
);
const data = await response.json();
return data.records; 
// array of { id, fields: {...} }
}


const Series = await getRecords('Series');
const Bio = await getRecords('Bio');
const Websitelink = await getRecords('Websitelink');
const Seriesposters = await getRecords('Seriesposters');
const Notes = await getRecords('Notes');



console.log(Series[0].fields);
// { Title: 'Vegeta Falls', Rank: 1, Rating: 9.8 }


function renderEpisodes(records) {
const container = document.getElementById('episode-list');
container.innerHTML = records.map(r => `
<div class="card">
<h3>#${r.fields.Rank} — ${r.fields.Title}</h3>
<p>Rating: ${r.fields.Rating}</p>
</div>
`).join('');
}
renderEpisodes(topEpisodes);

import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = document.querySelector('.docs-demo.is-active');

let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const animatableSquare = createAnimatable('.square', {
  x: 500, // Define the x duration to be 500ms
  y: 500, // Define the y duration to be 500ms
  ease: 'out(3)',
});

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  animatableSquare.x(x); // Animate the x value in 500ms
  animatableSquare.y(y); // Animate the y value in 500ms
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);










