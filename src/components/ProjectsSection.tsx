{
  id: 10,
  title: "Diabetic Retinopathy Detection",
  description: "Deep learning system for automated DR screening and severity classification.",
  longDescription: "Engineered an end-to-end automated DR screening system using U-Net for retinal vessel segmentation (94.46% accuracy) and VGG16-based CNN for severity classification (91.72% accuracy). Published IEEE paper.",
  icon: Brain,
  category: "Publications",
  technologies: ["TensorFlow", "Keras", "OpenCV", "CNN", "U-Net"],
  metrics: [
    "Segmentation accuracy: 94.46%",
    "Classification accuracy: 91.72%",
    "Dataset: DRIVE, STARE, 200+ images",
    "Published on IEEE Xplore"
  ],
  status: "Completed",
  links: {
    paper: "https://ieeexplore.ieee.org/document/10146626",
    github: "https://github.com/yourrepo/retinopathy"
  },
  embed: {
    code: `# Example: U-Net model build
inputs = Input((128,128,3))
c1 = Conv2D(64, (3,3), activation='relu', padding='same')(inputs)
c1 = Conv2D(64, (3,3), activation='relu', padding='same')(c1)
p1 = MaxPooling2D((2,2))(c1)`,
    demo: "https://retinopathy-demo.streamlit.app/",
    ppt: "https://docs.google.com/presentation/d/xxxx/embed"
  }
}
