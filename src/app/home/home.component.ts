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
  items: Array<ThfMenuItem> = [
    { label: 'Perfil', link: '/tocai/profile', icon: 'thf-icon-user', shortLabel: 'Perfil' },
    { label: 'Fale conosco', link: '/tocai/profile', icon: 'thf-icon-chat', shortLabel: 'Mensagem' },
    { label: 'Músicos', link: '/tocai/musical-list', icon: 'thf-icon-layers', shortLabel: 'Músicos' }
  ];

  public readonly profile: ThfToolbarProfile = {
    // subtitle: this.getEmail(),
    // title: this.getName()
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
