import { Button } from "@/components/ui/button";
import { Play, ArrowLeft } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary text-white" dir="rtl">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Optione
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-12 leading-tight">
            השירות שמייצר כסף מהדאטה שלך
          </h2>
          
          {/* Video placeholder */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 mb-16 border border-white/20">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-secondary/20 rounded-full p-6">
                <Play className="w-16 h-16 text-secondary" />
              </div>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              "אם יש לך רשימות לידים, דאטה מהקמפיינים או קהל שלא הגיב – אל תזרוק אותם לפח. אנחנו יודעים להחזיר אותם לחיים."
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white px-12 py-8 text-2xl rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            🔵 לתיאום שיחת "כסף מהדאטא"
          </Button>
        </div>
      </section>

      {/* Main Message */}
      <section className="py-32 bg-white text-primary">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 leading-tight">
            השירות שיחזיר לחיים<br />את הלידים "הרדומים" שלך
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-muted-foreground mb-20">
            ויהפוך דאטה מתה לרווחים בפועל
          </h3>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/10 rounded-3xl p-12 mb-20">
            <p className="text-2xl md:text-3xl leading-relaxed font-light">
              לא מערכת. לא קורס. לא קמפיינר שרוצה כסף לפני שהראה לך תוצאות.
            </p>
            <p className="text-2xl md:text-3xl font-bold mt-8">
              אנחנו עושים את העבודה בשבילך – על בסיס הדאטא הקיימת שלך.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold">מסע לקוח שיוצר לקוחות איכותיים</h3>
            </div>
            <div className="p-8">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold">בלי להוציא שקל על שיווק</h3>
            </div>
            <div className="p-8">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold">כל התוכנות הדרושות – עלינו!</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            "אבל כבר שילמתי עשרות אלפים על שיווק…"
          </h2>
          
          <div className="space-y-8 text-2xl md:text-3xl font-light mb-20">
            <p>בדיוק.</p>
            <p className="font-bold">הדאטה אצלך.</p>
            <p className="font-bold">אתה יודע שיש לך שירות טוב.</p>
            <p className="font-bold">אתה רק צריך מישהו שייקח את כל מה שצברת – ויהפוך את זה לתוצאה.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <p className="text-2xl md:text-3xl leading-relaxed font-light mb-8">
              רוב העסקים לא צריכים עוד לידים.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-secondary">
              הם צריכים לעבוד נכון עם מה שכבר יש.
            </p>
            <p className="text-xl md:text-2xl font-light mt-8 text-white/80">
              אנחנו לא עוד מערכת. לא עוד מדריך. לא עוד סיסמא.<br />
              אנחנו פשוט לוקחים את מה שיש – ובונים קמפיין חכם שמחזיר לחיים את כל מי שלא סגר.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do/Don't Do */}
      <section className="py-32 bg-white text-primary">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Don't Do */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-red-600">❌ מה אנחנו לא עושים?</h3>
              <div className="space-y-6 text-xl">
                <p>✘ לא מוכרים לך מערכת טכנולוגית חדשה</p>
                <p>✘ לא שולחים אותך לקורסים</p>
                <p>✘ לא מציעים קמפיין עם תקציב פרסום</p>
              </div>
            </div>

            {/* Do */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-primary">✅ מה כן?</h3>
              <div className="space-y-6 text-xl">
                <p>✔️ מנתחים את הדאטא הקיימת שלך – קבצים, CRM, וואטסאפ</p>
                <p>✔️ מפצחים את הפילוחים בתוכה</p>
                <p>✔️ בונים הודעות ומיילים חכמים לפי פסיכולוגיה של קניה</p>
                <p>✔️ מפעילים עבורך קמפיין מותאם</p>
                <p>✔️ ואתה מקבל לידים – ישירות לשיחה או לסגירה</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Aviv */}
      <section className="py-32 bg-gradient-to-br from-primary/5 to-secondary/5 text-primary">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            מה מייחד אותנו – ולמה זה באמת עובד?
          </h2>
          <p className="text-2xl font-light mb-16 text-muted-foreground">
            בניגוד לחברות שעושות "אימייל מרקטינג", אנחנו מגיעים מהשטח.
          </p>

          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-secondary">אביב שמש - מייסד Optione</h3>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-right">
              <p>
                Optione הוקמה על ידי <strong>אביב שמש</strong>, יועץ עסקי בכיר, מומחה לשיווק, מכירות ופיצוח אסטרטגי מבוסס דאטה, עם ניסיון של למעלה מעשור בליווי עסקים להגדלת מכירות.
              </p>
              
              <p>
                אביב עבד עם מותגים מהשורה הראשונה בישראל – <strong>חלי ממן, כללית שירותי בריאות, מנדי גפנר, אספרסו קלאב</strong> ועוד.
              </p>
              
              <p>
                הוא פיתח את <strong>שיטת "שמש"</strong> – שיווק | מכירה | שיטה – מודל עבודה שמוביל עסקים לתוצאות אמיתיות.
              </p>
              
              <div className="bg-secondary/10 rounded-2xl p-8 mt-12">
                <p className="text-2xl font-bold text-secondary">למעלה מ־2,000 בעלי עסקים עברו תחתיו</p>
                <p className="text-lg text-muted-foreground mt-2">בליווי אישי, בקורסים ובהכשרות</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            גם הטכנולוגיה שלנו משנה את כללי המשחק
          </h2>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 mb-16 border border-white/20">
            <p className="text-2xl md:text-3xl leading-relaxed font-light mb-8">
              כל איש קשר בדאטה שלך מקבל הודעה שמותאמת לו אישית – לפי מה שהוא עשה, לא עשה, ראה או התעניין בו.
            </p>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              לא עוד דיוור גנרי עם שם פרטי.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-secondary">
              המערכת שלנו יוצרת הודעה שנראית כאילו נכתבה במיוחד עבורו – כי בפועל, היא באמת כזו.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-secondary/20 rounded-2xl p-6 mb-4">
                <p className="text-lg font-bold">אחוזי הפתיחה</p>
              </div>
              <p className="text-2xl font-semibold">גבוהים בהרבה</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 rounded-2xl p-6 mb-4">
                <p className="text-lg font-bold">אחוז התגובה</p>
              </div>
              <p className="text-2xl font-semibold">מעל הממוצע בשוק</p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 rounded-2xl p-6 mb-4">
                <p className="text-lg font-bold">אחוزי הסגירה</p>
              </div>
              <p className="text-2xl font-semibold">קופצים משמעותית</p>
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-bold mt-16 text-accent">
            זה ההבדל בין "עוד מייל" – לבין קמפיין שמרגיש כמו שיחה אישית חכמה.
          </p>
        </div>
      </section>

      {/* Offer */}
      <section className="py-32 bg-white text-primary">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            ההצעה שלנו: חודשיים של ליווי – מבוססי תוצאה בלבד
          </h2>

          <div className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-3xl p-12 mb-16">
            <p className="text-2xl md:text-3xl leading-relaxed font-light mb-12">
              אנחנו מציעים ליווי מלא – שבו התשלום מתבצע רק לפי תוצאה:
            </p>

            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold">תיאום פגישה</h3>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold">קבלת ליד</h3>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold">סגירת מכירה בפועל</h3>
              </div>
            </div>

            <div className="bg-primary/10 rounded-2xl p-8">
              <p className="text-2xl md:text-3xl font-bold mb-4">לא הבאנו תוצאה – לא שילמת.</p>
              <p className="text-xl text-muted-foreground">
                למה? כי אנחנו יודעים שזה עובד.<br />
                זו הדרך שלנו לבנות אמון – ולרוץ איתך לטווח הארוך.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting */}
      <section className="py-32 bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            מה כוללת פגישת "כסף מהדאטא"?
          </h2>
          <p className="text-2xl font-light mb-16 text-muted-foreground">
            זו פגישה אסטרטגית באורך של עד שעה, בה נעבור יחד על:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16 text-right">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4">ניתוח הדאטה</h3>
              <p className="text-lg">מה יש אצלך בדאטה – קבצים, CRM, לידים רדומים, וואטסאפ</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4">פילוחים</h3>
              <p className="text-lg">אילו פילוחים אפשר לחלץ ממנה כבר עכשיו</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4">הצעה מדויקת</h3>
              <p className="text-lg">מה ההצעה הכי מדויקת לקהל שלך</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4">תוכנית פעולה</h3>
              <p className="text-lg">איך לבנות תהליך שמחזיר את המתעניינים לסגירה</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
            <p className="text-xl font-bold mb-4">יוצאים עם תוכנית פעולה מסודרת.</p>
            <p className="text-lg text-muted-foreground">הפגישה לא מחייבת – ולזמן מוגבל ניתנת ללא עלות.</p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-32 bg-white text-primary">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            🔥 למי השירות שלנו מתאים?
          </h2>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-12 text-green-600">✅ מתאים לך אם:</h3>
              <div className="space-y-6 text-xl text-right">
                <p>✔️ עסקים עם לפחות 100 לידים בחודש</p>
                <p>✔️ עסקים עם דאטאבייס פעיל – מיילים, וואטסאפ, לקוחות עבר</p>
                <p>✔️ כאלה שכבר שילמו על שיווק – ורוצים לראות תוצאה אמיתית עכשיו</p>
                <p>✔️ מי שאין לו זמן להתעסק עם דאטה – ורוצה שיטפלו בזה במקומו</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-12 text-red-600">⚠️ לא מתאים אם:</h3>
              <div className="space-y-6 text-xl text-right">
                <p>✘ מי שאין לו דאטה בכלל</p>
                <p>✘ מי שרוצה לעשות הכל בעצמו</p>
                <p>✘ מי שלא מבין שהכסף נמצא במה שכבר יש</p>
                <p>✘ מי שלא מוכן להשקיע כדי להרוויח</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16">
            רוצה להתחיל להרוויח מהדאטה שלך?
          </h2>
          
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 mb-16 border border-white/20">
            <p className="text-2xl md:text-3xl leading-relaxed font-light mb-8">
              אנחנו לא גובים על מערכת.<br />
              לא על הפגישה.<br />
              ולא על סיסמאות.
            </p>
            <p className="text-xl md:text-2xl">
              השירות שלנו מבוסס תוצאה בלבד – למי שמוכן להתחיל לנצל את מה שכבר יש לו בידיים.
            </p>
          </div>

          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-12 py-8 text-2xl rounded-full font-semibold mx-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              🔵 לתיאום שיחה – לחץ כאן
            </Button>
            <br />
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-12 py-8 text-xl rounded-full font-semibold mx-4"
            >
              🔵 לקבלת דוגמה מותאמת לדאטה שלך
            </Button>
            <br />
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-12 py-8 text-xl rounded-full font-semibold mx-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              🔵 רוצה להבין אם זה מתאים? דבר איתנו בווטסאפ
            </Button>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Optione</h3>
            <p className="text-xl md:text-2xl font-light">
              לא צריך מערכת חדשה כדי לייצר תוצאה.<br />
              צריך רק דאטה קיימת. חשיבה חכמה. וביצוע מדויק.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;