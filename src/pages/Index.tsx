import { Button } from "@/components/ui/button";
import { CheckCircle, X, Users, Target, TrendingUp, Database, Zap, ArrowLeft, Star, Award, Play, Sparkles, UserPlus, DollarSign, Settings } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ThreeBackground from "../components/ThreeBackground";

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const GlowCard = ({ children, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05, rotateY: 5 }}
    className={`bg-white/80 backdrop-blur-xl rounded-3xl box-shadow-intense border border-white/20 relative overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const PulsingOrb = ({ color, size, top, left, delay }: any) => (
  <motion.div
    className={`absolute w-${size} h-${size} rounded-full blur-3xl opacity-20`}
    style={{ 
      background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
      top, 
      left 
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
    }}
  />
);

export default function Index() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden" dir="rtl">
      <ThreeBackground />
      
      {/* Floating orbs */}
      <PulsingOrb color="#120c4c" size="96" top="10%" left="5%" delay={0} />
      <PulsingOrb color="#ff7a45" size="64" top="20%" left="80%" delay={1} />
      <PulsingOrb color="#ff02ff" size="80" top="60%" left="10%" delay={2} />
      <PulsingOrb color="#120c4c" size="72" top="80%" left="85%" delay={3} />

      {/* Floating Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <motion.div 
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/lovable-uploads/770b5634-76b0-4acf-a31b-00fdf6c13161.png" 
              alt="Optione - פשוט לשלוט בעסק" 
              className="h-12 md:h-16"
            />
          </motion.div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 relative bg-gradient-to-br from-primary via-primary/90 to-secondary/20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video Section - Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl p-8 border border-white/20">
                <motion.div
                  className="bg-gradient-to-r from-secondary to-accent w-32 h-32 rounded-full flex items-center justify-center mx-auto animate-pulse-glow"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Play className="w-16 h-16 text-white" fill="white" />
                </motion.div>
                <div className="mt-8 text-center">
                  <p className="text-xl font-bold text-white leading-relaxed">
                    "אם יש לך רשימות לידים, דאטה מהקמפיינים או קהל שלא הגיב – אל תזרוק אותם לפח. 
                    <span className="text-secondary"> אנחנו יודעים להחזיר אותם לחיים.</span>"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content Section - Right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-right relative"
            >

              <motion.h1 
                className="text-4xl md:text-6xl font-black mb-4 leading-tight text-white text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-secondary">השירות שמייצר</span>
                <br />
                <span className="text-white">כסף מהדאטה שלך</span>
              </motion.h1>

              {/* המשפט החשוב כתת-כותרת מרכזית */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div 
                  className="inline-block"
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <h2 className="text-2xl md:text-3xl font-black text-white relative">
                    <span className="relative inline-block">
                      ויהפוך דאטה מתה לרווחים בפועל
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                      />
                    </span>
                  </h2>
                </motion.div>
              </motion.div>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-white/90 text-center">
                  השירות שיחזיר לחיים את הלידים 
                  <span className="text-secondary font-black"> "הרדומים" </span> 
                  שלך
                </h3>
                
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 box-shadow-intense">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight space-y-2">
                      <p>לא מערכת</p>
                      <p>לא קורס</p>
                      <p>לא קמפיינר</p>
                    </div>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl p-6 border-2 border-secondary/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-2xl md:text-3xl font-black text-white leading-tight">
                        אנחנו עושים את העבודה בשבילך –<br />
                        על בסיס הדאטא הקיימת שלך.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button 
                  size="lg" 
                  className="gradient-secondary hover:opacity-90 hover:scale-105 transition-all duration-300 text-white px-16 py-8 text-xl md:text-2xl font-black rounded-3xl box-shadow-intense relative overflow-hidden group w-full max-w-md mx-auto"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    לתיאום שיחת "כסף מהדאטא"
                    <ArrowLeft className="w-6 h-6" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-20 mb-12 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
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

      {/* Problem Statement */}
      <section className="py-24 bg-gradient-to-r from-gray-100 to-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-6xl font-black text-primary mb-16 leading-tight"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            "אבל כבר שילמתי<br />עשרות אלפים על שיווק…"
          </motion.h2>
          
          <div className="space-y-12 mb-16">
            {[
              { text: "בדיוק.", colorText: "text-primary", colorBorder: "border-primary", delay: 0 },
              { text: "הדאטה אצלך.", colorText: "text-secondary", colorBorder: "border-secondary", delay: 0.2 },
              { text: "אתה יודע שיש לך שירות טוב.", colorText: "text-green-600", colorBorder: "border-green-500", delay: 0.4 },
              { text: "אתה רק צריך מישהו שייקח את כל מה שצברת – ויהפוך את זה לתוצאה.", colorText: "text-accent", colorBorder: "border-accent", delay: 0.6 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                whileHover={{ scale: 1.02 }}
                className="max-w-4xl mx-auto"
              >
                <GlowCard className={`p-8 md:p-12 border-r-8 ${item.colorBorder}`}>
                  <p className={`text-2xl md:text-3xl font-black ${item.colorText} leading-relaxed`}>
                    {item.text}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <GlowCard className="p-12 md:p-16 border-t-8 border-primary">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-primary/20 rounded-full p-8">
                  <TrendingUp className="w-16 h-16 text-primary" />
                </div>
              </div>
              <motion.p 
                className="text-3xl md:text-4xl font-black text-primary mb-8 leading-tight"
                whileInView={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2 }}
              >
                רוב העסקים לא צריכים עוד לידים.
              </motion.p>
              <p className="text-2xl md:text-3xl font-black text-secondary leading-tight">
                הם צריכים לעבוד נכון עם מה שכבר יש.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* About Aviv - What Makes Us Different */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full box-shadow-soft mb-6">
              <Award className="w-8 h-8 text-secondary" />
              <span className="text-xl font-bold text-primary">למה לסמוך עלינו?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              מה מייחד אותנו – ולמה זה באמת עובד?
            </h2>
            <p className="text-2xl font-medium text-gray-600">
              בניגוד לחברות שעושות "אימייל מרקטינג", אנחנו מגיעים מהשטח.
            </p>
          </div>

          <GlowCard className="max-w-5xl mx-auto border-t-8 border-secondary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <div className="p-12">
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
                  <motion.div 
                    className="bg-primary/5 p-6 rounded-2xl border-r-4 border-primary"
                    whileInView={{ x: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8 }}
                  >
                    <p>
                      Optione הוקמה על ידי <strong className="text-primary">אביב שמש</strong>, יועץ עסקי בכיר, מומחה לשיווק, מכירות ופיצוח אסטרטגי מבוסס דאטה, עם ניסיון של למעלה מעשור בליווי עסקים להגדלת מכירות.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-secondary/5 p-6 rounded-2xl border-r-4 border-secondary"
                    whileInView={{ x: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <p>
                      אביב עבד עם מותגים מהשורה הראשונה בישראל – <strong className="text-secondary">חלי ממן, כללית שירותי בריאות, מנדי גפנר, אספרסו קלאב</strong> ועוד.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-accent/5 p-6 rounded-2xl border-r-4 border-accent"
                    whileInView={{ x: [50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <p>
                      הוא פיתח את <strong className="text-accent">שיטת "שמש"</strong> – שיווק | מכירה | שיטה – מודל עבודה שמוביל עסקים לתוצאות אמיתיות.
                    </p>
                  </motion.div>
                </div>
                
                <div className="text-center">
                  <motion.div 
                    className="bg-gradient-to-br from-secondary to-accent rounded-3xl p-12 text-white box-shadow-intense"
                    whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                  >
                    <div className="text-6xl font-black mb-4">
                      <AnimatedCounter end={2000} />+
                    </div>
                    <div className="text-xl font-bold mb-2">בעלי עסקים</div>
                    <div className="text-lg opacity-90">עברו תחתיו בליווי אישי</div>
                    <div className="flex justify-center mt-6 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-current" />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center"
                whileInView={{ y: [30, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-lg text-gray-700 mb-4">
                  בעברו ניהל את מחלקת המכירות של חברת הייעוץ העסקי הגדולה בישראל והכשיר יועצים עסקיים תוך התמחות ביצירת תהליכים מניבים, אוטומטיים ומדויקים.
                </p>
              </motion.div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Technology Stats */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-4 bg-primary/10 px-8 py-4 rounded-full mb-8">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-2xl font-black text-primary">הטכנולוגיה שלנו</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-primary mb-8">
              משנה את כללי המשחק
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              { number: 95, suffix: "%", label: "אחוזי פתיחה", colorText: "text-green-600", colorBorder: "border-green-500", colorBg: "bg-green-100", colorBar: "bg-green-500", delay: 0 },
              { number: 78, suffix: "%", label: "אחוז תגובה", colorText: "text-blue-600", colorBorder: "border-blue-500", colorBg: "bg-blue-100", colorBar: "bg-blue-500", delay: 0.3 },
              { number: 340, suffix: "%", label: "עלייה בסגירות", colorText: "text-purple-600", colorBorder: "border-purple-500", colorBg: "bg-purple-100", colorBar: "bg-purple-500", delay: 0.6 }
            ].map((stat, i) => (
              <GlowCard key={i} className={`p-12 border-t-8 ${stat.colorBorder}`} delay={stat.delay}>
                <motion.div
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`text-7xl md:text-8xl font-black ${stat.colorText} mb-4`}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 1, delay: stat.delay }}
                  >
                    <AnimatedCounter end={stat.number} />{stat.suffix}
                  </motion.div>
                  <p className="text-xl font-bold text-gray-800 mb-2">{stat.label}</p>
                  <div className={`w-full h-2 ${stat.colorBg} rounded-full overflow-hidden`}>
                    <motion.div
                      className={`h-full ${stat.colorBar}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(stat.number, 100)}%` }}
                      transition={{ duration: 2, delay: stat.delay + 0.5 }}
                    />
                  </div>
                </motion.div>
              </GlowCard>
            ))}
          </div>

          <GlowCard className="p-16">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-full p-8">
                <Database className="w-20 h-20 text-white" />
              </div>
            </div>
            <motion.p 
              className="text-3xl md:text-4xl font-black text-primary mb-8"
              whileInView={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              כל איש קשר מקבל הודעה מותאמת אישית
            </motion.p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              המערכת שלנו יוצרת הודעה שנראית כאילו נכתבה במיוחד עבורו
            </p>
            <motion.div
              className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl p-8 border-2 border-accent/30"
              whileHover={{ scale: 1.02, rotateX: 2 }}
            >
              <p className="text-2xl md:text-3xl font-black text-accent">
                זה ההבדל בין "עוד מייל" – לבין קמפיין שמרגיש כמו שיחה אישית חכמה.
              </p>
            </motion.div>
          </GlowCard>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"
          animate={{ 
            background: [
              'linear-gradient(45deg, #120c4c, #ff7a45, #ff02ff)',
              'linear-gradient(135deg, #ff02ff, #120c4c, #ff7a45)',
              'linear-gradient(225deg, #ff7a45, #ff02ff, #120c4c)',
              'linear-gradient(315deg, #120c4c, #ff7a45, #ff02ff)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10 text-white">
          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            מוכן להתחיל להרוויח מהדאטה?
          </motion.h2>
          
          <GlowCard className="p-16 mb-16 bg-white/10 backdrop-blur-xl border-white/20">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {[
                { icon: "📞", title: "פגישות", subtitle: "ללא עלות" },
                { icon: "🎯", title: "לידים", subtitle: "ללא עלות" },
                { icon: "💰", title: "מכירות", subtitle: "ללא עלות" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="text-3xl font-black mb-2">{item.title}</p>
                  <p className="text-xl text-white/80">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="bg-secondary/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-secondary/50"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl md:text-5xl font-black">רק תוצאה = תשלום</p>
            </motion.div>
          </GlowCard>

          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-20 py-10 text-3xl font-black rounded-3xl box-shadow-intense transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative z-10">🔵 לתיאום שיחה עכשיו</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/20 px-16 py-8 text-xl font-bold rounded-2xl backdrop-blur-sm"
              >
                🔵 קבל דוגמה מותאמת לדאטה שלך
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="mt-24 pt-16 border-t border-white/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="text-4xl md:text-5xl font-black mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <img 
                src="/lovable-uploads/a192ce18-e4fe-4b99-9f53-ead383b46f7f.png" 
                alt="Optione - פשוט לשלוט בעסק" 
                className="h-16 md:h-20 mx-auto"
              />
            </motion.div>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              לא צריך מערכת חדשה כדי לייצר תוצאה.<br />
              <motion.span 
                className="font-black"
                whileInView={{ color: ['#ffffff', '#ff7a45', '#ff02ff', '#ffffff'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                רק דאטה קיימת + חשיבה חכמה + ביצוע מדויק.
              </motion.span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
