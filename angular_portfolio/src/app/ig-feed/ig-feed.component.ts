import {Component, OnInit} from '@angular/core';
import {InstagramService} from "../services/instagram.service";
import {igMedia} from "../interfaces/instagram";
import {concatMap} from "rxjs";

@Component({
  selector: 'app-ig-feed',
  templateUrl: './ig-feed.component.html',
  styleUrls: ['./ig-feed.component.scss']
})
export class IgFeedComponent implements OnInit{
    public instaPosts: igMedia[];
    public displayPage: boolean=false;
    constructor(public _igService: InstagramService) {

    }

    ngOnInit(): void {
        this._igService.getIgUserInfos().subscribe(user=>{
            console.log(user);
            this._igService.getMediaArray(user).subscribe(mediaIncomplete =>{
                console.log(mediaIncomplete);
                let mediaIds = mediaIncomplete.data.map(data => data.id);
                let mediaFull: igMedia[] = [];

                // Code that generates too many API calls and then block the API limit
                // mediaIds.forEach(mediaId => {
                //     this._igService.getFullMedia(mediaId)
                //         .pipe(concatMap(media => {
                //             mediaFull.push(media);
                //             return mediaFull;
                //         }))
                //         .subscribe();
                // });

                //Let's just get the 5 last results
                for (let i = 0; i < 5; i++) {
                    const mediaId = mediaIds[i];
                    this._igService.getFullMedia(mediaId)
                        .pipe(concatMap(media => {
                            mediaFull.push(media);
                            return mediaFull;
                        }))
                        .subscribe();
                }

                this.instaPosts = mediaFull
                this.displayPage = true;
            })
        });
    }
}
