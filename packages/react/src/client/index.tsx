import React from 'react';
import ReactDOM from 'react-dom';
import * as MonacoEditor from 'monaco-editor';

const worker = require('file-loader!../../dist/editorworker');

class ExportsCreate extends React.Component {
  node: any;
  editor: any;

  componentDidMount() {
    if (window && !(window as any).MonacoEnvironment) {
      (window as any).MonacoEnvironment = {
        getWorkerUrl() {
          return worker;
        },
      };
    }
    this.editor = MonacoEditor.editor.create(this.node, {
      value: 'SELECT 1 + 1;',
      language: 'sql',
      scrollBeyondLastLine: false,
    });

    this.editor.layout({
      height: 200,
      width: 600,
    });
  }

  registerNode = (c: any) => {
    this.node = c;
  }

  render() {
    return (
      <React.Fragment>
        <div ref={this.registerNode} />
      </React.Fragment>
    );
  }
}

export default function render(container: HTMLElement) {
  ReactDOM.render(<ExportsCreate />, container);
}
