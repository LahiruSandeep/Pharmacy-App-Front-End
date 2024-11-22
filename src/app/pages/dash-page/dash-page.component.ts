import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-dash-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dash-page.component.html',
  styleUrl: './dash-page.component.css'
})
export class DashPageComponent {

}
