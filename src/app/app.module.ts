import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl:
            'https://api.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com',
          prefix: '/rest/v2/',
        },
      },
      context: {
        baseSite: ['electronics-spa'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '2.0',
      },
    }),

    // BootcampComponentModule,

    // BootcampMultiSiteModule,

    // BootcampIconModule,

    // BootcampRoutingModule,

    // ExternalRoutingModule,

    // BootCampWishListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
