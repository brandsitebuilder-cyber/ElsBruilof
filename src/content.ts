export type Language = 'en' | 'af';

export const content = {
  en: {
    nav: {
      landing: "Tuis",
      story: "Ons Storie",
      invitation: "Uitnodiging",
      dressCode: "Kleredrag & RSVP",
      registry: "Geskenkregister",
      accommodation: "Akkommodasie & Reis",
      faq: "Gereelde Vrae",
      gallery: "Galery"
    },
    hero: {
      names: "Ané & Lourens",
      date: "",
      venue: "",
      rsvpBtn: "RSVP"
    },
    story: {
      subtitle: "Die Begin",
      title: "Ons Storie",
      p1: "Met agt jaar tussen ons, sou ons paaie in die gewone lewe seker nooit gekruis het nie. Maar in 2024 het dit gebeur, en dit het net reg gevoel, soos 'n bietjie hulp van Bo.",
      p2: "Lourens het nie gou tou opgegooi nie, en vinnig het boodskappe in ure lange oproepe verander. Op ons eerste afspraak, oor 'n glas wyn by Laborie, was ons tuis. Later, daardie selfde middag, het Lourens vir Ane se ouers ontmoet.",
      p3: "Pretoria en Kaapstad het ons getoets, maar nooit gekelder nie. Soveel vlugte, soveel keer een van ons wat by die lughawe afgelaai of opgelaai is. Vinnig het ons geweet: dit is ons tuiste.",
      p4: "Vandag is ons mekaar se balans: sy die lig, hy die kompas. Ons is dankbaar vir die lewe wat ons saam bou."
    },
    invitation: {
      title: "Die Uitnodiging",
      intro: "Saam met hul families, en in dankbaarheid vir God se genade wat hulle bymekaar gebring het,",
      names: "Ané & Lourens",
      action: "gaan trou.",
      message: "Julle teenwoordigheid sal alles vir ons beteken wanneer ons voor mekaar ons geloftes aflê, ons geloof bely, en saam die toekoms instap.",
      datetime: "SATERDAG, 21 NOVEMBER 2026 — 15:30 VIR 16:00",
      venue: "LOCH LYNNE WYNLANDGOED, DURBANVILLE",
      attire: "KLEREDRAG: FORMELE ELEGANSIE (\"BLACK TIE\"). SIEN KLEREDRAGVEREISTES VIR BESONDERHEDE.",
      closing: ""
    },
    details: {
      title: "Besonderhede & RSVP",
      attireSubtitle: "Kleredrag",
      attireTitle: "Streng Formeel",
      attireIntro: "Ons versoek u vriendelik om in formele elegansie te verskyn.",
      attireList: [
        "Vir mans: 'n swart pak.",
        "Vir dames: Swart formele aandrokke of verfynde swart skemerkelkiedrag.",
        "Ons moedig 'n tydlose, gesofistikeerde styl aan wat by die gees van die aand pas."
      ],
      rsvpSubtitle: "Sluit by ons aan",
      rsvpTitle: "RSVP",
      rsvpText: "Ons nooi julle graag om in ons vreugde te deel. Bevestig asseblief julle bywoning voor 15 September 2026.\nRSVP gerus via die vorm hieronder.",
      thankYou: "Dankie",
      form: {
        name: "Volle Naam",
        partnerName: "Naam van metgesel (slegs indien u uitnodiging 'n metgesel insluit)",
        cellphone: "Selfoonnommer",
        email: "E-pos",
        mainCourseLabel: "Hoofgereg-keuse en dieetvereistes",
        mainCourseOptions: [
          "Italiaanse \"Beef\" repies, aartappelgnocchi, truffelsampioensous, gesmoorde groente in chimichurri, en botterskorsie-skyfies.",
          "Panko-omhulde hoenderrolade gevul met songedroogde tamatie, feta en spinasie, fondant-aartappel, truffelsampioensous, en groente.",
          "Vegan/Vegetaries."
        ],
        dietary: "Allergieë of ander dieetvereistes",
        submit: "Dien RSVP in",
        duplicateError: "Dit lyk of jy reeds met hierdie nommer RSVP'd het!",
        networkError: "Kon nie aan die bediener koppel nie. Gaan asseblief u verbinding na.",
        genericError: "Iets het foutgegaan. Probeer asseblief later weer."
      }
    },
    registry: {
      subtitle: "Geskenkregister",
      title: "Trou Register",
      description: "Julle teenwoordigheid op ons troudag is vir ons die grootste geskenk. As julle ons wel met 'n geskenk wil seën, het ons 'n geskenkregister opgesit.",
      passwordLabel: "Wachtwoord vir register",
      copyPassword: "Kopieer",
      copied: "Gekopieer!",
      openRegistry: "Besoek Geskenkregister",
      note: "Voer die wachtwoord 'Kombuistee' in op MyRegistry.com indien daartoe gevra."
    },
    accommodation: {
      subtitle: "Verblyf & Reis",
      title: "Akkommodasie: Prys & Afstand",
      intro: "",
      tableTitle: "Akkommodasie",
      tableHeaders: ["Akkommodasie", "Geskatte Afstand", "Webwerf"],
      tableData: [
        ["Cassia (Nitida) Rooms", "~5 km", "nitida.co.za"],
        ["Meerendal Boutique Hotel", "~6 km", "meerendal.co.za"],
        ["D'Aria Guest Cottages", "~8 km", "dariawinery.co.za"],
        ["Evertsdal Guest House", "~9 km", "evertsdal.com"],
        ["Spes Bona Guest Farm", "~10 km", "spesbonaguestfarm.co.za"],
        ["Cosimi Guest House", "~10 km", "cosimiguesthouse.com"],
        ["Ruslamere Hotel & Spa", "~10 km", "ruslamere.co.za"],
        ["Four Palms Accommodation", "~10 km", "fourpalms.co.za"],
        ["Heritage Square Apts", "~10 km", "heritagesquare.co.za"],
        ["Kolping Guest House", "~11 km", "kolpingguesthouse.co.za"],
        ["Dark Chocolate Guest House", "~11 km", "darkchocolate.capetown"],
        ["Cape Village Lodge", "~11 km", "capevillagelodge.co.za"],
        ["Le Petit Chateau", "~11 km", "lepetitchateau.co.za"],
        ["Onelife Guesthouse", "~11 km", "onelifeguesthouse.co.za"],
        ["Dilisca Guesthouse", "~12 km", "dilisca.co.za"],
        ["Pelican Place", "~12 km", "pelicanplace.co.za"],
        ["Protea Hotel Durbanville", "~12 km", "marriott.com"],
        ["Tyger Valley Protea", "~13 km", "marriott.com"],
        ["Mar d'Este", "~13 km", "mardeste.co.za"]
      ],
      transportTitle: "Vervoerwenke",
      transportList: [
        "E-hailing: Uber en Bolt is aktief in Durbanville en is ideaal vir ritte van punt tot punt.",
        "Pendeldienste: Maak seker jy bespreek vroeg. Wanneer jy bespreek, vra asseblief vir laatnag-pendeldienste.",
        "Parkering op die terrein: Parkering is beskikbaar by die venue. Ons moedig sterk aan dat jy 'n vervoerdiens gebruik, of andersins 'n aangewese bestuurder, sodat jy die kroeg ten volle kan geniet."
      ],
      shuttleTitle: "Aanbevole Pendeldienste",
      shuttleData: [
        ["Cape Winelands Shuttle Transfers", "capewinelandtours.co.za"],
        ["Stellenbosch Shuttles", "stellenboschshuttles.co.za"],
        ["Winelands Private Transfers", "privatetransfer.co.za"],
        ["Cape Town Shuttle Services", "capetownshuttleservices.co.za"],
        ["Joe's Premier Shuttle", "durbanvilleclassifieds.co.za"],
        ["Fair Cape Shuttles", "faircapeshuttles.co.za"],
        ["Wolf Shuttles", "wolfshuttles.co.za"]
      ]
    },
    faq: {
      subtitle: "Besonderhede",
      title: "Gereelde Vrae",
      questions: [
        {
          q: "Is kinders welkom?",
          a: "Ons het besluit om die dag slegs vir volwassenes te hou. Ons waardeer u begrip en hoop u geniet hierdie geleentheid saam met ons."
        },
        {
          q: "Is daar parkering beskikbaar?",
          a: "Ja, veilige parkering is op die perseel beskikbaar. Besonderhede sal met u aankoms gedeel word."
        },
        {
          q: "Mag ek iemand saamnooi?",
          a: "As gevolg van spasiebeperkings kan ons slegs gaste akkommodeer wie se name op die formele uitnodiging verskyn. Dankie dat u ons intieme gastelys respekteer."
        },
        {
          q: "Wanneer moet ek RSVP?",
          a: "Bevestig asseblief u bywoning voor 15 September 2026. Ons sien uit daarna om die dag saam met u te vier."
        }
      ]
    },
    gallery: {
      subtitle: "Foto-galery",
      title: "Verlowingsfotos"
    },
    footer: {
      text: "Ané & Lourens · 21 November 2026"
    }
  },
  af: {
    nav: {
      landing: "Tuis",
      story: "Ons Storie",
      invitation: "Uitnodiging",
      dressCode: "Kleredrag & RSVP",
      registry: "Geskenkregister",
      accommodation: "Akkommodasie & Reis",
      faq: "Gereelde Vrae",
      gallery: "Galery"
    },
    hero: {
      names: "Ané & Lourens",
      date: "",
      venue: "",
      rsvpBtn: "RSVP"
    },
    story: {
      subtitle: "Die Begin",
      title: "Ons Storie",
      p1: "Met agt jaar tussen ons, sou ons paaie in die gewone lewe seker nooit gekruis het nie. Maar in 2024 het dit gebeur, en dit het net reg gevoel, soos 'n bietjie hulp van Bo.",
      p2: "Lourens het nie gou tou opgegooi nie, en vinnig het boodskappe in ure lange oproepe verander. Op ons eerste afspraak, oor 'n glas wyn by Laborie, was ons tuis. Later, daardie selfde middag, het Lourens vir Ane se ouers ontmoet.",
      p3: "Pretoria en Kaapstad het ons getoets, maar nooit gekelder nie. Soveel vlugte, soveel keer een van ons wat by die lughawe afgelaai of opgelaai is. Vinnig het ons geweet: dit is ons tuiste.",
      p4: "Vandag is ons mekaar se balans: sy die lig, hy die kompas. Ons is dankbaar vir die lewe wat ons saam bou."
    },
    invitation: {
      title: "Die Uitnodiging",
      intro: "Saam met hul families, en in dankbaarheid vir God se genade wat hulle bymekaar gebring het,",
      names: "Ané & Lourens",
      action: "gaan trou.",
      message: "Julle teenwoordigheid sal alles vir ons beteken wanneer ons voor mekaar ons geloftes aflê, ons geloof bely, en saam die toekoms instap.",
      datetime: "SATERDAG, 21 NOVEMBER 2026 — 15:30 VIR 16:00",
      venue: "LOCH LYNNE WYNLANDGOED, DURBANVILLE",
      attire: "KLEREDRAG: FORMELE ELEGANSIE (\"BLACK TIE\"). SIEN KLEREDRAGVEREISTES VIR BESONDERHEDE.",
      closing: ""
    },
    details: {
      title: "Besonderhede & RSVP",
      attireSubtitle: "Kleredrag",
      attireTitle: "Streng Formeel",
      attireIntro: "Ons versoek u vriendelik om in formele elegansie te verskyn.",
      attireList: [
        "Vir mans: 'n swart pak.",
        "Vir dames: Swart formele aandrokke of verfynde swart skemerkelkiedrag.",
        "Ons moedig 'n tydlose, gesofistikeerde styl aan wat by die gees van die aand pas."
      ],
      rsvpSubtitle: "Sluit by ons aan",
      rsvpTitle: "RSVP",
      rsvpText: "Ons nooi julle graag om in ons vreugde te deel. Bevestig asseblief julle bywoning voor 15 September 2026.\nRSVP gerus via die vorm hieronder.",
      thankYou: "Dankie",
      form: {
        name: "Volle Naam",
        partnerName: "Naam van metgesel (slegs indien u uitnodiging 'n metgesel insluit)",
        cellphone: "Selfoonnommer",
        email: "E-pos",
        mainCourseLabel: "Hoofgereg-keuse en dieetvereistes",
        mainCourseOptions: [
          "Italiaanse \"Beef\" repies, aartappelgnocchi, truffelsampioensous, gesmoorde groente in chimichurri, en botterskorsie-skyfies.",
          "Panko-omhulde hoenderrolade gevul met songedroogde tamatie, feta en spinasie, fondant-aartappel, truffelsampioensous, en groente.",
          "Vegan/Vegetaries."
        ],
        dietary: "Allergieë of ander dieetvereistes",
        submit: "Dien RSVP in",
        duplicateError: "Dit lyk of jy reeds met hierdie nommer RSVP'd het!",
        networkError: "Kon nie aan die bediener koppel nie. Gaan asseblief u verbinding na.",
        genericError: "Iets het foutgegaan. Probeer asseblief later weer."
      }
    },
    registry: {
      subtitle: "Geskenkregister",
      title: "Trou Register",
      description: "Julle teenwoordigheid op ons troudag is vir ons die grootste geskenk. As julle ons wel met 'n geskenk wil seën, het ons 'n geskenkregister opgesit.",
      passwordLabel: "Wachtwoord vir register",
      copyPassword: "Kopieer",
      copied: "Gekopieer!",
      openRegistry: "Besoek Geskenkregister",
      note: "Voer die wachtwoord 'Kombuistee' in op MyRegistry.com indien daartoe gevra."
    },
    accommodation: {
      subtitle: "Verblyf & Reis",
      title: "Akkommodasie: Prys & Afstand",
      intro: "",
      tableTitle: "Akkommodasie",
      tableHeaders: ["Akkommodasie", "Geskatte Afstand", "Webwerf"],
      tableData: [
        ["Cassia (Nitida) Rooms", "~5 km", "nitida.co.za"],
        ["Meerendal Boutique Hotel", "~6 km", "meerendal.co.za"],
        ["D'Aria Guest Cottages", "~8 km", "dariawinery.co.za"],
        ["Evertsdal Guest House", "~9 km", "evertsdal.com"],
        ["Spes Bona Guest Farm", "~10 km", "spesbonaguestfarm.co.za"],
        ["Cosimi Guest House", "~10 km", "cosimiguesthouse.com"],
        ["Ruslamere Hotel & Spa", "~10 km", "ruslamere.co.za"],
        ["Four Palms Accommodation", "~10 km", "fourpalms.co.za"],
        ["Heritage Square Apts", "~10 km", "heritagesquare.co.za"],
        ["Kolping Guest House", "~11 km", "kolpingguesthouse.co.za"],
        ["Dark Chocolate Guest House", "~11 km", "darkchocolate.capetown"],
        ["Cape Village Lodge", "~11 km", "capevillagelodge.co.za"],
        ["Le Petit Chateau", "~11 km", "lepetitchateau.co.za"],
        ["Onelife Guesthouse", "~11 km", "onelifeguesthouse.co.za"],
        ["Dilisca Guesthouse", "~12 km", "dilisca.co.za"],
        ["Pelican Place", "~12 km", "pelicanplace.co.za"],
        ["Protea Hotel Durbanville", "~12 km", "marriott.com"],
        ["Tyger Valley Protea", "~13 km", "marriott.com"],
        ["Mar d'Este", "~13 km", "mardeste.co.za"]
      ],
      transportTitle: "Vervoerwenke",
      transportList: [
        "E-hailing: Uber en Bolt is aktief in Durbanville en is ideaal vir ritte van punt tot punt.",
        "Pendeldienste: Maak seker jy bespreek vroeg. Wanneer jy bespreek, vra asseblief vir laatnag-pendeldienste.",
        "Parkering op die terrein: Parkering is beskikbaar by die venue. Ons moedig sterk aan dat jy 'n vervoerdiens gebruik, of andersins 'n aangewese bestuurder, sodat jy die kroeg ten volle kan geniet."
      ],
      shuttleTitle: "Aanbevole Pendeldienste",
      shuttleData: [
        ["Cape Winelands Shuttle Transfers", "capewinelandtours.co.za"],
        ["Stellenbosch Shuttles", "stellenboschshuttles.co.za"],
        ["Winelands Private Transfers", "privatetransfer.co.za"],
        ["Cape Town Shuttle Services", "capetownshuttleservices.co.za"],
        ["Joe's Premier Shuttle", "durbanvilleclassifieds.co.za"],
        ["Fair Cape Shuttles", "faircapeshuttles.co.za"],
        ["Wolf Shuttles", "wolfshuttles.co.za"]
      ]
    },
    faq: {
      subtitle: "Besonderhede",
      title: "Gereelde Vrae",
      questions: [
        {
          q: "Is kinders welkom?",
          a: "Ons het besluit om die dag slegs vir volwassenes te hou. Ons waardeer u begrip en hoop u geniet hierdie geleentheid saam met ons."
        },
        {
          q: "Is daar parkering beskikbaar?",
          a: "Ja, veilige parkering is op die perseel beskikbaar. Besonderhede sal met u aankoms gedeel word."
        },
        {
          q: "Mag ek iemand saamnooi?",
          a: "As gevolg van spasiebeperkings kan ons slegs gaste akkommodeer wie se name op die formele uitnodiging verskyn. Dankie dat u ons intieme gastelys respekteer."
        },
        {
          q: "Wanneer moet ek RSVP?",
          a: "Bevestig asseblief u bywoning voor 15 September 2026. Ons sien uit daarna om die dag saam met u te vier."
        }
      ]
    },
    gallery: {
      subtitle: "Foto-galery",
      title: "Verlowingsfotos"
    },
    footer: {
      text: "Ané & Lourens · 21 November 2026"
    }
  }
};
