# MageOS UIkit3 Theme

**UIkit3-based theme for Mage-OS and Magento**

See also [mage-os-lab/module-theme-uikit](https://github.com/mage-os-lab/module-theme-uikit)

---

## Overview

The **Mage-OS UIkit3 Theme** comes as a evoluted replacement for Luma.
This theme is designed to maintain compatibility with the existing Luma/Blank themes while improving developer experience, frontend flexibility, and compliance with new regulations.
This approach aims to support Magento’s open-source community by offering a native, maintainable alternative that does not require the installation of third-party commercial themes or additional build tools.

## How it works

### UIkit3 integration

UIkit3 is compiled via Magento's native LESS compilation.
There is no requirement for external build tools.
The framework's classes can be seamlessly used within native LESS files, promoting rapid development and consistent styling across components without losing compatibility with third party modules.
UIkit3 offers a rich set of ready-to-use components with built-in responsive behaviors, standardized padding/margin utilities, and robust layout tools so it can be very useful for new developments.
JS components and libraries are included by requireJS.

### UIkit3 updates and theme maintenance

If you need to update UIkit go on assets folder and execute "npm install" command.
A bash file is then executed changing js dependencies and less dependencies inside the theme.
Keep in mind that all the svg icons are versioned and modified adding "#000" color specification making "svg-fill()" less method work, so if you need to update/add new icons add theme directly inside web/images/icons folder.

## Installation

1. Install it into your Mage-OS/Magento 2 project with composer:
```
composer require mage-os/theme-frontend-uikit
```

2. Enable module
```
bin/magento setup:upgrade
```

Make sure to also install [mage-os-lab/module-theme-uikit](https://github.com/mage-os-lab/module-theme-uikit)

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.


## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
