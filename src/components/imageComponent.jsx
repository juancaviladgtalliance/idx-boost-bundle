export default function ImageComponent({imageUrl,url}){
    return(
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={imageUrl} alt="idxboost" />
        </a>
    )
}