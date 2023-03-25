const Blogs = require("../models/blogs.models");

//add new blog
const NewBlog = async (req, res) => {
  const { blogName, description, blogImage } = req.body;
    let createdBlog = new Blogs({
      blogName,
      description,
      blogImage
    });
try {
  await createdBlog.save();
  res.status(200).json({
    success: true,
    message: "Blog Added Successfully !!",
    blog: createdBlog
  });
} catch (err) {
  res.status(400).json({
    error: err
  });
}
};

  //get all blogs
  const GetBlog = async (req, res) => {
    try {
      let blogs = await Blogs.find();
      res.status(200).json({
        success: true,
        existingblogs: blogs
      });
    } catch (err) {
      res.status(400).json({
        error: err
      });
    }
  };
  

  //get one blogs 
  const GetOneBlog = async (req, res) => {
    try {
      let blog = await Blogs.findById(req.params.blogID);
      res.status(200).json({
        success: true,
        existingblog: blog
      });
    } catch (err) {
      res.status(400).json({
        error: err
      });
    }
  };
  
  
  //update blog details  
  const UpdateBlog = async (req, res) => {
    try {
      const blogID = req.params.blogID;
      const updateBlog = await Blogs.findByIdAndUpdate(blogID, {
        $set: req.body
      });
      res.status(200).send({ success: true, updateBlog: updateBlog });
    } catch (error) {
      res.status(500).send({ status: "Error with id", error: error.message });
    }
  };
  

//delete blog 
  const DeleteBlog = (req, res) => {
    Blogs.findByIdAndDelete(req.params.blogID)
    .then((blog) => {
      res.status(200).json({
        success: true,
        message: "Blog Deleted Successfully !!",
        blog: blog
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err
      });
    });
};

  module.exports = {
    NewBlog,
    GetBlog,
    GetOneBlog,
    UpdateBlog,
    DeleteBlog,
  };
  