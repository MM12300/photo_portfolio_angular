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
        const captionsplitted: string[] = this.splitCaption(this.post.caption)
        this.postTitle = captionsplitted[0];
        this.postHashtags = captionsplitted[1];
    }

    public splitCaption(caption: string) {
        const inputArray = caption.split(' ');
        let string1 = '';
        let string2 = '';
        for (let i = 0; i < inputArray.length; i++) {
            let word = inputArray[i];
            if (word.includes('#')) {
                string2 += word + ' ';
            } else {
                string1 += word + ' ';
            }
        }
        return [string1.trim(), string2.trim()];
    }
}
