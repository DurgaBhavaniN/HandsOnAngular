import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SellerComponent} from './seller/seller.component';
import {BuyerComponent} from './buyer/buyer.component';
import {AdminComponent} from './admin/admin.component';
import { BuyItemComponent } from './buy-item/buy-item.component';
import {ViewCartComponent} from './view-cart/view-cart.component';
import {PaymentComponent} from './payment/payment.component';
import {AddItemComponent} from './add-item/add-item.component';
import {ViewItemsComponent} from './view-items/view-items.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {AddRemoveBuyerComponent} from './add-remove-buyer/add-remove-buyer.component';
import {AddRemoveSellerComponent} from './add-remove-seller/add-remove-seller.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'seller',component:SellerComponent,children:[
    {path:'add-item',component:AddItemComponent},
    {path:'view-items',component:ViewItemsComponent}]
  },
  {path:'buyer',component:BuyerComponent,children:[
    {path:'buy-item',component:BuyItemComponent},
    {path:'view-cart',component:ViewCartComponent},
    {path:'payment',component:PaymentComponent}]
  },
  {path:'admin',component:AdminComponent,children:[ 
  {path:'add-category',component:AddCategoryComponent},
  {path:'add-remove-buyer',component:AddRemoveBuyerComponent},
  {path:'add-remove-seller',component:AddRemoveSellerComponent}]
  },
  {path:'',redirectTo:'login',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
