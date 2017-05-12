import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContestantsService } from '../services/contestant.service';
import { Contestant } from '../model/contestant'
import { ContestantFormComponent } from './contestant-form.component'

// get edit form to work
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'contestant',
  templateUrl: 'contestant-list.component.html',
  providers: [ContestantsService]
})
export class ContestantListComponent implements OnInit, AfterContentInit {

  contestants: Contestant[]

  constructor(private contestantsService: ContestantsService, private router: Router){}

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

  redirect(id:number){
    this.router.navigate([`contestants/${id}/edit`])
  }

  ngAfterContentInit(){
    this.contestantsService.getContestants().subscribe(contestants => {
      this.contestants = contestants
    })
  }

}
