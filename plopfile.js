const directoryType = ['core', 'global', 'layout', 'micro', 'pattern', 'page']

const fileComponents = {
  type: 'add',
  path: 'src/components/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
  templateFile: '.plop/Components.tsx.hbs',
  skipIfExists: true,
}
const fileStory = {
  type: 'add',
  path: 'src/components/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
  templateFile: '.plop/Storybook.stories.tsx.hbs',
  skipIfExists: true,
}
const fileTestComponents = {
  type: 'add',
  path: 'src/components/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
  templateFile: '.plop/Components.test.tsx.hbs',
  skipIfExists: true,
}

module.exports = (plop) => {
  plop.setGenerator('simple component', {
    description: 'シンプルなComponentを作成する',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名は何ですか？',
      },
      {
        type: 'input',
        name: 'directory',
        message: '作成するPathを教えて下さい',
      },
    ],
    actions: [fileComponents],
  })
  plop.setGenerator('simple Test', {
    description: 'シンプルなTestを作成する',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Testするコンポーネント名は何ですか？',
      },
      {
        type: 'input',
        name: 'directory',
        message: '作成するPathを教えて下さい',
      },
    ],
    actions: [fileTestComponents],
  })
  plop.setGenerator('base component', {
    description: '再利用可能なComponentを作成する',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component名は何ですか？',
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
        path: 'src/components/{{directory}}/{{pascalCase name}}/index.ts',
        templateFile: '.plop/index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/{{directory}}/index.ts',
        template: `export * from './{{pascalCase name}}'`,
      },
      fileComponents,
      fileStory,
      fileTestComponents,
    ],
  })
}
