import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';

class CharInfo extends Component{
    state = { // стейт можно объявлять без контекста вызова (только для задачи, для использования он нужен) и конструктора
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    

    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        this.onCharLoading();
        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
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

    render() {
        const {char, loading, error} = this.state;
        const skeleton = char || loading || error ? null : <Skeleton/>
        
        const errorMessage = error ? <ErrorMessage/> : null; // если у нас есть ошибка, то будет отрисован компонент ErrorMessage, иначе мы просто вернем null
        const spinner = loading ? <Spinner/> : null; // то же самое со спиннером
        const content = !(loading || error || !char) ? <View char={char}/> : null; // если нет загрузки или ошибки, то у нас будет отрисовываться компонент View
        
        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, wiki, homepage, comics} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'unset'};
    }
    let comic;
    if (comics.length === 0) {
        comic = "This character doesn't have comics.";
    } else {
        comics.length = 10;
        comic = comics.map((item, i) => {
            return (
                <li className="char__comics-item" key={i}>
                    {item.name}
                </li>
            )
        })
    }
    return (
      <>
        <div className="char__basics">
          <img src={thumbnail} alt={name} style={imgStyle}/>
          <div>
            <div className="char__info-name">{name}</div>
            <div className="char__btns">
              <a href={homepage} className="button button__main">
                <div className="inner">homepage</div>
              </a>
              <a href={wiki} className="button button__secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
        </div>
        <div className="char__descr">
          {description}
        </div>
        <div className="char__comics">Comics:</div>
        <ul className="char__comics-list">
            {comic}
        </ul>
      </>
    );
}

export default CharInfo;