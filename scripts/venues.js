// venue module should import get venues
// export the venues function
// write code to write out a list of venues on website 

import { getVenues, getBands, getBookings } from "./database.js";

/*
document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
    
        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("venue")) {

            const [, venuePrimaryKey] = itemClicked.id.split("--")
      
            let matchingVenue = null
            for (const venue of venues) {
                if (parseInt(venuePrimaryKey) === venue.id) {
                    matchingVenue = venue
                }
            }
            let matchingBand = null
            for (const band of bands) {
                if (matchingVenue.bandId === band.id) {
                    matchingBand = band
                }
            }

            window.alert(`${matchingBand.name} is playing here`)
        }
    }
)
*/


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("venue")) {

            const [, venuePrimaryKey] = itemClicked.id.split("--")

            for (const venue of venues) {
                if (parseInt(venuePrimaryKey) === venue.id) {

                    const schedule = filterVenueByBooking(venue)
                    const season = assignedBandNames(schedule)

                    window.alert(`Playing Here \n${season}`)
                }
            }
        }
    }
)

const bookings = getBookings()

// The function need the walker information, so define a parameter
const filterVenueByBooking = (venue) => {
    // Define an empty array to store all of the assignment objects
    const calendar = []
    // Iterate the array value of walkerCities
    for (const booking of bookings) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (booking.venueId === venue.id) {

            calendar.push(booking)
        }
        // If it does, add the current object to the array of assignments

        // After the loop is done, return the assignments array
    }
    return calendar
}


const bands = getBands()

// Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedBandNames = (calendar) => {
    // Define an empty string that will get appended with matching cities
    let bandNames = ""
    // Iterate the array of assignment objects
    for (const date of calendar) {
        // For each assignment, iterate the cities array to find the match
        for (const band of bands) {
            // Add the name of the matching city to the array of city names
            if (band.id === date.bandId) {
                // After the loop is done, return the string
                bandNames = `${bandNames} \n${band.name}`
            }
        }
    }
    return bandNames
}


const venues = getVenues()

export const Venues = () => {
    let venueHTML = "<ul>"

    for (const venue of venues) {
        venueHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    venueHTML += "</ul>"
    //two mistake 
    return venueHTML
}