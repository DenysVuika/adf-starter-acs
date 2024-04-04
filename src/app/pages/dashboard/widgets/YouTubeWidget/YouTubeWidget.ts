/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-youtube-widget',
  standalone: true,
  imports: [YouTubePlayerModule, MatGridListModule],
  templateUrl: 'YouTubeWidget.html',
  styleUrls: ['YouTubeWidget.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YouTubeWidget implements OnInit {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
