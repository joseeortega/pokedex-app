import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, HttpClientModule, NgxSpinnerModule],
  exports: [SpinnerComponent],
})
export class SharedModule {}
