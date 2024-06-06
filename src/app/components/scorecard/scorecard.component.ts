import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  standalone: true,
  imports: [],
  templateUrl: './scorecard.component.html',
})
export class ScorecardComponent {
  @Input() title: string = '';
  @Input() label: string = '';
  @Input() date: number = 0;
  @Input() value: number = 0;
}
