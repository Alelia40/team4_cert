import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  images = [
    {img:"../../../../assets/photos/ryoji-iwata-a-qsFZimp1M-unsplash.png"},
    {img:"../../../../assets/photos/adeolu-eletu-E7RLgUjjazc-unsplash.png"},
    {img:"../../../../assets/photos/lora-ohanessian-16rIhtV42yA-unsplash.png"}
  ]
  images2 = [
    {path:"../../../../assets/photos/ryoji-iwata-a-qsFZimp1M-unsplash.png"},
    {path:"../../../../assets/photos/adeolu-eletu-E7RLgUjjazc-unsplash.png"},
    {path:"../../../../assets/photos/lora-ohanessian-16rIhtV42yA-unsplash.png"}
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
  }

}
