// ==========================================================
// DATI PIANO NUTRIZIONALE — Triathlon, 85kg, deficit -400kcal
// ==========================================================

const DAYS = [
  // ====== LUNEDÌ ======
  {
    id: 'lun',
    short: 'LUN',
    name: 'Lunedì',
    load: 'Z4',
    workout: {
      label: 'Run + stimolo',
      title: 'Corsa aerobica + Z4',
      duration: '0:55:00',
      tss: '39 TSS',
      time: 'ore 6:00 · casa',
      type: 'workout',
    },
    macros: { kcal: 2550, p: 180, c: 305, f: 72 },
    meals: [
      {
        time: '5:30',
        name: 'Pre-workout (casa)',
        tag: 'PRE-RUN · CHO RAPIDI',
        kcal: 220,
        workoutMeal: true,
        items: [
          'Caffè + 200ml acqua',
          '<strong>1 banana</strong>',
          '<strong>3 datteri</strong> Medjool',
          '+ 1 fetta pane bianco con miele se digerisci',
        ],
        note: { tag: 'TIP', text: 'Niente fibre/proteine prima del Z4. Solo zuccheri rapidi, pronti in 30-45min.' }
      },
      {
        time: '6:00',
        name: 'Corsa aerobica + Z4',
        tag: 'WORKOUT · 55 MIN',
        kcal: 0,
        workoutMeal: true,
        items: [
          'Solo acqua durante (sessione &lt;60min)',
          'Borraccia 500ml a temperatura ambiente',
        ]
      },
      {
        time: '7:00',
        name: 'Colazione post-workout',
        tag: 'RECUPERO · CASA',
        kcal: 620,
        workoutMeal: true,
        items: [
          '<strong>70g</strong> fiocchi d\'avena',
          '<strong>250ml</strong> latte parz. scremato',
          '<strong>1 banana</strong>',
          '<strong>25g miele</strong>',
          '<strong>20g mandorle</strong>',
          '<strong>25g whey</strong> (o 2 uova)',
          'Caffè',
        ],
        note: { tag: 'TIMING', text: 'Entro 30 min dal termine del workout. Recupero glicogeno + sintesi proteica.' }
      },
      { time: '10:30', name: 'Spuntino mattina', tag: 'SNACK', kcal: 200, items: [
        '<strong>200g</strong> yogurt greco 0%', '<strong>30g</strong> granola', '1 cucchiaino miele'
      ]},
      { time: '13:00', name: 'Pranzo', tag: 'PASTO PRINCIPALE · UFFICIO', kcal: 680, items: [
        '<strong>90g</strong> pasta integrale',
        '<strong>150g</strong> manzo magro',
        'Verdure cotte abbondanti',
        '<strong>1 cucchiaio</strong> olio EVO',
      ]},
      { time: '17:00', name: 'Spuntino pomeriggio', tag: 'SNACK · UFFICIO', kcal: 230, items: [
        '<strong>1 mela</strong>', '<strong>25g</strong> mandorle', '1 quadretto cioccolato fondente 70%'
      ]},
      { time: '20:00', name: 'Cena', tag: 'PASTO PRINCIPALE', kcal: 600, items: [
        '<strong>200g</strong> pesce spada o salmone',
        '<strong>250g</strong> patate al forno',
        '<strong>300g</strong> verdure miste',
        'Olio EVO',
      ]},
    ]
  },
  // ====== MARTEDÌ ======
  {
    id: 'mar',
    short: 'MAR',
    name: 'Martedì',
    load: 'Z2',
    workout: {
      label: 'Nuoto aerobico',
      title: 'Nuoto aerobico',
      duration: '~45 min',
      tss: '~30 TSS',
      time: 'ore 7:00 · piscina · smart work',
      type: 'workout',
    },
    macros: { kcal: 2350, p: 175, c: 270, f: 70 },
    meals: [
      { time: '5:30', name: 'Pre-workout (casa)', tag: 'PRE-NUOTO · LIGHT', kcal: 180, workoutMeal: true, items: [
        'Caffè',
        '<strong>1 banana</strong>',
        '<strong>4 datteri</strong>',
      ], note: { tag: 'TIP', text: 'Sessione meno esigente, basta carburante leggero.' }},
      { time: '7:00', name: 'Nuoto aerobico', tag: 'WORKOUT', kcal: 0, workoutMeal: true, items: [
        'Acqua + sali se sudi molto', 'Sessione corta, niente fueling intra'
      ]},
      { time: '8:15', name: 'Colazione post (casa)', tag: 'RECUPERO · SMART WORK', kcal: 530, workoutMeal: true, items: [
        '<strong>200g</strong> yogurt greco 0%',
        '<strong>60g</strong> fiocchi d\'avena',
        '1 frutto (mela/pera)',
        '<strong>20g</strong> mandorle',
        'Caffè',
      ]},
      { time: '11:00', name: 'Spuntino', tag: 'SNACK', kcal: 220, items: [
        '<strong>1 mela</strong>', '<strong>30g</strong> noci'
      ]},
      { time: '13:00', name: 'Pranzo', tag: 'PASTO PRINCIPALE', kcal: 600, items: [
        '<strong>80g</strong> riso basmati',
        '<strong>150g</strong> orata o spigola al forno',
        'Verdure',
        '1 cucchiaio olio EVO',
      ]},
      { time: '17:00', name: 'Spuntino', tag: 'SNACK', kcal: 280, items: [
        '<strong>150g</strong> ricotta',
        '<strong>1 fetta</strong> pane integrale',
        '1 cucchiaino miele',
      ]},
      { time: '20:00', name: 'Cena', tag: 'PASTO PRINCIPALE', kcal: 540, items: [
        '<strong>3 uova</strong> in frittata',
        '<strong>50g</strong> feta o primo sale',
        '<strong>2 fette</strong> pane integrale',
        '<strong>250g</strong> verdure',
        'Olio EVO',
      ]},
    ]
  },
  // ====== MERCOLEDÌ ======
  {
    id: 'mer',
    short: 'MER',
    name: 'Mercoledì',
    load: 'Z4',
    workout: {
      label: 'Bike + stimolo',
      title: 'Bici Z2 + Z4',
      duration: '1:08:00',
      tss: '48 TSS',
      time: 'ore 7:00 · skillbike palestra → ufficio',
      type: 'workout',
    },
    macros: { kcal: 2770, p: 185, c: 340, f: 80 },
    meals: [
      { time: '5:30', name: 'Pre-workout (casa)', tag: 'PRE-Z4 · CARICO CHO', kcal: 280, workoutMeal: true, items: [
        'Caffè',
        '<strong>1 banana</strong>',
        '<strong>5 datteri</strong>',
        '<strong>1 cucchiaio miele</strong> in acqua tiepida',
      ], note: { tag: 'CRITICAL', text: '~80g CHO rapidi: serve glicogeno per la fase Z4. Niente latte/avena/proteine.' }},
      { time: '7:00', name: 'Bike + Z4', tag: 'WORKOUT · 1H08', kcal: 0, workoutMeal: true, items: [
        'Borraccia con <strong>30-40g maltodestrine</strong> + sali',
        '+1 gel da 25g CHO di scorta per la fase Z4'
      ]},
      { time: '8:15', name: 'Recupero rapido (palestra)', tag: 'SHAKER · SPOGLIATOIO', kcal: 350, workoutMeal: true, items: [
        'Shaker: <strong>25g whey isolate + 400ml acqua + 1 banana</strong>',
        '+ <strong>4 datteri</strong> o 30g uvetta',
      ], note: { tag: 'TIP', text: 'Whey con acqua (no latte): pratico, no frigo, ricostruisce subito proteine + zuccheri.' }},
      { time: '9:30', name: 'Colazione vera (ufficio)', tag: 'OVERNIGHT OATS', kcal: 600, items: [
        '<strong>Overnight oats preparato la sera prima</strong>:',
        '60g avena + 150g yogurt greco + 1 cucchiaio miele',
        '+ 1 cucchiaio burro arachidi + frutta + 15g mandorle',
        'Caffè ufficio',
      ], note: { tag: 'PREP', text: 'Da preparare martedì sera. Vasetto chiuso in frigo, lo prendi la mattina e mangi alle 9:30.' }},
      { time: '13:00', name: 'Pranzo', tag: 'PASTO PRINCIPALE · UFFICIO', kcal: 720, items: [
        '<strong>100g</strong> riso integrale',
        '<strong>150g</strong> manzo magro',
        'Verdure miste',
        'Olio EVO',
      ]},
      { time: '16:30', name: 'Spuntino', tag: 'SNACK · UFFICIO', kcal: 200, items: [
        '<strong>1 frutto</strong>', '<strong>25g</strong> mandorle (cassetto)'
      ]},
      { time: '20:00', name: 'Cena', tag: 'PASTO PRINCIPALE', kcal: 620, items: [
        '<strong>200g</strong> salmone al forno',
        '<strong>250g</strong> patate dolci',
        '<strong>300g</strong> verdure',
        'Olio EVO',
      ]},
    ]
  },
  // ====== GIOVEDÌ ======
  {
    id: 'gio',
    short: 'GIO',
    name: 'Giovedì',
    load: 'Z4',
    workout: {
      label: 'Nuoto soglia',
      title: 'Nuoto Z4 (soglia)',
      duration: '~50 min',
      tss: '~35 TSS',
      time: 'ore 7:00 · piscina · smart work',
      type: 'workout',
    },
    macros: { kcal: 2450, p: 175, c: 295, f: 70 },
    meals: [
      { time: '5:30', name: 'Pre-workout (casa)', tag: 'PRE-Z4 · CHO RAPIDI', kcal: 250, workoutMeal: true, items: [
        'Caffè',
        '<strong>1 banana</strong>',
        '<strong>5 datteri</strong>',
        '+1 cucchiaino miele',
        '+1 fetta pane bianco con miele se digerisci',
      ], note: { tag: 'CRITICAL', text: 'Ripetute hard nuoto: serve glicogeno disponibile, ~70g CHO.' }},
      { time: '7:00', name: 'Nuoto Z4', tag: 'WORKOUT · 50 MIN', kcal: 0, workoutMeal: true, items: [
        '10x50m hard + 4x100m', 'Acqua + sali'
      ]},
      { time: '8:00', name: 'Colazione post (casa)', tag: 'RECUPERO · SMART WORK', kcal: 580, workoutMeal: true, items: [
        '<strong>70g</strong> fiocchi d\'avena',
        '<strong>200ml</strong> latte parz. scremato',
        '<strong>1 banana</strong>',
        '<strong>25g miele</strong>',
        '<strong>25g whey</strong>',
        '<strong>15g mandorle</strong>',
        'Caffè',
      ]},
      { time: '11:00', name: 'Spuntino', tag: 'SNACK', kcal: 220, items: [
        '<strong>200g</strong> yogurt greco 0%', '<strong>20g</strong> uvetta'
      ]},
      { time: '13:00', name: 'Pranzo', tag: 'PASTO PRINCIPALE', kcal: 620, items: [
        '<strong>90g</strong> pasta',
        '<strong>130g</strong> tonno al naturale',
        'Verdure',
        '1 cucchiaio olio EVO',
        '1 cucchiaio parmigiano',
      ]},
      { time: '17:00', name: 'Spuntino', tag: 'SNACK', kcal: 220, items: [
        '<strong>1 mela</strong>', '<strong>25g</strong> mandorle'
      ]},
      { time: '20:00', name: 'Cena', tag: 'PASTO PRINCIPALE', kcal: 560, items: [
        '<strong>180g</strong> spigola o orata',
        '<strong>200g</strong> riso basmati',
        'Verdure grigliate',
        'Olio EVO',
      ]},
    ]
  },
  // ====== VENERDÌ ======
  {
    id: 'ven',
    short: 'VEN',
    name: 'Venerdì',
    load: 'DOPPIA',
    workout: {
      label: 'Combo bike + run',
      title: 'Bike Z2 + Run',
      duration: '1:00:00',
      tss: '~65 TSS',
      time: 'ore 7:00 · skillbike palestra → ufficio',
      type: 'workout',
    },
    macros: { kcal: 3210, p: 195, c: 420, f: 85 },
    meals: [
      { time: '5:30', name: 'Pre-workout (casa)', tag: 'PRE-COMBO · CARICO', kcal: 320, workoutMeal: true, items: [
        'Caffè',
        '<strong>1 banana</strong>',
        '<strong>5 datteri</strong>',
        '<strong>1 fetta</strong> pane bianco con miele',
      ], note: { tag: 'CRITICAL', text: '~90g CHO: doppia disciplina, devi reggere bike Z2 + run senza crisi.' }},
      { time: '7:00', name: 'Combo bike + run', tag: 'WORKOUT · 1H', kcal: 0, workoutMeal: true, items: [
        'Bike (45min): borraccia <strong>30g maltodestrine</strong> + sali',
        'Transizione: 200ml acqua + sali + ½ banana',
        'Run (15min): solo acqua',
      ]},
      { time: '8:15', name: 'Recupero rapido (palestra)', tag: 'SHAKER · SPOGLIATOIO', kcal: 380, workoutMeal: true, items: [
        'Shaker: <strong>25g whey + 400ml acqua + 1 banana</strong>',
        '+ <strong>4 datteri</strong>',
        '+ 1 fetta pane bianco con miele se hai un attimo',
      ]},
      { time: '9:30', name: 'Colazione vera (ufficio)', tag: 'OVERNIGHT OATS', kcal: 600, items: [
        '<strong>Overnight oats</strong> preparato giovedì sera',
        '+ caffè ufficio',
      ], note: { tag: 'PREP', text: 'Preparalo giovedì sera. Vasetto in frigo ufficio o borsa termica.' }},
      { time: '11:00', name: 'Spuntino', tag: 'SNACK · UFFICIO', kcal: 220, items: [
        '<strong>1 mela</strong>', '<strong>20g</strong> mandorle'
      ]},
      { time: '13:00', name: 'Pranzo', tag: 'PASTO PRINCIPALE · UFFICIO', kcal: 720, items: [
        '<strong>110g</strong> pasta',
        '<strong>150g</strong> manzo',
        'Verdure',
        'Olio EVO',
      ]},
      { time: '16:30', name: 'Spuntino', tag: 'SNACK · UFFICIO', kcal: 220, items: [
        '<strong>200g</strong> yogurt greco 0%', '1 cucchiaio miele'
      ]},
      { time: '20:00', name: 'Cena (carb-loading)', tag: 'PRE-LUNGO · CARICO CHO', kcal: 750, items: [
        '<strong>200g</strong> pesce',
        '<strong>300g patate</strong> o 100g (secco) riso',
        'Verdure',
        'Olio EVO',
        '+ 1 fetta pane integrale',
        '+ 1 frutto',
      ], note: { tag: 'CRITICAL', text: 'Mini carb-loading per il lungo di sabato. Mangia carbo senza paura: alimentano il glicogeno.' }},
    ]
  },
  // ====== SABATO ======
  {
    id: 'sab',
    short: 'SAB',
    name: 'Sabato',
    load: 'LUNGO',
    workout: {
      label: 'Lungo bici',
      title: 'Bici aerobica + salita dolce',
      duration: '1:45:00',
      tss: '70 TSS',
      time: 'ore 10:00 · esterno · 2h30 di tempo',
      type: 'workout',
    },
    macros: { kcal: 3040, p: 180, c: 410, f: 80 },
    meals: [
      { time: '7:30', name: 'Sveglia + caffè', tag: 'WAKE UP', kcal: 0, items: ['Caffè + 300ml acqua']},
      { time: '7:45', name: 'Colazione completa pre-workout', tag: 'PRE-LUNGO · CASA', kcal: 800, workoutMeal: true, items: [
        '<strong>100g</strong> fiocchi d\'avena',
        '<strong>250ml</strong> latte parz. scremato',
        '<strong>1 banana</strong>',
        '<strong>30g miele</strong>',
        '<strong>30g</strong> burro arachidi',
        '<strong>2 fette</strong> pane bianco con marmellata',
        'Caffè',
      ], note: { tag: 'TIMING', text: '2h15 prima del bike: hai tempo per fare colazione vera. ~120g CHO totali.' }},
      { time: '9:30', name: 'Pre-uscita', tag: '30 MIN PRE-WORKOUT', kcal: 130, workoutMeal: true, items: [
        '<strong>1 banana</strong>', '<strong>4 datteri</strong>'
      ]},
      { time: '10:00', name: 'Lungo bici', tag: 'WORKOUT · 1H45-2H', kcal: 0, workoutMeal: true, items: [
        '<strong>2 borracce 500ml</strong> con 50g maltodestrine + sali = 100g CHO',
        '<strong>1 banana</strong> o 30g uvetta a metà = ~25g CHO',
        '<strong>1 barretta/datteri</strong> ultima ora = ~25g CHO',
        '<strong>TOTALE: ~150g CHO durante (70-90g/h)</strong>',
      ], note: { tag: 'CRITICAL', text: 'Senza fueling adeguato bonki e non recuperi per lunedì. Non saltare.' }},
      { time: '12:15', name: 'Recupero post', tag: 'ENTRO 30 MIN', kcal: 480, workoutMeal: true, items: [
        'Shaker: <strong>25g whey + 250ml latte + 1 banana + 40g avena + 1 cucchiaio miele</strong>',
        '+ 1 fetta pane bianco con miele',
      ]},
      { time: '13:30', name: 'Pranzo', tag: 'PASTO PRINCIPALE', kcal: 750, items: [
        '<strong>120g</strong> pasta o riso (secco)',
        '<strong>150g</strong> manzo o pesce',
        'Verdure',
        'Olio EVO',
        '1 frutto',
      ]},
      { time: '17:00', name: 'Spuntino', tag: 'SNACK', kcal: 280, items: [
        '<strong>200g</strong> yogurt greco 0%', '<strong>50g</strong> granola', '1 cucchiaino miele'
      ]},
      { time: '20:30', name: 'Cena', tag: 'PASTO PRINCIPALE', kcal: 600, items: [
        '<strong>180g</strong> pesce',
        '<strong>250g</strong> patate',
        'Verdure',
        'Olio EVO',
        '+ 1 calice vino rosso (se va)',
      ]},
    ]
  },
  // ====== DOMENICA ======
  {
    id: 'dom',
    short: 'DOM',
    name: 'Domenica',
    load: 'REST',
    workout: {
      label: 'Riposo',
      title: 'Recupero attivo',
      duration: '—',
      tss: '0 TSS',
      time: 'casa · libero · dormi senza sveglia',
      type: 'rest',
    },
    macros: { kcal: 2300, p: 175, c: 250, f: 75 },
    meals: [
      { time: '9:00', name: 'Colazione (riposo)', tag: 'BRUNCH · BASSO CHO', kcal: 600, items: [
        '<strong>3 uova</strong> strapazzate',
        '<strong>2 fette</strong> pane integrale',
        '<strong>½ avocado</strong>',
        'Caffè',
      ], note: { tag: 'TIP', text: 'Domenica = unico giorno con CHO più bassi. Più proteine e grassi sani.' }},
      { time: '13:00', name: 'Pranzo', tag: 'PASTO PRINCIPALE', kcal: 620, items: [
        '<strong>150g</strong> manzo o pesce',
        '<strong>200g</strong> patate',
        '<strong>300g</strong> verdure',
        'Olio EVO',
        '1 frutto',
      ]},
      { time: '17:00', name: 'Spuntino', tag: 'SNACK', kcal: 280, items: [
        '<strong>200g</strong> yogurt greco 0%', '<strong>30g</strong> noci', '1 mela'
      ]},
      { time: '20:00', name: 'Cena (carico per lun)', tag: 'PRE-Z4 LUNEDÌ · CHO ALTI', kcal: 800, items: [
        '<strong>90g</strong> farro o orzo o riso',
        '<strong>150g</strong> legumi cotti (lenticchie/ceci)',
        '<strong>50g</strong> feta',
        'Verdure',
        'Olio EVO',
        '1 frutto',
      ], note: { tag: 'CRITICAL', text: 'Cena CHO più alti del solito riposo: lunedì alle 6:00 fai Z4 senza carico mattutino.' }},
    ]
  },
];

