export interface TermDefinition {
  term: string;
  short: string;
  detail: string;
}

const GLOSSARY_LIST: TermDefinition[] = [
  {
    term: 'Makronæringsstoffer',
    short: 'Næringsstoffer kroppen trenger i store mengder',
    detail:
      'Karbohydrater, proteiner og fett (pluss vann). De gir energi (målt i kJ/kcal) og byggesteiner til celler og vev.',
  },
  {
    term: 'Mikronæringsstoffer',
    short: 'Vitaminer og mineraler som trengs i små mengder',
    detail:
      'Gir ikke energi i seg selv, men er avgjørende hjelpestoffer for enzymer, immunforsvar, nervesystem og skjelett.',
  },
  {
    term: 'Monosakkarid',
    short: 'Enkelt sukkermolekyl (f.eks. glukose og fruktose)',
    detail:
      'Den minste byggesteinen i karbohydrater. Kan tas rett opp i blodet gjennom tarmveggen uten ytterligere nedbrytning.',
  },
  {
    term: 'Polysakkarid',
    short: 'Lange kjeder av sukkermolekyler (stivelse, glykogen, cellulose)',
    detail:
      'Stivelse brytes ned til glukose som gir jevn blodsukkerstigning. Cellulose (kostfiber) kan ikke brytes ned av våre enzymer, men holder tarmen frisk.',
  },
  {
    term: 'Essensiell aminosyre',
    short: 'Aminosyre kroppen ikke klarer å lage selv',
    detail:
      'Av de 20 aminosyrene som bygger proteiner, er 9 essensielle – vi må få dem gjennom maten (f.eks. fisk, egg, melk, belgfrukter og korn).',
  },
  {
    term: 'Umettet fett',
    short: 'Fettsyrer med én eller flere dobbeltbindinger',
    detail:
      'Finnes i fet fisk, rapsolje, olivenolje, nøtter og avokado. Gunstig for hjerte- og karsystemet og cellemembranene.',
  },
  {
    term: 'Mettet fett',
    short: 'Fettsyrer uten dobbeltbindinger (ofte fast ved romtemperatur)',
    detail:
      'Finnes i fete meieriprodukter, smør og rødt kjøtt. Høyt inntak kan øke LDL-kolesterolet i blodet.',
  },
  {
    term: 'Kostfiber',
    short: 'Ufordøyelige karbohydrater fra planter',
    detail:
      'Gir metthet, stabiliserer blodsukkeret, binder kolesterol og er viktig mat for de gode tarmbakteriene i tykktarmen.',
  },
  {
    term: 'Enzym',
    short: 'Biologisk katalysator (protein) som øker reaksjonsfarten',
    detail:
      'Klipper opp store næringsmolekyler til små byggesteiner i fordøyelsen (f.eks. amylase, pepsin, lipase) uten å bli brukt opp selv.',
  },
  {
    term: 'Peristaltikk',
    short: 'Bølgeformede muskelsammentrekninger i fordøyelseskanalen',
    detail:
      'Glatt muskulatur presser maten fremover gjennom spiserør, magesekk og tarm – selv om du står på hodet!',
  },
  {
    term: 'Amylase',
    short: 'Enzym som bryter ned stivelse til kortere sukkerarter',
    detail:
      'Produseres i spyttkjertlene i munnen og i bukspyttkjertelen. Derfor smaker brød søtere hvis du tygger det lenge.',
  },
  {
    term: 'Pepsin',
    short: 'Proteinspaltende enzym i magesekken',
    detail:
      'Aktiveres av den sure magesaften (pH 1,5–2) og starter nedbrytningen av proteiner til kortere peptidkjeder.',
  },
  {
    term: 'Galle',
    short: 'Væske fra leveren som finfordeler fett',
    detail:
      'Lagres i galleblæren og slippes ut i tolvfingertarmen. Inneholder ikke enzymer, men emulgerer fett til bittesmå dråper så lipase kommer til.',
  },
  {
    term: 'Tarmtotter',
    short: 'Millioner av fingerlignende utvekster i tynntarmen',
    detail:
      'Øker overflaten til tynntarmen til omtrent en halv tennisbane, slik at glukose, aminosyrer og fettsyrer tas opp effektivt i blod og lymfe.',
  },
  {
    term: 'Tarmflora (mikrobiom)',
    short: 'Bakteriene og mikroorganismene som lever i tykktarmen',
    detail:
      'Produserer blant annet vitamin K og B-vitaminer, bryter ned kostfiber til kortkjedede fettsyrer og støtter immunforsvaret.',
  },
  {
    term: 'ATP',
    short: 'Adenosintrifosfat – cellens universelle energivaluta',
    detail:
      'Når ett fosfat spaltes av fra ATP (til ADP + P), frigjøres energi som driver muskelarbeid, aktiv transport og cellebygging.',
  },
  {
    term: 'Celleånding',
    short: 'Kjemisk prosess der cellen frigjør energi fra glukose og O₂',
    detail:
      'Foregår hovedsakelig i mitokondriene: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energi (ca. 30–32 ATP + varme).',
  },
  {
    term: 'Mitokondrie',
    short: 'Cellens «kraftverk»',
    detail:
      'Organelle med dobbel membran der sitronsyresyklus og elektrontransportkjeden foregår. Muskelceller har ekstra mange mitokondrier.',
  },
  {
    term: 'Glykolyse',
    short: 'Første trinn i nedbrytningen av glukose (i cytoplasma)',
    detail:
      'Spalter ett glukosemolekyl (6 C) til to pyruvatmolekyler (3 C). Krever ikke oksygen og gir 2 netto ATP.',
  },
  {
    term: 'Sitronsyresyklus',
    short: 'Andre trinn i celleåndingen (inne i mitokondriet)',
    detail:
      'Bryter ned pyruvat fullstendig, frigjør CO₂ og lader opp elektronbærere (NADH og FADH₂) til elektrontransportkjeden.',
  },
  {
    term: 'Elektrontransportkjeden',
    short: 'Siste og mest energirike trinn i celleåndingen',
    detail:
      'Bruker elektroner fra NADH/FADH₂ og oksygen (O₂) som siste elektronmottaker for å produsere ca. 26–28 ATP per glukose.',
  },
  {
    term: 'Osmose',
    short: 'Vannets vandring gjennom en halvgjennomtrengelig membran',
    detail:
      'Vann beveger seg alltid fra lav til høy konsentrasjon av oppløste stoffer (som salter). Avgjørende for væskebalansen i cellene.',
  },
  {
    term: 'Elektrolytter',
    short: 'Løste salter (ioner som Na⁺, K⁺, Cl⁻) i kroppsvæsken',
    detail:
      'Styrer væsketrykk, nerveimpulser og muskelsammentrekninger. Tapes gjennom svette ved hard eller langvarig trening.',
  },
  {
    term: 'Termoregulering',
    short: 'Kroppens regulering av kjernetemperatur (~37 °C)',
    detail:
      'Når vi trener, blir ca. 75–80 % av energien til varme. Fordamping av svette fra huden kjøler oss ned effektivt.',
  },
  {
    term: 'Aerob forbrenning',
    short: 'Energifrigjøring med tilstrekkelig oksygen',
    detail:
      'Gir mye ATP over lang tid (fra både karbohydrat og fett) uten at det hoper seg opp melkesyre. Brukes ved rolig til moderat intensitet.',
  },
  {
    term: 'Anaerob forbrenning',
    short: 'Rask energifrigjøring uten nok oksygen',
    detail:
      'Skjer ved høy intensitet (sprint, tunge løft). Pyruvat gjøres om til laktat (melkesyre), som gir rask ATP, men fører raskt til utmattelse.',
  },
  {
    term: 'Melkesyre (laktat)',
    short: 'Biprodukt ved anaerob glykolyse',
    detail:
      'Laktat kan brukes som energi senere, men sammen med H⁺-ioner senker det pH i muskelen og bidrar til at musklene «stivner».',
  },
  {
    term: 'Superkompensasjon',
    short: 'Kroppens overkompensering etter trening og hvile',
    detail:
      'Etter belastning og god restitusjon bygger kroppen seg opp til et høyere prestasjonsnivå enn utgangspunktet.',
  },
  {
    term: 'VO₂-maks',
    short: 'Maksimalt oksygenopptak',
    detail:
      'Måler hvor mye oksygen kroppen klarer å ta opp og utnytte per minutt. Det viktigste målet på utholdenhet og hjerte-lunge-kapasitet.',
  },
  {
    term: 'Restitusjon',
    short: 'Gjenoppbygging av kroppens lagre og vev etter trening',
    detail:
      'Inkluderer søvn, væske, karbohydrater til glykogenlagre og proteiner til å reparere mikroskader i muskelfibrene.',
  },
  {
    term: 'Energibalanse',
    short: 'Forholdet mellom energi inn (mat/drikke) og energi ut (forbruk)',
    detail:
      'Ved likevekt er kroppsvekten stabil. Energi måles i kilojoule (kJ) eller kilokalorier (kcal), der 1 kcal ≈ 4,18 kJ.',
  },
  {
    term: 'BMR (Hvileforbrenning)',
    short: 'Basalmetabolsk rate – energien kroppen bruker i total hvile',
    detail:
      'Utgjør ofte 60–70 % av døgnforbruket og går til hjerte, hjerne, pust, kroppstemperatur og cellefornyelse.',
  },
  {
    term: 'Tallerkenmodellen',
    short: 'Visuell guide for et balansert måltid',
    detail:
      'En enkel tommelfingerregel: fyll ca. 1/3–1/2 med grønnsaker, 1/3 med grove karbohydrater og 1/3 med proteinrik mat.',
  },
  {
    term: 'Klimaavtrykk (CO₂e)',
    short: 'Samlet utslipp av klimagasser fra produksjon til bord',
    detail:
      'Rødt kjøtt (særlig storfe) har langt høyere CO₂-ekvivalenter per kg enn belgvekster, korn, grønnsaker og fisk.',
  },
  {
    term: 'Fagfellevurdert',
    short: 'Kvalitetssikret av uavhengige forskere før publisering',
    detail:
      'Betyr at andre eksperter på feltet har sjekket metode, data og konklusjoner i en vitenskapelig artikkel.',
  },
  {
    term: 'Interessekonflikt',
    short: 'Økonomisk eller personlig binding som kan farge et råd',
    detail:
      'Hvis en influenser får betalt for å reklamere for et kosttilskudd, eller en produsent finansierer en studie, må vi være ekstra kritiske.',
  },
  {
    term: 'TONE-prinsippet',
    short: 'Huskeliste for kildekritikk: Troverdighet, Objektivitet, Nøyaktighet, Egnethet',
    detail:
      'Brukes for å vurdere om en helse- eller kostholdspåstand kommer fra en pålitelig kilde med godt dokumentert grunnlag.',
  },
  {
    term: 'Evidenshierarkiet',
    short: 'Rangering av hvor sterk vitenskapelig dokumentasjon som ligger bak',
    detail:
      'Enkeltpersoners erfaringer (anekdoter) ligger nederst, mens systematiske kunnskapsoppsummeringer og randomiserte studier ligger øverst.',
  },
];

const GLOSSARY_MAP: Record<string, TermDefinition> = Object.fromEntries(
  GLOSSARY_LIST.map((item) => [item.term.toLowerCase(), item]),
);

export function getTermDefinition(term: string): TermDefinition | undefined {
  return GLOSSARY_MAP[term.toLowerCase()];
}
