const directoryType = ['core', 'global', 'layout', 'micro', 'pattern', 'page']

module.exports = (plop) => {
  plop.setGenerator('base component', {
    description: '再利用可能なコンポーネントを作成する',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名は何ですか？',
      },
      {
        type: 'list',
        name: 'directory',
        default: 'pattern',
        message: 'Componentの分類はどこですか',
        choices: directoryType,
      },
    ],

    actions: [
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: '.plop/Components.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase name}}/index.ts',
        templateFile: '.plop/index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: 'src/components/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: '.plop/Storybook.stories.tsx.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/{{directory}}/index.ts',
        template: `export * from './{{pascalCase name}}'`,
      },
    ],
  })
}
