'use client';

import { useState, useEffect, useRef } from 'react';

interface NewsBarSettings {
  isEnabled: boolean;
  direction: 'ltr' | 'rtl'; // left-to-right or right-to-left
  speed: number; // pixels per second
  pauseOnHover: boolean;
  topBorderColor: string;
  backgroundColor: string;
  textColor: string;
  bottomBorderColor: string;
  bottomBorderWidth: number;
  finalBorderColor: string;
  finalBorderWidth: number;
  height: number;
  fontSize: number;
  fontWeight: string;
}

interface NewsItem {
  id: number;
  content: string;
  isActive: boolean;
  priority: number;
  createdAt: string;
  updatedAt: string;
}

export default function NewsBar() {
  const [newsSettings, setNewsSettings] = useState<NewsBarSettings>({
    isEnabled: true,
    direction: 'rtl', // من اليمين إلى اليسار (افتراضي للعربية)
    speed: 50, // بكسل في الثانية
    pauseOnHover: true,
    topBorderColor: '#FF9800', // برتقالي - 2px
    backgroundColor: '#424242', // رمادي داكن
    textColor: '#FFFFFF', // أبيض
    bottomBorderColor: '#FF6F00', // برتقالي داكن - 4px
    bottomBorderWidth: 4, // 4 بكسل
    finalBorderColor: '#616161', // رمادي - 2px
    finalBorderWidth: 2, // 2 بكسل
    height: 40, // ارتفاع الشريط
    fontSize: 14,
    fontWeight: '500'
  });

  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: 1,
      content: 'الرئيس السيسي يوجه بتطوير منظومة الخدمات الحكومية الرقمية لتسهيل إجراءات المواطنين',
      isActive: true,
      priority: 1,
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z'
    },
    {
      id: 2,
      content: 'مجلس النواب يناقش مشروع قانون جديد لحماية البيانات الشخصية للمواطنين',
      isActive: true,
      priority: 2,
      createdAt: '2024-01-15T09:30:00Z',
      updatedAt: '2024-01-15T09:30:00Z'
    },
    {
      id: 3,
      content: 'وزارة التنمية المحلية تعلن عن مبادرة جديدة لتحسين الخدمات في المحافظات',
      isActive: true,
      priority: 3,
      createdAt: '2024-01-15T09:00:00Z',
      updatedAt: '2024-01-15T09:00:00Z'
    }
  ]);

  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // دمج جميع الأخبار النشطة في نص واحد
  const newsText = newsItems
    .filter(item => item.isActive)
    .sort((a, b) => a.priority - b.priority)
    .map(item => item.content)
    .join(' • ');

  // تحميل إعدادات الشريط الإخباري من الإدارة
  useEffect(() => {
    const fetchNewsBarSettings = async () => {
      try {
        // استدعاء API لجلب إعدادات الشريط الإخباري من الإدارة
        // const response = await fetch('/api/admin/news-bar-settings');
        // const settings = await response.json();
        // setNewsSettings(settings);
        
        // استدعاء API لجلب الأخبار النشطة
        // const newsResponse = await fetch('/api/news/active');
        // const news = await newsResponse.json();
        // setNewsItems(news);
      } catch (error) {
        console.error('Error fetching news bar settings:', error);
      }
    };

    fetchNewsBarSettings();

    // تحديث الأخبار كل 5 دقائق
    const interval = setInterval(fetchNewsBarSettings, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // تحريك النص
  useEffect(() => {
    if (!newsSettings.isEnabled || !newsText || isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let position = newsSettings.direction === 'rtl' 
      ? scrollElement.offsetWidth 
      : -scrollElement.scrollWidth;

    const animate = () => {
      if (newsSettings.direction === 'rtl') {
        position -= newsSettings.speed / 60; // 60 FPS
        if (position < -scrollElement.scrollWidth) {
          position = scrollElement.offsetWidth;
        }
      } else {
        position += newsSettings.speed / 60; // 60 FPS
        if (position > scrollElement.offsetWidth) {
          position = -scrollElement.scrollWidth;
        }
      }

      scrollElement.style.transform = `translateX(${position}px)`;
      
      if (!isPaused) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [newsSettings, newsText, isPaused]);

  // إيقاف/تشغيل الحركة عند التمرير
  const handleMouseEnter = () => {
    if (newsSettings.pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (newsSettings.pauseOnHover) {
      setIsPaused(false);
    }
  };

  // إذا كان الشريط معطل أو لا توجد أخبار، لا نعرض شيئاً
  if (!newsSettings.isEnabled || !newsText) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* الشريط العلوي البرتقالي - 2px */}
      <div 
        className="w-full"
        style={{ 
          height: '2px',
          backgroundColor: newsSettings.topBorderColor 
        }}
      />
      
      {/* الشريط الرئيسي */}
      <div
        className="relative w-full overflow-hidden cursor-pointer"
        style={{
          height: `${newsSettings.height}px`,
          backgroundColor: newsSettings.backgroundColor,
          color: newsSettings.textColor,
          fontSize: `${newsSettings.fontSize}px`,
          fontWeight: newsSettings.fontWeight
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* النص المتحرك */}
        <div
          ref={scrollRef}
          className="absolute top-0 whitespace-nowrap flex items-center h-full px-4"
          style={{
            direction: newsSettings.direction === 'rtl' ? 'rtl' : 'ltr',
            fontFamily: 'Cairo, sans-serif'
          }}
        >
          {newsText}
        </div>

        {/* مؤشر الإيقاف المؤقت */}
        {isPaused && (
          <div className="absolute top-1 left-2 text-xs opacity-75">
            ⏸️
          </div>
        )}
      </div>
      
      {/* الشريط السفلي البرتقالي - 4px */}
      <div 
        className="w-full"
        style={{ 
          height: `${newsSettings.bottomBorderWidth}px`,
          backgroundColor: newsSettings.bottomBorderColor 
        }}
      />
      
      {/* الشريط النهائي الرمادي - 2px */}
      <div 
        className="w-full"
        style={{ 
          height: `${newsSettings.finalBorderWidth}px`,
          backgroundColor: newsSettings.finalBorderColor 
        }}
      />
    </div>
  );
}

// Hook لاستخدام إعدادات الشريط الإخباري في الإدارة
export function useNewsBarSettings() {
  const [settings, setSettings] = useState<NewsBarSettings | null>(null);
  const [loading, setLoading] = useState(true);

  const updateSettings = async (newSettings: Partial<NewsBarSettings>) => {
    try {
      setLoading(true);
      // استدعاء API لتحديث الإعدادات
      // const response = await fetch('/api/admin/news-bar-settings', {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newSettings)
      // });
      // const updatedSettings = await response.json();
      // setSettings(updatedSettings);
      
      // محاكاة التحديث
      setSettings(prev => prev ? { ...prev, ...newSettings } : null);
    } catch (error) {
      console.error('Error updating news bar settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const addNewsItem = async (newsItem: Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      // استدعاء API لإضافة خبر جديد
      // const response = await fetch('/api/news', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newsItem)
      // });
      // const newNews = await response.json();
      
      console.log('Adding news item:', newsItem);
    } catch (error) {
      console.error('Error adding news item:', error);
    }
  };

  const updateNewsItem = async (id: number, updates: Partial<NewsItem>) => {
    try {
      // استدعاء API لتحديث الخبر
      // const response = await fetch(`/api/news/${id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updates)
      // });
      // const updatedNews = await response.json();
      
      console.log('Updating news item:', id, updates);
    } catch (error) {
      console.error('Error updating news item:', error);
    }
  };

  const deleteNewsItem = async (id: number) => {
    try {
      // استدعاء API لحذف الخبر
      // await fetch(`/api/news/${id}`, { method: 'DELETE' });
      
      console.log('Deleting news item:', id);
    } catch (error) {
      console.error('Error deleting news item:', error);
    }
  };

  return {
    settings,
    loading,
    updateSettings,
    addNewsItem,
    updateNewsItem,
    deleteNewsItem
  };
}
