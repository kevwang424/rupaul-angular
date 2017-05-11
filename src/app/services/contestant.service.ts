import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import 'rxjs/Rx'
import 'rxjs/add/operator/map'

import { Contestant } from '../model/contestant'

@Injectable()
export class ContestantsService{

  private contestantsUrl = 'http://localhost:3000/api/v1/contestants'

  constructor(private http: Http){
    console.log("Contestants Service Initialized...")
  }

  getContestants(): Observable<Contestant[]>{
    return this.http.get(this.contestantsUrl).map(res => res.json())
          .catch((error) => Observable.throw(error.json().error || 'Server error'))
  }

  addContestant(body:any){
    if (body.date_of_death === ""){
      body.date_of_death = null
    }
    return this.http.post(this.contestantsUrl, body).map(res => res.json())
    .catch((error) => Observable.throw(error.json().error || 'Server error'))
  }

  deleteContestant(id:number){
    return this.http.delete(`${this.contestantsUrl}/${id}`).map(res => res.json())
    .catch((error) => Observable.throw(error.json().error || 'Server error'))
  }
}
