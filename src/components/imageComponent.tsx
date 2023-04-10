import { ImageComponentProps } from '../interfaces/components';

export default function ImageComponent(props: ImageComponentProps) {
  const { imageUrl, url } = props;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="idxboost" />
    </a>
  );
}
