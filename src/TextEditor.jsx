import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';

const TextEditor=()=>{
    const editor = useRef(null);
    const [content, setContent] = useState('');
    return (
        <JoditEditor
        ref={editor}
        value={content}
        onChange={newContent=>setContent(newContent)}
        />
    )
}


export default TextEditor;