import { useParams, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import './DetailsSerie.css'

const DetailsSerie = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const {idSerie} = useParams();
    // console.log(idSerie);

    const [serie, setSerie] = useState({});
    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'series', idSerie), (snapshot) => {
            // console.log(snapshot.data());
            const monDocument = {
                ...snapshot.data(),
                id: snapshot.id
            };
            setSerie(monDocument);
        });
        return unsub;
    }, [idSerie]);

    const afficherStars = () => {
        let tabStars = [];
        console.log(serie.vote_average / 2);
        let reste = parseFloat(serie.vote_average) / 2;
        console.log(reste);
        if(reste)
        {
            while (reste > 1) {
                tabStars = [...tabStars, '/img/star.png'];
                reste--;
            }
        }
        console.log(reste);
        if(reste % 1 >= 0.3) tabStars = [...tabStars, '/img/half_star.png'];
        console.log(tabStars);
        return tabStars;
    }
   

    return (
        <div className="detailsSerie">
            <img className="imgDetailsSerie" src={serie.backdrop_path} alt={serie.title}></img>
            <h2 className='nomDetailsSerie roboto'>{serie.name}</h2>
            <div className='ratingContainer'>
                <div className='nbRatingContainer'>
                    <div className='nbRating'>
                        <p className='code'>{(serie.vote_average / 2).toFixed(1)} / 5</p>
                    </div>
                </div>
                <div>
                {
                    afficherStars().map((star,i) => {
                        console.log(star);
                        if(star === '/img/star.png') return <img key={i} className='star' src={star}></img>
                        if(star === '/img/half_star.png') return <img key={i} className='star' src='/img/half_star.png'></img>
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default DetailsSerie;