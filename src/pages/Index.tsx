import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900" dir="rtl">
      {/* Header */}
      <header className="bg-primary text-white py-4">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold">Optione</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            השירות שמייצר כסף מהדאטה שלך
          </h1>
          
          <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-8 mb-8">
            <p className="text-xl font-semibold text-gray-800">
              🎥 "אם יש לך רשימות לידים, דאטה מהקמפיינים או קהל שלא הגיב – אל תזרוק אותם לפח. אנחנו יודעים להחזיר אותם לחיים."
            </p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8">
            השירות שיחזיר לחיים את הלידים "הרדומים" שלך – ויהפוך דאטה מתה לרווחים בפועל
          </h2>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
            <p className="text-lg text-gray-800 mb-4">
              לא מערכת. לא קורס. לא קמפיינר שרוצה כסף לפני שהראה לך תוצאות.
            </p>
            <p className="text-xl font-bold text-primary">
              אנחנו עושים את העבודה בשבילך – על בסיס הדאטא הקיימת שלך.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-lg font-semibold text-green-600 mb-2">✅ מסע לקוח שיוצר לקוחות איכותיים</p>
            <p className="text-lg font-semibold text-green-600 mb-2">✅ בלי להוציא שקל על שיווק</p>
            <p className="text-lg font-semibold text-green-600 mb-2">✅ כל התוכנות הדרושות – עלינו!</p>
          </div>

          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-xl font-bold rounded-lg"
          >
            🔵 לתיאום שיחת "כסף מהדאטא" ←
          </Button>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">
            "אבל כבר שילמתי עשרות אלפים על שיווק…"
          </h2>
          
          <div className="text-xl mb-8 space-y-4">
            <p className="font-bold">בדיוק.</p>
            <p className="font-bold">הדאטה אצלך.</p>
            <p className="font-bold">אתה יודע שיש לך שירות טוב.</p>
            <p className="font-bold text-secondary">אתה רק צריך מישהו שייקח את כל מה שצברת – ויהפוך את זה לתוצאה.</p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
            <p className="text-xl font-bold mb-4">
              רוב העסקים לא צריכים עוד לידים.
            </p>
            <p className="text-xl font-bold text-primary">
              הם צריכים לעבוד נכון עם מה שכבר יש.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">❌ מה אנחנו לא עושים?</h3>
              <ul className="space-y-3 text-lg">
                <li>✘ לא מוכרים לך מערכת טכנולוגית חדשה</li>
                <li>✘ לא שולחים אותך לקורסים</li>
                <li>✘ לא מציעים קמפיין עם תקציב פרסום</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">✅ מה כן?</h3>
              <ul className="space-y-3 text-lg">
                <li>✔️ מנתחים את הדאטא הקיימת שלך</li>
                <li>✔️ מפצחים את הפילוחים בתוכה</li>
                <li>✔️ בונים הודעות חכמות לפי פסיכולוגיה</li>
                <li>✔️ מפעילים עבורך קמפיין מותאם</li>
                <li>✔️ אתה מקבל לידים לסגירה</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">מה מייחד אותנו?</h2>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-secondary mb-4">אביב שמש - מייסד Optione</h3>
            
            <div className="space-y-4 text-lg text-right leading-relaxed">
              <p>יועץ עסקי בכיר עם ניסיון של למעלה מעשור בהגדלת מכירות.</p>
              <p>עבד עם מותגים כמו: <strong>חלי ממן, כללית, מנדי גפנר, אספרסו קלאב</strong></p>
              <p><strong>למעלה מ־2,000 בעלי עסקים</strong> עברו תחתיו בליווי אישי.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">הטכנולוגיה שלנו משנה את כללי המשחק</h2>
          
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8 mb-8">
            <p className="text-xl font-bold mb-4">
              כל איש קשר מקבל הודעה מותאמת אישית
            </p>
            <p className="text-lg">
              לא דיוור גנרי - הודעה שנראית כאילו נכתבה במיוחד עבורו
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="font-bold text-lg">אחוזי פתיחה</p>
              <p className="text-green-600 font-bold">גבוהים בהרבה</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-bold text-lg">אחוז תגובה</p>
              <p className="text-blue-600 font-bold">מעל הממוצע</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="font-bold text-lg">אחוזי סגירה</p>
              <p className="text-purple-600 font-bold">קופצים משמעותית</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            ההצעה: חודשיים ליווי - תשלום לפי תוצאה בלבד
          </h2>

          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <p className="text-xl mb-6">התשלום מתבצע רק לפי:</p>
            <div className="grid md:grid-cols-3 gap-6 text-lg">
              <div>📞 תיאום פגישה</div>
              <div>🎯 קבלת ליד</div>
              <div>💰 סגירת מכירה</div>
            </div>
          </div>

          <div className="bg-red-100 text-gray-900 p-6 rounded-lg mb-8">
            <p className="text-xl font-bold">לא הבאנו תוצאה = לא שילמת</p>
          </div>

          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-xl font-bold"
          >
            🔵 לתיאום פגישת "כסף מהדאטא"
          </Button>
        </div>
      </section>

      {/* Meeting */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">מה כוללת הפגישה?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🔍 ניתוח דאטה</h3>
              <p>מה יש אצלך - קבצים, CRM, וואטסאפ</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📊 פילוחים</h3>
              <p>אילו פילוחים אפשר לחלץ</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">🎯 הצעה מדויקת</h3>
              <p>מה ההצעה הכי מתאימה לקהל</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📋 תוכנית פעולה</h3>
              <p>איך לבנות תהליך שמחזיר לסגירה</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
              <p className="font-bold text-lg">הפגישה ללא עלות ולא מחייבת</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">למי זה מתאים?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-6">✅ מתאים אם:</h3>
              <ul className="space-y-3">
                <li>✓ יש לך לפחות 100 לידים בחודש</li>
                <li>✓ יש לך דאטאבייס פעיל</li>
                <li>✓ כבר שילמת על שיווק ורוצה תוצאה</li>
                <li>✓ אין לך זמן להתעסק עם דאטה</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-600 mb-6">❌ לא מתאים אם:</h3>
              <ul className="space-y-3">
                <li>✗ אין לך דאטה בכלל</li>
                <li>✗ רוצה לעשות הכל בעצמך</li>
                <li>✗ לא מבין שהכסף במה שיש</li>
                <li>✗ לא מוכן להשקיע כדי להרוויח</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">מוכן להתחיל להרוויח מהדאטה?</h2>
          
          <div className="bg-white/10 p-6 rounded-lg mb-8">
            <p className="text-lg mb-4">אנחנו לא גובים על:</p>
            <div className="space-y-2">
              <p>❌ מערכת</p>
              <p>❌ פגישה</p>
              <p>❌ סיסמאות</p>
            </div>
            <p className="text-xl font-bold mt-4">רק תוצאה = תשלום</p>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90 px-8 py-4 text-xl font-bold w-full md:w-auto">
              🔵 לתיאום שיחה
            </Button>
            <br />
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg w-full md:w-auto">
              🔵 דוגמה מותאמת לדאטה שלך
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-2xl font-bold mb-4">Optione</h3>
            <p className="text-lg">
              לא צריך מערכת חדשה. רק דאטה קיימת + חשיבה חכמה + ביצוע מדויק.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;