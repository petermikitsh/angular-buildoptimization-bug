module.exports = function () {
  return {
    entry: {
      editorworker: 'monaco-editor/esm/vs/editor/editor.worker'
    },
    mode: 'production',
    output: {
      filename: '[name].js'
    }
  }
};
