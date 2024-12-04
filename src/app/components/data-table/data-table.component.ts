import { Supplier } from './../../models/Supplier';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent implements OnInit {
  ngOnInit(): void {
    this.visibleData();
  }

  currentPage: number = 1;
  pageSize: number = 1;
  suppliers: Supplier[] = [
    {
      id: 1,
      name: 'Global Supplies Inc.',
      address: '1234 Elm Street, Springfield, IL, USA',
      phone: '+1-555-123-4567',
      email: 'contact@globalsupplies.com',
    },
    {
      id: 2,
      name: 'Fresh Farm Foods',
      address: '789 Oak Avenue, Portland, OR, USA',
      phone: '+1-555-234-5678',
      email: 'info@freshfarmfoods.com',
    },
    {
      id: 3,
      name: 'Tech Essentials Ltd.',
      address: '456 Maple Road, Austin, TX, USA',
      phone: '+1-555-345-6789',
      email: 'support@techessentials.com',
    },
    {
      id: 4,
      name: 'Office Supplies Co.',
      address: '101 Pine Street, San Francisco, CA, USA',
      phone: '+1-555-456-7890',
      email: 'sales@officesuppliesco.com',
    },
    {
      id: 5,
      name: 'Green Garden Supplies',
      address: '202 Willow Lane, Seattle, WA, USA',
      phone: '+1-555-567-8901',
      email: 'hello@greengardensupplies.com',
    },
  ];
  filteredSuppliers: Supplier[] = this.suppliers;
  sizes : number[] = [1, 2, 3];

  visibleData() {
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredSuppliers.slice(startIndex, endIndex);
  }

  nextPage() {
    if(this.currentPage * this.pageSize < this.filteredSuppliers.length){
      this.currentPage++;
      this.visibleData();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.visibleData();
    }
  }

  pageNumbers(){
    let totalPages = Math.ceil(this.filteredSuppliers.length / this.pageSize);
    return new Array(totalPages);
  }

  changePage(currentPage : number){
    this.currentPage = currentPage;
  }

  searchSupplier(searchString : string){
    this.currentPage = 1;
    this.filteredSuppliers = this.suppliers.filter((supplier)=>supplier.name.toLowerCase().includes(searchString.toLowerCase()));
  }

  changeSize(size: any){
    this.pageSize = size;
    this.currentPage = 1;
    this.visibleData();
  }
}
