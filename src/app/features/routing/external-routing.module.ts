import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';

@NgModule({
  imports: [
    ConfigModule.withConfig({
      routing: {
        internal: [
          '/**', // use all routes

          '!/cart', // except cart
        ],
      },
    }),
  ],
  providers: [
    // { provide: ExternalRoutesGuard, useClass: CustomExternalRoutesGuard },
  ],
  exports: [],
})
export class ExternalRoutingModule {}
