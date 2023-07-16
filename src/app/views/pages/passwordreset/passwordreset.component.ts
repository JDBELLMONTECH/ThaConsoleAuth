import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThaconsoleauthService } from '../../../models/services/thaconsoleauth.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})
export class PasswordresetComponent implements OnInit {
  resetPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: ThaconsoleauthService) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      this.authService.resetPassword(this.resetPasswordForm.value.email)
        .then(() => console.log('Password reset email sent!'))
        .catch((error) => console.error(error));
    }
  }
}
