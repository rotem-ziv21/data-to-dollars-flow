import { Button } from "@/components/ui/button";
import { CheckCircle, X, Users, Target, TrendingUp, Database, Zap, ArrowLeft, Star, Award, Play, Sparkles } from "lucide-react";
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
          <motion.h1 
            className="text-3xl font-black text-primary text-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent">
              Optione
            </span>
          </motion.h1>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative">
        <motion.div 
          className="max-w-7xl mx-auto px-8 text-center relative z-10"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary">השירות שמייצר</span>
              <br />
              <motion.span 
                className="bg-gradient-to-l from-secondary via-accent to-primary bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                כסף מהדאטה שלך
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <GlowCard className="p-16 mb-16 max-w-5xl mx-auto">
            <motion.div
              className="flex items-center justify-center mb-8"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-secondary to-accent w-24 h-24 rounded-full flex items-center justify-center animate-pulse-glow">
                <Play className="w-12 h-12 text-white" fill="white" />
              </div>
            </motion.div>
            <motion.p 
              className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              "אם יש לך רשימות לידים, דאטה מהקמפיינים או קהל שלא הגיב – אל תזרוק אותם לפח. 
              <span className="text-primary"> אנחנו יודעים להחזיר אותם לחיים.</span>"
            </motion.p>
          </GlowCard>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-16"
          >
            <GlowCard className="p-16">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                השירות שיחזיר לחיים את הלידים 
                <motion.span 
                  className="text-secondary"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  "הרדומים"
                </motion.span> שלך
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-12">
                ויהפוך דאטה מתה לרווחים בפועל
              </h3>
              
              <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-12 border-2 border-primary/20">
                <motion.p 
                  className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
                  whileInView={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  לא מערכת. לא קורס. לא קמפיינר שרוצה כסף לפני שהראה לך תוצאות.
                </motion.p>
                <p className="text-2xl md:text-3xl font-black text-primary">
                  אנחנו עושים את העבודה בשבילך – על בסיס הדאטא הקיימת שלך.
                </p>
              </div>
            </GlowCard>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: CheckCircle, color: "green", text: "מסע לקוח שיוצר לקוחות איכותיים", delay: 0 },
              { icon: Target, color: "blue", text: "בלי להוציא שקל על שיווק", delay: 0.2 },
              { icon: Zap, color: "purple", text: "כל התוכנות הדרושות – עלינו!", delay: 0.4 }
            ].map((item, i) => (
              <GlowCard key={i} className="p-8" delay={item.delay}>
                <motion.div
                  whileHover={{ y: -10, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <item.icon className={`w-16 h-16 text-${item.color}-600 mx-auto mb-6`} />
                  </motion.div>
                  <p className="text-xl font-bold text-gray-800">{item.text}</p>
                </motion.div>
              </GlowCard>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(255, 122, 69, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="gradient-secondary hover:opacity-90 text-white px-16 py-8 text-3xl font-black rounded-3xl box-shadow-intense transition-all duration-300 animate-pulse-glow relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">🔵 לתיאום שיחת "כסף מהדאטא" ←</span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.div
              className="inline-flex items-center gap-4 bg-red-100 px-8 py-4 rounded-full border-2 border-red-200 mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-3xl">😤</span>
              <span className="text-xl font-bold text-red-700">הבעיה הכי נפוצה</span>
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-primary mb-16 leading-tight"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            "אבל כבר שילמתי<br />עשרות אלפים על שיווק…"
          </motion.h2>
          
          <div className="space-y-8 mb-16">
            {[
              { text: "בדיוק.", color: "primary", delay: 0 },
              { text: "הדאטה אצלך.", color: "secondary", delay: 0.2 },
              { text: "אתה יודע שיש לך שירות טוב.", color: "green-600", delay: 0.4 },
              { text: "אתה רק צריך מישהו שייקח את כל מה שצברת – ויהפוך את זה לתוצאה.", color: "accent", delay: 0.6 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: item.delay }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
              >
                <GlowCard className={`p-10 border-r-8 border-${item.color.replace('-600', '-500')}`}>
                  <p className={`text-3xl md:text-4xl font-black text-${item.color}`}>
                    {item.text}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <GlowCard className="p-16 border-t-8 border-primary">
            <motion.div
              className="flex items-center justify-center mb-8"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="bg-primary/20 rounded-full p-8">
                <TrendingUp className="w-16 h-16 text-primary" />
              </div>
            </motion.div>
            <motion.p 
              className="text-4xl md:text-5xl font-black text-primary mb-8"
              whileInView={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              רוב העסקים לא צריכים עוד לידים.
            </motion.p>
            <p className="text-3xl md:text-4xl font-black text-secondary">
              הם צריכים לעבוד נכון עם מה שכבר יש.
            </p>
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
              { number: 95, suffix: "%", label: "אחוזי פתיחה", color: "green", delay: 0 },
              { number: 78, suffix: "%", label: "אחוז תגובה", color: "blue", delay: 0.3 },
              { number: 340, suffix: "%", label: "עלייה בסגירות", color: "purple", delay: 0.6 }
            ].map((stat, i) => (
              <GlowCard key={i} className={`p-12 border-t-8 border-${stat.color}-500`} delay={stat.delay}>
                <motion.div
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`text-7xl md:text-8xl font-black text-${stat.color}-600 mb-4`}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 1, delay: stat.delay }}
                  >
                    <AnimatedCounter end={stat.number} />{stat.suffix}
                  </motion.div>
                  <p className="text-xl font-bold text-gray-800 mb-2">{stat.label}</p>
                  <div className={`w-full h-2 bg-${stat.color}-100 rounded-full overflow-hidden`}>
                    <motion.div
                      className={`h-full bg-${stat.color}-500`}
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
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex items-center justify-center mb-8"
            >
              <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-full p-8 animate-pulse-glow">
                <Database className="w-20 h-20 text-white" />
              </div>
            </motion.div>
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
              {["מערכת", "פגישה", "סיסמאות"].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  >
                    ❌
                  </motion.div>
                  <p className="text-2xl font-bold">{item}</p>
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
            <motion.h3 
              className="text-4xl md:text-5xl font-black mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Optione
            </motion.h3>
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