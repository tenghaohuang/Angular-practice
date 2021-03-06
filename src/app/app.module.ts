import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomMatTeleComponent } from './components/custom-mat-tele/custom-mat-tele.component';
@NgModule({
   declarations: [
      AppComponent,
      CustomMatTeleComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatInputModule, MatSelectModule, MatIconModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }