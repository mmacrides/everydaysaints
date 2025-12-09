const SAINTS = [
  {
    "name": "St Nicholas of Myra",
    "summary": "4th-century bishop of Myra, famous for his generosity, hidden gift-giving, and many miracles worked for the poor and those in danger. His life and legends became the seed for the later Santa Claus traditions.",
    "feast_catholic": "December 6",
    "feast_orthodox": "December 6 (New Calendar) / December 19 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Nicholas"
  },
  {
    "name": "St Basil the Great",
    "summary": "Bishop of Caesarea and one of the Cappadocian Fathers, Basil shaped Eastern monastic life with his Rule and defended the Nicene faith against Arianism. He is honored as a great teacher of the Trinity and model of pastoral care.",
    "feast_catholic": "January 2",
    "feast_orthodox": "January 1 (and January 30 with the Three Holy Hierarchs)",
    "article_link": "https://en.wikipedia.org/wiki/Basil_of_Caesarea"
  },
  {
    "name": "St Anthony the Great",
    "summary": "Egyptian desert hermit often called the Father of Monasticism, whose radical withdrawal into the wilderness inspired generations of monks. His life, told by St Athanasius, helped spread the ideal of asceticism throughout East and West.",
    "feast_catholic": "January 17",
    "feast_orthodox": "January 17",
    "article_link": "https://en.wikipedia.org/wiki/Anthony_the_Great"
  },
  {
    "name": "St Athanasius of Alexandria",
    "summary": "Patriarch of Alexandria and fierce defender of Nicene Christianity against Arianism, earning the title 'Father of Orthodoxy'. He spent years in exile yet remained a key voice on the Incarnation and the divinity of Christ.",
    "feast_catholic": "May 2",
    "feast_orthodox": "January 18",
    "article_link": "https://en.wikipedia.org/wiki/Athanasius_of_Alexandria"
  },
  {
    "name": "St John Chrysostom",
    "summary": "Archbishop of Constantinople and one of the greatest Christian preachers, known for his golden-mouthed homilies and strong call to repentance and charity. The Divine Liturgy that bears his name is still celebrated across the world.",
    "feast_catholic": "September 13",
    "feast_orthodox": "January 27 (also November 13 & September 14 in some calendars)",
    "article_link": "https://en.wikipedia.org/wiki/John_Chrysostom"
  },
  {
    "name": "St Catherine of Alexandria",
    "summary": "Virgin-martyr and philosopher from Alexandria whose wisdom confounded pagan scholars brought to debate her. Her courage under torture made her a patroness of students, philosophers, and all who seek truth in the face of pressure.",
    "feast_catholic": "November 25",
    "feast_orthodox": "November 24/25 (varies by usage)",
    "article_link": "https://en.wikipedia.org/wiki/Catherine_of_Alexandria"
  },
  {
    "name": "St George the Great-Martyr",
    "summary": "Soldier-martyr whose story of confessing Christ under persecution and the famous dragon-slaying legend made him a symbol of courage. He is a patron of soldiers, nations, and all who fight against evil and injustice.",
    "feast_catholic": "April 23 (transferred if it conflicts with Easter)",
    "feast_orthodox": "April 23 (New Calendar) / May 6 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Saint_George"
  },
  {
    "name": "St Ambrose of Milan",
    "summary": "Bishop of Milan, skilled preacher, and defender of the Church’s freedom against imperial interference. His preaching and personal example were decisive in the conversion of St Augustine.",
    "feast_catholic": "December 7",
    "feast_orthodox": "December 7 (on many Byzantine calendars)",
    "article_link": "https://en.wikipedia.org/wiki/Ambrose"
  },
  {
    "name": "St Augustine of Hippo",
    "summary": "Bishop of Hippo, philosopher, and Doctor of the Church whose writings like *Confessions* and *City of God* deeply shaped Western theology. His journey from restlessness to conversion still speaks to seekers today.",
    "feast_catholic": "August 28",
    "feast_orthodox": "June 15",
    "article_link": "https://en.wikipedia.org/wiki/Augustine_of_Hippo"
  },
  {
    "name": "St Gregory Nazianzen",
    "summary": "Archbishop of Constantinople and one of the Cappadocian Fathers, renowned for his beautiful sermons and deep teaching on the Trinity. He is often called “the Theologian” in the East for his clarity and balance.",
    "feast_catholic": "January 2 (with St Basil)",
    "feast_orthodox": "January 25 (and January 30 with the Three Hierarchs)",
    "article_link": "https://en.wikipedia.org/wiki/Gregory_of_Nazianzus"
  },
  {
    "name": "St Gregory of Nyssa",
    "summary": "Younger brother of St Basil and a key Cappadocian Father known for his mystical and Trinitarian theology. His reflections on the spiritual journey and the vision of God influenced later Christian spirituality.",
    "feast_catholic": "January 10 (in newer Roman martyrologies)",
    "feast_orthodox": "January 10",
    "article_link": "https://en.wikipedia.org/wiki/Gregory_of_Nyssa"
  },
  {
    "name": "St Cyril of Alexandria",
    "summary": "Patriarch of Alexandria and chief defender of the title *Theotokos* for Mary at the Council of Ephesus. He insisted on the unity of Christ’s person as true God and true man, guarding the mystery of the Incarnation.",
    "feast_catholic": "June 27",
    "feast_orthodox": "June 9 (and January 18 with St Athanasius in some calendars)",
    "article_link": "https://en.wikipedia.org/wiki/Cyril_of_Alexandria"
  },
  {
    "name": "St Ignatius of Antioch",
    "summary": "Early bishop of Antioch and martyr who wrote powerful letters while being taken to Rome for execution. His writings witness to the Eucharist, the role of the bishop, and the unity and love of the Church.",
    "feast_catholic": "October 17",
    "feast_orthodox": "December 20",
    "article_link": "https://en.wikipedia.org/wiki/Ignatius_of_Antioch"
  },
  {
    "name": "St Polycarp of Smyrna",
    "summary": "Bishop of Smyrna and disciple of the Apostle John, one of the principal Apostolic Fathers. His steadfast witness in martyrdom shows a calm, confident trust in Christ even in the face of death.",
    "feast_catholic": "February 23",
    "feast_orthodox": "February 23",
    "article_link": "https://en.wikipedia.org/wiki/Polycarp"
  },
  {
    "name": "St Justin Martyr",
    "summary": "Philosopher and early Christian apologist who used the language of Greek thought to explain and defend the faith. His descriptions of early Christian worship are among our most important windows into the 2nd-century Church.",
    "feast_catholic": "June 1",
    "feast_orthodox": "June 1",
    "article_link": "https://en.wikipedia.org/wiki/Justin_Martyr"
  },
  {
    "name": "St Irenaeus of Lyons",
    "summary": "Bishop of Lyons and major opponent of Gnosticism, insisting that salvation is rooted in the real Incarnation and the continuity of the Church with the apostles. He famously spoke of Christ “recapitulating” all things in Himself.",
    "feast_catholic": "June 28",
    "feast_orthodox": "August 23",
    "article_link": "https://en.wikipedia.org/wiki/Irenaeus"
  },
  {
    "name": "St Cyprian of Carthage",
    "summary": "3rd-century bishop of Carthage and martyr whose writings stressed the unity of the Church around the bishops. He guided his flock through persecution and controversy over how to treat the lapsed.",
    "feast_catholic": "September 16 (with Pope Cornelius)",
    "feast_orthodox": "August 31 / September 16 (depending on calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Cyprian"
  },
  {
    "name": "St Benedict of Nursia",
    "summary": "Founder of Western monasticism and author of the Rule of St Benedict, which balances prayer, work, and community life. His influence quietly shaped European culture through monasteries that preserved faith and learning.",
    "feast_catholic": "July 11 (March 21 in older calendars)",
    "feast_orthodox": "March 14",
    "article_link": "https://en.wikipedia.org/wiki/Benedict_of_Nursia"
  },
  {
    "name": "St Patrick of Ireland",
    "summary": "5th-century missionary bishop and Enlightener of Ireland, remembered for using simple images like the shamrock to teach the Trinity. His preaching helped transform a pagan land into a deeply Christian culture.",
    "feast_catholic": "March 17",
    "feast_orthodox": "March 17 (date varies by calendar style)",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Patrick"
  },
  {
    "name": "St Leo the Great",
    "summary": "Pope and Doctor of the Church whose *Tome of Leo* was crucial for the Council of Chalcedon’s teaching on Christ’s two natures. He also famously confronted Attila the Hun, strengthening the role of the Roman bishop.",
    "feast_catholic": "November 10",
    "feast_orthodox": "February 18",
    "article_link": "https://en.wikipedia.org/wiki/Pope_Leo_I"
  },
  {
    "name": "St Gregory the Great",
    "summary": "Pope Gregory I, a great pastor and reformer who sent missionaries to the Anglo-Saxons and helped shape the Roman liturgy. He is often associated with Gregorian chant and a strong emphasis on humility and service in leadership.",
    "feast_catholic": "September 3",
    "feast_orthodox": "March 12",
    "article_link": "https://en.wikipedia.org/wiki/Pope_Gregory_I"
  },
  {
    "name": "St Peter the Apostle",
    "summary": "Leader of the Twelve and first among the apostles, fisherman of Galilee turned shepherd of Christ’s flock. Martyred in Rome, he is honored as the rock of the Church and a sign of unity in East and West.",
    "feast_catholic": "June 29 (with St Paul)",
    "feast_orthodox": "June 29 (New Calendar) / July 12 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Peter"
  },
  {
    "name": "St Paul the Apostle",
    "summary": "Former persecutor of Christians whose encounter with the risen Christ turned him into the great Apostle to the Gentiles. His letters shaped Christian doctrine on grace, faith, and life in the Spirit.",
    "feast_catholic": "June 29 (with St Peter)",
    "feast_orthodox": "June 29 (New Calendar) / July 12 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Paul_the_Apostle"
  },
  {
    "name": "St Andrew the First-Called",
    "summary": "Brother of St Peter and the first-called of the apostles, who brought others to Jesus with the simple words: ‘We have found the Messiah.’ He is especially honored as patron of Constantinople and of many lands.",
    "feast_catholic": "November 30",
    "feast_orthodox": "November 30 (New Calendar) / December 13 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Andrew_the_Apostle"
  },
  {
    "name": "St James the Greater",
    "summary": "Son of Zebedee and brother of St John, one of the inner circle of apostles who witnessed the Transfiguration. He is venerated as a great martyr and pilgrim patron of Compostela.",
    "feast_catholic": "July 25",
    "feast_orthodox": "April 30 and various local commemorations",
    "article_link": "https://en.wikipedia.org/wiki/James,_son_of_Zebedee"
  },
  {
    "name": "St John the Theologian (Evangelist)",
    "summary": "The beloved disciple who rested on Christ’s breast at the Mystical Supper, author of the Fourth Gospel, Epistles, and Revelation. He is honored for his deep teaching on love, light, and the Word made flesh.",
    "feast_catholic": "December 27",
    "feast_orthodox": "May 8 and September 26",
    "article_link": "https://en.wikipedia.org/wiki/John_the_Apostle"
  },
  {
    "name": "St Thomas the Apostle",
    "summary": "The apostle who moved from doubt to a bold confession of Christ as ‘My Lord and my God.’ Tradition remembers him as carrying the Gospel as far as India.",
    "feast_catholic": "July 3",
    "feast_orthodox": "First Sunday after Pascha (Antipascha) and October 6",
    "article_link": "https://en.wikipedia.org/wiki/Thomas_the_Apostle"
  },
  {
    "name": "St Philip the Apostle",
    "summary": "One of the Twelve who brought Nathanael to Jesus and later preached the Gospel far from his homeland. His story shows how a simple invitation—‘Come and see’—can change a life.",
    "feast_catholic": "May 3 (with St James the Less)",
    "feast_orthodox": "November 14",
    "article_link": "https://en.wikipedia.org/wiki/Philip_the_Apostle"
  },
  {
    "name": "St Bartholomew the Apostle",
    "summary": "Apostle traditionally identified with Nathanael, praised by Christ as a man without guile. His relics and cult spread widely, making him a protector of many cities and nations.",
    "feast_catholic": "August 24",
    "feast_orthodox": "June 11 and August 25 (translation of relics)",
    "article_link": "https://en.wikipedia.org/wiki/Bartholomew_the_Apostle"
  },
  {
    "name": "St Matthew the Apostle and Evangelist",
    "summary": "Former tax collector called from his booth to follow Christ, who then wrote the Gospel that opens the New Testament. His life shows how grace can transform even compromised lives.",
    "feast_catholic": "September 21",
    "feast_orthodox": "November 16",
    "article_link": "https://en.wikipedia.org/wiki/Matthew_the_Apostle"
  },
  {
    "name": "St Luke the Evangelist",
    "summary": "Companion of St Paul, beloved physician, and author of the Gospel of Luke and the Acts of the Apostles. His writings highlight God’s mercy, the poor, and the work of the Holy Spirit.",
    "feast_catholic": "October 18",
    "feast_orthodox": "October 18 (New Calendar) / October 31 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Luke_the_Evangelist"
  },
  {
    "name": "St Mark the Evangelist",
    "summary": "Disciple of Peter and traditional author of the earliest written Gospel. He is honored as founder of the Church in Alexandria and as a patron of preachers and writers.",
    "feast_catholic": "April 25",
    "feast_orthodox": "April 25 (New Calendar) / May 8 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Mark_the_Evangelist"
  },
  {
    "name": "St James the Just (Brother of the Lord)",
    "summary": "First bishop of Jerusalem and relative of the Lord, known for his holiness and love for the poor. He presided at the Council of Jerusalem and is connected with one of the ancient Eucharistic liturgies.",
    "feast_catholic": "May 3 (with St Philip in the Latin tradition)",
    "feast_orthodox": "October 23",
    "article_link": "https://en.wikipedia.org/wiki/James,_brother_of_Jesus"
  },
  {
    "name": "St Jude Thaddeus",
    "summary": "Apostle and relative of Jesus remembered as a helper in desperate cases. His short New Testament letter urges believers to contend for the faith once delivered to the saints.",
    "feast_catholic": "October 28",
    "feast_orthodox": "June 19",
    "article_link": "https://en.wikipedia.org/wiki/Jude_the_Apostle"
  },
  {
    "name": "St Matthias the Apostle",
    "summary": "Chosen by lot to take the place of Judas among the Twelve, showing the Church’s trust in God’s guidance. He preached the Gospel and suffered for Christ like the other apostles.",
    "feast_catholic": "May 14",
    "feast_orthodox": "August 9",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Matthias"
  },
  {
    "name": "St Barnabas the Apostle",
    "summary": "Levite from Cyprus, companion of St Paul, and generous encourager of the early Church. He is called ‘son of consolation’ and is counted as one of the Seventy and an apostle.",
    "feast_catholic": "June 11",
    "feast_orthodox": "June 11",
    "article_link": "https://en.wikipedia.org/wiki/Barnabas"
  },
  {
    "name": "St Mary Magdalene",
    "summary": "Disciple of the Lord healed by Him and faithful witness at the Cross and the empty tomb. She is often called ‘Equal-to-the-Apostles’ for announcing the Resurrection to the apostles.",
    "feast_catholic": "July 22",
    "feast_orthodox": "July 22 (New Calendar) / August 4 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Mary_Magdalene"
  },
  {
    "name": "St Stephen the Protomartyr",
    "summary": "One of the first deacons of the Church and the first Christian martyr. His bold preaching and forgiving prayer for his killers mirror the love of Christ.",
    "feast_catholic": "December 26",
    "feast_orthodox": "December 27 (New Calendar) / January 9 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Stephen"
  },
  {
    "name": "St Lawrence of Rome",
    "summary": "Deacon of Rome who distributed the Church’s goods to the poor and faced martyrdom with holy humor and courage. He is a sign of love for the poor and fearless charity.",
    "feast_catholic": "August 10",
    "feast_orthodox": "August 10",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Lawrence"
  },
  {
    "name": "St Cecilia",
    "summary": "Roman virgin-martyr associated with the early house-churches of the city. She is the patroness of church music, symbolizing hearts that sing to God even under persecution.",
    "feast_catholic": "November 22",
    "feast_orthodox": "November 22 (in many Orthodox calendars of the West)",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Cecilia"
  },
  {
    "name": "St Agnes of Rome",
    "summary": "Young virgin-martyr whose steadfastness before powerful suitors and judges made her a model of purity and courage. Her name is linked with the Lamb, a sign of Christ.",
    "feast_catholic": "January 21",
    "feast_orthodox": "January 21",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Agnes"
  },
  {
    "name": "St Agatha of Sicily",
    "summary": "Martyr of Catania who rejected the advances of a corrupt official and suffered brutal torture for Christ. She is invoked for purity and for those suffering from illness.",
    "feast_catholic": "February 5",
    "feast_orthodox": "February 5",
    "article_link": "https://en.wikipedia.org/wiki/Agatha_of_Sicily"
  },
  {
    "name": "St Lucy of Syracuse",
    "summary": "Virgin-martyr of Sicily whose name means ‘light.’ She is honored as a sign that Christ’s light shines even in the darkest trials.",
    "feast_catholic": "December 13",
    "feast_orthodox": "December 13",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Lucy"
  },
  {
    "name": "Sts Perpetua and Felicity",
    "summary": "Young noblewoman Perpetua and her enslaved friend Felicity who were martyred together in Carthage. Their diary and passion narrative witness to fearless love for Christ.",
    "feast_catholic": "March 7",
    "feast_orthodox": "March 7",
    "article_link": "https://en.wikipedia.org/wiki/Perpetua_and_Felicity"
  },
  {
    "name": "St Monica of Hippo",
    "summary": "Mother of St Augustine, whose years of prayer, tears, and patient love were instrumental in her son’s conversion. She is a patroness of Christian parents and spouses.",
    "feast_catholic": "August 27",
    "feast_orthodox": "May 4 (in many Orthodox calendars)",
    "article_link": "https://en.wikipedia.org/wiki/Monica_of_Hippo"
  },
  {
    "name": "St Jerome",
    "summary": "Scholar and monk who produced the Latin Vulgate translation of Scripture and lived an ascetic life between Rome and Bethlehem. His love for Scripture challenges believers to know the Bible deeply.",
    "feast_catholic": "September 30",
    "feast_orthodox": "June 15 (in some Orthodox calendars)",
    "article_link": "https://en.wikipedia.org/wiki/Jerome"
  },
  {
    "name": "St Hilary of Poitiers",
    "summary": "4th-century bishop and theologian who defended the Nicene faith against Arianism in the Latin West. Sometimes called the ‘Athanasius of the West’ for his steadfast courage.",
    "feast_catholic": "January 13",
    "feast_orthodox": "January 13 (in Western Rite and some Orthodox calendars)",
    "article_link": "https://en.wikipedia.org/wiki/Hilary_of_Poitiers"
  },
  {
    "name": "St Martin of Tours",
    "summary": "Soldier-turned-monk and bishop, known for cutting his cloak to share with a beggar who was Christ in disguise. A great missionary and pastor in Gaul.",
    "feast_catholic": "November 11",
    "feast_orthodox": "November 11",
    "article_link": "https://en.wikipedia.org/wiki/Martin_of_Tours"
  },
  {
    "name": "St Ephrem the Syrian",
    "summary": "Deacon, hymnographer, and theologian whose poetic writings earned him the title ‘Harp of the Holy Spirit.’ He united deep theology with devotional warmth.",
    "feast_catholic": "June 9",
    "feast_orthodox": "January 28",
    "article_link": "https://en.wikipedia.org/wiki/Ephrem_the_Syrian"
  },
  {
    "name": "St Macrina the Younger",
    "summary": "Sister of St Basil and St Gregory of Nyssa, who led a monastic community and inspired her brothers with her ascetic wisdom. She shows the quiet, formative power of holiness within a family.",
    "feast_catholic": "July 19 (in some martyrologies)",
    "feast_orthodox": "July 19",
    "article_link": "https://en.wikipedia.org/wiki/Macrina_the_Younger"
  },
  {
    "name": "St John of Damascus",
    "summary": "Monk and priest near Jerusalem, last of the great Greek Fathers, and defender of the veneration of icons during the first iconoclast controversy. His hymns still enrich the liturgy today.",
    "feast_catholic": "December 4",
    "feast_orthodox": "December 4",
    "article_link": "https://en.wikipedia.org/wiki/John_of_Damascus"
  },
  {
    "name": "St Maximus the Confessor",
    "summary": "Monk and theologian who suffered exile and mutilation for defending the full humanity and full divinity of Christ and His two wills. His profound spiritual writings shape Eastern Christian spirituality.",
    "feast_catholic": "January 21 (in some calendars)",
    "feast_orthodox": "January 21",
    "article_link": "https://en.wikipedia.org/wiki/Maximus_the_Confessor"
  },
  {
    "name": "St Pachomius the Great",
    "summary": "Founder of cenobitic monasticism in Egypt, who organized monks into communities with a rule and common life. His model influenced both Eastern and Western monasticism.",
    "feast_catholic": "May 9 (local/monastic calendars)",
    "feast_orthodox": "May 15",
    "article_link": "https://en.wikipedia.org/wiki/Pachomius_the_Great"
  },
  {
    "name": "St Macarius of Egypt",
    "summary": "One of the Desert Fathers, known for his gentleness, discernment, and hidden holiness. His sayings are full of practical wisdom on prayer, humility, and spiritual warfare.",
    "feast_catholic": "January 15 (in some Western calendars)",
    "feast_orthodox": "January 19",
    "article_link": "https://en.wikipedia.org/wiki/Macarius_of_Egypt"
  },
  {
    "name": "St Mary of Egypt",
    "summary": "Former prostitute who, after a radical conversion, lived decades of repentance and prayer in the desert. She is a powerful icon of God’s mercy and of deep interior change.",
    "feast_catholic": "April 3 (in some Western calendars)",
    "feast_orthodox": "April 1 (and 5th Sunday of Great Lent)",
    "article_link": "https://en.wikipedia.org/wiki/Mary_of_Egypt"
  },
  {
    "name": "St Moses the Ethiopian (the Black)",
    "summary": "Former bandit who became a monk and a gentle spiritual father in the Egyptian desert. His story shows how grace can transform violence into compassion.",
    "feast_catholic": "August 28 (in some martyrologies)",
    "feast_orthodox": "August 28",
    "article_link": "https://en.wikipedia.org/wiki/Moses_the_Black"
  },
  {
    "name": "Sts Cyril and Methodius",
    "summary": "Brothers from Thessalonica who brought the Gospel to the Slavs, creating an alphabet and liturgical texts in the people’s language. They are honored as ‘Equals-to-the-Apostles’ and patrons of Christian unity.",
    "feast_catholic": "February 14 (Roman Rite)",
    "feast_orthodox": "May 11",
    "article_link": "https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius"
  },
  {
    "name": "St Columba of Iona",
    "summary": "Irish abbot and missionary who founded the monastery of Iona and helped evangelize Scotland. A poet, leader, and man of prayer, he is counted among the great Celtic saints.",
    "feast_catholic": "June 9",
    "feast_orthodox": "June 9",
    "article_link": "https://en.wikipedia.org/wiki/Columba"
  },
  {
    "name": "St Brigid of Kildare",
    "summary": "Abbess and foundress in Ireland, often called ‘Mary of the Gael.’ She united deep charity for the poor with a strong monastic vision and is a patroness of Ireland.",
    "feast_catholic": "February 1",
    "feast_orthodox": "February 1",
    "article_link": "https://en.wikipedia.org/wiki/Brigid_of_Kildare"
  },
  {
    "name": "St Cuthbert of Lindisfarne",
    "summary": "Monk, hermit, and bishop in Northumbria whose holiness and closeness to creation made him beloved across the British Isles. His relics were long a focus of pilgrimage.",
    "feast_catholic": "March 20",
    "feast_orthodox": "March 20 (New Calendar) / April 2 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Cuthbert"
  },
  {
    "name": "St Bede the Venerable",
    "summary": "English monk, historian, and Doctor of the Church whose *Ecclesiastical History of the English People* preserved the memory of early Anglo-Saxon Christianity. A model of scholarship and humility.",
    "feast_catholic": "May 25",
    "feast_orthodox": "May 27 (in many Orthodox calendars)",
    "article_link": "https://en.wikipedia.org/wiki/Bede"
  },
  {
    "name": "St Boniface, Apostle of Germany",
    "summary": "English monk and missionary bishop who preached among the Germanic peoples and strengthened the Church’s structures there. His martyrdom crowned a lifetime of mission.",
    "feast_catholic": "June 5",
    "feast_orthodox": "June 5 (in Western Rite and modern Orthodox calendars of Western saints)",
    "article_link": "https://en.wikipedia.org/wiki/Boniface"
  },
  {
    "name": "St Aidan of Lindisfarne",
    "summary": "Irish monk and bishop who founded Lindisfarne and evangelized Northumbria with great simplicity, charity, and love for the poor. He worked closely with laypeople and local rulers.",
    "feast_catholic": "August 31 (in some Western calendars)",
    "feast_orthodox": "August 31",
    "article_link": "https://en.wikipedia.org/wiki/Aidan_of_Lindisfarne"
  },
  {
    "name": "St Demetrios of Thessaloniki",
    "summary": "Soldier and martyr of Thessaloniki, beloved as a protector of the city and a patron of the faithful. His cult spread widely throughout the Christian world.",
    "feast_catholic": "October 26 (in some Western calendars)",
    "feast_orthodox": "October 26",
    "article_link": "https://en.wikipedia.org/wiki/Demetrius_of_Thessaloniki"
  },
  {
    "name": "St Theodore the Recruit (Theodore Tiron)",
    "summary": "Early soldier-martyr who refused to offer sacrifice to idols and burned the pagan temple instead. He is honored as a great martyr and protector of Christians in danger.",
    "feast_catholic": "February 17 (local/optional calendars)",
    "feast_orthodox": "February 17",
    "article_link": "https://en.wikipedia.org/wiki/Theodore_of_Amasea"
  },
  {
    "name": "Sts Cosmas and Damian",
    "summary": "Holy unmercenary physicians who treated the sick without payment and bore witness to Christ through both their charity and their martyrdom.",
    "feast_catholic": "September 26 (Roman Rite, with other local dates)",
    "feast_orthodox": "November 1 (Byzantine tradition) and other local dates",
    "article_link": "https://en.wikipedia.org/wiki/Saints_Cosmas_and_Damian"
  },
  {
    "name": "Sts Joachim and Anna",
    "summary": "Righteous parents of the Theotokos, honored as grandparents of Christ. Their long years of childlessness and answered prayer make them patrons of families and those longing for children.",
    "feast_catholic": "July 26 (Saints Joachim and Anne)",
    "feast_orthodox": "September 9 (Synaxis of Joachim and Anna) and other dates",
    "article_link": "https://en.wikipedia.org/wiki/Saints_Joachim_and_Anne"
  },
  {
    "name": "St Clement of Rome",
    "summary": "One of the first bishops of Rome and a disciple of the apostles, remembered for his letter to the Corinthians that witnesses to early Church order, unity, and charity.",
    "feast_catholic": "November 23",
    "feast_orthodox": "November 25 (New Calendar) / December 8 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Pope_Clement_I"
  },
  {
    "name": "St Linus of Rome",
    "summary": "Disciple of the apostles and traditionally the second bishop of Rome after St Peter. He represents the early continuity of apostolic leadership in the Church.",
    "feast_catholic": "September 23",
    "feast_orthodox": "September 23",
    "article_link": "https://en.wikipedia.org/wiki/Pope_Linus"
  },
  {
    "name": "St Cletus (Anacletus) of Rome",
    "summary": "Early bishop of Rome following St Linus, venerated as a martyr for Christ. His memory is bound up with the humble but firm witness of the first Christian communities.",
    "feast_catholic": "April 26",
    "feast_orthodox": "April 13 / April 26 (varies by calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Pope_Anacletus"
  },
  {
    "name": "St Callixtus I of Rome",
    "summary": "Pope and martyr who showed great pastoral mercy in receiving repentant sinners back into the Church, even amid controversy. He died for the faith in the early persecutions.",
    "feast_catholic": "October 14",
    "feast_orthodox": "October 14",
    "article_link": "https://en.wikipedia.org/wiki/Pope_Callixtus_I"
  },
  {
    "name": "St Cornelius, Pope and Martyr",
    "summary": "Bishop of Rome during the Decian persecution, who upheld the possibility of repentance for those who had lapsed. He suffered exile and death for his steadfast confession of Christ.",
    "feast_catholic": "September 16 (with St Cyprian)",
    "feast_orthodox": "September 13 / September 16 (varies by usage)",
    "article_link": "https://en.wikipedia.org/wiki/Pope_Cornelius"
  },
  {
    "name": "St Sylvester I",
    "summary": "Pope during the time of Emperor Constantine and the First Council of Nicaea. He is remembered as a gentle shepherd in a time when the Church emerged from persecution.",
    "feast_catholic": "December 31",
    "feast_orthodox": "January 2 (New Calendar) / January 15 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Pope_Sylvester_I"
  },
  {
    "name": "St Damasus I",
    "summary": "Pope who encouraged St Jerome’s translation of Scripture and defended the Nicene faith. He promoted devotion to the martyrs and the veneration of their tombs in Rome.",
    "feast_catholic": "December 11",
    "feast_orthodox": "December 11 (in some Orthodox calendars of Western saints)",
    "article_link": "https://en.wikipedia.org/wiki/Pope_Damasus_I"
  },
  {
    "name": "St Cyril of Jerusalem",
    "summary": "Bishop of Jerusalem whose catechetical lectures give a detailed picture of early baptismal preparation and Eucharistic faith. He defended the Nicene doctrine amid controversy.",
    "feast_catholic": "March 18",
    "feast_orthodox": "March 18",
    "article_link": "https://en.wikipedia.org/wiki/Cyril_of_Jerusalem"
  },
  {
    "name": "St John the Almsgiver",
    "summary": "Patriarch of Alexandria known for his radical generosity, visiting hospitals and distributing the Church’s wealth to the poor. He is a model of episcopal charity.",
    "feast_catholic": "January 23 (in some Western calendars)",
    "feast_orthodox": "November 12",
    "article_link": "https://en.wikipedia.org/wiki/John_the_Merciful"
  },
  {
    "name": "St Sophronius of Jerusalem",
    "summary": "Monk and later patriarch of Jerusalem, defender of the full humanity and divinity of Christ against monothelitism. He is also known for his beautiful spiritual writings and hymns.",
    "feast_catholic": "March 11 (in some martyrologies)",
    "feast_orthodox": "March 11",
    "article_link": "https://en.wikipedia.org/wiki/Sophronius_of_Jerusalem"
  },
  {
    "name": "St Germanus of Constantinople",
    "summary": "Patriarch of Constantinople who defended the veneration of holy icons and the tradition of the Church during the first iconoclast crisis.",
    "feast_catholic": "May 12 (in some Western calendars)",
    "feast_orthodox": "May 12",
    "article_link": "https://en.wikipedia.org/wiki/Germanus_I_of_Constantinople"
  },
  {
    "name": "St Spyridon of Trimythous",
    "summary": "Simple shepherd-bishop from Cyprus, present at the Council of Nicaea. Famous for his humility, wonderworking, and love for the poor, he is a beloved saint across East and West.",
    "feast_catholic": "December 14 (in some Western calendars)",
    "feast_orthodox": "December 12 (New Calendar) / December 25 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Spyridon"
  },
  {
    "name": "St Sabbas the Sanctified",
    "summary": "Founder of the famous lavra near Jerusalem that still bears his name. His monastic rule shaped Eastern liturgical life, especially in the celebration of the Divine Office.",
    "feast_catholic": "December 5 (in some Western calendars)",
    "feast_orthodox": "December 5 (New Calendar) / December 18 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Sabas"
  },
  {
    "name": "St Theodosius the Cenobiarch",
    "summary": "Organizer of communal monastic life in Palestine, harmonizing solitary prayer with community life. He is honored as a father of cenobitic monasticism in the East.",
    "feast_catholic": "January 11 (in some Western calendars)",
    "feast_orthodox": "January 11",
    "article_link": "https://en.wikipedia.org/wiki/Theodosius_the_Cenobiarch"
  },
  {
    "name": "St John Climacus",
    "summary": "Monk of Sinai and abbot of the monastery there, author of *The Ladder of Divine Ascent*, a classic guide to spiritual struggle and growth in love for God.",
    "feast_catholic": "March 30 (in the Roman Martyrology)",
    "feast_orthodox": "March 30 (and 4th Sunday of Great Lent)",
    "article_link": "https://en.wikipedia.org/wiki/John_Climacus"
  },
  {
    "name": "St Athanasius the Athonite",
    "summary": "Founder of the Great Lavra on Mount Athos and pioneer of organized monastic life on the Holy Mountain. His vision shaped centuries of Orthodox monasticism, and he is honored in the West as well.",
    "feast_catholic": "July 5 (in some Western calendars)",
    "feast_orthodox": "July 5",
    "article_link": "https://en.wikipedia.org/wiki/Athanasius_of_Athos"
  },
  {
    "name": "St Romanos the Melodist",
    "summary": "Deacon and hymnographer of the 6th century, often called the ‘Pindar of the Church’ for his inspired kontakia. His poetry continues to shape Orthodox hymnody and is admired in the West.",
    "feast_catholic": "October 1 (in some Western calendars)",
    "feast_orthodox": "October 1",
    "article_link": "https://en.wikipedia.org/wiki/Romanos_the_Melodist"
  },
  {
    "name": "St Andrew of Crete",
    "summary": "Bishop and hymnwriter best known for the Great Canon of repentance, sung in Lent in the East. He preached powerfully on the mysteries of Christ and the Mother of God.",
    "feast_catholic": "July 4 (in some Western calendars)",
    "feast_orthodox": "July 4",
    "article_link": "https://en.wikipedia.org/wiki/Andrew_of_Crete"
  },
  {
    "name": "St Porphyry of Gaza",
    "summary": "Bishop of Gaza who labored to strengthen the Christian community in a heavily pagan city. His life shows pastoral courage, prayer, and concern for the poor.",
    "feast_catholic": "February 26 (in some Western calendars)",
    "feast_orthodox": "February 26",
    "article_link": "https://en.wikipedia.org/wiki/Porphyry_of_Gaza"
  },
  {
    "name": "St Eusebius of Vercelli",
    "summary": "4th-century bishop of Vercelli who united monastic life with episcopal ministry and defended the Nicene faith against Arianism in the Latin West.",
    "feast_catholic": "August 2",
    "feast_orthodox": "August 2 (in some Orthodox calendars of Western saints)",
    "article_link": "https://en.wikipedia.org/wiki/Eusebius_of_Vercelli"
  },
  {
    "name": "St John Cassian",
    "summary": "Monk and writer who transmitted the wisdom of the Egyptian Desert Fathers to the West. His *Conferences* and *Institutes* remain classic texts on discernment and ascetic life.",
    "feast_catholic": "February 29 (or February 28 in non-leap years, local calendars)",
    "feast_orthodox": "February 29 (New Calendar) / March 13 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/John_Cassian"
  },
  {
    "name": "St Vincent of Lérins",
    "summary": "Monk and theologian from Gaul, known for his rule of faith that true doctrine is what has been believed everywhere, always, and by all. A key voice for catholicity and tradition.",
    "feast_catholic": "May 24",
    "feast_orthodox": "May 11 / May 24 (varies by usage)",
    "article_link": "https://en.wikipedia.org/wiki/Vincent_of_L%C3%A9rins"
  },
  {
    "name": "St Marina (Margaret) of Antioch",
    "summary": "Virgin-martyr whose story of steadfast faith and spiritual victory over the devil made her beloved in both East and West. In the West she is often known as St Margaret of Antioch.",
    "feast_catholic": "July 20 (as St Margaret of Antioch)",
    "feast_orthodox": "July 17 (New Calendar) / July 30 (Old Calendar)",
    "article_link": "https://en.wikipedia.org/wiki/Margaret_the_Virgin"
  },
  {
    "name": "St Eustace (Eustathius) Placidus",
    "summary": "Roman general who converted after a vision of a stag with a cross between its antlers. He was martyred with his family and is a patron for those undergoing trials.",
    "feast_catholic": "September 20",
    "feast_orthodox": "September 20",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Eustace"
  },
  {
    "name": "St Longinus the Centurion",
    "summary": "The Roman centurion traditionally identified as the soldier who pierced Christ’s side, later confessing faith and suffering martyrdom. A sign that even enemies can become disciples.",
    "feast_catholic": "October 16 (in some Western calendars)",
    "feast_orthodox": "October 16",
    "article_link": "https://en.wikipedia.org/wiki/Longinus"
  },
  {
    "name": "St Zachariah and St Elizabeth",
    "summary": "The righteous parents of St John the Baptist, who waited long in faith for the gift of a child. Their story shows God’s faithfulness and the quiet holiness of family life.",
    "feast_catholic": "September 23 (St John the Baptist’s conception; various local feasts)",
    "feast_orthodox": "September 5 (Zachariah and Elizabeth) and other dates",
    "article_link": "https://en.wikipedia.org/wiki/Zechariah_(priest)"
  },
  {
    "name": "St Joseph the Betrothed",
    "summary": "Guardian of the Lord and protector of the Holy Family, honored in East and West for his obedience, chastity, and humble care for Mary and Jesus.",
    "feast_catholic": "March 19 (St Joseph, Spouse of the Blessed Virgin Mary)",
    "feast_orthodox": "Second Sunday before Nativity (Sunday of the Holy Forefathers) and other commemorations",
    "article_link": "https://en.wikipedia.org/wiki/Saint_Joseph"
  }
];
