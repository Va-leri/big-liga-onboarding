import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';

// Utils
import { util } from './utils/util';
import { page } from './utils/page';
util();
page();

ieFix();
iosVhFix();

// Modules
import { activate } from './modules/activate';
import { loader } from './modules/loader';
import { header } from './modules/header';
import { mainContent } from './modules/main-content';
activate();
loader();
header();
mainContent();

initModals();
