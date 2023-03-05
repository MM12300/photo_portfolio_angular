import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {firstLongLifeToken} from "../../../secrets/secrets"
import {igMedia, igData, igUser} from "../interfaces/instagram";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InstagramService {

    constructor(private http: HttpClient) {
    }

    /**
     * Instagram API Token Refresh (long-term, valid for 60days)
     * TODO : Deploy back or find workaround to store the token and refresh it every 60 days
     */
    public refreshToken(): string {
        let token: string;
        const params = new HttpParams()
            .set("grant_type", "ig_refresh_token")
            .set("access_token", firstLongLifeToken);
        this.http.get<{
            access_token: string
            token_type: string;
            expires_in: number
        }>("https://graph.instagram.com/refresh_access_token", {params: params}).subscribe((res: {
            access_token: string
            token_type: string;
            expires_in: number
        }) => {
            token = res.access_token;
        });
        return token;
    }

    /**
     * Instagram's user info necessary to use API (mostly user's id)
     */
    public getIgUserInfos(): Observable<igUser> {
        const params = new HttpParams()
            .set('fields', "id,username")
            .set("access_token", firstLongLifeToken);
        return this.http.get<igUser>("https://graph.instagram.com/me", {params: params});
    }

    /**
     * Retrieve media id of instagram user , media id necessary to query a single media data
     * @param user instagram user
     */
    public getMediaArray(user: igUser): Observable<igData> {
        const params = new HttpParams()
            .set("access_token", firstLongLifeToken);

        return this.http.get<igData>(`https://graph.instagram.com/v11.0/${user.id}/media`, {params: params});
    }

    /**
     * Retrieve
     * @param media instagram media data object
     */
    public getMediaUrl(media: igMedia): string {
        let mediaUrl: string;
        const params = new HttpParams()
            .set("access_token", firstLongLifeToken)
            .set("fields", "media_url, caption");
        this.http.get<igMedia>(`https://graph.instagram.com/${media.id})`, {params: params}).subscribe((res: igMedia) => {
            mediaUrl = res.media_url;
        })
        return mediaUrl;
    }

    /**
     * Retrieve
     * @param id
     */
    public getFullMedia(id:string): Observable<igMedia> {
        const params = new HttpParams()
            .set("access_token", firstLongLifeToken)
            .set("fields", "media_url, caption");

        return this.http.get<igMedia>(`https://graph.instagram.com/${id}`, {params: params});
    }
}
