# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-01-26

### Added

- [Nx Workspace](https://nx.dev/getting-started/intro) 17.x support
- [ADF 6.6.0](https://github.com/Alfresco/alfresco-ng2-components/releases/tag/6.6.0) support

## [1.0.0] - 2024-01-17

### Added

- Support for `BASE_URL` command parameter when starting dev server
- Customize toolbar title with the `app.config.json` file
- Customize `Login` copyright placeholder with the `app.config.json` file
- Language picker for the application toolbar
- Spanish translations as an example of localization

### Changed

- Update to ADF `6.4.0` and JS-API `7.1.0`
- Switch from the `Muli` font to `@fontsource/open-sans`
- Use NPM package for the default font instead of the local copies
- Use NPM package for the `material-icons` instead of the local copies
- Move Logout to the application toolbar
- Cleanup code and project files

### Fixed

- Fix `proxy.conf.js` settings
- Fix Document List sorting mode not working
- Fix Viewer metadata panel not displayed
- Fix Login component bugs
- Fix Node Comments integration for metadata panel
- Fix sidebar collapse/expand behavior
