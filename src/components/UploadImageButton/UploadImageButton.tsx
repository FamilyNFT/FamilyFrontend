import { useState } from "react";
import PlusButton from "assets/img/symbols/PlusCircle.png";
import CloseButton from "assets/img/symbols/close.png";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    padding: "3px",
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320, height: "63px" },
  delete: {
    cursor: "pointer",
    background: "black",
    color: "white",
    border: "none",
    padding: "3px",
  },
};

const UploadImageButton = ({
  isSelect,
  id,
}: {
  isSelect: boolean;
  id: number;
}) => {
  const [selectedImage, setSelectedImage] = useState<any>();

  // This function will be triggered when the file field change
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = (e: any) => {
    e.preventDefault();
    console.log(e);

    setSelectedImage(null);
  };

  return (
    <>
      <div
        style={styles.container as React.CSSProperties}
        className="relative w-[70px] h-[70px] rounded-lg border-[1px] border-[grey] cursor-pointer"
      >
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
          id={`upload-${id}`}
          hidden
          className="w-full h-full"
        />
        <label htmlFor={`upload-${id}`} className="w-full h-full">
          {selectedImage ? (
            <div
              style={styles.preview as React.CSSProperties}
              className="relative"
            >
              <img
                src={URL.createObjectURL(selectedImage)}
                style={styles.image}
                alt="Thumb"
                className="w-full"
              />
              <button
                onClick={removeSelectedImage}
                style={styles.delete}
                className="absolute top-0"
              >
                <img src={CloseButton} alt="closeBtn" />
              </button>
            </div>
          ) : (
            <>
              <img
                src={PlusButton}
                alt="plusButton"
                className="w-full h-full p-5 cursor-pointer"
              />
            </>
          )}
        </label>
      </div>
    </>
  );
};

export default UploadImageButton;

// Just some styles
