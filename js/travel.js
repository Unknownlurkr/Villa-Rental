class Booking{
    constructor(villa, price, rating, location, rooms, availability, features){
        this.villa = {
            'villa':villa , 
           'availability': availability,
            'features': features,
            'rooms': rooms,
            'location': location
        };
        this.rating = rating,
        this.price = price
    }

    available(){
        var toronto = 5;
        var thailand = 3;
        var cottage = 10; 

        return{
            total_rooms:
            function(){
                return toronto + thailand + cottage;
            },
            toronto:
            function(){
                if (toronto > 0){
                    toronto--; 
                    return "There are (" + toronto + ") left.";
             }
                else{
                 return "No Villa Rentals in Toronto available at this time!"
             }
            },
            thailand:
            function(){
                if (thailand > 0){
                    thailand--; 
                    return "There are (" + thailand + ") left.";
             }
                else{
                 return "No Villa Rentals in Thailand available at this time!"
             }
            },
            cottage:
            function(){
                if (cottage > 0){
                    cottage--; 
                    return "There are (" + cottage + ") left.";
             }
                else{
                 return "No Villa Rentals in Muskoka available at this time!"
             }
            },
           }
        }

    }

