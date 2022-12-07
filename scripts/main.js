//main js should import functions from bands, bookings, and venues
//it should call functions
//it should provide a skeleton for all need info to go on website

import { Bands } from "./bands.js"
import { Venues } from "./venues.js"
import { Bookings } from "./bookings.js"

const applicationHTML = `
<article class="details">
<section class="detail--column list details__bookings">
<h1>Current Bookings</h1>
${Bookings()}
</section>
</article>

<article class= "details-two">
<section class="detail--column list details__bands">
<h1>Bands</h1>
${Bands()}
</section>

<section class="detail--column list details__venues">
<h1>Venues</h1>
${Venues()}
</section>
</article>
`


const mainContainer = document.querySelector("#container")
mainContainer.innerHTML = applicationHTML