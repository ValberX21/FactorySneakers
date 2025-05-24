import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SneakeService } from '../../service/sneaker.service';

@Component({
  standalone: true,
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css'],
  imports: [ReactiveFormsModule],
})
export class SneakersComponent implements OnInit {
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

  if (this.sneakeForm.valid) {
    const formValues = this.sneakeForm.value;

    const sneaker = {
      ...formValues,
      sizes_available: formValues.sizes_available.split(',').map((v: string) => v.trim()),
      colors: formValues.colors.split(',').map((v: string) => v.trim()),
    };

    this.sneakerService.create(sneaker).subscribe({
      next: (res) => console.log('Saved successfully!'),
      error: (err) => console.error('Save failed:', err)
    });
  }
}
}
