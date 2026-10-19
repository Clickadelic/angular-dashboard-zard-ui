import { Component } from '@angular/core';
import { CustomersTable } from '@/shared/components/tables/customers-table/customers-table';
@Component({
  selector: 'app-customers-page',
  imports: [CustomersTable],
  templateUrl: './customers-page.html',
  styleUrl: './customers-page.css',
})
export class CustomersPage {}
