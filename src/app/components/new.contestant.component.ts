import { Component } from '@angular/core';
import { ContestantsService } from '../services/contestant.service'
import { Contestant } from '../contestant'
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'new-contestant',
  templateUrl: 'new.contestant.component.html',
  providers: [ContestantsService]
})

export class NewContestantComponent  {

  contestant: Contestant[]

  constructor(private contestantsService: ContestantsService, private router: Router){
  }

  addQueen(queen:any){
    this.contestantsService.addContestant(queen).subscribe(contestant => {
      this.contestant = contestant
    })
    this.router.navigate([''])
  }
}
