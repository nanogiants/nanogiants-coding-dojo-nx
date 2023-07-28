
    const url = "localhost:3333/api";

    const getQuotes = async () => {
        const response = await fetch(url + "/quotes");
        return await response.json();
    }



export default getQuotes