import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { MairieComponent } from './features/mairie/mairie';
import { ServicesComponent } from './features/services/services';
import { TourismeComponent } from './features/tourisme/tourisme';
import { ContactComponent } from './features/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'mairie', component: MairieComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'tourisme', component: TourismeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
