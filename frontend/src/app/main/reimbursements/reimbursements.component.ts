import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-reimbursements',
  templateUrl: './reimbursements.component.html',
  styleUrls: ['./reimbursements.component.css']
})
export class ReimbursementsComponent implements OnInit {
  counter=3218;
  amount : number;
  purpose : string;
  preventDuplicates: boolean;
  
  reimbursements = [{
    id: 3214,
    purpose: "Paper Presentation",
    amount: 12000,
    status: "Done" 
  },
  {
    id: 3215,
    purpose: "Paper Presentation at IIT Bombay",
    amount: 10000,
    status: "Pending" 
  }
  ];
  ngOnInit() {
    this.amount = 0;
    this.preventDuplicates= true;
    this.purpose= "";
  }
  public validate = function(destroyByClick){
    if(this.purpose==""){
      this.toastrService.danger("Purpose was left empty!","Failed to validate!",{  destroyByClick});
      this.ref.markForCheck();
    }
    if(this.amount<=0){
      this.toastrService.danger("Amount has to be greater than zero!","Failed to validate!",{  destroyByClick});
      this.ref.markForCheck();
    }
    else{
      this.counter++;
      this.reimbursements.push({
        id: this.counter,
        purpose: this.purpose,
        amount: this.amount,
        status: 'pending'
      });
      this.purpose ="";
      this.amount= 0;
      this.toastrService.success("Reimbursement successfully added!","Success!");
      this.ref.markForCheck();
    }
  }
  constructor(private toastrService: NbToastrService,private ref: ChangeDetectorRef) {}

}
