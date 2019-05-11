import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from 'app/app.module';
import { environment } from 'environments/environment';
import { hmrBootstrap } from 'hmr';

if ( environment.production )
{
    enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);
// if (environment.production) {   //remove console logs when app build in production mode
//     enableProdMode();
//     if(window){
//       window.console.log=function(){};
//     }
// }
if (environment.test) {     //remove console logs when app build in test mode
    enableProdMode();
    if(window){
      window.console.log=function(){};
    }
}
if ( environment.hmr )
{
    if ( module['hot'] )
    {
        hmrBootstrap(module, bootstrap);
    }
    else
    {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else
{
    bootstrap();
}
