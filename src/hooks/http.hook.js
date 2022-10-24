import {useState, useCallback} from 'react';

const useHttp = () => { // универсальный хук для повторяющегося функционала
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setLoading(true);
        try {
            const responce = await fetch(url, {method, body, headers}); // ссылка и объект с настройками
            
            if (!responce.ok) {
                throw new Error(`Could not fetch ${url}, status: ${responce.status}`) // выбрасываем ошибку с каким-то текстом
            }
            const data = await responce.json(); // ответ от responce в формате JSON
            setLoading(false); // загрузка завершилась
            return data;
        } catch(e) {
            setLoading(false);
            setError(e.message);
            throw e; // выкинуть ошибку
        }
    }, [])

    // то есть request - это название колбэк функции, которая будет вызвана после объявления с аргументами, переданными в нее

    const clearError = useCallback(() => setError(null), []);

    return {loading, request, error, clearError};
}

export default useHttp;