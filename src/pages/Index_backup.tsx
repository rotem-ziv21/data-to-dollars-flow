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
    const timer = setTimeout(() => {
      setCount(end);
    }, 100);
    return () => clearTimeout(timer);
  }, [end]);

  return <span ref={ref}>{count}</span>;
};

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
                  className="gradient-secondary hover:opacity-90 text-white px-16 py-8 text-xl md:text-2xl font-black rounded-3xl box-shadow-intense relative overflow-hidden group w-full max-w-md mx-auto"
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
              <div key={i} className="bg-white/80 backdrop-blur-xl rounded-3xl box-shadow-intense border border-white/20 relative overflow-hidden p-6 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                <div className="relative z-10">
                  <div className="space-y-4">
                    <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">{item.text}</p>
                  </div>
                </div>
              </div>
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
                  
                  <div className="space-y-3">
                    <p className="text-xl md:text-2xl font-bold text-gray-700">
                      המצב הנוכחי ברוב העסקים:
                    </p>
                    <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      90% מהלידים הולכים לפח!
                    </p>
                  </div>

                  {/* Call-to-action - Text only */}
                  <div className="mt-8">
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        ← כאן נמצא הגידול ברווח שלך! →
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content - Condensed */}
              <div className="text-center space-y-4">
                <p className="text-2xl md:text-3xl font-black text-gray-800 leading-tight">
                  רוב העסקים מקבלים לידים – וסוגרים אולי 10% מהם.
                </p>
                
                <p className="text-2xl md:text-3xl font-black text-gray-800 leading-tight">
                  אבל מה עם כל ה־90% שלא סגרו?
                </p>
              </div>

              {/* Main Message - Condensed */}
              <div className="relative mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gradient-to-r from-primary/30 to-secondary/30">
                  <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight mb-4 text-center">
                    זו בדיוק הדרך שלך למקסם את הרווח מהדאטא שכבר שילמת עליה –
                  </p>
                  <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent leading-tight text-center">
                    במקום לרדוף אחרי עוד לידים חדשים.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}