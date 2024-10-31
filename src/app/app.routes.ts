import { Routes } from '@angular/router';
import { ProductComponent } from './domains/products/components/product/product.component';
import { ListComponent } from './domains/products/pages/list/list.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }
];
