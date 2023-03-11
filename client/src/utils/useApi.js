

const useApi = () => {

    const myName = "ziggy"

    const fetchIt = async (url, method, body) => {
        const response = await fetch(url)
        const result = await response.json()
        return result
    }

    return {
        myName,
        fetchIt
    }
}

export default useApi