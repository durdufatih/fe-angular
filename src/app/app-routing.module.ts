import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersDetailComponent} from './components/users-detail/users-detail.component';
import {UsersCreateComponent} from './components/users-create/users-create.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'users/:id', component: UsersDetailComponent},
  {path: 'create', component: UsersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
