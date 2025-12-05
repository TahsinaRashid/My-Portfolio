const projects = [
  {
    id: 0,
    title: 'Habit Tracker',
    description: 'Full-stack habit tracking app with daily streaks, reminders, and progress visualization.',
    image: 'https://i.postimg.cc/28W4rNkG/1763633796801.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    overview: 'A comprehensive habit tracking application designed to help users build and maintain positive habits. Features include creating custom habits, tracking daily completion, viewing streak statistics, and visualizing progress over time with intuitive charts and analytics.',
    challenges: 'Designing an accurate calendar streak algorithm that handles timezone variations and correctly processes missed days without losing streak data. Implementing efficient data queries for large datasets of daily habit logs.',
    future: 'Add social sharing features, community challenges, habit templates for quick setup, mobile app version, and advanced analytics dashboards with trend predictions.',
    liveUrl: 'https://tahsina-rashid-prapti.netlify.app',
    repoUrl: 'https://github.com/TahsinaRashid/Habit-Tracker'
  },
  {
    id: 1,
    title: 'Tech-Shop',
    description: 'E-commerce platform for tech gadgets with secure authentication, product filtering, and checkout.',
    image: 'https://i.postimg.cc/L4LkLgw9/tech-shop-prapti-netlify-app.png',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'Tailwind CSS', 'NextAuth.js'],
    overview: 'A modern e-commerce platform specializing in tech gadgets. Built with Next.js for optimal performance, it features user authentication with NextAuth, product catalog with advanced search and filtering, detailed product pages with reviews, shopping cart management, and a streamlined checkout process.',
    challenges: 'Integrating Firebase authentication with NextAuth.js, optimizing image loading for numerous product listings, implementing real-time inventory management, and ensuring secure payment processing.',
    future: 'Integrate Stripe/PayPal for actual payments, add product recommendations based on browsing history, implement order tracking, create admin dashboard for inventory management, and add product wishlists.',
    liveUrl: 'https://tech-shop-prapti-netlify-app.netlify.app',
    repoUrl: 'https://github.com/TahsinaRashid/Tech-Shop'
  },
  {
    id: 2,
    title: 'GameHub',
    description: 'Gaming discovery platform with search, categories, and detailed game information.',
    image: 'https://i.postimg.cc/j2xjD1Bn/Screenshot-2025-12-05-041121.png',
    technologies: ['React', 'JavaScript', 'Game API', 'Tailwind CSS', 'Axios'],
    overview: 'A comprehensive gaming discovery platform that aggregates data from multiple game APIs. Users can browse games by category, search for specific titles, view detailed game information including platforms, ratings, and descriptions, and get personalized recommendations based on their interests.',
    challenges: 'Aggregating data from multiple APIs with varying data structures, normalizing inconsistent field formats, handling API rate limiting, and implementing efficient caching for better performance.',
    future: 'Add user accounts with wishlist functionality, implement user reviews and ratings system, add personalized recommendations based on user preferences and play history, create mobile app version, and integrate with gaming platforms for social features.',
    liveUrl: 'https://game-hub-tahsina.netlify.app',
    repoUrl: 'https://github.com/TahsinaRashid/GameHub'
  }
];

export default projects;
