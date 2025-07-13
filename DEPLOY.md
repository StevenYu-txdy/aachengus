# Deployment Guide

## AWS Amplify

When `next.config.js` enables static export via:

```javascript
output: 'export'
```

Next.js writes the build artifacts to the `out/` directory. AWS Amplify must use this directory as the artifact base. The `amplify.yml` file should contain the following section:

```yaml
artifacts:
  baseDirectory: out
  files:
    - '**/*'
```

Ensuring `baseDirectory` is set to `out` allows Amplify to locate the generated files and deploy the application correctly.
