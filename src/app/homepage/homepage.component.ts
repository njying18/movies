import { Component, OnInit } from '@angular/core';

import { Movie } from '../resources/movie';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movieList: Array<Movie>;
  welcomeMsg: string;
  constructor(){}
  ngOnInit() {
    this.welcomeMsg = 'Hurray for Hollywood!'
    this.movieList = [
      {
        title: 'Star Wars',
        genre: 'Science-fiction',
        description: 'Nineteen years after the formation of the Empire, Luke Skywalker is thrust into the struggle of the Rebel Alliance when he meets Obi-Wan Kenobi.',
        trailer: 'http://www.starwars.com/video/episode-iv-trailer'
      },
      {
        title: 'Casablanca',
        genre: 'Drama',
        description: 'The story of Rick Blaine, a cynical world-weary ex-patriate who runs a nightclub in Casablanca, Morocco during the early stages of WWII.',
        trailer: 'https://www.youtube.com/watch?v=S9ID5DHsX8g'
      },
      {
        title:'Dances with Wolves',
        genre: 'Western',
        description: 'This is the story of a Union Army lieutenant who travels to the American frontier to find a military post and his dealings with a group of Lakota Indians.',
        trailer: 'https://www.youtube.com/watch?v=J0obOvGGb1U'
      },
      {
        title: 'The Phantom of the Opera',
        genre: 'Musical',
        description: 'A young soprano becomes the obsession of a disfigured musical genius who lives beneath the Paris Opéra House.',
        trailer: 'https://www.youtube.com/watch?v=N91AL8sAh9o'
      },
      {
        title: 'Lawrence of Arabia',
        genre: 'Historical drama',
        description: 'The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks.',
        trailer: 'https://www.youtube.com/watch?v=HFAkWNiETrg'
      },
      {
        title: 'The Godfather',
        genre: 'Crime, drama',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        trailer: 'https://www.youtube.com/watch?v=5DO-nDW43Ik'
      }
    ]
  }
}
