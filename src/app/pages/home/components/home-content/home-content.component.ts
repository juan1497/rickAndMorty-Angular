import { Component, OnInit } from '@angular/core';
import { Home } from '../../models/home';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {
  home!:Home
  constructor() { 
    
  }

  ngOnInit(): void {
    this.home={
      image:"https://fondosmil.com/fondo/27347.jpg",
      sinopsis:`Rick acaba de mudarse a casa de su hija Beth y
       allí recuerda que tiene un nieto llamado Morty. Sin preguntar a nadie, 
       decide que va a obligarle a que le acompañe a todo tipo de aventuras para 
       que el chico se vuelva inteligente como él y no se convierta en un idiota como Jerry,
        padre de Morty y yerno de Rick.`
    };
  }

}
