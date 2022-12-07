/*
database should hold all need info on bands, bookings and venues

database should also export a copy of each array using .map
*/

const database = {
    bands: [{
        id: 1,
        name: "Animals As Leaders",
        musicalGenre: "Metal",
        members: 3,
        yearFormed: 2010

    }, {
        id: 2,
        name: "Damn Daniel",
        musicalGenre: "Shoe Gaze",
        members: 3,
        yearFormed: 2010

    }, {
        id: 3,
        name: "Woahhh",
        musicalGenre: "Pop",
        members: 10,
        yearFormed: 2008

    }, {
        id: 4,
        name: "The Fray",
        musicalGenre: "Soft Rock",
        members: 5,
        yearFormed: 2017

    }, {
        id: 5,
        name: "Taylor Swift",
        musicalGenre: "Country",
        members: 1,
        yearFormed: 2013

    }, {
        id: 6,
        name: "Dire Straits",
        musicalGenre: "Fusion", 
        members: 4,
        yearFormed: 1980

    }, {
        id: 7,
        name: "My Chemical Romance",
        musicalGenre: "Alt Rock",
        members: 5,
        yearFormed: 2005

    }, {
        id: 8,
        name: "Tellie Tubbies",
        musicalGenre: "Happy Sounds",
        members: 7,
        yearFormed: 1990

    }, {
        id: 9,
        name: "Iphone",
        musicalGenre: "Techno",
        members: 6,
        yearFormed: 2019

    }, {
        id: 10,
        name: "Arty Shaw",
        musicalGenre: "Jazz",
        members: 15,
        yearFormed: 1920

    }],
    venues: [{
        id: 1, name: "Exit Inn", adress: "121 happy ln", squareFootage: 5000, occupancy: 500
    }, {
        id: 2, name: "Dee's Lounge", address: "567 yolo pl", squareFootage: 3000, occupancy: 400
    }, {
        id: 3, name: "Twin Kegs 2", address: "342 homestyle dr", squareFootage: 4000, occupancy: 200
    }, {
        id: 4, name: "Mercy Lounge", address: "879 pizza pl", squareFootage: 2000, occupancy: 300
    }, {
        id: 5, name: "The Basement", address: "1000 cloud dr", squareFootage: 1000, occupancy: 1000
    }, {
        id: 6, name: "The Basement East", address: "1240 elliston pl", squareFootage: 3000, occupancy: 200
    }, {
        id: 7, name: "Analog", address: "789 apple dr", squareFootage: 2000, occupancy: 300
    }, {
        id: 8, name: "Americano", address: "1100 nashville way", squareFootage: 5000, occupancy: 200
    }, {
        id: 9, name: "The Five Spot", address: "1499 sara dr", squareFootage: 6000, occupancy: 100
    }, {
        id: 10, name: "The Station Inn", address: "1249 voodoo dr", squareFootage: 2000, occupancy: 50
    }],
    bookings: [{
        id: 1, bandId: 10, bandName: "Arty Shaw", venueId: 1, venueName: "Exit Inn", date: "12/13/2022"
    }, {
        id: 2, bandId: 5, bandName: "Taylor Swift", venueId: 2, venueName: "Dee's Country Cocktail Lounge", date: "12/14/2022"
    }, {
        id: 3, bandId: 2, bandName: "Damn Daniel", venueId: 3, venueName: "Twin Kegs 2", date: "12/15/2022"
    }, {
        id: 4, bandId: 8, bandName: "Tellie Tubbies", venueId: 4, venueName: "Mercy Lounge", date: "12/16/2022"
    }, {
        id: 5, bandId: 9, bandName: "Iphone", venueId: 5, venueName: "The Basement", date: "12/17/2022"
    }, {
        id: 6, bandId: 4, bandName: "The Fray", venueId: 6, venueName: "The Basement East", date: "12/18/2022"
    }, {
        id: 7, bandId: 5, bandName: "Taylor Swift", venueId: 7, venueName: "Analog", date: "12/19/2022"
    }, {
        id: 8, bandId: 2, bandName: "Damn Daniel", venueId: 8, venueName: "Americano", date: "12/20/2022"
    }, {
        id: 9, bandId: 3, bandName: "Woahhh", venueId: 9, venueName: "The Five Spot", date: "01/01/2023"
    }, {
        id: 10, bandId: 1, bandName: "Animals As Leaders", venueId: 10, venueName: "The Station Inn", date: "01/02/2023"
    }, {
        id: 11, bandId: 7, bandName: "My Chemical Romance", venueId: 1, venueName: "Exit Inn", date: "01/04/2023"
    }, {
        id: 12, bandId: 6, bandName: "Dire Straits", venueId: 9, venueName: "The Five Spot", date: "01/05/2023"
    },
    {
        id: 13, bandId: 5, bandName: "Taylor Swift", venueId: 1, venueName: "Exit Inn", date: "01/06/2023"
    },
    {
        id: 14, bandId: 1, bandName: "Animals As Leaders", venueId: 2, venueName: "Dee's Country Cocktail Lounge", date: "01/07/2023"
    },
    {
        id: 15, bandId: 10, bandName: "Arty Shaw", venueId: 3, venueName: "Twin Kegs 2", date: "02/08/2023"
    },
    {
        id: 16, bandId: 8, bandName: "Tellie Tubbies", venueId: 10, venueName: "The Station Inn", date: "03/03/2023"
    },
    {
        id: 17, bandId: 7, bandName: "My Chemical Romance", venueId: 4, venueName: "Mercy Lounge", date: "04/18/2023"
    },
    {
        id: 16, bandId: 8, bandName: "Tellie Tubbies", venueId: 7, venueName: "Analog", date: "05/08/2023"
    }
]
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}
