import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    const handleResize = () => {
        generateStars();
    }

    window.addEventListener('resize', handleResize)

    return() => window.removeEventListener('resize', handleResize)
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`, // اندازه ستاره
            height: `${star.size}px`, // اندازه ستاره
            left: `${star.x}%`, // موقعیت افقی
            top: `${star.y}%`, // موقعیت عمودی
            opacity: star.opacity, // شفافیت
            animationDuration: `${star.animationDuration}s`, // مدت زمان انیمیشن
            position: "absolute", // موقعیت دهی ستاره‌ها
            borderRadius: "50%", // برای دایره بودن ستاره‌ها
            backgroundColor: "white", // رنگ ستاره‌ها
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`, // اندازه ستاره
            height: `${meteor.size * 2}px`, // اندازه ستاره
            left: `${meteor.x}%`, // موقعیت افقی
            top: `${meteor.y}%`, // موقعیت عمودی
            animationDelay: meteor.delay, // شفافیت
            animationDuration: `${meteor.animationDuration}s`, // مدت زمان انیمیشن
          }}
        />
      ))}
    </div>
  );
};
