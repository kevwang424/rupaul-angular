import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContestantsService } from '../services/contestant.service'
import { Contestant } from '../model/contestant'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'new-contestant',
  templateUrl: 'contestant-form.component.html',
  providers: [ContestantsService]
})

export class ContestantFormComponent implements OnInit, AfterContentInit {

  contestant: Contestant

  // if editing contestant buttons will be different
  editMode = false

  constructor(private contestantsService: ContestantsService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.contestant = {
      name: '',
      birth_name: '',
      hometown: '',
      date_of_birth: '',
      date_of_death: ''
      }
    }

  // conditional if editing or not
  submitForm(){
    if(!this.editMode){
      this.contestantsService.addContestant(this.contestant).subscribe(contestant => {
        this.contestant = contestant
      })
      this.router.navigate(['contestants'])
    } else {
      let id = this.activatedRoute.snapshot.params['id']
      this.contestantsService.editContestant(this.contestant, id ).subscribe(contestant => {
        this.contestant = contestant
      })
      this.router.navigate(['contestants'])
    }
  }

  ngAfterContentInit(){
    //added route with ID so if there is ID then i will grab queen info and populate on the form
    let id = this.activatedRoute.snapshot.params['id']
    if (id){

      // if there is an ID in the routes then it is editing model
      this.editMode = true

      this.contestantsService.getContestant(parseInt(id)).subscribe(contestant => {
        this.contestant = contestant
      })
    }
  }
}
