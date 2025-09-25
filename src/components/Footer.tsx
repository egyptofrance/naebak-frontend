'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/members', label: 'النواب والمرشحون' },
    { href: '/complaints', label: 'تقديم شكوى' },
    { href: '/messages', label: 'إرسال رسالة' },
    { href: '/news', label: 'الأخبار' },
    { href: '/statistics', label: 'الإحصائيات' },
  ];

  const supportLinks = [
    { href: '/help', label: 'المساعدة' },
    { href: '/faq', label: 'الأسئلة الشائعة' },
    { href: '/contact', label: 'اتصل بنا' },
    { href: '/feedback', label: 'اقتراحات وملاحظات' },
    { href: '/report-problem', label: 'الإبلاغ عن مشكلة' },
    { href: '/accessibility', label: 'إمكانية الوصول' },
  ];

  const legalLinks = [
    { href: '/terms', label: 'شروط الاستخدام' },
    { href: '/privacy', label: 'سياسة الخصوصية' },
    { href: '/cookies', label: 'سياسة ملفات تعريف الارتباط' },
    { href: '/disclaimer', label: 'إخلاء المسؤولية' },
    { href: '/data-protection', label: 'حماية البيانات' },
    { href: '/transparency', label: 'الشفافية' },
  ];

  const governmentLinks = [
    { 
      href: 'https://www.parliament.gov.eg', 
      label: 'مجلس النواب المصري',
      external: true 
    },
    { 
      href: 'https://www.presidency.eg', 
      label: 'رئاسة الجمهورية',
      external: true 
    },
    { 
      href: 'https://www.cabinet.gov.eg', 
      label: 'مجلس الوزراء',
      external: true 
    },
    { 
      href: 'https://www.sis.gov.eg', 
      label: 'الهيئة العامة للاستعلامات',
      external: true 
    },
  ];

  const socialLinks = [
    { 
      href: 'https://facebook.com/naebak', 
      icon: Facebook, 
      label: 'فيسبوك',
      color: 'hover:text-blue-600' 
    },
    { 
      href: 'https://twitter.com/naebak', 
      icon: Twitter, 
      label: 'تويتر',
      color: 'hover:text-blue-400' 
    },
    { 
      href: 'https://youtube.com/naebak', 
      icon: Youtube, 
      label: 'يوتيوب',
      color: 'hover:text-red-600' 
    },
    { 
      href: 'https://instagram.com/naebak', 
      icon: Instagram, 
      label: 'إنستغرام',
      color: 'hover:text-pink-600' 
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo-naebak-white.png"
                alt="نائبك"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              منصة نائبك هي الجسر الرقمي الذي يربط بين المواطنين ونوابهم في البرلمان المصري، 
              لتعزيز التواصل والشفافية والمشاركة المجتمعية الفعالة.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Mail className="w-4 h-4 text-green-400" />
                <span>info@naebak.com</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+20 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>القاهرة، جمهورية مصر العربية</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:text-green-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">الدعم والمساعدة</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:text-green-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">مواقع حكومية</h3>
            <ul className="space-y-2">
              {governmentLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white hover:text-green-400 text-sm transition-colors duration-200 flex items-center space-x-1 space-x-reverse"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-3 text-green-400">تابعنا على وسائل التواصل الاجتماعي</h4>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors duration-200 p-2 rounded-full hover:bg-gray-800`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-3 text-green-400">اشترك في النشرة الإخبارية</h4>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:space-x-reverse">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200">
                  اشتراك
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start space-x-1 space-x-reverse">
                <span>© {currentYear} منصة نائبك. جميع الحقوق محفوظة.</span>
                <span>صُنع بـ</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>في مصر</span>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 space-x-reverse">
              {legalLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white hover:text-green-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Legal Links */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-wrap justify-center space-x-6 space-x-reverse text-xs text-gray-500">
              {legalLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              منصة نائبك هي منصة مستقلة تهدف إلى تسهيل التواصل بين المواطنين والنواب. 
              المحتوى والآراء المعبر عنها لا تمثل بالضرورة وجهة نظر الحكومة المصرية أو أي جهة رسمية.
              نحن نلتزم بأعلى معايير الشفافية وحماية البيانات الشخصية للمستخدمين.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
