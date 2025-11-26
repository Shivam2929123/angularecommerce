import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellerForm!: FormGroup;
  isSeller = false; // to toggle between details & form
  sellerData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize reactive form
    this.sellerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      shopName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
    });

    // Check if seller details exist (from API or localStorage)
    const savedSeller = localStorage.getItem('sellerData');
    if (savedSeller) {
      this.isSeller = true;
      this.sellerData = JSON.parse(savedSeller);
    }
  }

  becomeSeller() {
    this.isSeller = false;
  }

  onSubmit() {
    if (this.sellerForm.valid) {
      const sellerInfo = this.sellerForm.value;
      localStorage.setItem('sellerData', JSON.stringify(sellerInfo));
      this.sellerData = sellerInfo;
      this.isSeller = true;
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
