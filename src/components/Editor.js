/* eslint-disable no-unused-vars */
import CodeMirror from 'codemirror';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import "codemirror/lib/codemirror.css";
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import { useEffect, useRef } from 'react';

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = CodeMirror.fromTextArea(document.getElementById('realtimeEditor'), {
        mode: { name: 'javascript', json: true },
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true
      });
    }
  }, []);

  return <textarea id='realtimeEditor'></textarea>
}

export default Editor;