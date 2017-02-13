import { TestBed } from '@angular/core/testing';

import { WizardComponent } from './wizard.component';
import { FormWizardModule } from '../index';

describe('Wizard Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormWizardModule]
        });
    });

    beforeEach(() => {
        TestBed.compileComponents();
    });

    describe('', () => {
        it('', () => {
            let fixture = TestBed.createComponent(WizardComponent);
        });
    });

});
