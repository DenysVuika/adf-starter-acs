# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- New `Search Plugin` with minimalistic search experience and Viewer integration
- New `Documents Plugin` with document list demo and Viewer integration
- New `Preview Service` in the `@app/sdk` library to provide reusable Viewer APIs
- Support icon buttons with Header component

## [3.0.0] - 2024-03-12

### Added

- upgrade to ADF 6.7.1
- new documentation content on customization and plugin libraries
- new `@app/sdk` library for plugin development (experimental)
- Dynamically composing Header and Sidebar entries
- new 'Trashcan Plugin' tutorial with final plugin implementation
- new 'Distributing Plugins' chapter

### Changed

- improved TypeScript configuration to allow easy plugin library generation
- rename `src/app/app.menu.ts` to `src/app/app.header.ts`

## [2.3.0] - 2024-02-12

### Added

- Setup ESLint for the project and CI/CD
- Separate `sidebar` component (`src/app/components/sidebar`) with configuration options via `app.sidebar.ts`
- Separate `header` component (`src/app/components/header`) with configuration options via `app.menu.ts`
- New `page-layout` component (`src/app/components/page-layout`)
- Content Page examples with integration to sidebar and app menu

### Changed

- Improved and simplified overall project structure
- Move i18n resources to the `src/assets/i18n`
- Move `documents` and `home` components to `src/app/pages`

## [2.2.0] - 2024-02-05

### Fixed

- Fix missing hash in the routes

### Added

- Configuration required for `OIDC` authentication ([#26](https://github.com/DenysVuika/adf-starter-acs/pull/26) by [vprovaggi](https://github.com/vprovaggi))

## [2.1.0] - 2024-01-29

### Fixed

- Fix PDF rendering in the `Viewer` component
- Fix Metadata Panel in the Viewer, enable Tags and Categories features

### Changed

- New simplified `Sidenav` component
- `Outlined` material icons font by default (see [material-icons](https://github.com/marella/material-icons))
- Migrate all components to Standalone ones
- `Documents`: enable column resizing feature by default

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
- Use NPM package for the `material-icons` instead of the local copies (see [material-icons](https://github.com/marella/material-icons))
- Move `Logout` to the application toolbar
- Cleanup code and project files

### Fixed

- Fix `proxy.conf.js` settings
- Fix Document List sorting mode not working
- Fix Viewer metadata panel not displayed
- Fix Login component bugs
- Fix Node Comments integration for metadata panel
- Fix sidebar collapse/expand behavior
