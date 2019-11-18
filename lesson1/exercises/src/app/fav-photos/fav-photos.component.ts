import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg';
  image2 = 'https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_UX182_CR0,0,182,268_AL_.jpg';
  image3 = 'https://m.media-amazon.com/images/M/MV5BM2MwMTIzYmUtZmE2Yy00MDNjLTllYmEtNmE4YTIyZTljOWI3XkEyXkFqcGdeQXVyMjM0MTIzNDg@._V1_UX182_CR0,0,182,268_AL_.jpg';

  constructor() { }

  ngOnInit() {
  }

}