import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  slideIndex;

  images = [
    { img: "../../../../assets/photos/ryoji-iwata-a-qsFZimp1M-unsplash.png" },
    { img: "../../../../assets/photos/adeolu-eletu-E7RLgUjjazc-unsplash.png" },
    { img: "../../../../assets/photos/lora-ohanessian-16rIhtV42yA-unsplash.png" }
  ]
  images2 = [
    { path: "../../../../assets/photos/ryoji-iwata-a-qsFZimp1M-unsplash.png" },
    { path: "../../../../assets/photos/adeolu-eletu-E7RLgUjjazc-unsplash.png" },
    { path: "../../../../assets/photos/lora-ohanessian-16rIhtV42yA-unsplash.png" }
  ]

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "variableHeight": true,
    "variableWidth": true,
    "dots": true,
    "infinite": true
  };

  constructor() { }

  ngOnInit(): void {
    this.slideIndex = 1;
    this.showSlides(1);
  }


  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    console.log("hi");
    var i;
    var slide1 = document.getElementById('slide1');
    var slide2 = document.getElementById('slide2');
    var slide3 = document.getElementById('slide3');
    var dots = document.getElementsByClassName("dot");
    if (n > 3) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = 3 }
    slide1.style.display="none";
    slide2.style.display="none";
    slide3.style.display="none";

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if(n == 1){
      slide1.style.display = "block"
    }else if(n==2){
      slide2.style.display = "block"
    }else{
      slide3.style.display = "block"
    }

    dots[this.slideIndex - 1].className += " active";
  }

}
