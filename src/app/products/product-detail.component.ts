import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ID: number = 0;
  ngOnInit(): void {
    this.ID = Number(this.route.snapshot.paramMap.get('id'));
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
