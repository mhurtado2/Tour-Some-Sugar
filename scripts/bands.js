// band module should import get bands
// export the bands function
// write code to write out a list of band on website 

import { getBands, getVenues, getBookings } from "./database.js";


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("band")) {

            const [, bandPrimaryKey] = itemClicked.id.split("--")

            for (const band of bands) {
                if (parseInt(bandPrimaryKey) === band.id) {

                    const gigs = filterBandByBooking(band)
                    const concertHall = assignedVenueNames(gigs)

                    window.alert(`Is Playing at ${concertHall}`)
                }
            }
        }
    }
)

const bookings = getBookings()
// The function need the walker information, so define a parameter
const filterBandByBooking = (band) => {
    // Define an empty array to store all of the assignment objects
    const gigs = []
    // Iterate the array value of walkerCities
    for (const booking of bookings) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (booking.bandId === band.id) {

            gigs.push(booking)
        }
        // If it does, add the current object to the array of assignments

        // After the loop is done, return the assignments array
    }
    return gigs
}

const venues = getVenues()

// Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedVenueNames = (gigs) => {
    // Define an empty string that will get appended with matching cities
    let venueNames = ""
    // Iterate the array of assignment objects
    for (const gig of gigs) {
        // For each assignment, iterate the cities array to find the match
        for (const venue of venues) {
            // Add the name of the matching city to the array of city names
            if (venue.id === gig.venueId) {
                // After the loop is done, return the string
                venueNames = `\n${venueNames} \n${venue.name}`
            }
        }
    }
    return venueNames
}

const bands = getBands()

export const Bands = () => {
    let bandHTML = "<ul>"

    for (const band of bands) {
        bandHTML += `<li id="band--${band.id}">${band.name}</li>`
    }

    bandHTML += "</ul>"
    //two mistake 
    return bandHTML
}