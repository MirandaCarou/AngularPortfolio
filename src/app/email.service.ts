import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(email: string, to: string, subject: string, message: string) {
    console.log('LLego al email Service');
    return this.http.post('http://localhost:9000/send-email', { email, to, subject, message });
  }
}
