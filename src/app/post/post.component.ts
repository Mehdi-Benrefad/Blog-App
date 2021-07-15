import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }
  @Input() Titre: string = "";
  @Input() Content: string = "";
  @Input() LoveIts: number = 0;
  CreatedAt = new Date();
  @Input() postStatus = "";
  ngOnInit(): void {
  }

}
