import { Component, OnInit, OnDestroy } from '@angular/core';

import { ThfBreadcrumb, ThfNotificationService } from '@totvs/thf-ui';
import { Subscription } from 'rxjs';
import { MusicalListDetailService } from './musical-list-detail.service';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-musical-list-detail',
  templateUrl: './musical-list-detail.component.html',
  styleUrls: ['./musical-list-detail.component.css']
})
export class MusicalListDetailComponent implements OnInit, OnDestroy {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Serviços musicais', link: '/tocai/musical-list' },
      { label: 'Detalhe' }
    ]
  };

  detail: Array<Object>;
  objectDetail: Object;

  private subscription: Subscription;

  constructor(private musicalListDetailService: MusicalListDetailService,
              private thfNotification: ThfNotificationService,
              private route: ActivatedRoute) { }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    const email = this.route.snapshot.params.id;
    this.subscription = this.musicalListDetailService.getMusicalListDetail(email).subscribe(response => {
      this.detail = [...response];
      this.objectDetail = this.detail[0];
    });
  }

}
