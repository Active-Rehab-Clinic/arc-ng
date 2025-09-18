# Commit Message Rules

## Format
```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc)
- **refactor**: Code refactoring without adding features or fixing bugs
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build process, dependency updates, tooling changes

## Scopes
- **auth**: Authentication related changes
- **ui**: User interface components
- **api**: API integration
- **config**: Configuration files
- **deps**: Dependencies
- **home**: Home page
- **header**: Header component
- **footer**: Footer component
- **theme**: Theme/styling changes

## Description Rules
- Use imperative mood ("add" not "added" or "adds")
- Start with lowercase letter
- No period at the end
- Maximum 50 characters
- Be concise but descriptive

## Examples
```
feat(auth): add user login functionality
fix(ui): resolve mobile navigation toggle issue
docs(readme): update installation instructions
style(home): improve responsive design
refactor(theme): extract theme service
chore(deps): update Angular to v18
```

## Body Guidelines
- Separate from description with blank line
- Explain what and why, not how
- Use present tense
- Wrap at 72 characters

## Footer Guidelines
- Reference issues: `Closes #123`
- Breaking changes: `BREAKING CHANGE: description`