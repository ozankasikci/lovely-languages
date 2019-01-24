const languages = require('./language');

module.exports = [
  {
    name: 'Hello World',
    fileName: 'hello-world',

    oncreate: (fileName) => {
      languages.forEach(language => {
        const id = `editor-${language.extension}`;
        ace.edit(id, {
          maxLines: 50,
          minLines: 10,
          value: require(`../../algorithms/${fileName}/${fileName}.${language.extension}`),
          mode: `ace/mode/${language.aceMode}`,
          theme: 'ace/theme/monokai',
          bug: 1,
        });
      });
    },
  },
];