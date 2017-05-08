import { Component, OnInit } from '@angular/core';
import { ContestantsService } from '../services/contestant.service';
import { Contestant } from '../contestant'

@Component({
  moduleId: module.id,
  selector: 'contestant',
  templateUrl: 'contestant.component.html',
  providers: [ContestantsService]
})
export class ContestantComponent implements OnInit {

  contestants: Contestant[]

  constructor(private contestantsService: ContestantsService){
  }

  ngOnInit(){
    this.contestantsService.getContestants().subscribe(contestants => {
      this.contestants = contestants
    })
  }

}
