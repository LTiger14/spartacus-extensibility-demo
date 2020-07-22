import { Injectable } from '@angular/core';
import { WishListService } from '@spartacus/core';

@Injectable({ providedIn: 'root' })
export class CustomWishListService extends WishListService {
  // constructor(
  //   protected store: Store<StateWithMultiCart>,
  //   protected authService: AuthService,
  //   protected userService: UserService,
  //   protected multiCartService: MultiCartService,
  //   protected activeCartService: ActiveCartService
  // ) {
  //   super(store, authService, userService, multiCartService);
  // }

  addEntry(productCode: string): void {
    super.addEntry(productCode);
  }
}
