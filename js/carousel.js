//Array storage class
let carouselArr = [];

class Carousel {

    constructor(image, title, url) {
        this.image = image; 
        this.title = title; 
        this.url = url; 
    }
    
    static _sequence;
    static _size;
    static _interval; 
    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        if(Carousel._sequence < Carousel._size) {
            let carouselImages = document.getElementById("carousel");
            let carouselTitleAndUrl = document.getElementById("carousel-title");
          
            carouselImages.innerHTML = "<img src ='./img/"+ carouselArr[Carousel._sequence].image +"'></a>";  
            carouselTitleAndUrl.innerHTML =  "<a href='"+carouselArr[Carousel._sequence].url+"'>" +carouselArr[Carousel._sequence].title+"</a>"//"<a href='"+carouselArr[Carousel._sequence].url +">" + carouselArr[Carousel._sequence].title + "</a>"
            Carousel._sequence +=1;
            return;             
        }

        Carousel._sequence = 0;
    }
};
