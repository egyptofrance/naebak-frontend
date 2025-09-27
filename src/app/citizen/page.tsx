'use client';

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import NewsTicker from '@/components/NewsTicker'
import Footer from '@/components/Footer'

export default function CitizenPage() {
  return (
    <div>
      <Header />
      <Banner />
      <NewsTicker />

      {/* قسم الترحيب */}
      <section className="py-4" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <img 
                  src="/images/logo-naebak-green.png" 
                  alt="نائبك" 
                  className="me-3"
                  style={{height: '60px', objectFit: 'contain'}}
                />
                <h2 className="fw-bold mb-0" style={{color: '#004705'}}>ملف المواطن</h2>
              </div>
              <p className="lead text-muted">
                أكمل بياناتك الشخصية وعنوانك بالتفصيل
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم النموذج */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0" style={{borderRadius: '12px'}}>
                <div className="card-body p-5">
                  <form>
                    {/* البيانات الشخصية */}
                    <div className="mb-5">
                      <h5 className="fw-bold mb-4 pb-2" style={{color: '#004705', borderBottom: '2px solid #004705'}}>البيانات الشخصية</h5>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="الاسم الأول"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="الاسم الأخير"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="الرقم القومي (14 رقم)"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="date" 
                            className="form-control form-control-lg"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <select className="form-select form-select-lg" style={{fontSize: '0.9rem'}}>
                            <option>اختر النوع</option>
                            <option>ذكر</option>
                            <option>أنثى</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="email" 
                            className="form-control form-control-lg" 
                            placeholder="البريد الإلكتروني"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                      </div>
                    </div>

                    {/* بيانات الاتصال */}
                    <div className="mb-5">
                      <h5 className="fw-bold mb-4 pb-2" style={{color: '#004705', borderBottom: '2px solid #004705'}}>بيانات الاتصال</h5>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input 
                            type="tel" 
                            className="form-control form-control-lg" 
                            placeholder="رقم الهاتف (مثال: 01012345678)"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="tel" 
                            className="form-control form-control-lg" 
                            placeholder="رقم الواتساب (مثال: 01012345678)"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                      </div>
                    </div>

                    {/* العنوان بالتفصيل */}
                    <div className="mb-5">
                      <h5 className="fw-bold mb-4 pb-2" style={{color: '#004705', borderBottom: '2px solid #004705'}}>العنوان بالتفصيل</h5>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <select className="form-select form-select-lg" style={{fontSize: '0.9rem'}}>
                            <option>اختر المحافظة</option>
                            <option>القاهرة</option>
                            <option>الجيزة</option>
                            <option>الإسكندرية</option>
                            <option>أسوان</option>
                            <option>أسيوط</option>
                            <option>الأقصر</option>
                            <option>البحر الأحمر</option>
                            <option>البحيرة</option>
                            <option>بني سويف</option>
                            <option>جنوب سيناء</option>
                            <option>الدقهلية</option>
                            <option>دمياط</option>
                            <option>الفيوم</option>
                            <option>الغربية</option>
                            <option>الإسماعيلية</option>
                            <option>كفر الشيخ</option>
                            <option>مطروح</option>
                            <option>المنيا</option>
                            <option>المنوفية</option>
                            <option>الوادي الجديد</option>
                            <option>شمال سيناء</option>
                            <option>بورسعيد</option>
                            <option>القليوبية</option>
                            <option>قنا</option>
                            <option>الشرقية</option>
                            <option>سوهاج</option>
                            <option>السويس</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="المدينة"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="المركز"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="الحي"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="القرية"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="اسم الشارع"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            placeholder="رقم المنزل"
                            style={{fontSize: '0.9rem'}}
                          />
                        </div>
                      </div>
                    </div>

                    {/* أزرار الحفظ */}
                    <div className="text-center">
                      <button 
                        type="submit" 
                        className="btn btn-success btn-lg px-5 py-3 me-3"
                        style={{fontSize: '0.9rem'}}
                      >
                        حفظ البيانات
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-outline-secondary btn-lg px-5 py-3"
                        style={{fontSize: '0.9rem'}}
                      >
                        إلغاء
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
