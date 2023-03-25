const firebaseService = require("../firebase/firebase.service");
const firebaseUtils = require("../firebase/firebse.util");

const SampleFunc = async (req, res) => {
  try {
    const file = req.file;

    const imageName = `Image_${Date.now()}`;
    const url = firebaseUtils.generateFirebaseStorageURL(imageName);

    await firebaseService.uploadToFirebase(file, imageName);

    res.status(200).send({
      url: url,
    });
    console.log(url);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  SampleFunc,
};
