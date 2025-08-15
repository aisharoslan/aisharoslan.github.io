# Adding Projects to Your Portfolio

## How to Add New Projects

Adding new projects is now super easy! Just follow these steps:

### 1. Add Project Image
Place your project image in the `images/projects/` folder.

### 2. Edit the Projects Data
Open `js/projects.js` and add a new project object to the `projects` array:

```javascript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  description: 'Technologies used, skills, etc.',
  year: '2024',
  image: '../images/projects/your-image.png',
  link: 'your-project-page.html', // or external URL
  category: 'web-app' // or 'mobile-app', 'print-design', 'hackathon', etc.
}
```

### 3. That's It!
The project will automatically appear on your projects page with the same styling and animations.

## Project Categories
You can use these categories (or create your own):
- `web-app` - Web applications
- `mobile-app` - Mobile applications  
- `print-design` - Print/editorial design
- `hackathon` - Hackathon projects
- `web-design` - Web design projects
- `ui-ux` - UI/UX design projects

## Image Requirements
- **Recommended aspect ratio**: 16:9 or 4:3
- **File formats**: PNG, JPG, JPEG
- **Size**: Keep under 2MB for good performance
- **Quality**: High quality, clear images work best

## Example Project Entry
```javascript
{
  id: 'my-awesome-app',
  title: 'My Awesome App',
  description: 'React, Node.js, MongoDB, UI/UX Design',
  year: '2024',
  image: '../images/projects/awesome-app.png',
  link: 'https://myapp.com',
  category: 'web-app'
}
```

## Benefits of This System
✅ **Easy to maintain** - No HTML editing required  
✅ **Consistent styling** - All projects look uniform  
✅ **Responsive design** - Works on all screen sizes  
✅ **Fast loading** - Images load efficiently  
✅ **SEO friendly** - Proper alt tags and structure  

## Need Help?
If you want to customize the styling or add more features, check out:
- `css/projects.css` - For styling changes
- `js/projects.js` - For functionality changes
- `projects/index.html` - For page structure changes
