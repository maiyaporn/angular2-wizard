import { AfterContentInit, Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wizard-step',
  template:
        `
		<div [hidden]="!isActive">
			<ng-content></ng-content>
		</div>
  `
})
export class WizardStepComponent implements AfterContentInit {
  @Input() title: string;
  @Input() hidden: boolean = false;
  @Input() showNext: boolean = true;
  @Input() isValid: boolean = true;
  @Input() showPrev: boolean = true;
  @ContentChild(NgForm) form: NgForm;
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();
  isDisabled: boolean = true;

  constructor() {
  }

  private _isActive: boolean = false;

  get isActive(): boolean {
    return this._isActive;
  }

  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  ngAfterContentInit(): void {
    if (this.form) {
      this.form.statusChanges.subscribe(() => this.isValid = this.form.form.valid);
    }
  }
}
