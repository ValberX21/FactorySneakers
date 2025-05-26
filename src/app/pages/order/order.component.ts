import { Component } from '@angular/core';
import { SneakeService } from '../../service/sneaker.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../service/order.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-order',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orderForm!: FormGroup;
  availableModels: any[] = [];

  constructor(
    private fb: FormBuilder,
    private sneakerService: SneakeService,
    private orderService : OrderService) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      model_id: ['', Validators.required],
      sizes: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      customization: ['']


    });

    this.sneakerService.listSneakers().subscribe((m: string[]) => {
      this.availableModels = m;
    })

    this.sneakerService.listSneakers().subscribe({
      next:(response) => {
        this.availableModels = response
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

  submitOrder(): void {
    const formValue = this.orderForm.value;

      const selectedModel = this.availableModels.find(
        (m) => m.model_name === formValue.model
      );

        const payLoad = {
          model_id: formValue.model_id,  // add model_id from selected model
          model: formValue.model,
          sizes: formValue.sizes, // keep as string
          quantity: formValue.quantity,
          customization: formValue.customization
        };

    this.orderService.createOrder(payLoad).subscribe(() => {
      alert('Order submitted successfully');
      this.orderForm.reset();
    })

  }

}
