  class RentalProperties {
  	constructor(villa, price, rating, location, rooms, availability, features) {
  		this.listing = {
  			'villa': villa,
  			//'availability': availability,
  			'features': features,
  			'rooms': rooms,
  			'location': location
  		};
  		this.rating = rating,
		this.price = price,
		this.availability = availability
	}
		availability(){
			let toronto = 5;
			let thailand = 3;
			let cottage = 10;
			
  			if (toronto > 0) {
  				toronto--;
  				alert("There are (" + toronto + ") left.");


  			} else {

  				alert("No Villa Rentals in Toronto available at this time!");
  			}
  			if (thailand > 0) {
  				thailand--;
  				alert("There are (" + thailand + ") left.");
  			} else {

  				alert("No Villa Rentals in Thailand available at this time!");
  			}
  			if (cottage > 0) {
  				cottage--;
  				alert("There are (" + cottage + ") left.");
  			} else {
  				alert("No Villa Rentals in Muskoka available at this time!");
  			}
		  }
  		}     
  let toronto = new RentalProperties('Shaw Street Condo', 100.00, '5-stars', 'Downtown Toronto', 2, 5, ['Right in the heart of T.O', 'Access to Gym and Pool', 'Pet Firendly', 'walking distance from major attractions']);
  let thailand = new RentalProperties('Phuket', 55.00, '5-Star', 'Phuket Thailand', 3, 3, ['A Beach in the backyard', 'private pool'], 3, 3);
  let muskoka = new RentalProperties('Muskoka', 50.00, '4-stars', 'Muskoka', 4, 'N/A until May of 2020', 'Not avialble unstil May of 2020');

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

  function displayProperties(e) {
  	let container = document.getElementById(e.target.container);
  	let city = e.target.city;
    const entries = Object.entries(city);

    for(const [title, value] of entries){
      if (typeof value == 'object'){
        Object.keys(value).forEach(property => {
          generateListingContent(property, value, container);
        });
      }
      else{
        generateListingContent(title, value, container);
      }
    }
  }

  function generateListingContent(property, value, container){
    let propertyName = document.createElement('h2');
    propertyName.innerHTML = property;
    container.appendChild(propertyName);

    let propertyValue = document.createElement('p');
    value[property] == undefined ? propertyValue.innerHTML = value : propertyValue.innerHTML = value[property];
    propertyName.appendChild(propertyValue);
  }



  let torontoListingButton = document.querySelector('#btn-toronto');
  torontoListingButton.addEventListener('click', displayProperties);
  torontoListingButton.city = toronto;
  torontoListingButton.container = 'toronto-fieldset';

  let thailandListingButton = document.querySelector('#btn-thailand');
  thailandListingButton.addEventListener('click', displayProperties);
  thailandListingButton.city = thailand;
  thailandListingButton.container = 'thailand-fieldset';

  let cottageListingButton = document.querySelector('#btn-cottage');
  cottageListingButton.addEventListener('click', displayProperties);
  cottageListingButton.city = muskoka;
  cottageListingButton.container = 'cottage-fieldset';

  class Discount extends RentalProperties{
	constructor(villa,price, rating, location, rooms, availability, features,specialRate ) {
		super(villa,price, rating, location, rooms, availability, features,specialRate);
		this.specialRate = specialRate;

	}
}
let discount2 = new Discount('queen st villa', 50.00, 4,'toronto',2, 3,['indoor pool','close to attractions'],15);

class SuperHost extends RentalProperties{
	constructor(villa,price, rating, location, rooms, availability, features,superName){
		super(villa,price, rating, location, rooms, availability, features,superName);
		this.superHost = {
			'superName': superName
		}
		this.place = function(){
			alert(this.location + this.superName + this.rating);
		}
	}
}

let superHost1 = new SuperHost('shaw st condo',50.00, 5,'toronto',2,5,['Lots to do','In the heart of T.O'],2, 'Rachel');