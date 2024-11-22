import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [RouterLink, CommonModule, DoctorCardComponent],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {

  constructor(private http:HttpClient){
    this.loadDoctorsInformation();
  }

  public doctorInfo: any = [];

  loadDoctorsInformation(){
    this.http.get("http://localhost:8080/doctor/get-all-doctors").subscribe(data => {
      this.doctorInfo = data;
    })
  }

}
