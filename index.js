import {fetchData} from './client.js';

(async () => {
    const readyState = document.readyState;

    if (readyState === 'interactive' || readyState === 'complete') {
        await fetchData();
    } else {
        document.addEventListener('DOMContentLoaded', async () => {
            await fetchData();
        })
    }
})()
