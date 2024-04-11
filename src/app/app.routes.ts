
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { ContactMePageComponent } from './contact-me-page/contact-me-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { EnterPageComponent } from './enter-page/enter-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

export const routes = [
  { path: '', component: EnterPageComponent },
  { path: 'welcome-page', component: WelcomePageComponent},
  { path: 'contact-me', component: ContactMePageComponent},
  { path: 'projects-page', component: ProjectsPageComponent},
  { path: 'about-me-page', component: AboutMePageComponent},
  { path: 'experience-page', component: ExperiencePageComponent},
  { path: 'education-page', component: EducationPageComponent},
];
