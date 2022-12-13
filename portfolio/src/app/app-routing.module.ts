import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-list/project-detail/project-detail.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComopnents = [
  AboutComponent,
  ProjectListComponent,
  ProjectDetailComponent,
  ContactComponent
]
