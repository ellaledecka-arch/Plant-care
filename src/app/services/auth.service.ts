import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async register(email: string, password: string) {
    await this.storage.set('user', { email, password });
    await this.storage.set('loggedIn', true);
  }

  async login(email: string, password: string): Promise<boolean> {
    const user = await this.storage.get('user');
    if (!user) return false;

    if (user.email === email && user.password === password) {
      await this.storage.set('loggedIn', true);
      return true;
    }
    return false;
  }

  async isLoggedIn(): Promise<boolean> {
    return (await this.storage.get('loggedIn')) === true;
  }

  async logout() {
    await this.storage.set('loggedIn', false);
  }
}
