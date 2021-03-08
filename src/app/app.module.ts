import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { UploaderComponent } from './uploader/uploader.component';
import { RouterModule, Routes } from '@angular/router'
import { ModalDialogModule } from 'ngx-modal-dialog';
import { PopupComponent } from './popup/popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: UploaderComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUploaderModule,
    RouterModule.forRoot(routes),
    ModalDialogModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
