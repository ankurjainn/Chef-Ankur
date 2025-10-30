# Chef Claude - AI Recipe Generator

Chef Claude is a React-based web application that helps you generate recipes based on the ingredients you have on hand. Using the power of Hugging Face's AI models, it suggests creative and practical recipes that make the most of your available ingredients.

## 🌟 Features

- 📝 Add ingredients to your list with a simple interface
- 🔍 Generate recipes based on your available ingredients
- 🎨 Beautiful and responsive design
- 📱 Mobile-friendly interface
- ⚡ Fast recipe generation using Hugging Face AI
- 📋 Markdown-formatted recipe output

## 🚀 Technologies Used

- React v19
- Vite v7
- Hugging Face Inference API
- React Markdown
- Axios
- ESLint for code quality

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js (Latest LTS version recommended)
- A Hugging Face API token

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ankurjainn/Chef-Ankur.git
   cd Chef-Claude
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Hugging Face API token:
   ```env
   HUGGING_FACE_TOKEN=your_token_here
   ```

## 🏃‍♂️ Running the Application

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🎯 How to Use

1. Enter ingredients you have available in your kitchen
2. Click "Add Ingredients" to add them to your list
3. Once you've added at least 4 ingredients, you'll see the "Get a Recipe" button
4. Click "Get a Recipe" to generate a recipe using your ingredients
5. The AI will suggest a recipe that uses some or all of your listed ingredients

## 🔑 Environment Variables

The following environment variables are required:

- `HUGGING_FACE_TOKEN`: Your Hugging Face API token

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with React and Vite
- Powered by Hugging Face's AI models
- Inspired by the need to reduce food waste and make cooking more accessible

---

Made with ❤️ by [Ankur Jain](https://github.com/ankurjainn)
