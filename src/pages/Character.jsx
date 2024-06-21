import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character =  async () => {

    const launches = await getData();
    const launch_number = await getHash();
    console.log(launch_number)
    const launch = launches.find(launch => launch.id === launch_number);
 
    const view = `
        <div class="Characters-inner">

            <article class="Character-card">
            <h2>${launch.name}</h2>
            <img src="${launch.links.patch.small}" alt="">
            </article>

            <article class="Characters-card">
                <h3>detalle: <span>${launch.details}</span></h3>
                <h3>Vuelos: <span>${launch.cores[0].flight}</span></</h3>
                <h3>Fecha y hora de despegue: <span>${launch.date_utc}</span></</h3>
            </article>
        </div> 
    `;
    return view
};
export default Character;