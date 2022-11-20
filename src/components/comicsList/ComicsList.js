import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import Skeleton from "../skeleton/Skeleton";


import './comicsList.scss';

const setContent = (process, Component, data) => {
    switch (process) {
      case "waiting":
        return <Skeleton />;
      case "loading":
        return <Spinner />;
      case "error":
        return <ErrorMessage />;
      case "confirmed":
        return <Component data={data}></Component>;
      default:
        throw new Error("Unexpected process state");
    }
  };

const ComicsList = () => {

    const {getAllComics, process, setProcess} = useMarvelService();
    const [newComicLoading, setNewComicLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicEnded, setComicEnded] = useState(false);
    const [comicList, setComicList] = useState([]);

    useEffect(() => onRequest(offset, true), [])

    const onRequest = (offset, initial) => {
        initial ? setNewComicLoading(false) : setNewComicLoading(true);
        getAllComics(offset)
            .then(onComicListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onComicListLoaded = (newComicList) => {
        let ended = false;
        if (newComicList < 8) {
            ended = true;
        }
        setComicList(comicList => [...comicList, ...newComicList]);
        setComicEnded(ended);
        setNewComicLoading(false);
        setOffset(offset => offset + 8);
    }
    
    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit': 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit': 'contain'};
            }
            return (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt="x-men" className="comics__item-img" style={imgStyle}/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
            )
        })
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    return (
        <div className="comics__list">
            {setContent(process, () => renderItems(comicList), newComicLoading)}
            <button
                style={{'display': comicEnded ? 'none' : 'block'}}
                className="button button__main button__long"
                onClick={() => onRequest(offset)}
                disabled={newComicLoading}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}



export default ComicsList;