{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "awag-client": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": { "type": "component" },
        "@schematics/angular:directive": { "type": "directive" },
        "@schematics/angular:service": { "type": "service" },
        "@schematics/angular:guard": { "typeSeparator": "." },
        "@schematics/angular:interceptor": { "typeSeparator": "." },
        "@schematics/angular:module": { "typeSeparator": "." },
        "@schematics/angular:pipe": { "typeSeparator": "." },
        "@schematics/angular:resolver": { "typeSeparator": "." }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "allowedCommonJsDependencies": [
              "flatpickr",
              "warning",
              "lodash.debounce",
              "file-saver"
            ],
            "outputPath": "dist/awag-client",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "@angular/localize/init",
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": [
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "40kb",
                  "maximumError": "100kb"
                }
              ],
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "awag-client:build:production"
            },
            "development": {
              "buildTarget": "awag-client:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular/build:extract-i18n"
        },
        "test": {
          "builder": "@angular/build:karma",
          "options": {
            "polyfills": [
              "@angular/localize/init",
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": [
            ]
          }
        },
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "src/**/*.ts",
              "src/**/*.html"
            ]
          }
        }
      }
    }
  },
  "cli": {
    "schematicCollections": [
      "@angular-eslint/schematics"
    ]
  }
}
