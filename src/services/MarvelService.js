class MarvelService {
    // переменные чтобы соблюдать dry
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'; // переменную (или функцию) мы начинаем с лодаш, чтобы другие программисты понимали, какие данные им лучше не изменять во избежание ошибок в будущем
    _apiKey = 'apikey=a26e0c2c935a8c6a7038f169b279b71c';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter); // формируем массив с новыми объектами
    }

    getCharacter = async (id) => { // асинхронная функция нам нужна для того, чтобы избежать ошибок (мы не знаем, сколько будут передаваться данные из функции getResource)
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]); // трансформируем данные
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension, // мы конкатенируем для того, чтобы получить полностью изображение (его ссылку и разрешение)
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}

export default MarvelService; // через этот класс мы получаем данные с marvel api characters