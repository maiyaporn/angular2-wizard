var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './src/wizard.component';
import { WizardStepComponent } from './src/wizard-step.component';
export * from './src/wizard.component';
export * from './src/wizard-step.component';
var FormWizardModule = FormWizardModule_1 = (function () {
    function FormWizardModule() {
    }
    FormWizardModule.forRoot = function () {
        return {
            ngModule: FormWizardModule_1
        };
    };
    return FormWizardModule;
}());
FormWizardModule = FormWizardModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            WizardComponent,
            WizardStepComponent
        ],
        exports: [
            WizardComponent,
            WizardStepComponent
        ]
    })
], FormWizardModule);
export { FormWizardModule };
var FormWizardModule_1;
