import { NgModule } from '@angular/core';
import { WishListService } from '@spartacus/core';
import { CustomWishListService } from './wish-list.service';

@NgModule({
  providers: [
    {
      provide: WishListService,
      useClass: CustomWishListService,
    },
  ],
})
export class BootCampWishListModule {}
