import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) 
  {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      regEmail: ['', [Validators.required, Validators.email]],
      regPassword: ['', Validators.required]
    });
  }

  onLogin() {    
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (response) => {
          localStorage.setItem('token',response.access_token)
          this.router.navigate(['/dashboard']);
        },
        error: (err)=> {
          console.log('Login failed',err)
        }
      })
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('Register data:', this.registerForm.value);
    }
  }
}
