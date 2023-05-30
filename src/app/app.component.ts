import { DummyService } from './service/dummy.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ladylee-products';

  products:any[] = [];

  constructor(
    private dummyService:DummyService
  ){

  }


  ngOnInit(): void {

    this.getAll()
  }


  getAll(){
    this.dummyService.getAllProducts()
    .subscribe(data=>{
      console.log(data)
      this.products = data.products;
    })
  }
}
