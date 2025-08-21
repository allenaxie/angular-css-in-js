import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import './app/react-components/Dummy/DummyWrapper'; // Import the custom element wrapper
import './app/react-components/Yoopta/YooptaEditorShadowWrapper'; // Import the Yoopta editor wrapper

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
