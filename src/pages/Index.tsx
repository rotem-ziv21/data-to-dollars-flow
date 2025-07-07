import { Button } from "@/components/ui/button";
import { CheckCircle, X, Users, Target, TrendingUp, Database, Zap, ArrowLeft, Star, Award, Play, Sparkles, UserPlus, DollarSign, Settings, Search } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import ThreeBackground from "../components/ThreeBackground";
import funnelImage from "../assets/data-funnel-infographic.jpg";
import supermarketDataFlow from "../assets/supermarket-data-flow.jpg";

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCount(end);
  }, [end]);

  return <span ref={ref}>{count}</span>;
};

const GlowCard = ({ children, className = "" }: any) => (
  <div className={`bg-white/80 backdrop-blur-xl rounded-3xl box-shadow-intense border border-white/20 relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </div>
);

export default function Index() {
  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden" dir="rtl">
      <ThreeBackground />
      
      {/* Static background elements */}
      <div className="absolute top-10 left-5 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-20 right-80 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-60 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-80 right-85 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20" />

      {/* Header */}
      <header className="relative backdrop-blur-xl bg-primary border-b border-primary/60">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/770b5634-76b0-4acf-a31b-00fdf6c13161.png" 
              alt="Optione - פשוט לשלוט בעסק" 
              className="h-12 md:h-16"
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 relative bg-gradient-to-br from-primary via-primary/90 to-secondary/20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video Section - Left */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl p-8 border border-white/20">
                <div className="bg-gradient-to-r from-secondary to-accent w-32 h-32 rounded-full flex items-center justify-center mx-auto">
                  <Play className="w-16 h-16 text-white" fill="white" />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xl font-bold text-white leading-relaxed">
                    "אם יש לך רשימות לידים, דאטה מהקמפיינים או קהל שלא הגיב – אל תזרוק אותם לפח. 
                    <span className="text-secondary"> אנחנו יודעים להחזיר אותם לחיים.</span>"
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="text-right relative">
              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight text-white text-center">
                <span className="text-secondary">השירות שמייצר</span>
                <br />
                <span className="text-white">כסף מהדאטה שלך</span>
              </h1>

              {/* המשפט החשוב כתת-כותרת מרכזית */}
              <div className="text-center mb-8">
                <div className="inline-block">
                  <h2 className="text-2xl md:text-3xl font-black text-white relative">
                    <span className="relative inline-block">
                      ויהפוך דאטה מתה לרווחים בפועל
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary to-accent w-full" />
                    </span>
                  </h2>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-white/90 text-center">
                  השירות שיחזיר לחיים את הלידים 
                  <span className="text-secondary font-black"> "הרדומים" </span> 
                  שלך
                </h3>
                
                <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 box-shadow-intense">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight space-y-2">
                      <p>לא מערכת</p>
                      <p>לא קורס</p>
                      <p>לא קמפיינר</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl p-6 border-2 border-secondary/30">
                      <p className="text-2xl md:text-3xl font-black text-white leading-tight">
                        אנחנו עושים את העבודה בשבילך –<br />
                        על בסיס הדאטא הקיימת שלך.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="gradient-secondary hover:opacity-90 hover:scale-105 transition-all duration-300 text-white px-16 py-8 text-xl md:text-2xl font-black rounded-3xl box-shadow-intense relative overflow-hidden group w-full max-w-md mx-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    לתיאום שיחת "כסף מהדאטא"
                    <ArrowLeft className="w-6 h-6" />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20 mb-12 px-4">
            {[
              { icon: UserPlus, color: "text-green-600", bgColor: "bg-green-100", text: "מסע לקוח שיוצר לקוחות איכותיים" },
              { icon: DollarSign, color: "text-blue-600", bgColor: "bg-blue-100", text: "בלי להוציא שקל על שיווק" },
              { icon: Settings, color: "text-purple-600", bgColor: "bg-purple-100", text: "כל התוכנות הדרושות – עלינו!" }
            ].map((item, i) => (
              <GlowCard key={i} className="p-6 text-center">
                <div className="space-y-4">
                  <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">{item.text}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 relative bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-12 leading-tight">
              "אבל כבר שילמתי<br />עשרות אלפים על שיווק…"
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/30 box-shadow-soft">
              
              {/* Visual Data Representation */}
              <div className="flex justify-center items-center mb-8">
                
                {/* Enhanced Pie Chart Visual - Smaller */}
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    {/* Main circle background - Green */}
                    <div className="absolute inset-0 rounded-full bg-green-500 shadow-lg"></div>
                    
                    {/* 90% Red section - positioned at top */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from -90deg, #ef4444 0deg, #ef4444 324deg, transparent 324deg)`,
                      }}
                    />

                    {/* Center white circle */}
                    <div className="absolute inset-6 bg-white rounded-full shadow-inner flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div>
                          <div className="text-3xl font-black text-red-500 mb-1">90%</div>
                          <div className="text-xs font-bold text-gray-600">לא נסגרו</div>
                        </div>
                        
                        <div className="w-8 h-0.5 bg-gray-300 mx-auto"></div>
                        
                        <div>
                          <div className="text-lg font-black text-green-500 mb-1">10%</div>
                          <div className="text-xs font-bold text-gray-600">נסגרו</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Label for 90% - Red */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-lg font-bold text-xs shadow-lg">
                      <div className="flex items-center gap-1">
                        <span>✗</span>
                        <span>90% לא נסגרו</span>
                      </div>
                      {/* Arrow pointing down */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rotate-45"></div>
                    </div>

                    {/* Label for 10% - Green */}
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-lg font-bold text-xs shadow-lg">
                      <div className="flex items-center gap-1">
                        <span>✓</span>
                        <span>10% נסגרו</span>
                      </div>
                      {/* Arrow pointing left */}
                      <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-500 rotate-45"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-4">
                  סטטיסטיקה מדהימה של כל קמפיין
                </h3>
                
                <p className="text-lg md:text-xl font-bold text-gray-600 mb-8 leading-relaxed">
                  רק <span className="text-green-600 font-black">10%</span> מהלידים שלך הפכו ללקוחות משלמים.<br />
                  <span className="text-red-600 font-black">90%</span> מהדאטה נשארה ללא ניצול מלא – עד היום.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100">
                  <p className="text-xl font-black text-gray-800 leading-tight">
                    מה אם הייתי אומר לך שאפשר לחזור ל-<span className="text-blue-600">90% הזה</span><br />
                    ולהפוך אותם ללקוחות משלמים?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="py-20 relative bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              השאלה שצריך לשאול:
            </h2>
            <h3 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              למה 90% מהלידים לא הסתדרו?
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-800 mb-3">הגישה הישנה</h4>
                    <p className="text-lg text-gray-600">
                      שולחים לכולם את אותה הודעה. אותה ההצעה. אותו הזמן.
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-100">
                  <p className="text-lg font-bold text-red-800 text-center">
                    תוצאה: 90% לא מגיבים כי זה לא רלוונטי להם
                  </p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-white/50">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-800 mb-3">הגישה החדשה</h4>
                    <p className="text-lg text-gray-600">
                      מנתחים כל לקוח. כותבים הודעה אישית. שולחים בזמן הנכון.
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-100">
                  <p className="text-lg font-bold text-green-800 text-center">
                    תוצאה: אחוזי תגובה גבוהים פי 3-5 מהרגיל
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
                <img 
                  src={funnelImage}
                  alt="תהליך ייעול הלידים" 
                  className="relative z-10 w-full rounded-3xl shadow-2xl"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { 
                    icon: Search,
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
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* מה בעצם השירות שלנו - עיצוב מקצועי פי 10 */}
          <div className="mt-32 max-w-7xl mx-auto relative">
            {/* אפקטי רקע פשוטים */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-40" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl opacity-40" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/20 to-transparent rounded-full" />
            </div>

            <div className="relative z-10 bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-2xl rounded-[4rem] shadow-2xl border-2 border-white/50 overflow-hidden">
              
              {/* אפקט זוהר עליון מתקדם */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-secondary via-accent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
              
              <div className="relative z-10 p-16 md:p-20">
                
                {/* כותרת מרכזית מהממת */}
                <div className="text-center mb-20">
                  <h4 className="text-5xl md:text-8xl font-black mb-8 leading-tight relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-secondary via-accent to-accent bg-clip-text text-transparent">
                      אז מה בעצם השירות שלנו?
                    </span>
                    <div className="absolute -inset-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-xl -z-10 opacity-40" />
                  </h4>
                  
                  {/* קו מפריד אלגנטי */}
                  <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto" />
                </div>
                
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  
                  {/* עמודה שמאלית - מה אנחנו לא עושים */}
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-red-50 via-white to-red-50 rounded-3xl p-8 shadow-xl border-2 border-red-100/50 relative overflow-hidden group">
                      <div className="relative z-10">
                        <div className="flex items-center justify-center mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <X className="w-10 h-10 text-white" strokeWidth={3} />
                          </div>
                        </div>
                        
                        <h5 className="text-3xl font-black text-gray-800 mb-6 text-center leading-tight">
                          מה אנחנו <span className="text-red-600">לא</span> עושים
                        </h5>
                        
                        <div className="space-y-4">
                          {[
                            "אנחנו לא מוכרים מערכת",
                            "אנחנו לא שולחים אותך ללמוד קורס", 
                            "אנחנו לא מבקשים תקציב לקמפיינים"
                          ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 bg-white/70 rounded-2xl border border-red-100">
                              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <X className="w-4 h-4 text-white" strokeWidth={3} />
                              </div>
                              <p className="text-lg font-bold text-gray-700">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* עמודה ימנית - מה אנחנו כן עושים */}
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-green-50 via-white to-green-50 rounded-3xl p-8 shadow-xl border-2 border-green-100/50 relative overflow-hidden group">
                      <div className="relative z-10">
                        <div className="flex items-center justify-center mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <CheckCircle className="w-10 h-10 text-white" strokeWidth={3} />
                          </div>
                        </div>
                        
                        <h5 className="text-3xl font-black text-gray-800 mb-6 text-center leading-tight">
                          מה אנחנו <span className="text-green-600">כן</span> עושים
                        </h5>
                        
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-6 text-center mb-8 shadow-lg">
                          <p className="text-2xl font-black text-white leading-tight">
                            אנחנו לוקחים את רשימת הלידים שלך –<br />
                            <span className="text-green-100 font-black">ובונים ממנה מכונה שיווקית חכמה</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* התהליך המקצועי שלנו */}
                <div className="mt-20">
                  <div className="text-center mb-16">
                    <h5 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                      איך אנחנו עושים את זה?
                    </h5>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        icon: Database,
                        title: "מנתחים את הדאטה הקיימת שלך",
                        content: "מבינים איזה קהלים יש, מה יודעים עליהם, ואיך אפשר להשתמש בזה.",
                        gradient: "from-blue-500 to-purple-500",
                        bgGradient: "from-blue-50 to-purple-50"
                      },
                      {
                        icon: Target,
                        title: "כותבים הודעות מותאמות אישית לכל אחד",
                        content: "לא קופי כללי. כל איש קשר מקבל פנייה מדויקת שמתבססת על הנתונים שלו.",
                        gradient: "from-purple-500 to-pink-500",
                        bgGradient: "from-purple-50 to-pink-50"
                      },
                      {
                        icon: Zap,
                        title: "יוצרים קמפיינים אוטומטיים חכמים",
                        content: "פגישות ביומן, שיחות טלפון עם לקוחות פוטנציאליים, או מכירה בפועל – תלוי במטרה.",
                        gradient: "from-orange-500 to-red-500",
                        bgGradient: "from-orange-50 to-red-50"
                      },
                      {
                        icon: Settings,
                        title: "והכול – נעשה בשבילך",
                        content: "אנחנו מנהלים את הקמפיין מא' ועד ת' בשבילך. אין מערכת להתעסק איתה, אין מה ללמוד.",
                        gradient: "from-green-500 to-teal-500",
                        bgGradient: "from-green-50 to-teal-50"
                      }
                    ].map((item, index) => (
                      <div key={index} className={`bg-gradient-to-br ${item.bgGradient} rounded-3xl p-8 shadow-xl border-2 border-white/50 relative overflow-hidden`}>
                        <div className="relative z-10">
                          <div className="flex items-center gap-6 mb-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                              <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                            </div>
                            <div className="text-3xl font-black text-gray-800 leading-tight">
                              {index + 1}
                            </div>
                          </div>
                          
                          <h6 className="text-xl font-black text-gray-800 mb-4 leading-tight">
                            {item.title}
                          </h6>
                          
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* התוצאות - עיצוב מקצועי ומשופר */}
                <div className="mt-24">
                  <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 rounded-[3rem] p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
                    
                    {/* אפקטי רקע עדינים */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="text-center mb-16">
                        <h5 className="text-4xl md:text-6xl font-black mb-6">
                          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            מה יוצא לך מזה?
                          </span>
                        </h5>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                          { icon: Users, text: "פגישות עם לקוחות רלוונטיים שכבר הכרת – ולא סגרת", color: "from-blue-500 to-blue-600", bgColor: "from-blue-50 to-blue-100" },
                          { icon: TrendingUp, text: "יותר סגירות – עם עלות שיווקית אפסית", color: "from-green-500 to-green-600", bgColor: "from-green-50 to-green-100" },
                          { icon: DollarSign, text: "בלי להוציא שקל נוסף על פרסום", color: "from-amber-500 to-orange-500", bgColor: "from-amber-50 to-orange-100" },
                          { icon: UserPlus, text: "בלי להחזיק עובדים", color: "from-purple-500 to-purple-600", bgColor: "from-purple-50 to-purple-100" },
                          { icon: Award, text: "תשלום בסיס תוצאה - לא קיבלת לא שילמת", color: "from-red-500 to-red-600", bgColor: "from-red-50 to-red-100" },
                          { icon: Settings, text: "כל המערכות הדרושות עלינו", color: "from-indigo-500 to-indigo-600", bgColor: "from-indigo-50 to-indigo-100" }
                        ].map((item, index) => (
                          <div key={index} className={`bg-gradient-to-br ${item.bgColor} rounded-3xl p-8 shadow-xl border-2 border-white/50 relative overflow-hidden`}>
                            <div className="relative z-10 text-center">
                              <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center shadow-lg mx-auto mb-6`}>
                                <item.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                              </div>
                              <p className="text-xl font-bold text-gray-800 leading-tight">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* הודעת סיכום מרכזית */}
                      <div className="mt-12 text-center">
                        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                          <p className="text-xl font-bold text-gray-700">
                            ✨ הכל מבוסס על הדאטה שכבר יש לך - בלי השקעות נוספות
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-8xl font-black bg-gradient-to-l from-secondary via-accent to-primary bg-clip-text text-transparent mb-8 leading-tight relative">
                ההצעה שלנו
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl -z-10 opacity-50" />
              </h2>
            </div>
          </div>

          {/* ההצעה המרכזית - עיצוב מרשים */}
          <div className="relative mb-24">
            <div className="bg-white/95 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 shadow-2xl border-2 border-white/50 relative overflow-hidden">
              {/* אפקט זוהר */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
              <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
              
              <div className="relative z-10">
                {/* כותרת מעוצבת */}
                <div className="text-center mb-16">
                  
                  <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                    מה קורה בפגישת<br />
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      "כסף מהדאטא"?
                    </span>
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-gray-600 font-semibold mb-4">
                    פגישה של עד שעה בזום – ללא עלות וללא התחייבות.
                  </p>
                  <p className="text-lg md:text-xl text-gray-700 font-medium">
                    המטרה? לבדוק יחד איך הופכים את הדאטה שכבר יש לך –<br />
                    לפגישות, שיחות וסגירות בפועל.
                  </p>
                </div>

                {/* Grid של מה קורה בפגישה */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {[
                    {
                      step: "01",
                      icon: Search,
                      title: "ניתוח הדאטה שלך",
                      content: "בוחנים יחד את רשימות הלידים, הלקוחות הקיימים והדאטה מקמפיינים קודמים.",
                      gradient: "from-purple-500 to-indigo-500",
                      bgGradient: "from-purple-50 to-indigo-50"
                    },
                    {
                      step: "02", 
                      icon: Target,
                      title: "זיהוי הפוטנציאל הנסתר",
                      content: "מוצאים את הלקוחות הפוטנציאליים שכדאי לחזור אליהם ואיך לעשות את זה נכון.",
                      gradient: "from-blue-500 to-cyan-500",
                      bgGradient: "from-blue-50 to-cyan-50"
                    },
                    {
                      step: "03",
                      icon: Zap,
                      title: "תוכנית פעולה מותאמת",
                      content: "בונים יחד אסטרטגיה מדויקת – איך לגשת, מתי לגשת ומה להציע לכל קבוצת לקוחות.",
                      gradient: "from-orange-500 to-red-500",
                      bgGradient: "from-orange-50 to-red-50"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`bg-gradient-to-br ${item.bgGradient} rounded-3xl p-8 shadow-lg border-2 border-white/50 relative overflow-hidden group`}>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                          </div>
                          <div className="text-4xl font-black text-gray-300">
                            {item.step}
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-black text-gray-800 mb-4 leading-tight">
                          {item.title}
                        </h4>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* הערה חשובה */}
                <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-[2rem] p-6 md:p-8 max-w-4xl mx-auto text-white text-center shadow-2xl relative overflow-hidden mt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl font-bold leading-tight mb-2">
                      הפגישה לא מחייבת להמשיך –
                    </p>
                    <p className="text-lg md:text-xl font-bold leading-tight">
                      וגם בשבילנו זו בדיקה לוודא שאנחנו מתאימים לעבודה משותפת.
                    </p>
                  </div>
                </div>
                
                {/* הודעת דחיפות מעוצבת */}
                <div className="text-center mt-8">
                  <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 border-4 border-amber-300 rounded-[2rem] px-8 md:px-12 py-6 md:py-8 shadow-2xl inline-block relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                    <p className="text-lg md:text-xl font-black text-white flex items-center justify-center gap-2 relative z-10 text-center">
                      ההצעה מוגבלת ל-20 העסקים הראשונים<br />
                      החברה רשאית לשנות את ההצעה בכל רגע נתון ט.ל.ח
                    </p>
                  </div>
                </div>
                
                {/* כפתור פעולה */}
                <div className="text-center mt-8">
                  <div>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-12 md:px-20 py-6 md:py-8 text-xl md:text-2xl font-black rounded-3xl transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 w-full max-w-2xl mx-auto relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-4">
                        לתיאום שיחת "כסף מהדאטא"
                        <div>
                          <ArrowLeft className="w-6 h-6" />
                        </div>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10 text-white">
          <h2 className="text-5xl md:text-7xl font-black mb-16 leading-tight">
            מוכן להתחיל להרוויח מהדאטה?
          </h2>
          
          <GlowCard className="p-16 mb-16 bg-white/10 backdrop-blur-xl border-white/20">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  הרשמה לפגישת "כסף מהדאטה"
                </h3>
                <p className="text-xl text-white/80">
                  למידע נוסף על איך הופכים דאטה קיימת לרווחים
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-lg font-bold mb-2">
                      שם מלא *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-secondary focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                      placeholder="הכנס שם מלא"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-lg font-bold mb-2">
                      שם חברה *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-secondary focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                      placeholder="הכנס שם חברה"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-lg font-bold mb-2">
                      טלפון *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-secondary focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                      placeholder="050-1234567"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-lg font-bold mb-2">
                      מייל *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:border-secondary focus:ring-0 focus:outline-none transition-all duration-300 text-lg"
                      placeholder="example@company.com"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-8">
                  <input
                    type="checkbox"
                    id="marketing-consent"
                    required
                    className="mt-1 w-5 h-5 rounded border-2 border-white/30 bg-white/10 text-secondary focus:ring-secondary focus:ring-2"
                  />
                  <label htmlFor="marketing-consent" className="text-white/90 text-lg leading-relaxed cursor-pointer">
                    אני מאשר קבלת דיוור שיווקי מאופטי וואן בע״מ<br />
                    <span className="text-secondary font-semibold">(מבטיחים לתת הרבה ערך)</span>
                  </label>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-black text-xl md:text-2xl py-6 px-8 rounded-3xl shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">🚀 שלח בקשה לפגישה</span>
                  </button>
                </div>
              </form>
            </div>
          </GlowCard>

          <div className="mt-24 pt-16 border-t border-white/30">
            <div className="text-4xl md:text-5xl font-black mb-8">
              <img 
                src="/lovable-uploads/770b5634-76b0-4acf-a31b-00fdf6c13161.png" 
                alt="Optione - פשוט לשלוט בעסק" 
                className="h-16 md:h-20 mx-auto"
              />
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              לא צריך מערכת חדשה כדי לייצר תוצאה.<br />
              <span className="font-black">
                רק דאטה קיימת + חשיבה חכמה + ביצוע מדויק.
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}