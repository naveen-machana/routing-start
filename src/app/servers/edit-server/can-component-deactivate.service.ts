import { Observable } from 'rxjs/Observable';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

export interface CanComponentDeactivate {
  canComponentDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

export class CanComponentDeactivateService
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canComponentDeactivate();
  }
}
