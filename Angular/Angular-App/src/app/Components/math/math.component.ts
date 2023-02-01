import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MathService } from 'src/app/Services/math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
})
export class MathComponent {
  mycurrentnum: number = 1;
  mylimit: number = 2;
  list: string[] = [];
  sub?: Subscription;

  constructor(private Mathservice: MathService) {}
  ngOnInit(): void {
    this.sub = this.Mathservice.math(this.mycurrentnum, this.mylimit).subscribe(
      (data) => {
        this.list.push(data);
      }
    );
  }
  change(x: String, y: string) {
    this.sub?.unsubscribe();
    this.list = [];
    this.sub = this.Mathservice.math(Number(x), Number(y)).subscribe((data) => {
      this.list.push(data);
    });
  }
}
