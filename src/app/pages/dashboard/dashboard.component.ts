import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { sneakeService } from '../../service/sneaker.service';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {

  models : any[] = [];

  constructor(private sneakerService: sneakeService){}

  ngOnInit(): void {
    this.sneakerService.listSneakers().subscribe({
      next:(response) => {
          console.log(`${response}`)
          this.models = response
      },
      error: (err) => {
        console.log(`Errro`)
      }
    })
  }
 
}
