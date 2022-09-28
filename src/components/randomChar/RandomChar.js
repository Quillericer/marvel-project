import React, { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component { // этот класс будет отвечать за каждого отдельного персонажа
    state = { // стейт можно объявлять без контекста вызова (только для задачи, для использования он нужен) и конструктора
        char: {},
        loading: true,
        error: false
    }
    _notFoundUrl = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false, error: false}); // сокращение char: char; как только наши данные загрузятся, то спиннер исчезнет
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000); // диапазон рандомных чисел, чтобы персонажи случайно генерировались (гуглится функция за секунд 20)
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError) // если произошла ошибка (например, по id из рандомных чисел попалось число, которое не является id персонажа (такого персонажа нет))
    }

    render() {
        const {char, loading, error} = this.state; // контекст нужен при деструктуризации
        const errorMessage = error ? <ErrorMessage/> : null; // если у нас есть ошибка, то будет отрисован компонент ErrorMessage, иначе мы просто вернем null
        const spinner = loading ? <Spinner/> : null; // то же самое со спиннером
        const content = !(loading || error) ? <View char={char}/> : null; // если нет загрузки или ошибки, то у нас будет отрисовываться компонент View

        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({char}) => { // простой рендерящий компонент, который не имеет логики
    const {name, description, thumbnail, homepage, wiki} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    return (
        <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle}/>
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
    )
}

export default RandomChar;