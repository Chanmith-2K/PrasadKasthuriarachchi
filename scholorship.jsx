import React from "react";

const teacherImage = "/mnt/data/DSC01425 copy.jpg";
const whatsappNumber = "94774104483";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const classData = [
  {
    grade: "03 වසර",
    badge: "පදනම් පන්තිය",
    fee: "රු. 1000/=",
    schedule: ["බ්‍රහස්පතින්දා ප.ව. 6.30"],
    focus: "කියවීම, ලිවීම, සිතීම සහ ගැටලු විසඳීමේ මූලික හැකියාව ක්‍රමවත් ලෙස වර්ධනය කිරීම.",
  },
  {
    grade: "04 වසර",
    badge: "කුසලතා වර්ධන පන්තිය",
    fee: "රු. 1000/=",
    schedule: [
      "බදාදා ප.ව. 6.30 - 8.30 | පාඩම් පැහැදිලි කිරීම",
      "සෙනසුරාදා ප.ව. 6.30 - 8.30 | ගැටලු විසඳීම",
    ],
    focus: "විභාග රටාවට හුරු කිරීම, සංකල්ප අවබෝධය, ප්‍රශ්න පුහුණුව සහ ගැටලු විසඳීමේ හැකියාව වැඩිදියුණු කිරීම.",
  },
  {
    grade: "05 වසර",
    badge: "ශිෂ්‍යත්ව විභාග පන්තිය",
    fee: "රු. 1000/=",
    schedule: [
      "සඳුදා ප.ව. 6.30 - 8.30 | පාඩම් පැහැදිලි කිරීම",
      "සිකුරාදා ප.ව. 6.30 - 8.30 | ගැටලු විසඳීම",
      "ඉරිදා ප.ව. 6.30 - 8.30 | ප්‍රශ්න පත්‍ර පුහුණුව",
    ],
    focus: "විෂයන් 6ම ආවරණය කරමින් ශිෂ්‍යත්ව විභාගයට අවශ්‍ය දැනුම, ප්‍රශ්න පත්‍ර පුහුණුව, වේගය සහ කාල කළමනාකරණය ශක්තිමත් කිරීම.",
  },
];

const highlights = [
  {
    title: "දරුවාගේ සිතීමේ ක්‍රමය ගොඩනගයි",
    text: "ශිෂ්‍යත්වයට අවශ්‍ය වන්නේ මතක තබාගැනීම පමණක් නොවෙයි. ප්‍රශ්නයක් කියවා එහි සැඟවුණු අදහස තේරුම් ගැනීම, සම්බන්ධතා හඳුනාගැනීම සහ නිවැරදි තීරණයක් ගන්නා සිතීමේ ක්‍රමය මෙම පන්තියෙන් ක්‍රමයෙන් වර්ධනය කරයි.",
  },
  {
    title: "අඩු ලකුණු වලින් හේතුව හඳුනාගනී",
    text: "දරුවාට ලකුණු අඩු වන්නේ දැනුම නොමැති නිසාද, ප්‍රශ්නය වැරදිව කියවන නිසාද, කාලය කළමනාකරණය නොවීම නිසාද කියා හඳුනාගෙන එම දුර්වලතාවට ගැළපෙන පරිදි පුහුණුව ලබාදේ.",
  },
  {
    title: "විෂයන් 6ම එකිනෙකට සම්බන්ධ කරයි",
    text: "විෂයන් 6ම වෙන් වෙන්ව ඉගැන්වීම පමණක් නොව, ශිෂ්‍යත්ව ප්‍රශ්නයක් තුළ ඒවා එකට සම්බන්ධ වන ආකාරය දරුවාට තේරෙන ලෙස පුහුණු කරයි.",
  },
  {
    title: "ප්‍රශ්න පත්‍රයට මුහුණ දෙන විශ්වාසය ගොඩනගයි",
    text: "දරුවාට ප්‍රශ්න පත්‍රයක් දැක්කම බය නොවී, කාලය බෙදාගෙන, ලේසි ප්‍රශ්න මුලින් තෝරාගෙන, අමාරු ප්‍රශ්නවලට නිවැරදිව සිතන ආකාරය පුරුදු කරයි.",
  },
  {
    title: "පාඩමෙන් පසුත් ඉගෙනීම නවතින්නේ නැහැ",
    text: "පන්තියේ ඉගෙනගත් දේ නැවත මතක් කරගැනීමට Recording ලබාදේ. එය ප්‍රධාන ඉගැන්වීම වෙනුවට නොව, දරුවාට නැවත පුහුණු වීමට සහ දෙමාපියන්ට දරුවාගේ ඉගෙනීම නිරීක්ෂණය කිරීමට උපකාරයක් ලෙස භාවිතා කළ හැක.",
  },
  {
    title: "දෙමාපියන්ට දරුවාගේ ගමන පැහැදිලි කරයි",
    text: "දරුවාගේ කියවීම, ලිවීම, අමතකවීම, අවධානය සහ ගැටලු විසඳීමේ දුර්වලතා පිළිබඳ තොරතුරු ලබාගෙන, දෙමාපියන්ට දරුවාගේ සැබෑ ඉගෙනීමේ තත්ත්වය තේරුම්ගැනීමට පහසු කරන පන්තියක්.",
  },
];

