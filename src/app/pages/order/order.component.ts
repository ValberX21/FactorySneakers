import { Component } from '@angular/core';
import { SneakeService } from '../../service/sneaker.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  orderForm!: FormGroup;
  availableModels: string[] = [];

  constructor(
    private fb: FormBuilder,
    private sneakerService: SneakeService,
    private orderService : OrderService) {}

  ngOnInit() {
    this.orderForm = this.fb.group({
      model: ['', Validators.required],
      sizes: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      customization: ['']
    });

    this.sneakerService.listSneakers().subscribe((m: string[]) => {
      this.availableModels = m;
    })
  }

  submitOrder(): void {
    const formValue = this.orderForm.value;

    const payLoad = {
      ...formValue,
      sizes: formValue.sizes.split(',').map((s:string) => s.trim())
    };

    this.orderService.createOrder(payLoad).subscribe(() => {
      alert('Order submitted successfully');
      this.orderForm.reset();
    })

  }

}
