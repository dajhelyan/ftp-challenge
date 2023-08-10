import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileComponent } from './components/file/file.component';
import { TableComponent } from './components/table/table.component';
import { EditPopupComponent } from './components/edit-popup/edit-popup.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'



@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    TableComponent,
    EditPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
