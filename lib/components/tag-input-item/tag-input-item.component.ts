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
      line-height: 24px;
      display: inline-block;
      border-width: 1px;
      border-style: solid;
      border-image: initial;
      border-color: #007cbb;
      padding: 0 12px;
      border-radius: 90px;
      margin-right: 10px;
      margin-bottom: 3px;
      transition: all 0.12s ease-out;
    }

    :host.invalid-entry {
      border-color: #F52F22;
    }

    :host.invalid-entry > span {
      background: #F52F22;
    }

     :host .ng2-tag-input-remove {
      background: #007cbb;
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
      background: #007cbb;
      border-color: #007cbb;
    }

     :host.ng2-tag-input-item-selected .ng2-tag-input-remove {
      background: white;
      color: #007cbb;
    }
  `]
})
export class TagInputItemComponent {
  @Input() selected: boolean;
  @Input() text: string;
  @Input() index: number;
  @Input() valid: boolean;
  @Output() tagRemoved: EventEmitter<number> = new EventEmitter<number>();
  @HostBinding('class.ng2-tag-input-item-selected') get isSelected() { return !!this.selected; }
  @HostBinding('class.invalid-entry') get isInvalid() { return !!!this.valid; };

  constructor() { }

  removeTag(): void {
    this.tagRemoved.emit(this.index);
  }
}