// ====== SHOPPING LIST ======
const SHOPPING = [
  {
    cat: 'Carne / Pesce / Uova',
    items: [
      { n: 'Manzo magro (fesa, scamone)', q: '900g' },
      { n: 'Salmone fresco', q: '400g' },
      { n: 'Spigola/orata/pesce spada', q: '600g' },
      { n: 'Tonno al naturale', q: '4 scatolette' },
      { n: 'Uova', q: '12' },
      { n: 'Bresaola', q: '100g (opz.)' },
      { n: 'Salsiccia magra di maiale', q: '200g (opz.)' },
    ]
  },
  {
    cat: 'Latticini',
    items: [
      { n: 'Yogurt greco 0% (Fage/Vipiteno)', q: '1,5 kg' },
      { n: 'Latte parz. scremato', q: '1,5 L' },
      { n: 'Ricotta', q: '350g' },
      { n: 'Feta o primo sale', q: '150g' },
      { n: 'Parmigiano', q: '100g' },
    ]
  },
  {
    cat: 'Carboidrati',
    items: [
      { n: 'Fiocchi d\'avena', q: '750g' },
      { n: 'Pasta integrale', q: '500g' },
      { n: 'Riso integrale', q: '500g' },
      { n: 'Riso basmati', q: '500g' },
      { n: 'Pane integrale', q: '700g' },
      { n: 'Pane bianco (per pre-workout)', q: '300g' },
      { n: 'Patate', q: '1,2 kg' },
      { n: 'Patate dolci', q: '500g' },
      { n: 'Farro o orzo', q: '200g' },
      { n: 'Lenticchie o ceci', q: '1 vasetto' },
    ]
  },
  {
    cat: 'Frutta / Verdura',
    items: [
      { n: 'Banane', q: '10' },
      { n: 'Mele', q: '5' },
      { n: 'Frutta di stagione mista', q: '—' },
      { n: 'Avocado', q: '1' },
      { n: 'Verdure miste (zucchine, spinaci, broccoli)', q: 'abbondanti' },
      { n: 'Insalata + pomodori', q: '—' },
    ]
  },
  {
    cat: 'Frutta secca / Grassi',
    items: [
      { n: 'Mandorle', q: '250g' },
      { n: 'Noci', q: '100g' },
      { n: 'Datteri Medjool o Deglet Nour', q: '250g' },
      { n: 'Uvetta', q: '100g' },
      { n: 'Burro d\'arachidi naturale', q: '1 vasetto' },
      { n: 'Olio EVO', q: '—' },
    ]
  },
  {
    cat: 'Fueling allenamenti',
    items: [
      { n: 'Maltodestrine in polvere (Named/Enervit)', q: '500g' },
      { n: 'Sali minerali (Polase Sport / Enervit)', q: '1 conf.' },
      { n: 'Whey isolate', q: '1 conf.' },
      { n: 'Gel/barrette per lungo sabato', q: '4-5' },
      { n: 'Granola senza zuccheri aggiunti', q: '500g' },
    ]
  },
  {
    cat: 'Ufficio (kit settimanale)',
    items: [
      { n: 'Yogurt greco vasetti single-serve', q: '4-6' },
      { n: 'Frutta secca in pacchetti monodose', q: '5' },
      { n: 'Datteri/uvetta in pacchetti', q: '5' },
      { n: 'Crema mandorle/arachidi monodose', q: '5' },
      { n: 'Barrette tipo Native (no zuccheri)', q: '5' },
    ]
  },
];

