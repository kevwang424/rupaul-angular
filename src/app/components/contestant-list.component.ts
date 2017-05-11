import { Component, OnInit } from '@angular/core';
import { ContestantsService } from '../services/contestant.service';
import { Contestant } from '../model/contestant'

@Component({
  moduleId: module.id,
  selector: 'contestant',
  templateUrl: 'contestant-list.component.html',
  providers: [ContestantsService]
})
export class ContestantListComponent implements OnInit {

  contestants: Contestant[]

  constructor(private contestantsService: ContestantsService){
  }

  ngOnInit(){
    this.contestantsService.getContestants().subscribe(contestants => {
      this.contestants = contestants
    })
  }

  deleteQueen(id:number){
    this.contestantsService.deleteContestant(id).subscribe(contestants => {
      this.contestants = contestants
    })
  }

  // editQueen(id:number){
  //   this.contestantsService.getContestant(id).subscribe(contestants => {
  //     this.contestant = contestant
  //   })
  // }

}
