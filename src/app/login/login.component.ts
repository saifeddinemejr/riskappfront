import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  forminput!: FormGroup
  constructor(private fb: FormBuilder, private router: Router)  { }

  ngOnInit(): void {
    this.forminput = this.fb.group(
      {
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', Validators.required]
      }
    )
  }
  redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  
}
