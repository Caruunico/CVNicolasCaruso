import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';










@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
