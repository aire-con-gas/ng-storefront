import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @ViewChild('modal') modalContent;

  products: Product[];
  selectedId: number = 0;
  dialogOpened: boolean = false;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.products = [
      new Product(1, 'Bella Mia', 'Una faja de Colombia', 'http://thebarginhouse.com/wp-content/uploads/2014/06/shirt-2.jpg'),
      new Product(2, 'Elka Faja', 'Uma cinta do Brasil', 'https://cdn.shopify.com/s/files/1/0014/1962/products/product_UT_human_shirt_itemview_1024x1024.png?v=1464119032'),
    ];
  }

  handleItemClick(id: number) {
    this.selectedId = id;
    this.dialogOpened = true;
    this.modalService.open(this.modalContent);
  }

}
