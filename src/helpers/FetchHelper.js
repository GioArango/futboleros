
export const FetchHelper = async (url, method, request = '') => {

    try {
        let options;
        if (method === 'POST') {

            options = {
                method: 'POST',
                body: JSON.stringify(request),
                headers: {
                    'X-RapidAPI-Key': '68a0538217msh0a2102ef8818cc5p1d8abajsne7b036bc243c',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            };

        } else {

            options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '68a0538217msh0a2102ef8818cc5p1d8abajsne7b036bc243c',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                }
            };

        }


        const resp = await fetch(url, options);
        const data = await resp.json();
        return data;

    } catch (error) {
        return {
            responseData: error
        };
    }

}
