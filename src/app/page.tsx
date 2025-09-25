'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';

export default function HomePage() {
  const { user, login, register, isLoading } = useAuth();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    nationalId: '',
    governorate: '',
    userType: 'citizen'
  });

  const governorates = [
    'القاهرة', 'الجيزة', 'الإسكندرية', 'الدقهلية', 'البحر الأحمر', 'البحيرة',
    'الفيوم', 'الغربية', 'الإسماعيلية', 'المنوفية', 'المنيا', 'القليوبية',
    'الوادي الجديد', 'السويس', 'أسوان', 'أسيوط', 'بني سويف', 'بورسعيد',
    'دمياط', 'الشرقية', 'جنوب سيناء', 'كفر الشيخ', 'مطروح', 'الأقصر',
    'قنا', 'شمال سيناء', 'سوهاج'
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(loginData.email, loginData.password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    try {
      await register(registerData);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleGuestAccess = () => {
    // Handle guest access
    console.log('Guest access clicked');
  };

  // إذا كان المستخدم مسجل دخول، عرض لوحة التحكم
  if (user) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* البانر الرئيسي - يظهر بالكامل في الشاشة بدون كتابة عليه */}
        <section className="relative w-full h-screen">
          <Image
            src="/images/sisi-banner.jpg"
            alt="بانر رئاسي"
            fill
            className="object-cover"
            priority
          />
        </section>

        {/* محتوى لوحة التحكم */}
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-green-700 mb-4">
              مرحباً، {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-600 mb-6">
              أهلاً بك في منصة نائبك - منصة التواصل مع ممثليك في البرلمان
            </p>
          </div>

          {/* شبكة الخدمات */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">تقديم شكوى</h3>
              <p className="text-gray-600 text-sm">قدم شكواك أو اقتراحك لنائبك</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">النواب</h3>
              <p className="text-gray-600 text-sm">تصفح قائمة النواب ومعلوماتهم</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">الرسائل</h3>
              <p className="text-gray-600 text-sm">تواصل مباشرة مع ممثليك</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">الإحصائيات</h3>
              <p className="text-gray-600 text-sm">تابع إحصائيات أداء النواب</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // صفحة الهبوط للزوار غير المسجلين - حسب المواصفات الدقيقة
  return (
    <div className="min-h-screen bg-gray-50">
      {/* البانر الرئيسي - يظهر بالكامل في الشاشة بدون كتابة أو أزرار عليه */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/sisi-banner.jpg"
          alt="بانر رئاسي"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* محتوى صفحة الهبوط - حقول الدخول فقط */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* نماذج المصادقة - المحتوى الوحيد في صفحة الهبوط */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* نموذج تسجيل الدخول */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
                تسجيل الدخول
              </h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    كلمة المرور
                  </label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'جاري تسجيل الدخول...' : 'دخول'}
                </button>
              </form>
            </div>

            {/* نموذج التسجيل */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
                إنشاء حساب جديد
              </h2>
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      الاسم الأول
                    </label>
                    <input
                      type="text"
                      value={registerData.firstName}
                      onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      الاسم الأخير
                    </label>
                    <input
                      type="text"
                      value={registerData.lastName}
                      onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    value={registerData.phone}
                    onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    الرقم القومي
                  </label>
                  <input
                    type="text"
                    value={registerData.nationalId}
                    onChange={(e) => setRegisterData({...registerData, nationalId: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    المحافظة
                  </label>
                  <select
                    value={registerData.governorate}
                    onChange={(e) => setRegisterData({...registerData, governorate: e.target.value})}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                    required
                  >
                    <option value="">اختر المحافظة</option>
                    {governorates.map((gov) => (
                      <option key={gov} value={gov}>{gov}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      كلمة المرور
                    </label>
                    <input
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      تأكيد كلمة المرور
                    </label>
                    <input
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-700"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
                </button>
              </form>
            </div>
          </div>

          {/* زر الدخول كزائر */}
          <div className="text-center mb-16">
            <button 
              onClick={handleGuestAccess}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-green-700 text-green-700 rounded-md font-medium hover:bg-green-700 hover:text-white transition-colors"
            >
              <span>🔍</span>
              الدخول كزائر
            </button>
          </div>

          {/* معلومات المنصة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">تقديم الشكاوى</h3>
              <p className="text-gray-600">
                قدم شكواك أو اقتراحك مباشرة لنائبك في البرلمان وتابع حالة الشكوى
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">التواصل المباشر</h3>
              <p className="text-gray-600">
                تواصل مباشرة مع ممثليك في البرلمان وأرسل رسائلك واستفساراتك
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">متابعة الأداء</h3>
              <p className="text-gray-600">
                تابع إحصائيات أداء النواب وتقييماتهم من المواطنين
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
