Follow these steps to add a component to the library:

1. Run `npm run generate` and choose a name for your component (use Pascal case, e.g. 'MyComponent').
2. Import/export your component in `lib/components/index.js`.
3. Kill the server (if you had it running), and run `npm run start:watch` to pick up the new component.
4. Visit [http://0.0.0.0:8080](http://0.0.0.0:8080) in a browser. You should see your component listed in the docs.
5. Start making changes to your component source and watch them update in the browser automatically.
