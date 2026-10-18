# DbkTobiasHoppDe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.24.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Custom Color Theme for Shad/CN

Generated via https://tweakcn.com/editor/theme

Theme token

npx shadcn@latest add https://tweakcn.com/r/themes/cmvbii15c000004l250vcf6ue

## GitHub Actions

To add a deployment, you need to add the following variables to your GitHub repository's secrets.

- `DEPLOY_HOST`: "serverxy.host.com".
- `DEPLOYMENT_USER`: "userxyz".
- `DEPLOYMENT_PORT`: "22".
- `DEPLOYMENT_PATH`: "www/some-path/domain-folder".
- `DEPLOYMENT_KEY`: "SOME_BASE_64_KEY".

## Project icons

This project is using Lucide Angular

[Lucide Angular Guide](https://lucide.dev/guide/angular/getting-started)

```typescript
import { Component } from '@angular/core';
import { LucideFileText } from '@lucide/angular'; // Import the Lucide icon component

@Component({
  selector: 'app',
  template: '<svg lucideFileText></svg>',
  imports: [LucideFileText],
})
export class App {}
```

```typescript
import { Component, computed, signal } from '@angular/core';
import { LucideDynamicIcon, LucideCircleCheck, LucideCircleX } from '@lucide/angular';

@Component({
  selector: 'app',
  template: `<svg [lucideIcon]="icon()"></svg>`,
  imports: [LucideDynamicIcon],
})
export class App {
  protected readonly model = signal<boolean>(true);
  protected readonly icon = computed(() => (this.model() ? LucideCircleCheck : LucideCircleX));
}
```

```html
<svg [lucideIcon]="icon()"></svg>
```

Test
