import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './src/wizard.component';
import { WizardStepComponent } from './src/wizard-step.component';

export * from './src/wizard.component';
export * from './src/wizard-step.component';

@NgModule({
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
export class FormWizardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormWizardModule
    };
  }
}
