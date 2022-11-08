import './UneSerie.css'

const UneSerie = ({serie}) => {
    

    return (
        <div className='uneSerie'>
            <h3 className='nomUneSerie pacifico'>{serie.name}</h3>
            <img className="imgUneSerie" src={serie.backdrop_path} alt={serie.title}></img>
        </div>
    );
}

export default UneSerie;