import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage {
  email = '';
  password = '';
  isLogin = true;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async submit() {
    if (!this.email || !this.password) return;

    if (this.isLogin) {
      const success = await this.auth.login(this.email, this.password);
      if (success) {
        this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
      }
    } else {
      await this.auth.register(this.email, this.password);
      this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
    }
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
  }
}
