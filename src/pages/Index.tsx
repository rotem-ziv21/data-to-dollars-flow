import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Video, Users, Target, TrendingUp, Database, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Optione
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">
            השירות שמייצר כסף מהדאטה שלך
          </p>
          
          {/* Video Section Placeholder */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mb-8 max-w-2xl mx-auto">
            <Video className="w-16 h-16 mx-auto mb-4 text-secondary" />
            <p className="text-lg leading-relaxed">
              "אם יש לך רשימות לידים, דאטה מהקמפיינים או קהל שלא הגיב – אל תזרוק אותם לפח. אנחנו יודעים להחזיר אותם לחיים."
            </p>
          </div>

          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-xl">
            🔵 לתיאום שיחת "כסף מהדאטא"
          </Button>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              השירות שיחזיר לחיים את הלידים "הרדומים" שלך
            </h2>
            <p className="text-2xl text-muted-foreground mb-8">
              ויהפוך דאטה מתה לרווחים בפועל
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12">
            <p className="text-xl text-center leading-relaxed">
              לא מערכת. לא קורס. לא קמפיינר שרוצה כסף לפני שהראה לך תוצאות.
              <br />
              <strong className="text-primary">אנחנו עושים את העבודה בשבילך – על בסיס הדאטא הקיימת שלך.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">מסע לקוח שיוצר לקוחות איכותיים</h3>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">בלי להוציא שקל על שיווק</h3>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">כל התוכנות הדרושות – עלינו!</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              "אבל כבר שילמתי עשרות אלפים על שיווק…"
            </h2>
            <div className="text-xl leading-relaxed space-y-4">
              <p>בדיוק.</p>
              <p><strong>הדאטה אצלך.</strong></p>
              <p><strong>אתה יודע שיש לך שירות טוב.</strong></p>
              <p><strong>אתה רק צריך מישהו שייקח את כל מה שצברת – ויהפוך את זה לתוצאה.</strong></p>
            </div>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-xl text-center mb-6">
                רוב העסקים לא צריכים עוד לידים.
                <br />
                <strong className="text-primary">הם צריכים לעבוד נכון עם מה שכבר יש.</strong>
              </p>
              <p className="text-lg text-center text-muted-foreground">
                אנחנו לא עוד מערכת. לא עוד מדריך. לא עוד סיסמא.
                <br />
                אנחנו פשוט לוקחים את מה שיש – ובונים קמפיין חכם שמחזיר לחיים את כל מי שלא סגר.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Don't vs Do */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* What We Don't Do */}
            <Card className="border-2 border-destructive/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <X className="w-8 h-8 text-destructive mr-3" />
                  <h3 className="text-2xl font-bold text-destructive">מה אנחנו לא עושים?</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <p>לא מוכרים לך מערכת טכנולוגית חדשה</p>
                  </div>
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <p>לא שולחים אותך לקורסים</p>
                  </div>
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <p>לא מציעים קמפיין עם תקציב פרסום</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What We Do */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary">מה כן?</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p>מנתחים את הדאטא הקיימת שלך – קבצים, CRM, וואטסאפ</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p>מפצחים את הפילוחים בתוכה</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p>בונים הודעות ומיילים חכמים לפי פסיכולוגיה של קניה</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p>מפעילים עבורך קמפיין מותאם</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p>ואתה מקבל לידים – ישירות לשיחה או לסגירה</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Aviv */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              מה מייחד אותנו – ולמה זה באמת עובד?
            </h2>
            <p className="text-xl text-muted-foreground">
              בניגוד לחברות שעושות "אימייל מרקטינג", אנחנו מגיעים מהשטח.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-primary">אביב שמש - מייסד Optione</h3>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Optione הוקמה על ידי <strong>אביב שמש</strong>, יועץ עסקי בכיר, מומחה לשיווק, מכירות ופיצוח אסטרטגי מבוסס דאטה, עם ניסיון של למעלה מעשור בליווי עסקים להגדלת מכירות.
                </p>
                
                <p>
                  אביב עבד עם מותגים מהשורה הראשונה בישראל – <strong>חלי ממן, כללית שירותי בריאות, מנדי גפנר, אספרסו קלאב</strong> ועוד.
                </p>
                
                <p>
                  הוא פיתח את <strong>שיטת "שמש"</strong> – שיווק | מכירה | שיטה – מודל עבודה שמוביל עסקים לתוצאות אמיתיות.
                </p>
                
                <div className="bg-secondary/10 rounded-lg p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-2" />
                  <p className="font-bold text-secondary">למעלה מ־2,000 בעלי עסקים עברו תחתיו</p>
                  <p className="text-muted-foreground">בליווי אישי, בקורסים ובהכשרות</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              גם הטכנולוגיה שלנו משנה את כללי המשחק
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto mb-12">
            <CardContent className="p-8">
              <Database className="w-16 h-16 text-accent mx-auto mb-6" />
              <p className="text-xl text-center mb-6">
                כל איש קשר בדאטה שלך מקבל הודעה שמותאמת לו אישית – לפי מה שהוא עשה, לא עשה, ראה או התעניין בו.
              </p>
              <p className="text-lg text-center text-muted-foreground mb-6">
                לא עוד דיוור גנרי עם שם פרטי.
                <br />
                המערכת שלנו יוצרת הודעה שנראית כאילו נכתבה במיוחד עבורו – כי בפועל, היא באמת כזו.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-secondary/20 hover:border-secondary/40 transition-all">
              <CardContent className="p-6">
                <Badge className="bg-secondary text-white mb-4">אחוזי הפתיחה</Badge>
                <p className="text-lg font-semibold">גבוהים בהרבה</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-accent/20 hover:border-accent/40 transition-all">
              <CardContent className="p-6">
                <Badge className="bg-accent text-white mb-4">אחוז התגובה</Badge>
                <p className="text-lg font-semibold">מעל הממוצע בשוק</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <Badge className="bg-primary text-white mb-4">אחוזי הסגירה</Badge>
                <p className="text-lg font-semibold">קופצים משמעותית</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-primary">
              זה ההבדל בין "עוד מייל" – לבין קמפיין שמרגיש כמו שיחה אישית חכמה.
            </p>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="py-20 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              ההצעה שלנו: חודשיים של ליווי – מבוססי תוצאה בלבד
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-xl text-center mb-8">
                אנחנו מציעים ליווי מלא – שבו התשלום מתבצע רק לפי תוצאה:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">תיאום פגישה</h3>
                </div>

                <div className="text-center">
                  <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold">קבלת ליד</h3>
                </div>

                <div className="text-center">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold">סגירת מכירה בפועל</h3>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 text-center">
                <p className="text-xl font-bold mb-2">לא הבאנו תוצאה – לא שילמת.</p>
                <p className="text-lg text-muted-foreground">
                  למה? כי אנחנו יודעים שזה עובד.
                  <br />
                  זו הדרך שלנו לבנות אמון – ולרוץ איתך לטווח הארוך.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meeting Details */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              מה כוללת פגישת "כסף מהדאטא"?
            </h2>
            <p className="text-xl text-muted-foreground">
              זו פגישה אסטרטגית באורך של עד שעה, בה נעבור יחד על:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">ניתוח הדאטה</h3>
                <p>מה יש אצלך בדאטה – קבצים, CRM, לידים רדומים, וואטסאפ</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-2">פילוחים</h3>
                <p>אילו פילוחים אפשר לחלץ ממנה כבר עכשיו</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">הצעה מדויקת</h3>
                <p>מה ההצעה הכי מדויקת לקהל שלך</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">תוכנית פעולה</h3>
                <p>איך לבנות תהליך שמחזיר את המתעניינים לסגירה</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <p className="text-lg font-semibold mb-2">יוצאים עם תוכנית פעולה מסודרת.</p>
                <p className="text-muted-foreground">הפגישה לא מחייבת – ולזמן מוגבל ניתנת ללא עלות.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              🔥 למי השירות שלנו מתאים?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Good Fit */}
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary">מתאים לך אם:</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p>עסקים עם לפחות 100 לידים בחודש</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p>עסקים עם דאטאבייס פעיל – מיילים, וואטסאפ, לקוחות עבר</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p>כאלה שכבר שילמו על שיווק – ורוצים לראות תוצאה אמיתית עכשיו</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p>מי שאין לו זמן להתעסק עם דאטה – ורוצה שיטפלו בזה במקומו</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Not a Good Fit */}
            <Card className="border-2 border-destructive/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <X className="w-8 h-8 text-destructive mr-3" />
                  <h3 className="text-2xl font-bold text-destructive">⚠️ לא מתאים אם:</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <p>מי שאין לו דאטה בכלל</p>
                  </div>
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <p>מי שרוצה לעשות הכל בעצמו</p>
                  </div>
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <p>מי שלא מבין שהכסף נמצא במה שכבר יש</p>
                  </div>
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <p>מי שלא מוכן להשקיע כדי להרוויח</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            רוצה להתחיל להרוויח מהדאטה שלך?
          </h2>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8 mb-12 max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              אנחנו לא גובים על מערכת.
              <br />
              לא על הפגישה.
              <br />
              ולא על סיסמאות.
            </p>
            <p className="text-lg">
              השירות שלנו מבוסס תוצאה בלבד – למי שמוכן להתחיל לנצל את מה שכבר יש לו בידיים.
            </p>
          </div>

          <div className="space-y-6">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-xl mx-4">
              🔵 לתיאום שיחה – לחץ כאן
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-xl mx-4">
              🔵 לקבלת דוגמה מותאמת לדאטה שלך
            </Button>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-xl mx-4">
              🔵 רוצה להבין אם זה מתאים? דבר איתנו בווטסאפ
            </Button>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Optione</h3>
            <p className="text-lg">
              לא צריך מערכת חדשה כדי לייצר תוצאה.
              <br />
              צריך רק דאטה קיימת. חשיבה חכמה. וביצוע מדויק.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;