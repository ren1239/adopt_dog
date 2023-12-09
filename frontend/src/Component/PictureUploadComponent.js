import React, { useState } from "react";

function PictureUploadComponent({ label, name, onChange }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
    onChange(e); // propagate the change up
  };

  return (
    <div className={`ProfilePictureUpload${name} mx-4`}>
      <label
        htmlFor={name}
        className="ml-px block text-sm font-medium leading-6 pl-4 text-left"
      >
        {label}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        accept="image/*"
        onChange={handleFileChange}
      />
      {preview && (
        <div className="image-preview">
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        </div>
      )}
    </div>
  );
}

export default PictureUploadComponent;
