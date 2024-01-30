export const fetchData = async () => {
    const url = 'http://localhost:3000/data';
    const options = {
        credentials: 'include',
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        throw new Error(error);
    }
}
