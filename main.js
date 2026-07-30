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
