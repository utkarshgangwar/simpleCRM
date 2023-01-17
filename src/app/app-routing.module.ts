import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'
import { AddLoansComponent } from './add-loans/add-loans.component'
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  { path: 'add-loan', component: AddLoansComponent },
  { path: 'loan-types', component: LoanTypesComponent },
  { path: 'loans', component: LoansComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
