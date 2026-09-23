import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  public hsa: number = 0;
  public hsb: number = 0;
  public hsc: number = 0;

  public ketqua: string = '';

  giaipt() {

    // Nếu a = 0 thì trở thành phương trình bậc 1
    if (this.hsa == 0) {

      if (this.hsb == 0 && this.hsc == 0) {
        this.ketqua = 'Phương trình có vô số nghiệm';
      }
      else if (this.hsb == 0 && this.hsc != 0) {
        this.ketqua = 'Phương trình vô nghiệm';
      }
      else {
        let x = -this.hsc / this.hsb;
        this.ketqua = 'Phương trình có nghiệm x = ' + x;
      }

      return;
    }

    // Tính delta
    let delta = this.hsb * this.hsb - 4 * this.hsa * this.hsc;

    if (delta < 0) {
      this.ketqua = 'Phương trình vô nghiệm';
    }
    else if (delta == 0) {
      let x = -this.hsb / (2 * this.hsa);

      this.ketqua = 'Phương trình có nghiệm kép x1 = x2 = ' + x;
    }
    else {
      let x1 = (-this.hsb + Math.sqrt(delta)) / (2 * this.hsa);
      let x2 = (-this.hsb - Math.sqrt(delta)) / (2 * this.hsa);

      this.ketqua =
        'Phương trình có 2 nghiệm: x1 = ' + x1 + ', x2 = ' + x2;
    }
  }

  tieptuc() {
    this.hsa = 0;
    this.hsb = 0;
    this.hsc = 0;
    this.ketqua = '';
  }
}
