'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, X, Volume2, VolumeX } from 'lucide-react';
import { NewsItem } from '@/types';

interface NewsBarProps {
  newsItems?: NewsItem[];
  autoScroll?: boolean;
  scrollSpeed?: number;
  showControls?: boolean;
  className?: string;
}

const NewsBar: React.FC<NewsBarProps> = ({
  newsItems = [],
  autoScroll = true,
  scrollSpeed = 3000,
  showControls = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoScroll);
  const [isVisible, setIsVisible] = useState(true);

  // Default news items if none provided
  const defaultNews: NewsItem[] = [
    {
      id: 1,
      title: 'مجلس النواب يناقش مشروع قانون جديد لتطوير التعليم في مصر',
      content: '',
      is_breaking: true,
      is_featured: true,
      tags: ['تعليم', 'قانون'],
      views_count: 1250,
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 2,
      title: 'النائب أحمد محمد يطالب بتحسين الخدمات الصحية في محافظة الجيزة',
      content: '',
      is_breaking: false,
      is_featured: true,
      tags: ['صحة', 'الجيزة'],
      views_count: 890,
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 3,
      title: 'لجنة الإسكان تناقش مشروع الإسكان الاجتماعي الجديد',
      content: '',
      is_breaking: false,
      is_featured: true,
      tags: ['إسكان', 'لجنة'],
      views_count: 567,
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 4,
      title: 'النائبة فاطمة علي تقدم اقتراحاً لدعم المشروعات الصغيرة والمتوسطة',
      content: '',
      is_breaking: false,
      is_featured: true,
      tags: ['اقتصاد', 'مشروعات'],
      views_count: 723,
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];

  const displayNews = newsItems.length > 0 ? newsItems : defaultNews;

  // Auto scroll functionality
  useEffect(() => {
    if (!isPlaying || displayNews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === displayNews.length - 1 ? 0 : prevIndex + 1
      );
    }, scrollSpeed);

    return () => clearInterval(interval);
  }, [isPlaying, displayNews.length, scrollSpeed]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? displayNews.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === displayNews.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const closeNewsBar = () => {
    setIsVisible(false);
  };

  if (!isVisible || displayNews.length === 0) {
    return null;
  }

  const currentNews = displayNews[currentIndex];

  return (
    <div className={`news-bar relative ${className}`}>
      <div className="flex items-center h-12 px-4">
        {/* Breaking News Label */}
        <div className="flex-shrink-0 ml-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
              {currentNews?.is_breaking ? 'عاجل' : 'أخبار'}
            </div>
            {currentNews?.is_breaking && (
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </div>
        </div>

        {/* News Content */}
        <div className="flex-1 overflow-hidden mx-4">
          <div className="relative">
            <Link 
              href={`/news/${currentNews?.id}`}
              className="block hover:text-orange-300 transition-colors duration-200"
            >
              <p className="text-sm font-medium truncate animate-marquee">
                {currentNews?.title}
              </p>
            </Link>
          </div>
        </div>

        {/* Controls */}
        {showControls && displayNews.length > 1 && (
          <div className="flex items-center space-x-2 space-x-reverse flex-shrink-0">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="p-1 hover:bg-gray-600 rounded transition-colors duration-200"
              aria-label="الخبر السابق"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="p-1 hover:bg-gray-600 rounded transition-colors duration-200"
              aria-label={isPlaying ? 'إيقاف التشغيل التلقائي' : 'تشغيل التشغيل التلقائي'}
            >
              {isPlaying ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={goToNext}
              className="p-1 hover:bg-gray-600 rounded transition-colors duration-200"
              aria-label="الخبر التالي"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* News Counter */}
            <div className="news-separator pr-2 mr-2">
              <span className="text-xs text-gray-300">
                {currentIndex + 1} / {displayNews.length}
              </span>
            </div>
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={closeNewsBar}
          className="p-1 hover:bg-gray-600 rounded transition-colors duration-200 mr-2"
          aria-label="إغلاق شريط الأخبار"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Bar */}
      {isPlaying && displayNews.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-700">
          <div 
            className="h-full bg-orange-500 transition-all duration-100 ease-linear"
            style={{
              width: `${((currentIndex + 1) / displayNews.length) * 100}%`
            }}
          />
        </div>
      )}

      {/* Dots Indicator */}
      {displayNews.length > 1 && displayNews.length <= 5 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 space-x-reverse">
          {displayNews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-orange-400' : 'bg-gray-600'
              }`}
              aria-label={`الانتقال إلى الخبر ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// CSS for marquee animation (to be added to globals.css)
const marqueeStyles = `
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
`;

export default NewsBar;
