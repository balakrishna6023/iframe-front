import { Component, signal } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('front');
  message = '';

  constructor(private http: HttpClient) {}

  getMessage() {
    this.http
      .get<{ message: string }>(
        'https://iframe-test-1.onrender.com/api/message'
      )
      .subscribe((res) => {
        this.message = res.message;
        console.log('hitted');
      });
  }
}
