# Component Structure Rules

## File Organization
- Always create three separate files: `.component.ts`, `.component.html`, `.component.scss`
- Use descriptive component names with `.component.ts` suffix
- Group related components in feature folders under `pages/` or `components/`
- Use standalone components with `imports` array
- Never use inline CSS or Tailwind classes in HTML files
- Always use dedicated SCSS file for all styling

## Component Class Structure
```typescript
@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [CommonModule, RouterModule, /* other imports */],
  templateUrl: './component-name.component.html',
  styleUrl: './component-name.component.scss'
})
export class ComponentNameComponent {
  // 1. Public properties first
  // 2. Private properties with underscore prefix
  // 3. Constructor with dependency injection
  // 4. Lifecycle hooks (ngOnInit, etc.)
  // 5. Public methods
  // 6. Private methods last
}
```

## Template Structure
- Use semantic HTML5 elements (`section`, `article`, `header`, `nav`)
- Use CSS classes only, no inline styles or Tailwind classes
- Wrap page content in `<div class="page-container">`
- Use consistent section structure:
  ```html
  <section class="section">
    <div class="container">
      <!-- content -->
    </div>
  </section>
  ```

## Routing
- Use lazy loading with `loadComponent` for all routes
- Group auth routes under `/auth/` path
- Use descriptive route paths matching component names
- Always include fallback route `{ path: '**', redirectTo: '/home' }`