import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  datas = [
    {
      Cateid: 'cate1',
      CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFZNYRnm9rtNtCRKXskdE6OVqOje9LCg4E7p0yfkspapmC2SxdPgurpqq6DDDYMw7n-u_&s=10' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://cdn.tgdd.vn/Products/Images/2443/227311/bhx/thung-24-lon-nuoc-ngot-pepsi-khong-calo-vi-chanh-320ml-202403141042050893.jpg' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://img.tgdd.vn/imgt/bhx/f_webp,fit_outside,quality_95,s_720x584/https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/3226/195238/bhx/nuoc-tang-luc-sting-vi-dau-loc-6-lon-cao-330ml_202509291443147020.jpg' },
      ],
    },
    {
      Cateid: 'cate2',
      CateName: 'Bia',
      Products: [
        { ProductId: 'p4', ProductName: 'Heleiken', Price: 500, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQJMSE9Oa9lQFtrHqLqAxDxKYK1pV4a1eOsFzQHpmrA&s=10' },
        { ProductId: 'p5', ProductName: '333', Price: 400, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tT2oTYCoOqECkuOF4lRPiJZSS-nYLgzl9kPW7b99RA&s=10' },
        { ProductId: 'p6', ProductName: 'Sai Gon', Price: 600, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZ8LKc72F4XuUr7Xhv-98aTVQSEG7xwWxW7onGnWyyQ&s=10' },
      ],
    },
  ];

  constructor() {}

  getCategories() {
    return this.datas;
  }
}