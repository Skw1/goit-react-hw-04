
const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.urls.regular} alt={image.alt_description} />
      <div>
        <p>Author: {image.user.username}</p>
        <p>Likes: {image.likes}</p>
        {/* Add more details if needed */}
      </div>
    </div>
  );
};

export default ImageCard;