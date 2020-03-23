// worry about displaying info in the browser last 
let div = document.querySelector('div');
//video games object

//constructor for my favourite kind of music 
class Genre{
    constructor(genre,title,artist,label,first,last){
        this.song = {
            title,
            artist,
            genre
        };
        this.label = label
        this.listener = {
            first,
            last
        };
    };
    //songs fucntion will display the listners name, the song with the title and the artist
    //and the genre
    songs(){
        console.log(this.listener + "Enjoys:" + this.song);
    }
}

/*
instantiate the genre objects for each person 
who provides information about their favourite genre 
*/
let britt = new Genre('Unknown Song', 'Unknown Artist',['techno','deep house','tech-house','dnb','electronic', 'rap','indie','alternative','synthwave', 'many more'], ['drumecode','octopus','deep perect', 'ongoing list'], 'Brittany','Samuels');
let jeff = new Genre('Unknown Song', 'Unknown Artist',['Metal','Folklore','game sound tracks','synthwave', 'many more'], 'ongoing list', 'Jeff','Grant');
let tina = new Genre('Some day', 'The Strokes',['alternative','rock'], 'cant decide', 'Tina', 'Cipressi');
let jordan = new Genre('any song the the radio', 'the radio','any genre', 'does not know', 'Jordan', 'Polem' );
let chris = new Genre ('Podcasts', 'No specific artist','enjoys podcasts more than music', 'Joe Rogan and other good podcasts likes to think', 'Chris', 'Pander');

//sub class for the Genre which would be info about the songs
class Song extends Genre{
    constructor(title,artist,genre,label,releaseYear){
        super(title,artist,genre,label,releaseYear);
        this.releaseYear = releaseYear;
    }
}
