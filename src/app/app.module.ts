import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PlaceHolderService } from './services/place-holder.service';
import { MostrarComponent } from './mostrar/mostrar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { GrillasComponent } from './grillas/grillas.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { Mostrar2Component } from './mostrar2/mostrar2.component';
import { PaginationComponent } from './pagination/pagination.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import { FooterComponent } from './footer/footer.component';
import { MaterializeModule } from 'angular2-materialize';
import { FormulariosComponent } from './formularios/formularios.component';
import { DetailsMiembroComponent } from './details-miembro/details-miembro.component';
import { ServicelocalService } from './services/servicelocal.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductsService } from './services/products.service';
import { FirebaseDataService } from './services/firebase-data.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'mostrar', component: MostrarComponent },
  { path: 'grillas', component: GrillasComponent },
  { path: 'imagenes', component: ImagenesComponent },
  { path: 'mostrar2', component: Mostrar2Component },
  { path: 'pagination', component: PaginationComponent },
  { path: 'formularios', component: FormulariosComponent },
   { path: 'tienda', component: TiendaComponent },
  { path: 'detailsMiembro/:id', component: DetailsMiembroComponent }
];

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

export const firebaseConfig = {
  apiKey:"AIzaSyBsel-u1WruCYYCfmhgcu4OmEYbUUqMkGw",
  authDomain: "prueba-37267.firebaseapp.com",
  databaseURL: "https://prueba-37267.firebaseio.com",
  storageBucket: "prueba-37267.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    NavigationComponent,
    AboutComponent,
    SpinnerComponent,
    GrillasComponent,
    ImagenesComponent,
    Mostrar2Component,
    PaginationComponent,
    FooterComponent,
    FormulariosComponent,
    DetailsMiembroComponent,
    LoginComponent,
    CartComponent,
    TiendaComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Ng2PaginationModule,
    MaterializeModule,
    InfiniteScrollModule ,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
              PlaceHolderService,
              SpinnerService,
              ServicelocalService,
              AuthService,
              CartService,
              ProductsService,
              FirebaseDataService
              ],
  bootstrap: [AppComponent]  
})

export class AppModule { }
