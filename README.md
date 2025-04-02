## Design System: Atomic Design

```
/src
├── /assets                 # Static files like images, fonts, icons, etc.
├── /components             # Reusable components
│   ├── /atoms              # Atoms: the smallest possible components (e.g., buttons, inputs)
│   ├── /molecules          # Molecules: combinations of atoms (e.g., form fields with label and input)
│   ├── /organisms          # Organisms: groups of molecules forming complete sections (e.g., headers, footers)
│   ├── /templates          # Templates: layouts based on organisms
│   ├── /pages              # Pages composed of templates and other components
├── /hooks                  # Custom hooks
├── /routes                 # Application routes
├── /services               # Functions for communicating with APIs or business logic
├── /styles                 # Global style files and themes
│   ├── /themes             # Themes for global styling
│   ├── /globals            # Global styles
│   ├── /mixins             # Mixins or CSS utilities
├── /types                  # Global TypeScript types
├── /utils                  # Utility functions
├── App.tsx                 # Main App component
└── index.tsx               # React entry point
```

More information about Atomic Design: https://atomicdesign.bradfrost.com/chapter-2/
