import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SneakeService } from '../../service/sneaker.service';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent {

  sneakeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sneakerService: SneakeService
  ) {}

  ngOnInit(): void {
    this.sneakeForm = this.fb.group({
      model_name: ['', Validators.required],
      sku: ['', Validators.required],
      sizes_available: ['', Validators.required],
      colors: ['', Validators.required],
      material: ['', Validators.required],
      price: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.sneakeForm.invalid) {
      alert("Form is invalid");
      return;
    }

    const formValues = this.sneakeForm.value;

    const payload = {
      model_name: formValues.model_name,
      sku: formValues.sku,
      sizes_available: formValues.sizes_available
        .split(',')
        .map((s: string) => parseInt(s.trim(), 10)),
      colors: formValues.colors
        .split(',')
        .map((c: string) => c.trim()),
      material: formValues.material,
      price: parseFloat(formValues.price),
      is_active: true
    };

    console.log("Sending to API:", payload);

    this.sneakerService.create(payload).subscribe({
      next: (response: any) => {
        console.log("API response:", response);
        alert("Sneaker created successfully!");
      },
      error: (err) => {
        console.error(err);
        alert("API error: failed to create sneaker.");
      }
    });
  }
}
