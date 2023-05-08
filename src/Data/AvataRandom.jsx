export const getRandomAvatar = () => {
    const avatars = [
      "https://i.ibb.co/zrXfKsJ/catface-7.jpg",
      "https://i.ibb.co/rd3PGq5/catface-9.png",
      "https://i.ibb.co/Htq4LWJ/catface-8.png",
      "https://i.ibb.co/9mPr2ds/catface-3.jpg",
      "https://i.ibb.co/b6TT6Y4/catface-6.jpg",
      "https://i.ibb.co/0pNx0nv/catface-4.jpg",
      "https://i.ibb.co/StzXrVH/catface.jpg",
      "https://i.ibb.co/KDdd4zN/catface-2.jpg",
      "https://i.ibb.co/stB42Nb/catface-5.jpg",
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };
  