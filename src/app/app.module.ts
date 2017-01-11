import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PlaceHolderService } from './services/place-holder.service';
import { InicioComponent } from './inicio/inicio.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { DataLocalComponent } from './data-local/data-local.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { ScrollInfinitoComponent } from './scroll-infinito/scroll-infinito.component';
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
  { path: 'inicio', component: InicioComponent },
  { path: 'data-local', component: DataLocalComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'scroll-infinito', component: ScrollInfinitoComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'formularios', component: FormulariosComponent },
   { path: 'tienda', component: TiendaComponent },
  { path: 'detailsMiembro/:id', component: DetailsMiembroComponent },
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
    InicioComponent,
    NavigationComponent,
    SpinnerComponent,
    DataLocalComponent,
    FirebaseComponent,
    ScrollInfinitoComponent,
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
