var hotel = {
    name: 'The Biltmore',
    rooms: 250,
    booked: 189,
    roomService: false,
    spa: true,
    roomTypes: ['Double Bed', ' Queen', ' King'],
    doubleBeds: 75,
    queen: 85,
    king: 90,
    doubleBedsBooked: 70,
    queenBooked: 60,
    kingBooked: 59,
    roomsAvailable: function () {
        if (this.rooms - this.booked == 0) {
            return ("Sorry, " + (this.name) + " is sold out for the night");
        } else {
        return this.rooms - this.booked;
        }
    },
    roomServiceCheck: function () {
        if (this.roomService == true) {
            return ("You bet! Enjoy our fine dining delivered right to your door");
        } else {
            return ("Sorry, not here. But there are many great options nearby");
        }
    },
    doubleAvailCheck: function () {
        if (this.doubleBeds - this.doubleBedsBooked < 10) {
            return ("Book soon! There are only " + (this.doubleBeds - this.doubleBedsBooked) + " available");
        }
        return "There are " + (this.doubleBeds - this.doubleBedsBooked) + " double beds available at " + (this.name); 
    },
    queenAvailCheck: function () {
        if (this.queen - this.queenBooked < 10) {
            return ("Book soon! There are only " + (this.queen - this.queenBooked) + " available");
        }
        return "There are " + (this.queen - this.queenBooked) + " queen beds available at " + (this.name);
    },
    kingAvailCheck: function () {
        if (this.king - this.kingBooked < 10) {
            return ("Book soon! There are only " + (this.king - this.kingBooked) + " available");
        }
        return "There are " + (this.king - this.kingBooked) + " king beds available at " + (this.name);
    }
};

function doubleBookFunction () {
    hotel.doubleBedsBooked = hotel.doubleBedsBooked + 1;
    hotel.booked = hotel.booked + 1;
    document.getElementById('doubleBook').innerHTML = "Thank you. With your reservation, there are " + (hotel.doubleBeds - hotel.doubleBedsBooked) + " remaining";
}

function queenBookFunction () {
    hotel.queenBooked = hotel.queenBooked + 1;
    hotel.booked = hotel.booked + 1;
    document.getElementById('queenBook').innerHTML = "Thank you. With your reservation, there are " + (hotel.queen - hotel.queenBooked) + " remaining";
}

function kingBookFunction () {
    hotel.kingBooked = hotel.kingBooked + 1;
    hotel.booked = hotel.booked + 1;
    document.getElementById('kingBook').innerHTML = "Thank you. With your reservation, there are " + (hotel.king - hotel.kingBooked) + " remaining";
}


// function booking () {
//     hotel.booked = hotel.booked + 1;
// }

function hotelName () {
    document.getElementById('name').innerHTML = hotel.name;
}

function hotelRooms () {
    document.getElementById('rooms').innerHTML = hotel.rooms;
}

function hotelRoomsAvail () {
    document.getElementById('available').innerHTML = hotel.roomsAvailable();
}

function roomService () {
    document.getElementById('service').innerHTML = hotel.roomServiceCheck();
}

function roomTypes () {
    document.getElementById('types').innerHTML = hotel.roomTypes;
}

function doubleAvail () {
    document.getElementById('double').innerHTML = hotel.doubleAvailCheck();
}

function queenAvail () {
    document.getElementById('queen').innerHTML = hotel.queenAvailCheck();
}

function kingAvail () {
    document.getElementById('king').innerHTML = hotel.kingAvailCheck();
}