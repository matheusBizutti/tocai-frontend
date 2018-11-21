import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThfMenuItem } from '@totvs/thf-ui/components/thf-menu';
import { ThfToolbarAction, ThfToolbarProfile } from '@totvs/thf-ui/components/thf-toolbar';

// import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filter = true;
  itemsDefault: Array<ThfMenuItem> = [
    { label: 'Perfil', link: '/tocai/profile', icon: 'thf-icon-user', shortLabel: 'Perfil' }
  ];

  itemsCustomers: Array<ThfMenuItem> = [
    { label: 'Músicos', link: '/tocai/musical-list', icon: 'thf-icon-layers', shortLabel: 'Músicos' }
  ];

  items = localStorage.getItem('userType') === '1' ? [...this.itemsDefault] : [...this.itemsCustomers, ...this.itemsDefault];

  public readonly profile: ThfToolbarProfile = {
    subtitle: 'subtitle teste',
    title: 'title teste'
  };

  public readonly profileActions: Array<ThfToolbarAction> = [
    { icon: 'thf-icon-exit', label: 'Sair', type: 'danger', separator: true, action: () => this.exit() }
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  private exit() {
    // this.authService.clear();
    this.router.navigate(['initial-page']);
  }

  // private getEmail() {
  //   const user = this.authService.getUser();
  //   return user.email;
  // }

  // private getName() {
  //   const user = this.authService.getUser();
  //   return user.name;
  // }

}
