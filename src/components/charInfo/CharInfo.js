import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => updateChar(), [props.charId]);

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const setContent = (process, char) => {
      switch (process) {
        case 'waiting':
          return <Skeleton/>;
          break;
        case 'loading':
          return <Spinner/>;
          break;
        case 'error':
          return <ErrorMessage/>;
          break;
        case 'confirmed':
          return <View char={char}></View>;
          break;
        default:
          throw new Error('Unexpected process state');
      }
    }


        // const skeleton = char || loading || error ? null : <Skeleton/>
        
        // const errorMessage = error ? <ErrorMessage/> : null; // если у нас есть ошибка, то будет отрисован компонент ErrorMessage, иначе мы просто вернем null
        // const spinner = loading ? <Spinner/> : null; // то же самое со спиннером
        // const content = !(loading || error || !char) ? <View char={char}/> : null; // если нет загрузки или ошибки, то у нас будет отрисовываться компонент View
        
        return (
          <div className="char__wrapper">
            <div className="char__info">
                {setContent(process, char)}
            </div>
          </div>
            
        )
    
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

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;