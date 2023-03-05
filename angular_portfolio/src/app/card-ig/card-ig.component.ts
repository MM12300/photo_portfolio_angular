import {Component, Input, OnInit} from '@angular/core';
import {igMedia} from "../interfaces/instagram";

@Component({
  selector: 'app-card-ig',
  templateUrl: './card-ig.component.html',
  styleUrls: ['./card-ig.component.scss']
})


export class CardIgComponent implements OnInit{

    @Input() post:igMedia;
    public postTitle:string;
    public postHashtags:string;
    constructor() {

    }

    ngOnInit(): void {
        let splitCaption:string[] = this.post.caption.split("#",2);
        this.postTitle = splitCaption[0];
        this.postHashtags = splitCaption[1];
    }

}
