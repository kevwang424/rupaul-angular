import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ContestantsService{
  constructor(private http: Http){
    console.log("Contestants Service Initialized...")
  }

  getContestants(){
    return this.http.get("http://localhost:3000/api/contestants").map(res => res.json())
  }
}
