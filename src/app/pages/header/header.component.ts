import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
   imports: [CommonModule], 
   standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  dropdownOpen  = false;

  constructor(private router:Router) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.user-profile');

    if (!clickedInside) {
      this.dropdownOpen = false;
    }
  }


  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();

      this.dropdownOpen = !this.dropdownOpen;

  }

  closeDropdown(){
    setTimeout(()=>{
      this.dropdownOpen = false;
    },200);
  }

  logout(){
    this.dropdownOpen = !this.dropdownOpen;
    localStorage.clear();
     this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  dashBoard(){
    this.router.navigate(['/dashboard']);
  }
  addSneakerModel(){
    this.router.navigate(['/sneakers']);
  }
  newOrder(){
    this.router.navigate(['/order']);
  }
}
