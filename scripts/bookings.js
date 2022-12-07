// venue module should import get bookings, bands, and venues
// export the bookings function
// write code to write out a list of current bookings on website 

import { getBands, getBookings, getVenues } from "./database.js";

const bookings = getBookings()
//const venues = getVenues()
const bands = getBands()

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {

            const [, bookingId] = itemClicked.id.split("--")
            let matchingBooking = null
            for (const booking of bookings) {
                if (booking.id === parseInt(bookingId)) {
                    matchingBooking = booking
                }
            }
            let matchingBand = null
            for (const band of bands) {
                if (matchingBooking.bandId === band.id) {
                    matchingBand = band
                }
            }
            window.alert(`${matchingBand.name} \n${matchingBand.musicalGenre} \nFormed In ${matchingBand.yearFormed} \n${matchingBand.members} band members `)
        }
    }
)


export const Bookings = () => {
    let bookingHTML = "<ul>"

    for (const booking of bookings) {
        bookingHTML += `<li id="booking--${booking.id}">${booking.bandName} will be playing at ${booking.venueName} ${booking.date}</li>`
    }

    bookingHTML += "</ul>"
    //two mistake 
    return bookingHTML

}

