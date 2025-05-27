import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { SneakeService } from '../../service/sneaker.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcelExportService } from '../../service/excel.service';
import { Sneaker } from '../../interfaces/sneaker.interface';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {
  
  models: Sneaker[] = [];
  reportData: Sneaker[] = [];

  constructor(private sneakerService: SneakeService,
              private excelService: ExcelExportService
  ){}

  ngOnInit(): void {
    this.sneakerService.listSneakers().subscribe({
      next:(response) => {
          
          this.reportData =  response 
          this.models = response
      },
      error: (err) => {
        console.log(`Errro`)
      }
    })
  }

  generateSalesReport(){
        console.log(`Excel method - ${this.reportData}`)
        debugger
        this.excelService.exportToExcel(this.reportData, 'sneaker-report');   
  }
 
  generateInventoryReport(){

  }

  generateDispatchReport(){

  }
}
