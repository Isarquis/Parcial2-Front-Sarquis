import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Anime } from './anime';
@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private apiUrl:string=environment.baseUrl;
constructor(private hhtp: HttpClient) { }

getAnimes(): Observable<Anime[]>{
  return this.hhtp.get<Anime[]>(this.apiUrl);
}

}
