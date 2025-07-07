import { Button } from "@/components/ui/button";
import { CheckCircle, X, Users, Target, TrendingUp, Database, Zap, ArrowLeft, Star, Award, Play, Sparkles, UserPlus, DollarSign, Settings } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ThreeBackground from "../components/ThreeBackground";
import funnelImage from "../assets/data-funnel-infographic.jpg";
import supermarketDataFlow from "../assets/supermarket-data-flow.jpg";

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
      <section className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-12 leading-tight"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              "אבל כבר שילמתי<br />עשרות אלפים על שיווק…"
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/30 box-shadow-soft">
              
              {/* Visual Data Representation */}
              <div className="flex justify-center items-center mb-8">
                
                {/* Enhanced Pie Chart Visual - Smaller */}
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    {/* Main circle background - Green */}
                    <div className="absolute inset-0 rounded-full bg-green-500 shadow-lg"></div>
                    
                    {/* 90% Red section - positioned at top */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from -90deg, #ef4444 0deg, #ef4444 324deg, transparent 324deg)`,
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    />

                    {/* Center white circle */}
                    <div className="absolute inset-6 bg-white rounded-full shadow-inner flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 2, duration: 0.8 }}
                        >
                          <div className="text-3xl font-black text-red-500 mb-1">90%</div>
                          <div className="text-xs font-bold text-gray-600">לא נסגרו</div>
                        </motion.div>
                        
                        <div className="w-8 h-0.5 bg-gray-300 mx-auto"></div>
                        
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 2.5, duration: 0.8 }}
                        >
                          <div className="text-lg font-black text-green-500 mb-1">10%</div>
                          <div className="text-xs font-bold text-gray-600">נסגרו</div>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Label for 90% - Red */}
                    <motion.div 
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-lg font-bold text-xs shadow-lg"
                      initial={{ scale: 0, opacity: 0, y: 20 }}
                      whileInView={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ delay: 3, type: "spring" }}
                    >
                      <div className="flex items-center gap-1">
                        <span>✗</span>
                        <span>90% לא נסגרו</span>
                      </div>
                      {/* Arrow pointing down */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rotate-45"></div>
                    </motion.div>

                    {/* Label for 10% - Green */}
                    <motion.div 
                      className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-lg font-bold text-xs shadow-lg"
                      initial={{ scale: 0, opacity: 0, x: -20 }}
                      whileInView={{ scale: 1, opacity: 1, x: 0 }}
                      transition={{ delay: 3.5, type: "spring" }}
                    >
                      <div className="flex items-center gap-1">
                        <span>✓</span>
                        <span>10% נסגרו</span>
                      </div>
                      {/* Arrow pointing left */}
                      <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-500 rotate-45"></div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4 }}
                  >
                    <p className="text-xl md:text-2xl font-bold text-gray-700">
                      המצב הנוכחי ברוב העסקים:
                    </p>
                    <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      90% מהלידים הולכים לפח!
                    </p>
                  </motion.div>

                  {/* Call-to-action - Text only */}
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 4.5 }}
                  >
                    <div className="text-center">
                      <motion.p 
                        className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent"
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
                        ← כאן נמצא הגידול ברווח שלך! →
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Text Content - Condensed */}
              <div className="text-center space-y-4">
                <motion.p 
                  className="text-2xl md:text-3xl font-black text-gray-800 leading-tight"
                  whileInView={{ scale: [0.95, 1] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  רוב העסקים מקבלים לידים – וסוגרים אולי 10% מהם.
                </motion.p>
                
                <motion.p 
                  className="text-2xl md:text-3xl font-black text-gray-800 leading-tight"
                  whileInView={{ scale: [0.95, 1] }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  אבל מה עם כל ה־90% שלא סגרו?
                </motion.p>
              </div>

              {/* Main Message - Condensed */}
              <motion.div
                className="relative mt-8"
                whileInView={{ y: [20, 0], opacity: [0.8, 1] }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gradient-to-r from-primary/30 to-secondary/30">
                  <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight mb-4 text-center">
                    זו בדיוק הדרך שלך למקסם את הרווח מהדאטא שכבר שילמת עליה –
                  </p>
                  <motion.p 
                    className="text-xl md:text-2xl font-black bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent leading-tight text-center"
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
                    במקום לרדוף אחרי עוד לידים חדשים.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* What we DON'T do & What we DO - Side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* What we DON'T do */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-red-50/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-red-200/50"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-xl text-lg font-black">
                    ❌ מה אנחנו לא עושים?
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-lg font-bold text-red-700">
                    לא מוכרים לך מערכת טכנולוגית חדשה
                  </p>
                  <p className="text-lg font-bold text-red-700">
                    לא שולחים אותך לקורסים
                  </p>
                  <p className="text-lg font-bold text-red-700">
                    לא מציעים קמפיין עם תקציב פרסום
                  </p>
                </div>
              </motion.div>

              {/* What we DO */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="bg-green-50/80 backdrop-blur-xl rounded-2xl p-8 border-2 border-green-200/50"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-xl text-lg font-black">
                    ✅ מה כן?
                  </div>
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-lg font-bold text-green-700">
                    מנתחים את הדאטא הקיימת שלך
                  </p>
                  <p className="text-lg font-bold text-green-700">
                    מפצחים את הפילוחים
                  </p>
                  <p className="text-lg font-bold text-green-700">
                    בונים קמפיינים חכמים
                  </p>
                  <p className="text-lg font-bold text-green-700">
                    ואתה מקבל לידים – לשיחה או סגירה
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-br from-primary via-secondary to-accent p-[3px] rounded-3xl"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 text-center">
                <p className="text-3xl md:text-4xl font-black text-primary mb-6">
                  רוצה לראות איך זה נראה אצלך?
                </p>
                <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
                  לתיאום פגישת "כסף מהדאטא" – ללא עלות וללא התחייבות
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="gradient-secondary hover:opacity-90 hover:scale-105 transition-all duration-300 text-white px-12 py-6 text-xl font-black rounded-3xl box-shadow-intense"
                  >
                    לחיצה כאן לתיאום פגישה
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Aviv - What Makes Us Different */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/30"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 bg-primary/90 backdrop-blur-md border border-primary/30 text-white px-8 py-4 rounded-2xl mb-8 box-shadow-soft hover:bg-primary transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-white/20 p-2 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">למה לסמוך עלינו?</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 leading-tight">
              מה מייחד אותנו –<br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                ולמה זה באמת עובד?
              </span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Left Column - Avatar & Stats */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard className="p-8 text-center h-full">
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-br from-secondary to-accent">
                  <img 
                    src="/lovable-uploads/05706208-e8be-40d1-b0b5-ebce152b911c.png"
                    alt="אביב שמש - מייסד Optione"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-2">
                  <span className="text-secondary">אביב שמש</span>
                </h3>
                <p className="text-lg font-bold text-gray-600 mb-8">מייסד Optione</p>
                
                <div className="space-y-6">
                  <motion.div 
                    className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl font-black mb-2">
                      <AnimatedCounter end={2000} />+
                    </div>
                    <div className="text-sm font-bold">בעלי עסקים שעברו תחתיו בליווים, סדנאות והכשרות</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl font-black mb-2">10+</div>
                    <div className="text-sm font-bold">שנות ניסיון</div>
                  </motion.div>
                  
                  <div className="flex justify-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Key Points */}
              <div className="grid gap-6">
                <motion.div 
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-r-8 border-primary box-shadow-soft"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-right">
                      <h4 className="text-xl font-black text-primary mb-2">מומחה לשיווק ומכירות</h4>
                      <p className="text-gray-700 leading-relaxed">
                        יועץ עסקי בכיר עם התמחות בפיצוח אסטרטגי מבוסס דאטה ולמעלה מעשור של ניסיון בליווי עסקים להגדלת מכירות. בעברו ניהל את מחלקת המכירות של חברת הייעוץ העסקי הגדולה בישראל והכשיר יועצים עסקיים.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-r-8 border-secondary box-shadow-soft"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-full p-3 flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="text-right">
                      <h4 className="text-xl font-black text-secondary mb-4">עבד עם המותגים הגדולים</h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        <strong>חלי ממן, כללית שירותי בריאות, מנדי גפנר, אספרסו קלאב, בנקים מובלים, כלל חברה לביטוח, ספיר זיסמן, דנטלון</strong> ועוד מותגים מהשורה הראשונה בישראל.
                      </p>
                      
                      {/* Logos Grid */}
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
                        <motion.div 
                          className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/lovable-uploads/4e30c075-8a49-4de8-ac81-86f2df88c108.png" 
                            alt="כלל ביטוח" 
                            className="h-20 w-auto object-contain"
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/lovable-uploads/95f0e530-803c-478f-ad7b-ee3363030c84.png" 
                            alt="כללית" 
                            className="h-20 w-auto object-contain"
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/lovable-uploads/fcb54499-0248-40a8-b561-caa4486588dc.png" 
                            alt="דנטלון" 
                            className="h-20 w-auto object-contain"
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/lovable-uploads/981cc350-a982-4231-8537-6ac83883e9ce.png" 
                            alt="אספרסו קלאב" 
                            className="h-20 w-auto object-contain"
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src="/lovable-uploads/78df8547-a9ee-4e74-b6a6-b1dc55d32456.png" 
                            alt="חלי ממן" 
                            className="h-20 w-auto object-contain"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-r-8 border-accent box-shadow-soft"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-full p-3 flex-shrink-0">
                      <Zap className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-right">
                      <h4 className="text-xl font-black text-accent mb-2">שיטת "שמש" הייחודית</h4>
                      <div className="text-gray-700 leading-relaxed">
                        <p className="mb-2">
                          <strong className="text-accent">שיווק | מכירה | שיטה</strong> – מודל עבודה שמוביל עסקים לתוצאות אמיתיות.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlowCard className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-2 border-gradient-to-r from-primary/20 to-accent/20">
              <div className="text-center">
                <motion.p 
                  className="text-3xl md:text-4xl font-black text-primary mb-6"
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  מוכן לראות איך זה עובד אצלך?
                </motion.p>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  בניגוד לחברות שעושות "אימייל מרקטינג" כללי –<br />
                  <strong>אנחנו מגיעים מהשטח עם תוצאות אמיתיות.</strong>
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="gradient-secondary hover:opacity-90 text-white px-12 py-6 text-xl font-black rounded-3xl box-shadow-intense"
                  >
                     תיאום פגישה "כסף מדאטא"
                  </Button>
                </motion.div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
              אבל לא רק האסטרטגיה –<br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                גם הטכנולוגיה משנה את המשחק:
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-200/50 box-shadow-soft w-full h-72"
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={funnelImage}
                  alt="משפך המרת דאטה להודעות מותאמות אישית"
                  className="w-full h-full object-contain p-2"
                />
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-right space-y-8"
            >
              <motion.p 
                className="text-2xl md:text-3xl font-black text-primary leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                כל איש קשר בדאטה שלך מקבל הודעה מותאמת אישית,<br />
                לפי השיחה האחרונה, המוצר שהתעניין בו, האם נשלחה לו הצעה, ועוד.
              </motion.p>
              
              <motion.p 
                className="text-xl md:text-2xl font-bold text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                זה לא דיוור גנרי עם שם פרטי בלבד.<br />
                זו הודעה שמרגישה כאילו נכתבה רק אליו<br />
              </motion.p>
            </motion.div>
          </div>
          
          {/* תוצאות שאנחנו רואים - מלא רוחב למטה */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20 w-full max-w-6xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-black text-primary mb-10 text-center">
              בזכות זה אנחנו רואים:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[
                { 
                  icon: TrendingUp,
                  text: "אחוזי פתיחה גבוהים במיוחד",
                  color: "from-green-500 to-emerald-600"
                },
                { 
                  icon: Target,
                  text: "אחוז תגובה שמכפיל את הסטנדרט", 
                  color: "from-blue-500 to-cyan-600"
                },
                { 
                  icon: Award,
                  text: "יותר שיחות שבאמת מובילות לסגירה",
                  color: "from-purple-500 to-violet-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* דוגמה מסופרמרקטים - עיצוב מחודש */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-20 max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-12 border border-gray-200/30 shadow-xl">
              
              <motion.h4 
                className="text-4xl md:text-6xl font-black mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-tight text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                תחשבו על סופרמרקטים:
              </motion.h4>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="order-2 lg:order-1"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <img 
                      src={supermarketDataFlow}
                      alt="תהליך ניתוח דאטה של סופרמרקטים"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </motion.div>
                
                {/* Right Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="order-1 lg:order-2 text-right space-y-8"
                >
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    איך רשתות כמו <span className="font-bold text-red-600">שופרסל</span>, <span className="font-bold text-red-600">רמי לוי</span> או <span className="font-bold text-orange-600">ויקטורי</span> יודעים בדיוק מתי להחזיר אותך עם הצעה משתלמת?
                  </p>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl px-8 py-6 text-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="text-2xl md:text-3xl font-black text-white">
                      הם משתמשים בדאטא שלך
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <motion.p 
                      className="text-2xl md:text-3xl font-black text-gray-800 leading-relaxed"
                      whileInView={{ 
                        scale: [1, 1.05, 1],
                        color: ["#1f2937", "#6366f1", "#1f2937"]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >
                      זו השיטה הכי זולה והכי מדויקת ליצירת מכירות חוזרות.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Bottom CTA - עיצוב חדש פשוט */}
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl px-8 py-6 border border-pink-200/50 inline-block max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                    ואנחנו מביאים אותה לעסק שלך – בלי צורך להחזיק צוות, לשלם למדיה או להקים קמפיינים.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ההצעה שלנו - עיצוב מקצועי ומשכנע */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        {/* אפקטי רקע */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/40 to-transparent rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          
          {/* כותרת עם אנימציה מרשימה */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-5xl md:text-8xl font-black bg-gradient-to-l from-secondary via-accent to-primary bg-clip-text text-transparent mb-8 leading-tight relative">
                ההצעה שלנו
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl -z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </h2>
            </motion.div>
          </motion.div>

          {/* ההצעה המרכזית - עיצוב מרשים */}
          <motion.div 
            className="relative mb-24"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 shadow-2xl border-2 border-white/50 relative overflow-hidden">
              {/* אפקט זוהר */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
              <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
              
              <div className="relative z-10 text-center space-y-12">
                
                {/* כותרת מרכזית מעוצבת */}
                <motion.h3 
                  className="text-4xl md:text-6xl font-black text-gray-900 leading-tight relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="relative inline-block">
                    שני חודשי ליווי –
                    <motion.div 
                      className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl -z-10"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent relative inline-block text-shadow">
                    על בסיס הצלחה בלבד
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full shadow-lg"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.8,
                        ease: "easeOut"
                      }}
                      style={{ originX: 0 }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40 rounded-full blur-md"
                      animate={{ 
                        scaleX: [1, 1.1, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute -inset-3 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl blur-2xl -z-10"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 1, -1, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </span>
                </motion.h3>
                
                {/* קופסת הסבר מעוצבת */}
                <motion.div 
                  className="bg-gradient-to-br from-gray-50 to-gray-100/80 rounded-[2rem] p-10 md:p-12 max-w-4xl mx-auto border border-gray-200/50 shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="space-y-8">
                    
                    {/* נקודה ראשונה */}
                    <motion.div 
                      className="bg-white/80 rounded-2xl p-8 border border-gray-200/50 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed text-center">
                        שלם רק על תוצאה: פגישות שנקבעו, מכירות שבוצעו או לידים איכותיים שנכנסו
                      </p>
                    </motion.div>
                    
                    {/* נקודה שנייה - מודגשת */}
                    <motion.div 
                      className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border-2 border-accent/30 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <p className="text-xl md:text-2xl font-black text-center leading-relaxed bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        לא הבאנו תוצאה – לא שילמת
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* הודעת Win-Win מעוצבת */}
                <motion.div 
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-[2rem] p-8 md:p-10 max-w-3xl mx-auto text-white shadow-2xl relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50" />
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-bold leading-relaxed text-center">
                      אנחנו מציעים את זה כי אנחנו יודעים שזה עובד –
                    </p>
                    <motion.p 
                      className="text-2xl md:text-4xl font-black mt-4 text-center"
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Win–Win מההתחלה
                      <motion.span
                        className="inline-block ml-3 text-3xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🚀
                      </motion.span>
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* מה קורה בפגישה - עיצוב מרשים */}
          <motion.div 
            className="relative mb-24"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 shadow-2xl border-2 border-white/50 relative overflow-hidden">
              {/* אפקט רקע */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
              
              <div className="relative z-10">
                {/* כותרת מעוצבת */}
                <div className="text-center mb-16">
                  <motion.div 
                    className="relative inline-block mb-8"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-28 h-28 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-3xl shadow-2xl flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />
                      <span className="text-5xl relative z-10">📞</span>
                      <motion.div
                        className="absolute -inset-3 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-[2.5rem] blur-xl -z-10"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                    מה קורה בפגישת<br />
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      "כסף מהדאטא"?
                    </span>
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-gray-600 font-semibold">
                    פגישה של עד שעה בזום – ללא עלות וללא התחייבות
                  </p>
                </div>
                
                {/* תוכן הפגישה */}
                <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-[2rem] p-10 md:p-12 border-2 border-blue-200/50 shadow-xl">
                  <p className="text-2xl md:text-3xl font-black text-gray-900 mb-12 text-center">
                    במהלך הפגישה:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {[
                      { text: "נבין מה יש לך היום בדאטא בייס", icon: "📊" },
                      { text: "ננתח פילוחים", icon: "🔍" }, 
                      { text: "נבין את ההצעה העסקית שלך", icon: "💼" },
                      { text: "נזהה את קהלי היעד", icon: "🎯" },
                      { text: "ונסיים עם תוכנית פעולה מדויקת", icon: "📋" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-6 text-right bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 group"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ 
                          scale: 1.03, 
                          x: 10,
                          boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)"
                        }}
                      >
                        <motion.div 
                          className="text-3xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {item.icon}
                        </motion.div>
                        <p className="text-lg md:text-xl text-gray-800 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* התוצאה הסופית */}
                  <motion.div 
                    className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-[2rem] p-8 md:p-10 max-w-4xl mx-auto text-white text-center shadow-2xl relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                    <motion.p 
                      className="text-2xl md:text-3xl font-black leading-tight relative z-10"
                      animate={{ 
                        textShadow: ["0 0 20px rgba(255,255,255,0.5)", "0 0 30px rgba(255,255,255,0.8)", "0 0 20px rgba(255,255,255,0.5)"]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity
                      }}
                    >
                      שתראה לך איך אפשר להפוך את הלידים הרדומים לרווחים
                      <motion.span
                        className="inline-block ml-3 text-4xl"
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity
                        }}
                      >
                        💰
                      </motion.span>
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* כפתור פעולה מרשים */}
          <motion.div 
            className="text-center space-y-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-2xl border-2 border-white/50 max-w-4xl mx-auto relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-12 md:px-20 py-6 md:py-10 text-xl md:text-3xl font-black rounded-3xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 w-full max-w-3xl mx-auto relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20 opacity-0 group-hover:opacity-100"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    <motion.span
                      animate={{ 
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity
                      }}
                    >
                      🔵
                    </motion.span>
                    לתיאום שיחת "כסף מהדאטא"
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowLeft className="w-8 h-8" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* הודעת דחיפות מעוצבת */}
            <motion.div 
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 border-4 border-amber-300 rounded-[2rem] px-8 md:px-12 py-6 md:py-8 shadow-2xl inline-block relative overflow-hidden"
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(245, 158, 11, 0.5)",
                  "0 0 50px rgba(245, 158, 11, 0.8)",
                  "0 0 30px rgba(245, 158, 11, 0.5)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              <p className="text-xl md:text-2xl font-black text-white flex items-center justify-center gap-4 relative z-10">
                <motion.span 
                  className="text-2xl md:text-3xl"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity
                  }}
                >
                  📍
                </motion.span>
                ההצעה זמינה כרגע ללא עלות – למתאמים ראשונים בלבד
                <motion.span 
                  className="text-2xl md:text-3xl"
                  animate={{ 
                    y: [0, -5, 0],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity
                  }}
                >
                  ⚡
                </motion.span>
              </p>
            </motion.div>
          </motion.div>

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
