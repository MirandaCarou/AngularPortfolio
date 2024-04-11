import { ApplicationConfig, BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { EmailService } from "./email.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule, EmailService),EmailService, HttpClientModule, HttpClient]
}
