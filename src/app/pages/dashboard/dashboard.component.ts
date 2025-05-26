import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { SneakeService } from '../../service/sneaker.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcelExportService } from '../../service/excel.service';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {

  models : any[] = [];
  
  reportData = [
    { id: 1, name: 'Nike Air', quantity: 10 },
    { id: 2, name: 'Adidas Boost', quantity: 5 },
  ];

  constructor(private sneakerService: SneakeService,
              private excelService: ExcelExportService
  ){}

  ngOnInit(): void {
    this.sneakerService.listSneakers().subscribe({
      next:(response) => {
          this.models = response
      },
      error: (err) => {
        console.log(`Errro`)
      }
    })
  }

  generateSalesReport(){
    this.excelService.exportToExcel(this.reportData, 'sneaker-report');
  }
 
  generateInventoryReport(){

  }

  generateDispatchReport(){

  }
}