const reviews = [
  {
    name: "නිමාලි ප්‍රියදර්ශනී",
    area: "කොළඹ",
    text: "දරුවාට කලින් ප්‍රශ්නය කියවලා තේරුම්ගන්න අමාරු වුණා. දැන් ප්‍රශ්නයේ අදහස හඳුනාගෙන පිළිතුරට යන විදිහ පැහැදිලිව වෙනස් වෙලා තියෙනවා.",
  },
  {
    name: "ශශිකා මධුවන්ති",
    area: "කුරුණෑගල",
    text: "ලකුණු අඩු වුණේ දරුවාට නොතේරෙන නිසාද, කලබල වෙන නිසාද කියලා අපිටත් පැහැදිලි වුණා. පන්තියෙන් දරුවාගේ විශ්වාසය හොඳට වැඩි වුණා.",
  },
  {
    name: "රුවන්ති දිසානායක",
    area: "ගාල්ල",
    text: "පාඩම් මතක තබාගන්නවාට වඩා, හිතලා උත්තර දෙන පුරුද්ද මේ පන්තියෙන් දරුවාට ආවා. දෙමාපියන් විදිහට අපිට ඒ වෙනස පැහැදිලිව පේනවා.",
  },
  {
    name: "අනූෂා ජයසිංහ",
    area: "මොණරාගල",
    text: "ප්‍රශ්න පත්‍රයට මුහුණ දෙන විදිහ, කාලය බෙදාගන්න විදිහ සහ අමාරු ප්‍රශ්නවලදී බය නොවී සිතන විදිහ දරුවා හොඳින් පුරුදු වුණා.",
  },
];

const banks = [
  {
    bank: "Peoples Bank",
    name: "A.J.K.A. Nilan Buddika Prasad",
    account: "240200810040165",
    branch: "Walimada Branch",
  },
  {
    bank: "NSB Bank",
    name: "A.J.K.A. Nilan Buddika Prasad",
    account: "101010216054",
    branch: "",
  },
  {
    bank: "BOC",
    name: "A.J.K.A. Nilan Buddika Prasad",
    account: "88660980",
    branch: "",
  },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-extrabold tracking-[0.28em] text-[#bd8d19]">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-[#071a3d] md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[2rem] border border-[#d9e2f2] bg-white p-7 shadow-[0_20px_60px_rgba(7,26,61,0.08)] ${className}`}>
      {children}
    </div>
  );
}

function TeacherImage() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] bg-[#eef4ff]">
      <img
        src={teacherImage}
        alt="ප්‍රසාද් සර්"
        className="h-[460px] w-full object-cover object-top"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget.nextElementSibling;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="hidden h-[460px] flex-col items-center justify-center bg-[#eef4ff] text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#071a3d] text-5xl text-[#d4af37]">👨‍🏫</div>
        <p className="mt-5 text-2xl font-black text-[#071a3d]">ප්‍රසාද් සර්</p>
      </div>
    </div>
  );
}

