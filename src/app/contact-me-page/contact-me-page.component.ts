import { Component, Input } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { EmailService } from '../email.service';

@Component({
  selector: 'contact-me-page',
  templateUrl: './contact-me-page.component.html',
  styleUrls: ['./contact-me-page.component.css'],
  standalone: true,
  imports: [NavBarComponent]
})
export class ContactMePageComponent {

  email : string
  subject : string
  message : string

  constructor(private emailService: EmailService) { }

  sendEmail() {
    this.emailService.sendEmail(this.email, 'mclainho19@esei.uvigo.es',this.subject, this.message).subscribe(
      response => {
        console.log('Correo enviado correctamente');
        // Realizar acciones adicionales si es necesario
      },
      error => {
        console.error('Error al enviar el correo electrónico');
        // Manejar el error si es necesario
      }
    );
  }
}
