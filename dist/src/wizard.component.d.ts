import { OnInit, EventEmitter, QueryList, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from './wizard-step.component';
export declare class WizardComponent implements OnInit, AfterContentInit {
    wizardSteps: QueryList<WizardStepComponent>;
    private _steps;
    private _isCompleted;
    onStepChanged: EventEmitter<WizardStepComponent>;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    readonly steps: Array<WizardStepComponent>;
    private readonly isCompleted;
    private activeStep;
    private readonly activeStepIndex;
    private readonly hasNextStep;
    private readonly hasPrevStep;
    goToStep(step: WizardStepComponent): void;
    next(): void;
    previous(): void;
    complete(): void;
}
