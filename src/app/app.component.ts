import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Импорт RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Подключаем RouterOutlet для работы с маршрутизацией
  template: `<router-outlet></router-outlet>`,  // Вставка для активных маршрутов
})
export class AppComponent {}