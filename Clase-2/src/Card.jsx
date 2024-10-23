import meme from './assets/meme.png';

export function Card(props){
    return (
        <div className='container-img'>
            <img src={meme} alt={props.name} />
        </div>
    )
}