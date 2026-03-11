export type Language = 'en' | 'af';

export const content = {
  en: {
    nav: {
      landing: "Home",
      story: "Our Story",
      invitation: "Invitation",
      schedule: "Schedule",
      dressCode: "Dress Code & RSVP",
      accommodation: "Accommodation & Travel",
      thingsToDo: "Things To Do",
      faq: "FAQ",
      gallery: "Gallery"
    },
    hero: {
      names: "Ané Havenga & Lourens Els",
      date: "21 November 2026",
      venue: "Loch Lynne Wine Estate · Durbanville",
      rsvpBtn: "RSVP"
    },
    story: {
      subtitle: "The Beginning",
      title: "Our Story",
      p1: "Looking back, their meeting feels like the most beautiful kind of luck, knowing it is all carefully planned by our Heavenly Father. With eight years between them, their paths might never have crossed in the ordinary rhythm of life. Yet when the moment arrived in 2024, it was a leap of faith that seemed written in the stars.",
      p2: "From that very first encounter, Lourens knew he would sweep her off her feet, a promise sealed over a glass of wine, during their first date at Laborie, where he met Ane’s parents that very same afternoon.",
      p3: "Though the miles between Pretoria and Cape Town tested their patience, they only strengthened their resolve. Countless hours and journeys were spent bridging the distance, proving that love knows no boundaries when hearts have already found their home.",
      p4: "Today, they are a perfect balance, she is his radiant light, and he is her steadfast compass. We are privileged to celebrate the beautiful life they have woven together."
    },
    invitation: {
      title: "The Invitation",
      intro: "With their families by their side, and acknowledging God’s grace in bringing them together,",
      names: "Lourens Els & Ané Havenga",
      action: "are getting married.",
      message: "We would love for you to join us to celebrate our vows, our faith, and the life we are building together.",
      datetime: "Saturday, 21 November 2026 at 15:30",
      venue: "Loch Lynne Wine Estate, Durbanville",
      attire: "Attire: Formal / Black Tie",
      closing: "We look forward to beginning our forever, surrounded by the warmth and love of our family and friends."
    },
    schedule: {
      subtitle: "The Timeline",
      title: "Schedule",
      items: [
        { time: "15:00", event: "Guest Arrival & Welcome Drinks" },
        { time: "15:30", event: "Wedding Ceremony" },
        { time: "16:30", event: "Canapés & Photographs" },
        { time: "18:30", event: "Reception & Dinner" }
      ]
    },
    details: {
      title: "Details & RSVP",
      attireSubtitle: "Dress Code",
      attireTitle: "Attire",
      attireIntro: "We kindly request strict formal elegance attire.",
      attireList: [
        "For gentlemen: a Black or dark suit.",
        "For ladies: In black, neutral and muted tones, formal, floor-length gowns or refined cocktail dresses.",
        "We invite you to embrace a timeless, sophisticated look that mirrors the spirit of the occasion."
      ],
      rsvpSubtitle: "Join Us",
      rsvpTitle: "RSVP",
      rsvpText: "We kindly ask that you confirm your attendance before the 31st of August 2026. You may RSVP via the form below.",
      dietarySubtitle: "Menu",
      dietaryTitle: "Dietary Requirements",
      dietaryText: "Please let us know if you have any allergies or specific dietary needs so we can ensure you are well cared for on the day.",
      thankYou: "Thank You",
      form: {
        name: "Full Name(s)",
        attending: "Number Attending",
        dietary: "Dietary Requirements",
        message: "Message for the Couple",
        submit: "Submit RSVP"
      }
    },
    accommodation: {
      subtitle: "Stay & Travel",
      title: "Accommodation & Travel",
      intro: "We look forward to welcoming you to the beautiful Winelands. We have gathered the following information to ensure your travel and stay are as seamless and enjoyable as possible.",
      onsiteTitle: "Accommodation Tips",
      onsiteList: [
        "Whether you are looking to stay close to the venue, or if you are here for a weekend in the winelands - please see \"Accommodation: Price & Proximity\" below.",
        "Consider \"Lekkeslaap\" or \"AirBnB\" for more cost effective accommodation",
        "If you consider accommodation further away from the venue, please see \"Recommended Shuttles\" below."
      ],
      tableTitle: "Accommodation: Price & Proximity",
      tableHeaders: ["Accommodation", "Dist.", "Est. p/n", "Website"],
      tableData: [
        ["Loch Lynne Estate (Venue, Family)", "0 km", "R 2,500+", "lochlynne.co.za"],
        ["Cassia (Nitida) Rooms", "~5 km", "R 2,200+", "nitida.co.za"],
        ["Meerendal Boutique Hotel", "~6 km", "R 2,200+", "meerendal.co.za"],
        ["D'Aria Guest Cottages", "~8 km", "R 1,900+", "dariawinery.co.za"],
        ["Evertsdal Guest House", "~9 km", "R 2,100+", "evertsdal.com"],
        ["Spes Bona Guest Farm", "~10 km", "R 2,000+", "spesbonaguestfarm.co.za"],
        ["Cosimi Guest House", "~10 km", "R 1,900+", "cosimiguesthouse.com"],
        ["Ruslamere Hotel & Spa", "~10 km", "R 1,500+", "ruslamere.co.za"],
        ["Four Palms Accommodation", "~10 km", "R 1,300+", "fourpalms.co.za"],
        ["Heritage Square Apts", "~10 km", "R 2,000+", "heritagesquare.co.za"],
        ["Kolping Guest House", "~11 km", "R 1,300+", "kolpingguesthouse.co.za"],
        ["Dark Chocolate Guest House", "~11 km", "R 1,590+", "darkchocolate.capetown"],
        ["Cape Village Lodge", "~11 km", "R 1,600+", "capevillagelodge.co.za"],
        ["Le Petit Chateau", "~11 km", "R 1,600+", "lepetitchateau.co.za"],
        ["Onelife Guesthouse", "~11 km", "R 1,500+", "onelifeguesthouse.co.za"],
        ["Dilisca Guesthouse", "~12 km", "R 1,400+", "dilisca.co.za"],
        ["Pelican Place", "~12 km", "R 1,200+", "pelicanplace.co.za"],
        ["Protea Hotel Durbanville", "~12 km", "R 1,800+", "marriott.com"],
        ["Tyger Valley Protea", "~13 km", "R 1,700+", "marriott.com"],
        ["Mar d'Este", "~13 km", "R 1,500+", "mardeste.co.za"],
        ["Wellgeluk Guest Farm", "~15 km", "R 1,600+", "wellgeluk.co.za"],
        ["Anna Beulah Farm", "~15 km", "R 1,200+", "annabeulahfarm.co.za"],
        ["Clouds Guest House", "~18 km", "R 1,400+", "cloudsguesthouse.co.za"],
        ["Cultivar Boutique Hotel", "~35 km", "R 2,800+", "cultivar-boutique-hotel.com"],
        ["Asara Wine Estate", "~38 km", "R 3,500+", "asara.co.za"],
        ["Jordan Luxury Suites", "~40 km", "R 5,000+", "jordanwines.com"],
        ["Majeka House", "~40 km", "R 4,500+", "majekahouse.co.za"],
        ["Spier Hotel", "~42 km", "R 7,500+", "spier.co.za"],
        ["Boschendal Farm", "~52 km", "R 3,960+", "boschendal.com"],
        ["Le Franschhoek Hotel", "~55 km", "R 3,500+", "lefranschhoek.co.za"]
      ],
      transportTitle: "Transport Tips",
      transportList: [
        "E-Hailing: Uber and Bolt are active in Durbanville, ideal for point-to-point trips.",
        "Shuttles: Ensure you book early. When booking, as for late night shuttle services.",
        "Parking on-site: Parking is available at the venue, we strongly encourage using a transport service, alternately a designated driver, so you can fully enjoy te bar."
      ],
      shuttleTitle: "Recommended Shuttles",
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
      subtitle: "Details",
      title: "FAQ",
      questions: [
        {
          q: "Are children invited?",
          a: "We have chosen to host an adults-only celebration. We appreciate your understanding and hope you enjoy this time of celebration with us."
        },
        {
          q: "Is there parking available?",
          a: "Yes, secure, on-site parking will be provided. Detailed instructions will be shared upon your arrival."
        },
        {
          q: "Can I bring a plus one?",
          a: "Due to space limitations, we can only accommodate those guests named on your formal invitation. Thank you for respecting our intimate guest list."
        },
        {
          q: "When should I RSVP by?",
          a: "Please kindly submit your RSVP by 31 August 2026. We look forward to celebrating with you."
        }
      ]
    },
    thingsToDo: {
      subtitle: "Explore",
      title: "Things to Do in the Winelands",
      intro: "The Cape Winelands offer endless beauty. Here are our suggestions for the weekend:",
      list: [
        { name: "Stellenbosch Wine Tractor", desc: "A Hop-on Hop-off wine tasting tour of Stellenbosch's finest wine farms in a unique and fun way to explore the Golden Triangle of South Africa's most famous wine region." },
        { name: "Franschhoek Wine Tram", desc: "The iconic way to explore the valley. Book well in advance for November." },
        { name: "Babylonstoren Gardens", desc: "A 3.5-hectare garden, a masterpiece of design and botany." },
        { name: "Stellenbosch Town Walk", desc: "Dorp Street: boutiques, galleries, and Cape Dutch architecture." },
        { name: "Durbanville Wine Safari", desc: "A hop-on-hop-off bus starting at Durbanville Hills, a perfect local morning." },
        { name: "D'Aria & Nitida", desc: "A Durbanville area favourites for a morning-after breakfast or coffee." },
        { name: "Diemersdal Wine Estate", desc: "Where six generations of tradition and innovation intertwine to create a symphony of unique and remarkable winemaking." }
      ]
    },
    gallery: {
      subtitle: "Moments",
      title: "Gallery"
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
      schedule: "Skedule",
      dressCode: "Kleredrag & RSVP",
      accommodation: "Akkommodasie & Reis",
      thingsToDo: "Aktiwiteite",
      faq: "Gereelde Vrae",
      gallery: "Galery"
    },
    hero: {
      names: "Ané Havenga & Lourens Els",
      date: "21 November 2026",
      venue: "Loch Lynne Wynlandgoed · Durbanville",
      rsvpBtn: "RSVP"
    },
    story: {
      subtitle: "Die Begin",
      title: "Ons Storie",
      p1: "Wanneer ons terugkyk, voel hul ontmoeting soos die kosbaarste geskenk van die noodlot, ’n toevallige geluk wat ons weet deur ons Hemelse Vader se volmaakte tyding gelei is. Met ’n agt-jaar gaping tussen hulle, sou hul paaie waarskynlik nooit in die gewone gang van die lewe gekruis het nie. Tog, toe die oomblik in 2024 aanbreek, was dit ’n sprong van geloof wat eenvoudig onvermydelik was.",
      p2: "Van daardie eerste ontmoeting af het Lourens geweet hy sou haar hart verower, ’n belofte wat bevestig is tydens hul eerste afspraak oor ‘n glas wyn by Laborie, waar hy Ane’seouers daardie selfde middag ontmoet het.",
      p3: "Al het die afstand tussen Pretoria en Kaapstad hul geduld beproef, het dit slegs hul vasberadenheid verdiep. Ure en kilometers het hulle afgelê om die gaping te oorbrug, en bewys dat afstand betekenisloos is wanneer twee harte reeds hul tuiste gevind het.",
      p4: "Vandag is hulle die perfekte balans, sy die sprankelende ligvir hom, en hy haar standvastige kompas. Ons is bevoorreg om die pragtige lewe wat hulle saam geskep het, te vier."
    },
    invitation: {
      title: "Die Uitnodiging",
      intro: "Saam met hul families, en in dankbaarheid vir God se genade wat hulle bymekaar gebring het,",
      names: "Lourens Els & Ané Havenga",
      action: "gaan trou.",
      message: "Dit sal vir ons ‘n voorreg wees om julle teenwoordig te hê wanneer ons ons geloftes, ons geloof en ons toekoms saam met mekaar bevestig.",
      datetime: "Saterdag, 21 November 2026 om 15:30",
      venue: "Loch Lynne Wynlandgoed, Durbanville",
      attire: "Kleredrag: Black Tie / Formele Elegansie",
      closing: "Ons sien uit daarna om ons ewigheid te begin, omring deur die warmte en liefde van ons familie en vriende."
    },
    schedule: {
      subtitle: "Die Tydlyn",
      title: "Skedule",
      items: [
        { time: "15:00", event: "Gaste Aankoms & Verwelkomingsdrankies" },
        { time: "15:30", event: "Huwelikseremonie" },
        { time: "16:30", event: "Skemerkelkies & Foto's" },
        { time: "18:30", event: "Onthaal & Aandete" }
      ]
    },
    details: {
      title: "Besonderhede & RSVP",
      attireSubtitle: "Kleredrag",
      attireTitle: "Streng formeel",
      attireIntro: "Ons versoek u vriendelik om in formele elegansie aan te trek.",
      attireList: [
        "Vir mans: 'n swart of donker pak",
        "Vir dames: In swart, neutrale of gedempte skakerings, formele aandrokke of verfynde skemerkelkie-drag.",
        "Ons nooi u uit om ‘n tydlose, gesofistikeerde styl te kies wat die gees van die geleentheid weerspieël."
      ],
      rsvpSubtitle: "Sluit by ons aan",
      rsvpTitle: "RSVP",
      rsvpText: "Ons vra vriendelik dat julle asseblief ons vreugde kom deel deur julle bywoning voor 31 Augustus 2026 te bevestig. RSVP gerus via die vorm hieronder.",
      dietarySubtitle: "Spyskaart",
      dietaryTitle: "Dieetvereistes",
      dietaryText: "Laat weet ons asseblief indien u enige allergieë of spesifieke diëtvereistes het, sodat ons kan verseker dat daar vir u gesorg word op die dag.",
      thankYou: "Dankie",
      form: {
        name: "Volle Naam/Name",
        dietary: "Dieetvereistes",
        message: "Boodskap vir die Paartjie",
        submit: "Dien RSVP in"
      }
    },
    accommodation: {
      subtitle: "Verblyf & Reis",
      title: "Akkommodasie & Reis",
      intro: "Ons sien uit daarna om u in die pragtige Wynlande te verwelkom. Ons het die volgende inligting saamgestel om te verseker dat u reis en verblyf so gerieflik en aangenaam as moontlik is.",
      onsiteTitle: "Akkommodasie Wenke",
      onsiteList: [
        "Of jy nou naby die venue wil bly, of hier is vir 'n naweek in die wynlande - sien asseblief \"Akkommodasie: Prys & Nabyheid\" hieronder.",
        "Oorweeg \"Lekkeslaap\" of \"AirBnB\" vir meer koste-effektiewe akkommodasie.",
        "As jy akkommodasie verder weg van die venue oorweeg, sien asseblief \"Aanbevole Pendeldienste\" hieronder."
      ],
      tableTitle: "Akkommodasie: Prys & Afstand",
      tableHeaders: ["Akkommodasie", "Afst.", "Geskatte p/n", "Webwerf"],
      tableData: [
        ["Loch Lynne Estate (Venue, Family)", "0 km", "R 2,500+", "lochlynne.co.za"],
        ["Cassia (Nitida) Rooms", "~5 km", "R 2,200+", "nitida.co.za"],
        ["Meerendal Boutique Hotel", "~6 km", "R 2,200+", "meerendal.co.za"],
        ["D'Aria Guest Cottages", "~8 km", "R 1,900+", "dariawinery.co.za"],
        ["Evertsdal Guest House", "~9 km", "R 2,100+", "evertsdal.com"],
        ["Spes Bona Guest Farm", "~10 km", "R 2,000+", "spesbonaguestfarm.co.za"],
        ["Cosimi Guest House", "~10 km", "R 1,900+", "cosimiguesthouse.com"],
        ["Ruslamere Hotel & Spa", "~10 km", "R 1,500+", "ruslamere.co.za"],
        ["Four Palms Accommodation", "~10 km", "R 1,300+", "fourpalms.co.za"],
        ["Heritage Square Apts", "~10 km", "R 2,000+", "heritagesquare.co.za"],
        ["Kolping Guest House", "~11 km", "R 1,300+", "kolpingguesthouse.co.za"],
        ["Dark Chocolate Guest House", "~11 km", "R 1,590+", "darkchocolate.capetown"],
        ["Cape Village Lodge", "~11 km", "R 1,600+", "capevillagelodge.co.za"],
        ["Le Petit Chateau", "~11 km", "R 1,600+", "lepetitchateau.co.za"],
        ["Onelife Guesthouse", "~11 km", "R 1,500+", "onelifeguesthouse.co.za"],
        ["Dilisca Guesthouse", "~12 km", "R 1,400+", "dilisca.co.za"],
        ["Pelican Place", "~12 km", "R 1,200+", "pelicanplace.co.za"],
        ["Protea Hotel Durbanville", "~12 km", "R 1,800+", "marriott.com"],
        ["Tyger Valley Protea", "~13 km", "R 1,700+", "marriott.com"],
        ["Mar d'Este", "~13 km", "R 1,500+", "mardeste.co.za"],
        ["Wellgeluk Guest Farm", "~15 km", "R 1,600+", "wellgeluk.co.za"],
        ["Anna Beulah Farm", "~15 km", "R 1,200+", "annabeulahfarm.co.za"],
        ["Clouds Guest House", "~18 km", "R 1,400+", "cloudsguesthouse.co.za"],
        ["Cultivar Boutique Hotel", "~35 km", "R 2,800+", "cultivar-boutique-hotel.com"],
        ["Asara Wine Estate", "~38 km", "R 3,500+", "asara.co.za"],
        ["Jordan Luxury Suites", "~40 km", "R 5,000+", "jordanwines.com"],
        ["Majeka House", "~40 km", "R 4,500+", "majekahouse.co.za"],
        ["Spier Hotel", "~42 km", "R 7,500+", "spier.co.za"],
        ["Boschendal Farm", "~52 km", "R 3,960+", "boschendal.com"],
        ["Le Franschhoek Hotel", "~55 km", "R 3,500+", "lefranschhoek.co.za"]
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
          a: "Bevestig asseblief u bywoning voor 31 Augustus 2026. Ons sien uit daarna om die dag saam met u te vier."
        }
      ]
    },
    thingsToDo: {
      subtitle: "Verken",
      title: "Aktiwiteite in die wynlande",
      intro: "Ontdek die eindelose skoonheid van die Kaapse Wynlande. Vir naweekreisigers: benut jou Vrydag en Sondag ten volle om te verken, te ontspan en die natuurskoon in te neem. Hou Saterdag lig en rustig sodat jy vars en gereed is vir die trouvieringe. Hier is ons voorstelle vir die naweek:",
      list: [
        { name: "Stellenbosch Wine Tractor", desc: "’n Hop-on, hop-off wynproe-toer deur Stellenbosch se beste wynplase, 'n unieke, lewendige manier om die 'Golden Triangle' van Suid-Afrika se bekendste wynstreek te verken." },
        { name: "Franschhoek Wine Tram", desc: "’n Ikoniese manier om die vallei te verken. Let wel: Bespreek asseblief ruim voor die tyd vir November." },
        { name: "Babylonstoren Gardens", desc: "’n 3,5-hektaar tuin; ’n meesterstuk van ontwerp en plantkunde." },
        { name: "Stellenbosch Town Walk", desc: "Stap in Dorpstraat vir boetieks, galerye en historiese Kaaps-Hollandse argitektuur." },
        { name: "Durbanville Wine Safari", desc: "’n Hop-on, hop-off busrit wat by Durbanville Hills begin, perfek vir ’n rustige plaaslike oggend." },
        { name: "D'Aria & Nitida", desc: "Durbanville-gunstelinge vir ’n heerlike ontbyt of koffie die oggend na die troue." },
        { name: "Diemersdal Wine Estate", desc: "Waar ses geslagte van tradisie en innovasie saamvloei om ’n simfonie van unieke en merkwaardige wynmakery te skep." }
      ]
    },
    gallery: {
      subtitle: "Oomblikke",
      title: "Galery"
    },
    footer: {
      text: "Ané & Lourens · 21 November 2026"
    }
  }
};
