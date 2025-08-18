import { Component, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule], // ✅ Required
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('front');
  message = '';

  constructor(private http: HttpClient) {}

  getMessage() {
    this.http
      .get<{ message: string }>('http://localhost:3000/api/message')
      .subscribe((res) => {
        this.message = res.message;
        console.log('API hit');
      });
  }
}
