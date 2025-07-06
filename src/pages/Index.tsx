import { motion } from "framer-motion";
import { ArrowRight, UserPlus, DollarSign, Settings, Calendar, Award, Star, PhoneCall, MessageCircle, Target, TrendingUp, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeBackground from "@/components/ThreeBackground";

// AnimatedCounter component
const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration,
          ease: "easeOut",
        }}
        onUpdate={(latest) => {
          if (typeof latest === 'number') {
            const element = document.getElementById('counter');
            if (element) {
              element.textContent = Math.round(latest).toString();
            }
          }
        }}
      >
        <span id="counter">{end}</span>
      </motion.span>
    </motion.span>
  );
};

// GlowCard component
const GlowCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 box-shadow-soft ${className}`}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ThreeBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent mb-8 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              השירות שיחזיר לחיים<br />
              <span className="text-4xl md:text-6xl">את הלידים ״הרדומים״ שלך</span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              לא מערכת. לא קורס. לא קמפיינר שרוצה כסף לפני שהראה לך תוצאות.<br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-black">
                אנחנו עושים את העבודה בשבילך – על בסיס הדאטה הקיימת שלך
              </span>
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <Button 
                size="lg" 
                className="gradient-primary text-white px-12 py-6 text-xl md:text-2xl font-black rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-300 box-shadow-intense"
              >
                לתיאום שיחת "כסף מהדאטה" בזום
                <ArrowRight className="mr-3 w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-32 relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 leading-tight">
              מה אנחנו עושים?
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed max-w-4xl mx-auto">
              לוקחים את הדאטה שכבר יש לך ומפיקים ממנה הכנסות נוספות
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { icon: UserPlus, color: "text-green-600", bgColor: "bg-green-100", text: "מסע לקוח שיוצר לקוחות איכותיים" },
              { icon: DollarSign, color: "text-blue-600", bgColor: "bg-blue-100", text: "בלי להוציא שקל על שיווק" },
              { icon: Settings, color: "text-purple-600", bgColor: "bg-purple-100", text: "כל התוכנות הדרושות – עלינו!" }
            ].map((item, i) => (
              <GlowCard key={i} className="p-6 text-center transform hover:scale-105 transition-all duration-300" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="space-y-4"
                >
                  <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">{item.text}</p>
                </motion.div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 relative bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-8 leading-tight">
              "אבל כבר שילמתי עשרות אלפים על שיווק..."
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed max-w-5xl mx-auto mb-8">
              רוב העסקים מקבלים לידים – וסוגרים אולי 10% מהם.<br />
              אבל מה עם כל ה־90% שלא סגרו?
            </p>
            <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              זו בדיוק הדרך שלך למקסם את הרווח מהדאטה שכבר שילמת עליה –<br />
              במקום לרדוף אחרי עוד לידים חדשים.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-32 relative bg-gradient-to-br from-red-50/30 via-white to-pink-50/20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-8 leading-tight">
              ❌ מה אנחנו לא עושים?
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              "לא מוכרים לך מערכת טכנולוגית חדשה",
              "לא שולחים אותך לקורסים", 
              "לא מציעים קמפיין עם תקציב פרסום"
            ].map((text, i) => (
              <GlowCard key={i} className="p-6 text-center border-red-200/50 bg-red-50/20" delay={i * 0.1}>
                <div className="flex items-center justify-center mb-4">
                  <X className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">{text}</p>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 relative bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-green-600 mb-8 leading-tight">
              ✅ מה כן?
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              "מנתחים את הדאטה הקיימת שלך – קבצים, CRM, וואטסאפ",
              "מפצחים את הפילוחים בתוכה",
              "בונים הודעות ומיילים חכמים לפי פסיכולוגיה של קנייה",
              "מפעילים עבורך קמפיין מותאם",
              "ואתה מקבל לידים – ישירות לשיחה או לסגירה"
            ].map((text, i) => (
              <GlowCard key={i} className="p-6 border-green-200/50 bg-green-50/20" delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight text-right">{text}</p>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 relative bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
              🎯 מה שונה אצלנו – ולמה זה באמת עובד?
            </h2>
          </motion.div>

          <GlowCard className="p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-8">
                בניגוד לחברות שעושות "אימייל מרקטינג", אנחנו מגיעים מהשטח.<br />
                <strong>Optione הוקמה על ידי אביב שמש</strong>, יועץ עסקי בכיר ומומחה לשיווק, מכירות ופיצוח אסטרטגי מבוסס דאטה.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-primary">הניסיון שלנו:</h3>
                  <ul className="text-lg text-gray-700 space-y-2">
                    <li>עבד עם מותגים מובילים: חלי ממן, כללית, אספרסו קלאב, מנדי גפנר</li>
                    <li>פיתח את שיטת שמש – שיווק | מכירה | שיטה</li>
                    <li>למעלה מ־2,000 בעלי עסקים עברו תחתיו</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-secondary">ההישגים שלנו:</h3>
                  <ul className="text-lg text-gray-700 space-y-2">
                    <li>ניהל מחלקת מכירות בחברת הייעוץ הגדולה בישראל</li>
                    <li>הכשיר עשרות יועצים עסקיים</li>
                    <li>ליווי אישי, קורסים וסדנאות מוכחות</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </GlowCard>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              📊 אבל לא רק האסטרטגיה –<br />גם הטכנולוגיה משנה את המשחק:
            </motion.h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/30 box-shadow-soft">
              
              {/* Personal Messages Section */}
              <motion.div
                className="mb-12"
                whileInView={{ scale: [0.95, 1] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-6">
                  כל איש קשר בדאטה שלך מקבל הודעה מותאמת אישית,<br />
                  לפי השיחה האחרונה, המוצר שהתעניין בו, האם נשלחה לו הצעה, ועוד.
                </p>
                
                <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
                  זה לא דיוור גנרי עם שם פרטי בלבד.
                </p>
                
                <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  זו הודעה שמרגישה כאילו נכתבה רק אליו –<br />
                  כי המערכת שלנו בונה את המסר לפי הדאטא שלו בפועל.
                </p>
              </motion.div>

              {/* Results Section */}
              <motion.div
                className="mb-12"
                whileInView={{ y: [20, 0], opacity: [0.8, 1] }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-8">
                  בזכות זה אנחנו רואים:
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { text: "אחוזי פתיחה גבוהים במיוחד", icon: "📈", color: "from-purple-500 to-purple-700" },
                    { text: "אחוז תגובה שמכפיל את הסטנדרט", icon: "💬", color: "from-blue-500 to-blue-700" },
                    { text: "יותר שיחות שבאמת מובילות לסגירה", icon: "🎯", color: "from-green-500 to-green-700" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                      className={`bg-gradient-to-r ${item.color} rounded-2xl p-6 text-white text-center`}
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <p className="text-lg font-bold">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16"
          ></motion.div>

          {/* Supermarket Example */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 rounded-3xl p-8 md:p-12 border border-orange-200/50 box-shadow-soft">
              
              <motion.div
                className="mb-8"
                whileInView={{ scale: [0.95, 1] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-6">
                  🛒 תחשבו על סופרמרקטים:
                </h3>
                
                <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-6">
                  איך רשתות כמו <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-black">שופרסל, רמי לוי או ויקטורי</span> יודעים בדיוק מתי להחזיר אותך עם הצעה משתלמת?
                </p>
                
                <motion.p 
                  className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  הם משתמשים בדאטא שלך.
                </motion.p>
                
                <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
                  זו השיטה הכי זולה והכי מדויקת ליצירת מכירות חוזרות.
                </p>
                
                <motion.p 
                  className="text-xl md:text-2xl font-black text-gray-800"
                  whileInView={{ scale: [0.95, 1] }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  ואנחנו מביאים אותה לעסק שלך –<br />
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    בלי צורך להחזיק צוות, לשלם למדיה או להקים קמפיינים.
                  </span>
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-32 relative bg-gradient-to-br from-green-50/30 via-white to-blue-50/20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-green-600 mb-8 leading-tight">
              🧭 למי זה מתאים?
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              "עסקים שמקבלים לפחות 100 לידים בחודש",
              "כאלה עם רשימות מיילים / וואטסאפ / לקוחות עבר",
              "מי שכבר שילם על שיווק – ורוצה סוף סוף לראות תוצאה",
              "אנשים בלי זמן להתעסק בדאטא – ורוצים שמישהו יעשה את זה בשבילם"
            ].map((text, i) => (
              <GlowCard key={i} className="p-6 border-green-200/50 bg-green-50/20" delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight text-right">{text}</p>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Not Suitable */}
      <section className="py-32 relative bg-gradient-to-br from-red-50/30 via-white to-pink-50/20">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-8 leading-tight">
              ❌ למי זה לא מתאים?
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              "מי שאין לו דאטה בכלל",
              "מי שמחפש לעשות הכל לבד",
              "מי שלא מבין שהכסף נמצא בדאטא",
              "מי שלא מוכן להשקיע כדי להרוויח"
            ].map((text, i) => (
              <GlowCard key={i} className="p-6 border-red-200/50 bg-red-50/20" delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <X className="w-8 h-8 text-red-500 flex-shrink-0" />
                  <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight text-right">{text}</p>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-32 relative bg-gradient-to-br from-yellow-50/30 via-white to-orange-50/20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-orange-600 mb-8 leading-tight">
              🎁 ההצעה שלנו – בול בשביל עסקים כמוך:
            </h2>
            
            <GlowCard className="p-8 md:p-12 border-orange-200/50 bg-orange-50/20 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-2xl md:text-3xl font-black text-gray-800 leading-relaxed mb-6">
                  שני חודשי ליווי – על בסיס הצלחה בלבד.
                </p>
                
                <p className="text-xl md:text-2xl font-bold text-gray-700 leading-relaxed mb-6">
                  שלם רק על תוצאה: פגישות שנקבעו, מכירות שבוצעו או לידים איכותיים שנכנסו.<br />
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-black">
                    לא הבאנו תוצאה – לא שילמת.
                  </span>
                </p>
                
                <p className="text-lg md:text-xl font-semibold text-gray-600">
                  אנחנו מציעים את זה כי אנחנו יודעים שזה עובד –<br />
                  וזה גם יוצר אמון מההתחלה. <strong>Win–Win.</strong>
                </p>
              </motion.div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Call Details */}
      <section className="py-32 relative bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
              📞 מה קורה בפגישת "כסף מהדאטא"?
            </h2>
            
            <GlowCard className="p-8 md:p-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-8">
                  פגישה של עד שעה בזום – ללא עלות וללא התחייבות.
                </p>
                
                <h3 className="text-2xl md:text-3xl font-black text-secondary mb-6">
                  במהלך הפגישה:
                </h3>
                
                <div className="space-y-4 text-right">
                  {[
                    "– נבין מה יש לך היום בדאטא בייס",
                    "– ננתח פילוחים",
                    "– נבין את ההצעה העסקית שלך",
                    "– נזהה את קהלי היעד",
                    "– ונסיים עם תוכנית פעולה מדויקת"
                  ].map((text, i) => (
                    <motion.p
                      key={i}
                      className="text-lg md:text-xl font-semibold text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-8">
                  שתראה לך איך אפשר להפוך את הלידים הרדומים לרווחים.
                </p>
              </motion.div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 bg-primary/90 backdrop-blur-md border border-primary/30 text-white px-12 py-6 rounded-3xl mb-8 box-shadow-soft hover:bg-primary transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-8 h-8" />
              <span className="text-2xl md:text-3xl font-black">
                🔵 לתיאום שיחת "כסף מהדאטא" – לחיצה כאן
              </span>
            </motion.div>
            
            <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
              📍 ההצעה זמינה כרגע ללא עלות – למתאמים ראשונים בלבד.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Index;