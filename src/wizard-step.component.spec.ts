import { TestBed } from '@angular/core/testing';

import { WizardStepComponent } from './wizard-step.component';
import { FormWizardModule } from '../index';

describe('Wizard Step Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormWizardModule]
        });
    });

    beforeEach(() => {
        TestBed.compileComponents();
    });

    describe('when create wizard step', () => {
        it('should have a title', () => {
            let fixture = TestBed.createComponent(WizardStepComponent);
            fixture.componentInstance.title = 'Step1';

            fixture.detectChanges();

            expect(fixture.componentInstance.title).toBe('Step1');
        });
    });

});
