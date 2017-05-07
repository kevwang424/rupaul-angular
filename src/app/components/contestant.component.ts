import { Component } from '@angular/core';
import { ContestantsService } from '../services/contestant.service';

@Component({
  moduleId: module.id,
  selector: 'contestant',
  templateUrl: 'contestant.component.html',
  providers: [ContestantsService]
})
export class ContestantComponent  {

  name: string
  email: string
  address: address
  hobbies: string[]
  showHobbies: boolean
  contestants: contestants

  constructor(private contestantsService: ContestantsService){
    this.name = 'Kevin',
    this.email = 'kevin@kevin.com',
    this.address = {
      street: "123 Main St",
      city: "Boston",
      state: "MA"
    }
    this.hobbies = ["Music", "Movies", "Sports"]
    this.showHobbies = true

    this.contestantsService.getContestants().subscribe(contestants => {
      this.contestants = contestants
    })
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies
  }

  addHobby(hobby){
    this.hobbies.push(hobby)
  }

  deleteHobby(index){
    this.hobbies.splice(index,1)
  }
}

interface address {
  street: string
  city: string
  state: string
}

interface contestants {
  id: number
  title: string
  body: string
}
