import { Component } from 'react';

import MarvelService from '../../services/MarvelService';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component { // этот класс будет отвечать за каждого отдельного персонажа
    constructor(props) {
        super(props);
        this.updateChar(); // вызываем функцию с персонажем
    }
    state = { // стейт можно объявлять без контекста вызова (только для задачи, для использования он нужен) и конструктора
        char: {}
    }
    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({char}); // сокращение char: char
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000); // диапазон рандомных чисел, чтобы персонажи случайно генерировались (гуглится функция за секунд 20)
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
    }

    render() {
        const {char: {name, description, thumbnail, homepage, wiki}} = this.state; // контекст нужен при деструктуризации
        return (
            <div className="randomchar">
                <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img"/>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            {description}
                        </p>
                        <div className="randomchar__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

export default RandomChar;