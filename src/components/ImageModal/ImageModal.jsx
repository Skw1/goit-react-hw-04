import ReactModal from 'react-modal';

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>Author: {image.user.username}</p>
        <p>Likes: {image.likes}</p>
        {/* Add more details if needed */}
        <button onClick={onRequestClose}>Close</button>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
