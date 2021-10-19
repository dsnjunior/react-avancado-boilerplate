module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please'
    }],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.styles.ts',
        templateFile: 'templates/component.styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/index.ts',
        templateFile: 'templates/component.index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{kebabCase name}}/__tests__/{{kebabCase name}}.component.spec.tsx',
        templateFile: 'templates/component.spec.tsx.hbs'
      }
    ]
  });
};
