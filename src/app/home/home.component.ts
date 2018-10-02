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
    { label: 'Pagamentos', link: './users', icon: 'user' },
    { label: 'Eventos', link: '', icon: 'world' },
    { label: 'Perfil', link: '', icon: 'calendar  ' }
  ];

  public readonly profile: ThfToolbarProfile = {
    // subtitle: this.getEmail(),
    // title: this.getName()
    subtitle: 'subtitle teste',
    title: 'title teste'
  };

  public readonly profileActions: Array<ThfToolbarAction> = [
    { icon: 'thf-icon-exit', label: 'Sair', type: 'danger', separator: true, action: () => {/* call exit*/} }
  ];

  constructor(private route: Router) { }

  ngOnInit() { }

  // private exit() {
  //   this.authService.clear();
  //   this.route.navigate(['/login']);
  // }

  // private getEmail() {
  //   const user = this.authService.getUser();
  //   return user.email;
  // }

  // private getName() {
  //   const user = this.authService.getUser();
  //   return user.name;
  // }

}
