import { Component, OnInit, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from './wizard-step.component';

@Component({
  selector: 'form-wizard',
  template:
  `<div class="card">
    <div class="card-header">
      <ul class="nav nav-justified">
        <li class="nav-item" *ngFor="let step of steps" [ngClass]="{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled}">
          <a (click)="goToStep(step)">{{step.title}}</a>
        </li>
      </ul>
    </div>
    <div class="card-block">
      <ng-content></ng-content>
    </div>
    <div class="card-footer" [hidden]="isCompleted">
        <button type="button" class="btn btn-secondary float-left" (click)="previous()" [hidden]="!hasPrevStep || !activeStep.showPrev">Previous</button>
        <button type="button" class="btn btn-secondary float-right" (click)="next()" [disabled]="!activeStep.isValid" [hidden]="!hasNextStep || !activeStep.showNext">Next</button>
        <button type="button" class="btn btn-secondary float-right" (click)="complete()" [disabled]="!activeStep.isValid" [hidden]="hasNextStep">Done</button>
    </div>
  </div>`
  ,
  styles: [
    '.card { height: 100%; }',
    '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
    '.card-block { overflow-y: auto; }',
    '.card-footer { background-color: #fff; border-top: 0 none; }',
    '.nav-item { padding: 1rem 0rem; border-bottom: 0.5rem solid #ccc; }',
    '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
    '.enabled { border-bottom-color: rgb(88, 162, 234); }',
    '.disabled { color: #ccc; }'
  ]
})
export class WizardComponent implements OnInit, AfterContentInit {
  @ContentChildren(WizardStepComponent) wizardSteps: QueryList<WizardStepComponent>;
  private _steps: Array<WizardStepComponent> = [];
  private _isCompleted: boolean = false;

  @Output() onStepChanged: EventEmitter<WizardStepComponent> = new EventEmitter<WizardStepComponent>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.wizardSteps.forEach(step => this._steps.push(step));
    this._steps[0].isActive = true;
  }

  private get steps(): Array<WizardStepComponent> {
    return this._steps;
  }

  private get isCompleted(): boolean {
    return this._isCompleted;
  }

  private get activeStep(): WizardStepComponent {
    return this._steps.find(step => step.isActive);
  }

  private set activeStep(step: WizardStepComponent) {
    if (step !== this.activeStep && !step.isDisabled) {
      this.activeStep.isActive = false;
      step.isActive = true;
      this.onStepChanged.emit(step);
    }
  }

  private get activeStepIndex(): number {
    return this._steps.indexOf(this.activeStep);
  }

  private get hasNextStep(): boolean {
    return this.activeStepIndex < this._steps.length - 1;
  }

  private get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  goToStep(step: WizardStepComponent) {
    this.activeStep = step;
  }

  next() {
    if (this.hasNextStep) {
      let nextStep: WizardStepComponent = this._steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      nextStep.isDisabled = false;
      this.activeStep = nextStep;
    }
  }

  previous() {
    if (this.hasPrevStep) {
      let prevStep: WizardStepComponent = this._steps[this.activeStepIndex - 1];
      this.activeStep.onPrev.emit();
      prevStep.isDisabled = false;
      this.activeStep = prevStep;
    }
  }

  complete() {
    this._isCompleted = true;
    this.activeStep.onComplete.emit();
  }

}