export default function PrasadScholarshipClassWebsite() {
  return (
    <main className="min-h-screen bg-[#f6f9ff] text-[#071a3d]">
      <nav className="sticky top-0 z-50 border-b border-white/20 bg-[#071a3d]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37] text-xl font-black text-[#071a3d]">P</div>
            <div>
              <p className="text-lg font-black">ප්‍රසාද් සර්ගේ ශිෂ්‍යත්ව පන්තිය</p>
              <p className="text-xs font-bold tracking-[0.28em] text-[#f0cf79]">03 | 04 | 05 ශ්‍රේණි</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold lg:flex">
            <a href="#about" className="hover:text-[#f0cf79]">සර් ගැන</a>
            <a href="#classes" className="hover:text-[#f0cf79]">පන්ති කාලසටහන</a>
            <a href="#fees" className="hover:text-[#f0cf79]">පන්ති ගාස්තු</a>
            <a href="#payment" className="hover:text-[#f0cf79]">සම්බන්ධ වන ආකාරය</a>
            <a href="#reviews" className="hover:text-[#f0cf79]">දෙමාපිය අදහස්</a>
          </div>

          <a href={whatsappLink} className="rounded-full bg-[#d4af37] px-5 py-3 text-sm font-black text-[#071a3d] transition hover:bg-[#f0cf79]">WhatsApp</a>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden bg-gradient-to-br from-[#071a3d] via-[#0f2c60] to-[#134885] px-5 py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "34px 34px" }} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-[#f0cf79] backdrop-blur">
              ප්‍රාථමික ශිෂ්‍යත්ව විභාගයට ක්‍රමවත් සූදානමක්
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              දරුවාගේ ශිෂ්‍යත්ව ගමනට විශ්වාසදායක මඟපෙන්වීමක්
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              03, 04 සහ 05 ශ්‍රේණි දරුවන් සඳහා විෂයන් 6ම ආවරණය කරන පාඩම් පැහැදිලි කිරීම, ගැටලු විසඳීම, ප්‍රශ්න පත්‍ර පුහුණුව, Recording සහ දෙමාපිය සම්බන්ධතාවය සමඟ ක්‍රමවත් ශිෂ්‍යත්ව පන්ති පද්ධතියක්.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#payment" className="rounded-full bg-[#d4af37] px-8 py-4 text-center font-black text-[#071a3d] transition hover:bg-[#f0cf79]">පන්තියට සම්බන්ධ වන ආකාරය</a>
              <a href="#classes" className="rounded-full border border-white/40 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-[#071a3d]">පන්ති කාලසටහන</a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-white/60">ශ්‍රේණි</p>
                <p className="mt-2 text-3xl font-black text-[#f0cf79]">03 - 05</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-white/60">මාසික ගාස්තුව</p>
                <p className="mt-2 text-3xl font-black text-[#f0cf79]">1000</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-white/60">WhatsApp</p>
                <p className="mt-2 text-2xl font-black text-[#f0cf79]">0774104483</p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-6 text-[#071a3d] shadow-2xl">
                <TeacherImage />

                <div className="mt-6">
                  <p className="text-sm font-extrabold tracking-[0.25em] text-[#bd8d19]">ජාතික රූපවාහිනී නැණ මිහිර දේශක සහ රජයේ පාසල් ගුරු</p>
                  <h2 className="mt-2 text-3xl font-black">ප්‍රසාද් සර්</h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    ශිෂ්‍යත්ව විභාගයට දරුවන් ක්‍රමවත් ලෙස සූදානම් කරන, දෙමාපියන්ට විශ්වාසයක් ලබාදෙන ඉගැන්වීමේ පද්ධතියක්.
                  </p>
                </div>

                <div className="mt-6 rounded-3xl bg-[#071a3d] p-6 text-white">
                  <p className="text-sm font-bold tracking-[0.2em] text-[#f0cf79]">විශේෂත්වය</p>
                  <p className="mt-3 text-lg font-bold leading-8">
                    තම පාසල් පන්තියේ ළමුන් 55 න් 45 ක්ම සමත් කරවූ, ප්‍රායෝගික අත්දැකීම් සහිත ශිෂ්‍යත්ව ගුරුවරයෙකුගේ මඟපෙන්වීම.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="විශේෂත්වය"
            title="අපේ පන්තිය තෝරාගත යුත්තේ ඇයි?"
            text="ශිෂ්‍යත්වයට දරුවා සූදානම් කිරීම කියන්නේ වැඩිපුර ප්‍රශ්න කරවීම පමණක් නොවෙයි. දරුවාගේ සිතීම, අවධානය, කියවීම, ලිවීම, කාල කළමනාකරණය සහ ප්‍රශ්න විසඳීමේ විශ්වාසය එකම මාර්ගයකට ගෙන ඒමයි."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071a3d] text-2xl text-[#f0cf79]">✓</div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="classes" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="පන්ති කාලසටහන"
            title="ශ්‍රේණි අනුව පන්ති විස්තර"
            text="දරුවාගේ ශ්‍රේණිය අනුව පාඩම් පැහැදිලි කිරීම, ගැටලු විසඳීම සහ ප්‍රශ්න පත්‍ර පුහුණුව වෙන් කර ඇත."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {classData.map((item) => (
              <Card key={item.grade} className="relative overflow-hidden">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-[#d4af37]/15" />
                <p className="text-sm font-black tracking-[0.25em] text-[#bd8d19]">{item.badge}</p>
                <h3 className="mt-4 text-3xl font-black">{item.grade}</h3>
                <p className="mt-2 text-slate-500">මාර්ගගත ශිෂ්‍යත්ව පන්තිය</p>

                <div className="mt-6 space-y-3">
                  {item.schedule.map((line) => (
                    <p key={line} className="rounded-2xl bg-[#f2f7ff] px-4 py-3 font-bold text-[#071a3d]">{line}</p>
                  ))}
                </div>

                <p className="mt-6 leading-7 text-slate-600">{item.focus}</p>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#071a3d] to-[#134885] px-5 py-4 text-white">
                  <p className="text-sm text-white/70">මාසික ගාස්තුව</p>
                  <p className="text-2xl font-black text-[#f0cf79]">{item.fee}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="fees" className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-[#f1df9a] bg-[#fff7df]">
            <p className="mb-3 text-sm font-black tracking-[0.25em] text-[#9d7412]">පන්ති ගාස්තුව</p>
            <h2 className="text-4xl font-black text-[#071a3d]">මාසික ගාස්තු</h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-slate-500">3 - 4 ශ්‍රේණි</p>
                <p className="mt-2 text-4xl font-black text-[#071a3d]">රු. 1000/=</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-slate-500">5 ශ්‍රේණිය</p>
                <p className="mt-2 text-4xl font-black text-[#071a3d]">රු. 1000/=</p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-700">මාසයට අදාළ පන්ති ගාස්තු ගෙවීමෙන් පසු පන්තියට සම්බන්ධ කරගනු ලැබේ.</p>
          </Card>

          <Card id="payment">
            <p className="mb-3 text-sm font-black tracking-[0.25em] text-[#bd8d19]">සම්බන්ධ වන ආකාරය</p>
            <h2 className="text-3xl font-black">පන්තියට සම්බන්ධ වන පියවර</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#f2f7ff] p-5"><p className="font-bold leading-7 text-[#071a3d]">1. පහත බැංකු ගිණුමකට පන්ති ගාස්තුව ගෙවන්න.</p></div>
              <div className="rounded-2xl bg-[#f2f7ff] p-5"><p className="font-bold leading-7 text-[#071a3d]">2. ගෙවීමෙන් පසු slip / receipt එක WhatsApp කරන්න.</p></div>
              <div className="rounded-2xl bg-[#f2f7ff] p-5"><p className="font-bold leading-7 text-[#071a3d]">3. දරුවාගේ නම, ශ්‍රේණිය සහ දරුවාට ඇති අධ්‍යාපනික අඩුපාඩු සඳහන් කරන්න.</p></div>
              <div className="rounded-2xl bg-[#f2f7ff] p-5"><p className="font-bold leading-7 text-[#071a3d]">4. කියවීම, ලිවීම, අවධානය, අමතකවීම හෝ ගැටලු විසඳීමේ අපහසුතා ඇත්නම් පැහැදිලිව දන්වන්න.</p></div>
            </div>

            <a href={whatsappLink} className="mt-8 block rounded-3xl bg-[#071a3d] p-6 text-white transition hover:bg-[#134885]">
              <p className="text-sm font-bold tracking-[0.2em] text-[#f0cf79]">WhatsApp හරහා slip එක එවන්න</p>
              <p className="mt-3 text-3xl font-black">0774104483</p>
            </a>
          </Card>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="බැංකු විස්තර"
            title="ගෙවීම් සඳහා ගිණුම් අංක"
            text="පහත ගිණුම්වලින් ඕනෑම එකකට ගාස්තුව ගෙවා slip එක WhatsApp කරන්න."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {banks.map((bank) => (
              <Card key={bank.bank} className="bg-[#f8fbff]">
                <p className="text-2xl font-black text-[#071a3d]">{bank.bank}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{bank.name}</p>
                <div className="mt-4 rounded-2xl bg-white px-4 py-3 text-lg font-black text-[#071a3d] shadow-sm">{bank.account}</div>
                {bank.branch && <p className="mt-3 text-sm text-slate-500">{bank.branch}</p>}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#eef4ff] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="දෙමාපිය අදහස්"
            title="රටේ විවිධ ප්‍රදේශවල දෙමාපියන්ගේ අදහස්"
            text="මෙම අදහස් sample ලෙස දමා ඇත. පසුව සැබෑ reviews ලැබුණු විට ඒවාට replace කළ හැක."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <Card key={review.name}>
                <p className="text-4xl text-[#bd8d19]">“</p>
                <p className="leading-7 text-slate-600">{review.text}</p>
                <div className="mt-6 border-t border-[#d9e2f2] pt-5">
                  <p className="font-black">{review.name}</p>
                  <p className="text-sm text-slate-500">මව | {review.area}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-br from-[#071a3d] to-[#134885] p-8 text-center text-white md:p-14">
          <p className="mb-4 text-sm font-black tracking-[0.25em] text-[#f0cf79]">පන්තියට සම්බන්ධ වීම</p>
          <h2 className="text-3xl font-black md:text-5xl">දරුවාට ගැළපෙන පන්තිය තෝරාගෙන අදම සම්බන්ධ වන්න</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/75">
            පන්ති ගාස්තුව ගෙවා slip එක, දරුවාගේ නම, ශ්‍රේණිය සහ ඇති අඩුපාඩු WhatsApp හරහා එවන්න. එවිට පන්තියට සම්බන්ධ කිරීමේ ඉදිරි ක්‍රියාවලිය ඉක්මනින් සිදු කළ හැක.
          </p>
          <a href={whatsappLink} className="mt-8 inline-flex rounded-full bg-[#d4af37] px-9 py-4 font-black text-[#071a3d] transition hover:bg-[#f0cf79]">0774104483 වෙත WhatsApp කරන්න</a>
        </div>
      </section>

      <footer className="border-t border-[#d9e2f2] bg-white px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-xl font-black text-[#071a3d]">ප්‍රසාද් සර්ගේ ශිෂ්‍යත්ව පන්තිය</p>
            <p className="text-sm text-slate-500">03, 04, 05 ශ්‍රේණි | මාර්ගගත ශිෂ්‍යත්ව පන්තිය</p>
          </div>
          <p className="text-sm text-slate-500">© Prasad Sir Scholarship Class. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