// ====== REGOLE ======
const RULES = [
  { type: 'tip', title: 'Pre-workout = solo CHO rapidi', body: '<strong>Banana + datteri + miele</strong>. Niente fibre, latte o proteine prima del Z4. Lo stomaco dev\'essere leggero, il glicogeno disponibile.' },
  { type: 'tip', title: 'Recupero entro 30 minuti', body: 'Dopo workout: <strong>shake whey + carbo + frutta</strong>. La finestra anabolica conta: glicogeno e proteine si ricostruiscono meglio nei primi 30 min.' },
  { type: 'tip', title: 'Sabato: il giorno cardine', body: 'Il <strong>fueling intra del lungo</strong> (70-90g CHO/h) è non negoziabile. Senza, bonki e non recuperi per lunedì.' },
  { type: 'tip', title: 'Domenica = unico vero scarico', body: 'CHO più bassi, più proteine e grassi sani. Ma cena con CHO più alti per <strong>caricare verso lunedì alle 6:00</strong>.' },
  { type: 'normal', title: 'Idratazione', body: '<strong>3 litri/die base</strong> + reintegro post-workout (1,5x peso perso in sudore). Sali minerali se sessione &gt;90min o caldo.' },
  { type: 'normal', title: 'Pesa gli alimenti', body: 'La prima settimana usa la bilancia. Poi vai a occhio. Senza misurare, sbagli del 30-50% in eccesso.' },
  { type: 'normal', title: 'Niente alcol nei feriali', body: 'Peggiora qualità sonno e recupero. Sabato sera 1 calice vino rosso se vuoi, ma non oltre.' },
  { type: 'tip', title: 'Pesati 1 volta a settimana', body: '<strong>Lunedì mattina</strong>, digiuno, dopo bagno. Mai dopo workout lungo (acqua falsa il dato). Target: -0,4/-0,5 kg/sett.' },
  { type: 'normal', title: 'Sonno minimo 7h', body: 'Con sveglia 5:15 = letto entro 22:15. Magnesio bisglicinato 300mg la sera aiuta. Vit. D3 2000 UI mattina.' },
  { type: 'warn', title: '🚨 Quando alzare le calorie (+200/die)', body: 'Se vedi UNO di questi, NON forzare:<br>• Peso scende &gt;0,7 kg/sett per 2 sett<br>• HR a riposo +5 bpm per più giorni<br>• Sessioni Z4 impossibili da chiudere<br>• Sonno peggiora<br>• Fame ingestibile la sera' },
];
