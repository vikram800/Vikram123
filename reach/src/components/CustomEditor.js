import React, { useState } from 'react';

function CustomEditor() {
    const [content, setContent] = useState('');

    const handleSave = () => {
        console.log('Content saved:', content);
        
    };

    const handleInsertVariables = () => {
        setContent(content + '[[Variable]]');
    };

    return (
        <div className="custom-editor">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className="editor-toolbar">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleInsertVariables}>Variables</button>
            </div>
        </div>
    );
}

export default CustomEditor;
