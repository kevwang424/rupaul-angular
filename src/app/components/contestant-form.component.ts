import { Component } from '@angular/core';
import { ContestantsService } from '../services/contestant.service'
import { Contestant } from '../model/contestant'
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'new-contestant',
  templateUrl: 'contestant-form.component.html',
  providers: [ContestantsService]
})

export class ContestantFormComponent  {

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
