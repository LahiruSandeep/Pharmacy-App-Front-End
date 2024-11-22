import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.css'
})
export class DoctorCardComponent {
  @Input()
  public doctorInfo:any = null;

}
