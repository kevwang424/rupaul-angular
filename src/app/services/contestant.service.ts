import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/observable'

import 'rxjs/Rx'
import 'rxjs/add/operator/map'

import { Contestant } from '../contestant'

@Injectable()
export class ContestantsService{

  private url = 'http://localhost:3000/api/v1/contestants'

  constructor(private http: Http){
    console.log("Contestants Service Initialized...")
  }

  getContestants(): Observable<Contestant[]>{
    return this.http.get(this.url).map(res => res.json())
  }

  addContestant(body:any){
    if (body.date_of_death === ""){
      body.date_of_death = null
    }
    return this.http.post(this.url, body).map(res => res.json())
  }

  deleteContestant(id:number){
    return this.http.delete(`${this.url}/${id}`).map(res => res.json())
  }
}
