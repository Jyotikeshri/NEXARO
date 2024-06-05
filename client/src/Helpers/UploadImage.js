const cloudinaryCloudName = import.meta.env.VITE_CLOUD_NAME_CLOUDINARY;
const url = `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`;

const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "product_preset");

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImage;
