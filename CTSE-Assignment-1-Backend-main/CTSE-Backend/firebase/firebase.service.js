const firebaseconfig = require("./firebase.config");

const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  reFromURL,
} = require("firebase/storage");

const uploadToFirebase = async (file, fileName) => {
  const storage = getStorage(firebaseconfig.firebaseApp);
  const storageRef = ref(storage, fileName);
  const metadata = { contentType: file.mimetype };
  const uploadTask = uploadBytes(storageRef, file.buffer, metadata);
  return new Promise((resolve, reject) => {
    uploadTask
      .then((res) => {
        getDownloadURL(res.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
module.exports = { uploadToFirebase };
