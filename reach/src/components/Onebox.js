import React, { useEffect } from 'react';

function Onebox({ threads }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'd') {
                console.log('Delete');
               
            } else if (e.key === 'r') {
                console.log('Open reply box');
                
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="onebox">
            {threads.map(thread => (
                <div key={thread.id} className="thread">
                    <h3>{thread.subject}</h3>
                    <p>{thread.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Onebox;
