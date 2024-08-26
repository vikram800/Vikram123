import React, { useState } from 'react';

function ReplyBox({ threadId }) {
    const [emailFrom, setEmailFrom] = useState('');
    const [emailTo, setEmailTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = async () => {
        const response = await fetch(`/reply/${threadId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from: emailFrom, to: emailTo, subject, body }),
        });

        if (response.ok) {
            alert('Reply sent');
        } else {
            alert('Failed to send reply');
        }
    };

    return (
        <div className="reply-box">
            <input
                type="email"
                value={emailFrom}
                onChange={(e) => setEmailFrom(e.target.value)}
                placeholder="From"
            />
            <input
                type="email"
                value={emailTo}
                onChange={(e) => setEmailTo(e.target.value)}
                placeholder="To"
            />
            <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default ReplyBox;
