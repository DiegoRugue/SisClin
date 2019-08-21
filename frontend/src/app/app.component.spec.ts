import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './main/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;

  it('Deve criar o component', () => {
    expect(app).toBeTruthy();
  });

});
