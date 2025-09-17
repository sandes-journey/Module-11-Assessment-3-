# InstaGram - Mini Blog

A fully interactive Instagram-like social media platform built with HTML, CSS, and JavaScript.

## 🌐 Live Demo

**[View Live Demo](https://umairyusufnurgat-cloud.github.io/Module-11-Assessment-3-/)**

## ✨ Features

### Core Functionality
- **Create Posts** - Add captions and images to share content
- **Like System** - Heart posts with real-time like counts
- **Comments** - Add, view, and toggle comments on posts
- **Stories** - Instagram-style circular story previews
- **Delete Posts** - Remove your own posts with confirmation

### Interactive Elements
- **Share Posts** - Native share API or copy link to clipboard
- **Save Posts** - Bookmark posts for later viewing
- **Real-time Updates** - All interactions update immediately
- **User Profiles** - Profile pictures and usernames throughout

### UI/UX
- **Instagram Design** - Authentic Instagram look and feel
- **Mobile Responsive** - Optimized for all screen sizes
- **Smooth Animations** - Hover effects and transitions
- **Navigation** - Fixed header with search and icons

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Instagram-style design with responsive layout
- **JavaScript (ES6)** - Interactive functionality
- **Font Awesome** - Icons throughout the interface

## 📱 Mobile Features

- **Touch-friendly** buttons and interactions
- **Responsive grid** that adapts to screen size
- **Mobile navigation** with collapsible elements
- **Optimized images** for faster loading

## 🚀 Getting Started

1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Start creating posts and interacting with content
4. No server setup required - runs entirely in the browser

## 📂 File Structure

```
Mini-Blog/
├── index.html          # Main HTML file
├── styles.css          # Instagram-style CSS
├── script.js           # Interactive JavaScript
└── README.md           # This file
```

## 🎯 Usage

### Creating Posts
1. Click the "+" icon in navigation or scroll to the top
2. Enter your caption in the text field
3. Optionally add an image URL
4. Press Enter or click "Post" to share

### Interacting with Posts
- **Like**: Click the heart icon
- **Comment**: Click comment icon to expand, type and press Enter
- **Share**: Click share icon to share via native API or copy link
- **Save**: Click bookmark icon to save post
- **Delete**: Trash icon appears only on your own posts

### Sample Content
The app includes 7 sample posts with different themes:
- Travel photography
- Food content
- Fitness posts
- Art and street photography
- Coffee culture
- Pet photos
- Beach vacation content

## 🔧 Customization

### Adding Your Content
Edit the `posts` array in `script.js` to add your own sample posts:

```javascript
{
    id: 8,
    username: "your_username",
    userImage: "profile-image-url",
    image: "post-image-url",
    caption: "Your caption here #hashtags",
    likes: 0,
    liked: false,
    time: "now",
    comments: []
}
```

### Styling Changes
Modify `styles.css` to customize:
- Color scheme (Instagram gradient colors)
- Typography and fonts
- Spacing and layout
- Mobile breakpoints

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📄 License

© 2024 InstaGram Mini Blog by Umair Nurgat. All rights reserved.

---

**Live Demo**: https://umairyusufnurgat-cloud.github.io/Module-11-Assessment-3-/