import { Button } from "@/components/ui/button";
import { CheckCircle, X, Users, Target, TrendingUp, Database, Zap, ArrowLeft, Star, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900" dir="rtl">
      {/* Header */}
      <header className="gradient-primary text-white py-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-extrabold text-shadow tracking-wide">Optione</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-black text-primary mb-8 leading-tight text-shadow">
              השירות שמייצר כסף<br />
              <span className="bg-gradient-to-l from-secondary to-accent bg-clip-text text-transparent">
                מהדאטה שלך
              </span>
            </h1>
          </div>
          
          <div className="glass-effect rounded-3xl p-12 mb-12 max-w-4xl mx-auto box-shadow-soft relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white text-xl">🎥</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed mt-4">
              "אם יש לך רשימות לידים, דאטה מהקמפיינים או קהל שלא הגיב – אל תזרוק אותם לפח. 
              <span className="text-primary font-bold"> אנחנו יודעים להחזיר אותם לחיים.</span>"
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 mb-12 border-2 border-primary/10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              השירות שיחזיר לחיים את הלידים 
              <span className="text-secondary">"הרדומים"</span> שלך
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-primary mb-8">
              ויהפוך דאטה מתה לרווחים בפועל
            </h3>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                לא מערכת. לא קורס. לא קמפיינר שרוצה כסף לפני שהראה לך תוצאות.
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary">
                אנחנו עושים את העבודה בשבילך – על בסיס הדאטא הקיימת שלך.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 box-shadow-soft border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <p className="text-lg font-bold text-gray-800">מסע לקוח שיוצר לקוחות איכותיים</p>
            </div>
            <div className="bg-white rounded-2xl p-8 box-shadow-soft border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-lg font-bold text-gray-800">בלי להוציא שקל על שיווק</p>
            </div>
            <div className="bg-white rounded-2xl p-8 box-shadow-soft border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:scale-105">
              <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <p className="text-lg font-bold text-gray-800">כל התוכנות הדרושות – עלינו!</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="gradient-secondary hover:opacity-90 text-white px-12 py-6 text-2xl font-bold rounded-2xl box-shadow-intense transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            🔵 לתיאום שיחת "כסף מהדאטא" ←
          </Button>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-gradient-to-r from-gray-100 to-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="bg-red-100 text-red-700 px-6 py-3 rounded-full text-lg font-semibold border border-red-200">
              😤 הבעיה הכי נפוצה
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-12 leading-tight text-shadow">
            "אבל כבר שילמתי<br />עשרות אלפים על שיווק…"
          </h2>
          
          <div className="space-y-8 mb-16">
            <div className="bg-white rounded-2xl p-8 box-shadow-soft border-r-8 border-primary">
              <p className="text-2xl md:text-3xl font-bold text-primary">בדיוק.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 box-shadow-soft border-r-8 border-secondary">
              <p className="text-2xl md:text-3xl font-bold text-secondary">הדאטה אצלך.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 box-shadow-soft border-r-8 border-green-500">
              <p className="text-2xl md:text-3xl font-bold text-green-700">אתה יודע שיש לך שירות טוב.</p>
            </div>
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-10 box-shadow-soft border-2 border-accent/20">
              <p className="text-2xl md:text-3xl font-bold text-accent">
                אתה רק צריך מישהו שייקח את כל מה שצברת – ויהפוך את זה לתוצאה.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 box-shadow-intense border-t-8 border-primary">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/10 rounded-full p-4">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-6">
              רוב העסקים לא צריכים עוד לידים.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-secondary">
              הם צריכים לעבוד נכון עם מה שכבר יש.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do/Don't Do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">איך אנחנו עובדים?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Don't Do */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-50 to-red-100 rounded-3xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl p-10 box-shadow-soft border-2 border-red-100">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-red-100 rounded-full p-4">
                    <X className="w-12 h-12 text-red-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-red-600 mb-8 text-center">❌ מה אנחנו לא עושים?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                    <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-800">לא מוכרים לך מערכת טכנולוגית חדשה</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                    <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-800">לא שולחים אותך לקורסים</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                    <X className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-800">לא מציעים קמפיין עם תקציב פרסום</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Do */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-50 to-primary/10 rounded-3xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl p-10 box-shadow-soft border-2 border-green-100">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-green-100 rounded-full p-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-green-600 mb-8 text-center">✅ מה כן עושים?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-r-4 border-primary">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-800">מנתחים את הדאטא הקיימת שלך – קבצים, CRM, וואטסאפ</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-r-4 border-secondary">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-800">מפצחים את הפילוחים בתוכה</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-r-4 border-accent">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-800">בונים הודעות חכמות לפי פסיכולוגיה של קניה</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-r-4 border-primary">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-800">מפעילים עבורך קמפיין מותאם</p>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-100 to-primary/10 rounded-xl border-r-4 border-secondary">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-bold text-primary">ואתה מקבל לידים – ישירות לשיחה או לסגירה</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Aviv */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full box-shadow-soft mb-6">
              <Award className="w-8 h-8 text-secondary" />
              <span className="text-xl font-bold text-primary">למה לסמוך עלינו?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 text-shadow">
              מה מייחד אותנו – ולמה זה באמת עובד?
            </h2>
            <p className="text-2xl font-medium text-gray-600">
              בניגוד לחברות שעושות "אימייל מרקטינג", אנחנו מגיעים מהשטח.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 box-shadow-intense border-t-8 border-secondary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-secondary to-accent rounded-full p-6">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-center mb-8">
              <span className="text-secondary">אביב שמש</span> - מייסד Optione
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg leading-relaxed text-right">
                <p className="bg-primary/5 p-6 rounded-2xl border-r-4 border-primary">
                  <strong className="text-primary">יועץ עסקי בכיר</strong> עם ניסיון של למעלה מעשור בליווי עסקים להגדלת מכירות.
                </p>
                
                <p className="bg-secondary/5 p-6 rounded-2xl border-r-4 border-secondary">
                  עבד עם מותגים מהשורה הראשונה: <strong className="text-secondary">חלי ממן, כללית שירותי בריאות, מנדי גפנר, אספרסו קלאב</strong>
                </p>
                
                <p className="bg-accent/5 p-6 rounded-2xl border-r-4 border-accent">
                  פיתח את <strong className="text-accent">שיטת "שמש"</strong> – מודל עבודה שמוביל עסקים לתוצאות אמיתיות.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-secondary to-accent rounded-3xl p-12 text-white box-shadow-intense">
                  <div className="text-6xl font-black mb-4">2,000+</div>
                  <div className="text-xl font-bold mb-2">בעלי עסקים</div>
                  <div className="text-lg opacity-90">עברו תחתיו בליווי אישי</div>
                  <div className="flex justify-center mt-6 space-x-2">
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/5 px-8 py-4 rounded-full mb-6">
              <Database className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-primary">הטכנולוגיה שלנו</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 text-shadow">
              משנה את כללי המשחק
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 mb-16 border-2 border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-gradient-to-r from-primary to-accent rounded-full p-6 animate-pulse-glow">
                  <Database className="w-16 h-16 text-white" />
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-8 text-primary">
                כל איש קשר בדאטה שלך מקבל הודעה מותאמת אישית
              </p>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                לפי מה שהוא עשה, לא עשה, ראה או התעניין בו
              </p>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
                <p className="text-lg text-gray-700 mb-4">לא עוד דיוור גנרי עם שם פרטי.</p>
                <p className="text-xl font-bold text-secondary">
                  המערכת שלנו יוצרת הודעה שנראית כאילו נכתבה במיוחד עבורו – כי בפועל, היא באמת כזו.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 box-shadow-soft border-t-4 border-green-500 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-black text-green-600 mb-2">95%</div>
              <p className="text-lg font-bold text-gray-800 mb-2">אחוזי פתיחה</p>
              <p className="text-green-600 font-semibold">גבוהים בהרבה מהממוצע</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 box-shadow-soft border-t-4 border-blue-500 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-black text-blue-600 mb-2">78%</div>
              <p className="text-lg font-bold text-gray-800 mb-2">אחוז תגובה</p>
              <p className="text-blue-600 font-semibold">מעל הממוצע בשוק</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 box-shadow-soft border-t-4 border-purple-500 hover:scale-105 transition-all duration-300">
              <div className="text-4xl font-black text-purple-600 mb-2">340%</div>
              <p className="text-lg font-bold text-gray-800 mb-2">אחוזי סגירה</p>
              <p className="text-purple-600 font-semibold">קופצים משמעותית</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border-2 border-accent/20">
            <p className="text-2xl md:text-3xl font-bold text-accent">
              זה ההבדל בין "עוד מייל" – לבין קמפיין שמרגיש כמו שיחה אישית חכמה.
            </p>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="py-24 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full mb-6">
              <span className="text-2xl">💎</span>
              <span className="text-xl font-bold">ההצעה הבלעדית</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-shadow">
              חודשיים של ליווי<br />תשלום לפי תוצאה בלבד
            </h2>
          </div>

          <div className="glass-effect rounded-3xl p-12 mb-16 border border-white/20">
            <p className="text-2xl md:text-3xl font-bold mb-12">
              אנחנו מציעים ליווי מלא – שבו התשלום מתבצע רק לפי תוצאה:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">תיאום פגישה</h3>
                <p className="text-white/80">מתחילים בשיחה אסטרטגית</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">קבלת ליד</h3>
                <p className="text-white/80">לידים איכותיים מהדאטה</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">סגירת מכירה בפועל</h3>
                <p className="text-white/80">רווחים אמיתיים בחשבון</p>
              </div>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/30">
              <p className="text-3xl md:text-4xl font-black mb-4">לא הבאנו תוצאה = לא שילמת</p>
              <p className="text-xl text-white/90">
                למה? כי אנחנו יודעים שזה עובד. זו הדרך שלנו לבנות אמון.
              </p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-2xl font-black rounded-2xl box-shadow-intense transition-all duration-300 hover:scale-105"
          >
            🔵 לתיאום פגישת "כסף מהדאטא"
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-shadow">
            מוכן להתחיל להרוויח מהדאטה?
          </h2>
          
          <div className="glass-effect rounded-3xl p-12 mb-16 border border-white/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-2">❌</div>
                <p className="text-lg font-semibold">מערכת</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">❌</div>
                <p className="text-lg font-semibold">פגישה</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">❌</div>
                <p className="text-lg font-semibold">סיסמאות</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <p className="text-2xl md:text-3xl font-black">רק תוצאה = תשלום</p>
            </div>
          </div>

          <div className="space-y-8">
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 px-16 py-8 text-2xl font-black rounded-2xl box-shadow-intense transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              🔵 לתיאום שיחה עכשיו
            </Button>
            
            <div className="text-center">
              <p className="text-lg text-white/80 mb-4">או</p>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/20 px-12 py-6 text-xl font-bold rounded-2xl w-full md:w-auto"
              >
                🔵 קבל דוגמה מותאמת לדאטה שלך
              </Button>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-white/20">
            <h3 className="text-3xl md:text-4xl font-black mb-8 text-shadow">Optione</h3>
            <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
              לא צריך מערכת חדשה כדי לייצר תוצאה.<br />
              <span className="font-bold">רק דאטה קיימת + חשיבה חכמה + ביצוע מדויק.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;