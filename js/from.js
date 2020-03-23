class RentalProperties{
    constructor(villa, price, rating, location, rooms, availability, features){
        this.listing = {
            'villa':villa , 
           
            'features': features,
            'rooms': rooms,
            'location': location
        };
        this.rating = rating,
        this.price = price,
        this.availability = availability
    }
    getAvailbility(){
        alert(this.availability + this.listing);
    
    }
       }
      // let p = document.querySelector('p').innerHTML = this.availability
       function tdot(){
            let price = toronto.price; 
            let precent = 20.00;
            let discount = price * precent / 100; 
            let new_price = price - discount; 
            alert( 'the price before: ' + toronto.price +"  " + "Price after savings: " + new_price);
        }
        function thai(){
            let price = thailand.price; 
            let precent = 20.00;
            let discount = price * precent / 100; 
            let new_price = price - discount; 
            alert( 'the price before: ' + thailand.price +"  " + "Price after savings: " + new_price);
        }
        function cottage(){
            let price = muskoka.price; 
            let precent = 20.00;
            let discount = price * precent / 100; 
            let new_price = price - discount; 
            alert( 'the price before: ' + muskoka.price +"  " + "Price after savings: " + new_price);
        }        


    
let toronto = new RentalProperties('Shaw Street Condo',100.00 ,'5-stars','Downtown Toronto', 2, 5,['Right in the heart of T.O', 'Access to Gym and Pool', 'Pet Firendly','walking distance from major attractions']); 
let thailand = new RentalProperties('Phuket', 55.00, '5-Star', 'Phuket Thailand', 3,3, ['A Beach in the backyard','private pool'], 3,3 );
let muskoka = new RentalProperties('Muskoka',50.00, '4-stars','Muskoka', 4 ,'N/A until May of 2020','Not avialble unstil May of 2020');

    function rentalSapce(){
        let opt = document.querySelector('option');
    }
