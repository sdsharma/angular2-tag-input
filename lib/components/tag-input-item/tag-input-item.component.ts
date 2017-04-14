import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'rl-tag-input-item',
  template: `
    {{text}}
    <span
    class="ng2-tag-input-remove"
    (click)="removeTag()">&times;</span>
  `,
  styles: [`
    :host {
      line-height: 32px;
      display: inline-block;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(0, 74, 112);
      border-image: initial;
      padding: 0 12px;
      border-radius: 90px;
      margin-right: 10px;
      margin-botton: 3px;
      transition: all 0.12s ease-out;
    }

     :host .ng2-tag-input-remove {
      background:  rgb(0, 74, 112);
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      height: 12px;
      line-height: 12px;
      margin-left: 6px;
      margin-right: -6px;
      text-align: center;
      width: 12px;
    }

    :host.ng2-tag-input-item-selected {
      color: white;
      background: #0d8bff;
    }

     :host.ng2-tag-input-item-selected .ng2-tag-input-remove {
      background: white;
      color: #0d8bff;
    }
  `]
})
export class TagInputItemComponent {
  @Input() selected: boolean;
  @Input() text: string;
  @Input() index: number;
  @Output() tagRemoved: EventEmitter<number> = new EventEmitter<number>();
  @HostBinding('class.ng2-tag-input-item-selected') get isSelected() { return !!this.selected; }

  constructor() { }

  removeTag(): void {
    this.tagRemoved.emit(this.index);
  }
}
