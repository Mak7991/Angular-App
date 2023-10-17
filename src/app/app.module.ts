import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoItemsComponent } from './components/add-todo-items/add-todo-items.component';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { DetailsComponent } from './components/details/details.component';
// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { LoadingInterceptor } from './loading.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieShareAlertComponent } from './components/movie-share-alert/movie-share-alert.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { AuthService } from './services/auth.service';
import { authGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
// Available options
interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    AddTodoItemsComponent,
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent,
    // SpinnerComponent,
    MovieListComponent,
    MovieShareAlertComponent,
    MovieDetailsComponent,
    CartComponent,
    ShippingComponent,
    RegisterUserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    LoginUserComponent,
    SnackBarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
