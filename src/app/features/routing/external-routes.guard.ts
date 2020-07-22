import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ExternalRoutesGuard } from '@spartacus/core';

@Injectable()
export class CustomExternalRoutesGuard extends ExternalRoutesGuard {
  protected redirect(_: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const window = this.winRef.nativeWindow;

    if (window && window.location) {
      window.location.href = 'http://localhost:4300' + state.url;
    }
  }
}
