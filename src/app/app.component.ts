import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { PrebuiltComponent } from './prebuilt/prebuilt.component';
import { HeadlessComponent } from './headless/headless.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, PrebuiltComponent, HeadlessComponent],
})
export class AppComponent {
  title = 'loginpage';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      //@ts-ignore
      window.otpless = (otplessUser) => {
        alert(JSON.stringify(otplessUser));
      };
    }
  }
}
