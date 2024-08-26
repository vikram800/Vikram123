import React, { useState, useEffect } from 'react';
import Onebox from '../components/Onebox';
import ThemeSwitcher from '../components/ThemeSwitcher';

function OneboxPage() {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const fetchThreads = async () => {
            const response = await fetch('/onebox/list');
            const data = await response.json();
            setThreads(data);
        };

        fetchThreads();
    }, []);

    return (
        <div>
            <ThemeSwitcher />
            <Onebox threads={threads} />
        </div>
    );
}

export default OneboxPage;
