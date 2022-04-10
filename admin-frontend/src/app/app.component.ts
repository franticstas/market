import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  send() {
    const user = {
      name: 'Test name',
      email: 'rrrr@sss.ru'
    }
    
    this.http.post('/api/users', user).subscribe()
    this.http.get('/api/test').subscribe()
  }
}
