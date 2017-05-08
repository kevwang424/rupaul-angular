import { Component } from '@angular/core';
import { ContestantsService } from '../services/contestant.service';

@Component({
  moduleId: module.id,
  selector: 'contestant',
  templateUrl: 'contestant.component.html',
  providers: [ContestantsService]
})
export class ContestantComponent  {

  contestants: contestants

  constructor(private contestantsService: ContestantsService){
    this.contestantsService.getContestants().subscribe(contestants => {
      this.contestants = contestants
    })
  }

}

interface contestants {
  name: string
  birth_name: string
  hometown: string
  date_of_birth: string
  date_of_death: string
}
