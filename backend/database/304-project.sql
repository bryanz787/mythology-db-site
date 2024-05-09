DROP TABLE IF EXISTS `Location`;
CREATE TABLE Location(
	LocationName VARCHAR(32),
	AreaDescription VARCHAR(512),
	TimePeriod VARCHAR(32) DEFAULT 'anytime',
	PRIMARY KEY (LocationName, TimePeriod)
);

DROP TABLE IF EXISTS `Symbol`;
CREATE TABLE Symbol (
	SymbolName VARCHAR(32),
	Origin VARCHAR(512),
	PRIMARY KEY (SymbolName)
);

DROP TABLE IF EXISTS `Characters`;
CREATE TABLE Characters (
	CharacterName VarChar(32),
    CharacterDescription VARCHAR(512),
    PRIMARY KEY (CharacterName)
);

DROP TABLE IF EXISTS `Pantheon`;
CREATE TABLE Pantheon(
	Culture CHAR(32),
	PantheonName VARCHAR(32),
	PRIMARY KEY (Culture)
);
	
DROP TABLE IF EXISTS `Artifact`;
CREATE TABLE Artifact(
	ArtifactName VARCHAR(32),
	Origin VARCHAR(512),
	PRIMARY KEY(ArtifactName)
);

DROP TABLE IF EXISTS `Deity`;
CREATE TABLE Deity (
	CharacterName VARCHAR(32),
	CharacterDescription VARCHAR(512),
	Domain VARCHAR(32),
	SupernaturalAbility VARCHAR(32),
	PRIMARY KEY (CharacterName),
    FOREIGN KEY (CharacterName) REFERENCES Characters(CharacterName) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `Mortal`;
CREATE TABLE Mortal (
	CharacterName VARCHAR(32),
	CharacterDescription VARCHAR(512),
	Title VARCHAR(32),
	Profession VARCHAR(32),
	PRIMARY KEY (CharacterName),
    FOREIGN KEY (CharacterName) REFERENCES  Characters(CharacterName) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `Creature`;
CREATE TABLE Creature (
	CharacterName VARCHAR(32),
	CharacterDescription VARCHAR(512),
	SupernaturalAbility VARCHAR(32),
	Species VARCHAR(32),
	PRIMARY KEY (CharacterName),
	FOREIGN KEY (CharacterName) REFERENCES  Characters(CharacterName) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `Represents`;
CREATE TABLE Represents (
	SymbolName VARCHAR(32),
	CharacterName VARCHAR(32),
	PRIMARY KEY (SymbolName),
	FOREIGN KEY (SymbolName) REFERENCES Symbol(SymbolName),
    FOREIGN KEY (CharacterName) REFERENCES Deity(CharacterName)
);

DROP TABLE IF EXISTS `Ritual`;
CREATE TABLE Ritual (
   	RitualName VARCHAR(32),
	Recurring BOOLEAN,
    CharacterName VARCHAR(32) NOT NULL,
    LocationName VARCHAR(32) DEFAULT 'anywhere',
	TimePeriod VARCHAR(32) DEFAULT 'anytime',
	PRIMARY KEY (RitualName),
	FOREIGN KEY (CharacterName) REFERENCES Deity(CharacterName),
   	FOREIGN KEY (LocationName, TimePeriod) REFERENCES Location(LocationName, TimePeriod)
);

DROP TABLE IF EXISTS `Tale`;
CREATE TABLE Tale (
	TaleName VARCHAR(32),
	MoralLesson VARCHAR(128) NOT NULL DEFAULT 'inconclusive',
	Culture VARCHAR(32) NOT NULL,
	PRIMARY KEY (TaleName)
);

DROP TABLE IF EXISTS `StoryEvent`;
CREATE TABLE StoryEvent (
	TaleName VARCHAR(32),
	EventName VARCHAR(64),
    EventDescription VARCHAR(512),
    LocationName VARCHAR(32) DEFAULT 'anywhere',
	TimePeriod VARCHAR(32) DEFAULT 'anytime',
    PRIMARY KEY (TaleName, EventName),
    FOREIGN KEY (TaleName) REFERENCES Tale(TaleName),
    FOREIGN KEY (LocationName, TimePeriod) REFERENCES Location(LocationName, TimePeriod)
);

DROP TABLE IF EXISTS `BelongsTo`;
CREATE TABLE BelongsTo (
	ArtifactName VARCHAR(32),
	CharacterName VARCHAR(32),
	PRIMARY KEY (ArtifactName, CharacterName),
	FOREIGN KEY (ArtifactName) REFERENCES Artifact(ArtifactName),
	FOREIGN KEY (CharacterName) REFERENCES Characters(CharacterName)
);

DROP TABLE IF EXISTS `AppearsIn`;
CREATE TABLE AppearsIn (
	ArtifactName VARCHAR(32),
	TaleName VARCHAR(32),
	PRIMARY KEY (ArtifactName, TaleName),
	FOREIGN KEY (ArtifactName) REFERENCES Artifact(ArtifactName),
	FOREIGN KEY (TaleName) REFERENCES Tale(TaleName)
);

DROP TABLE IF EXISTS `PartOf`;
CREATE TABLE PartOf(
	CharacterName VARCHAR(32),
	TaleName VARCHAR(32),
	PRIMARY KEY (CharacterName),
	FOREIGN KEY (CharacterName) REFERENCES Characters(CharacterName),
	FOREIGN KEY (TaleName) REFERENCES Tale(TaleName)
);

INSERT INTO Location VALUES
('Mt. Olympus', 'Mount Olympus is the mythological home of the gods. It is snowy-peaked and scattered with the palaces of the gods',  'anytime'),
('Labyrinth of Crete', 'A prison constructed under Crete built to hide the Minotaur from the world', 'bronze age'),
('Ithaca', 'The island birthplace of Odysseus',  'classical antiquity'),
('Troy', 'The city of Troy, site of the Trojan war',  'classical antiquity'),
('Serifos', 'Cyclops island, home to Poseidon"s children',  'classical antiquity'),
('Athens', 'A city in modern day Greece', 'modern'),
('Athens', 'A city in ancient Greece, home to many myths', 'classical antiquity'),
('Olympia', 'A city of ancient Greece, birthplace of the Olympics', 'classical antiquity'),
('Delphi', 'A city of Ancient Greece, home to the Delphi Oracle and worshippers of Apollo', 'classical antiquity'),
('Nepal', 'A landlocked country in South Asia, home to the Himalayan Mountain range', 'modern'),
('River Styx', 'A river running through the Greek underworld, separating the dead from the living', 'anytime'),
('Crete', 'A city of ancient Greece, home to King Minos and the Labyrinth', 'classic antiquity'),
('Celtic Lands', 'The collection of Celtic territories, encompassing Ireland, Scotland, Wales and England', 'pre-medieval'),
('Mesopotamia', 'An ancient region located in the eastern Mediterranian, known as the land between the rivers', 'classical antiquity'),
('North America', 'A continent comprising of various indigenous cultures and tribes. These lands have since been stolen', 'modern'),
('Island of Sarpedon', 'An isolated island where Medusa was said to live.', 'classical antiquity'),
('Midgard', 'The realm of humanity in Norse mythology, encircled by the giant serpent Jormungandr.', 'viking age'),
('Flaming Mountains', 'A mythical mountain in Journey to the West, often associated with extreme heat and challenging trials.', 'Tang Dynasty'),
('Northern Seas', 'The cold, unforgiving waters surrounding Scandinavia, reputed to be home to the Kraken.', 'viking age'),
('Scottish Lochs', 'Freshwater lochs in Scotland, rumored to be inhabited by Kelpies.', 'pre-medieval'),
('Gates of Assyria', 'The monumental entrance to Assyrian cities, guarded by colossal Lamassu sculptures to ward off evil.', 'ancient'),
('Great Plains', 'Expansive area in the central part of North America, where many tribes have stories of the Thunderbird.', 'anytime'),
('Camelot', 'The legendary court of King Arthur, described as a place of great knights and grandeur.', 'medieval'),
('Avalon', 'The mystical island where Arthur was taken to heal after his final battle.', 'medieval'),
('Ulster', 'A province in the north of Ireland, the setting for many of Cú Chulainn"s heroic exploits.', 'Iron Age'),
('Uruk', 'An ancient city-state in Sumer, present-day Iraq, ruled by Gilgamesh and the setting for many of his adventures.', 'early dynastic period'),
('Cedar Forest', 'A mythical forest guarded by the demon Humbaba, slain by Gilgamesh and Enkidu on their quest.', 'early dynastic period'),
('anywhere', 'used for ambiguous tales and events', 'anytime'),
('Mashu', 'The twin-peaked mountain with the gate leading to the Cedar Forest, through which Gilgamesh passes on his quest for immortality.', 'early dynastic period');

INSERT INTO Symbol VALUES 
('Atef crown','Osiris had worn it as the ruler of the underworld'),
('Golden Headband','A painfully tightening fillet given to the hero in case of any unsavoury behaviour'),
('Hammer of Thor','derived from Thor\"s hammer which has the power of lightning'),
('Sun','The light of the world, celestial body, radiates warmth'),
('Moon','The light of the night, celestial body, heals'),
('Creation','Concept of creation itself, rebirth and becoming');

INSERT INTO Characters VALUES 
('Arachne', 'A proud woman turned into a spider creature as divine punishment'),
('Achilles','Achilles was the strongest warrior and hero in the Greek army during the Trojan War. He was the son of Peleus, king of the Myrmidons, and Thetis, a sea nymph'),
('Apollo','He communicated the will of his father Zeus, made humans aware of their guilt and purified them of it, presided over religious and civil law, and foretold the future. His bow symbolized distance, death, terror, and awe; his lyre symbolized music, poetry, and dance.'),
('Artemis','Artemis was the twin sister to Apollo and was the daughter of Zeus and Leto. Both Apollo and Artemis took revenge against anyone who attempted to harm their mother. Apollo and Artemis slew the giant Tityus and killed the children of the mortal woman Niobe'),
('Arthur','The King of Britain, Uther Pendragon, dies, leaving no heir to the throne. As his most powerful knights fight to decide who will succeed, a mysterious sword appears in a stone. Whoever pulls the sword from the stone will be the next king. Arthur pulls the sword'),
('Cernunnos','Celtic god associated with fertility, animals, wealth, and the underworld.'),
('Cú Chulainn','Legendary hero of Irish mythology known for his unmatched prowess in battle.'),
('Daedalus','Daedalus is Icarus\"s father, and a brilliant architect, sculptor, and inventor. He was credited with building for King Minos of Crete the Labyrinth in which the Minotaur was kept'),
('Dagda','Important god in Irish mythology, associated with agriculture, fertility, and protection, known for his strength and magical club.'),
('Demon Bull King','He is the scourge of the Netherworld and the archenemy of the Monkey King'),
('Dionysus','Dionysus is called twice-born because he was born from Semele and then, while she was dying, Zeus saved him by sewing him up in his thigh and keeping him there until he reached maturity. He then \"gave birth\" to Dionysus, thus making him twice-born.'),
('Enki','Mesopotamian god of water, knowledge, mischief, crafts, and creation.'),
('Enlil','Mesopotamian god of wind, air, earth, and storms, considered one of the chief gods in the Mesopotamian pantheon.'),
('Gilgamesh','King of Uruk and central character of the Epic of Gilgamesh, known for his strength and adventures.'),
('Hiawatha','Legendary figure in Native American folklore, known for his role in uniting the Iroquois tribes.'),
('Icarus','son of the inventor Daedalus who perished by flying too near the Sun with waxen wings. See Daedalus'),
('Jormungandr','Midgard Serpent (also World Serpent) in Norse mythology who encircles the realm of Midgard. He is the son of the god Loki and the giantess Angrboða and brother of the great wolf Fenrir and Hel, Queen of the Dead. At Ragnarök, the Twilight of the Gods, he slays and is slain by the god Thor.'),
('Kelpie','Water spirit in Celtic folklore, often appearing as a horse and known for drowning travellers.'),
('Kraken','A legendary sea monster of enormous size, etymologically akin to a squid or octopus, said to appear in the sea between Norway and Iceland'),
('Lamassu','A protective figure from Mesopotamian mythology, Lamassus are depicted with a human head, the body of a bull or lion, wings, and sometimes eagle’s talons'),
('Medusa','A woman with living snakes in place of hair; her appearance was so hideous that anyone who looked upon her was turned to stone'),
('Minotaur','Half man half bull, born to the wife of king Minos and a bull, imprisoned in the Labyrinth due to King Minos\"s shame'),
('Osiris','God of the deceased, was the son and oldest child of Geb, the Earth deity and Nut, the sky goddess. His wife and sister was Isis, goddess of motherhood, magic, fertility, death, healing, and rebirth.'),
('Patroclus','Patroclus was a hero of the Trojan War and is widely known for being the childhood friend and close wartime companion of the hero Achilles. Legends either say that he has a blood relation to Achilles, or was Achilles\" lover.'),
('Shiva','Shiva holds one of the most prominent roles in Hinduism as the god of destruction. He is one of the three most important gods, alongside Brahma (the creator) and Vishnu (the preserver). The sect of Shaivism holds that Shiva is the Supreme Being which all other gods are aspects of'),
('Sun Wukong','A monkey who was born out of stone and possesses magical powers and strength. The legend of the Monkey King explains how he helped protect Xuan Zang, a monk, on their journey to India in order to bring back Buddhist holy books to China.'),
('Thor','A prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.'),
('Thunderbird','Powerful creature in Native American mythology, often associated with storms and thunder.'),
('Trickster Coyote','Trickster figure in Native American mythology, known for his cunning and playful nature.'),
('Zeus','Zeus was the king of the Greek gods. He became the king of the gods after he rescued his siblings from their father, the Titan Cronus. Cronus swallowed all but one of his children. Zeus\"s mother Rhea rescued her son from the wrath of his father Cronus');

INSERT INTO Pantheon VALUES 
('Celtic','Deities of Celtic Mythology'),
('Chinese','Chinese Mythology'),
('Egyptian','Egyptian Gods and Goddesses'),
('Greek','Gods of Olympus'),
('Hindu','Hindu Mythology'),
('Mesopotamian','Gods and Spirits of Mesopotamia'),
('Native American','Native American Mythology'),
('Norse','Asgardian Gods'),
('Welsh','Arthurian Legends');

INSERT INTO Artifact VALUES 
('Arachne\"s Tapestry','The tapestry forged in Arachne\"s weaving competition with Athena that won. This tapestry was torn to pieces because Athena was envious of Arachne\"s skills, but it still stands that Arachne\"s Tapestry was magnificent enough to beat the Gods'),
('Ariadne\"s Thread','A long thread given to Theseus by Ariadne, which he used to navigate the complex Labyrinth.'),
('Armor of Achilles','The armor worn by Patroclus in his attempt to inspire the Greeks and intimidate the Trojans, leading to his tragic death.'),
('Cauldron of Dagda','A magical cauldron owned by the Celtic god Dagda. It is said to be bottomless and always full of food and drink. There are rumors that it also possess healing powers'),
('Demon Bull Kings Cudgel','A weapon wielded by the Demon Bull King, heavy enough to shake the mountains, symbolizing his brute strength.'),
('Dreamcatcher','Protects the sleeper from bad dreams and nightmares by filtering them out during sleep'),
('Excalibur','Excalibur is the mythical sword of King Arthur that may possess magical powers or be associated with the rightful sovereignty of Britain.'),
('Gáe Bolga','Cú Chulainn\"s legendary spear, given to him by his teacher Scáthach, known for its deadly ability to inflict mortal wounds from which no enemy could recover.'),
('Jormungandr\"s Scales','Scales shed by Jormungandr, said to possess protective properties against harm.'),
('Lamassu Sculpture','A massive stone sculpture depicting the Lamassu, believed to protect cities from invaders and evil spirits.'),
('Mjollnir','Forged for Thor by a dwarf named Sindri'),
('Osiris\"s Coffin','A beautifully carved coffin made by Set. Osiris was tricked by Set, his brother, to enter the chest, and was enclosed inside it by 72 accomplices of Set. Set flung the coffer in the Nile so that it would drift far away.'),
('Palm-Leaf Fan','A magical fan belonging to Princess Iron Fan, capable of quenching the flames of the Flaming Mountains. Stolen and used by Sun Wukong in his quest to subdue the Demon Bull King.'),
('Ruyi Jingu Bagn','The staff of Sun Wukong, which could alter its size from a tiny needle to a mighty pillar'),
('Shield of Achilles','Achilles lends Patroclus his armor in order to lead the Achaean army into battle. Ultimately, Patroclus is killed in battle by Hector, and Achilles\" armor is stripped from his body and taken by Hector as spoils. The loss of his companion prompts Achilles to return to battle, and the god Hephaestus forges Achilles a shield with spectacular decorative imagery.'),
('Sun Wukong\"s Golden Headband','The circlet is a heaven-sent magic treasure designed to reign in the immortals\" unruly, rebellious nature'),('Tablets of Destiny','A set of clay tablets inscribed with writing believed to control the fate of the universe'),
('The Anchor of the Kraken','A mythical anchor believed to be the only artifact capable of holding the Kraken at bay, lost in the Northern Seas.'),
('Thor\"s Fishing Hook','The hook used by Thor in his attempt to catch Jormungandr.'),
('Wings of Icarus','Daedalus, Icarus\"s father,  studied the movements of birds and built a device mimicking them. He then laid down multiple feathers in a row from shortest to longest and tied them together using beeswax and thread. However, Daedalus warned Icarus not to fly too high, because the heat of the sun would melt the beeswax (holding his feathers together) and the wings would break, nor too low, because the sea foam would soak the feathers and make them heavy and he would fall');

INSERT INTO Deity VALUES 
('Apollo','He communicated the will of his father Zeus, made humans aware of their guilt and purified them of it, presided over religious and civil law, and foretold the future. His bow symbolized distance, death, terror, and awe; his lyre symbolized music, poetry, and dance.','Arts, Prophecy, and Sun','Bowmanship, healing, singing'),
('Artemis','Artemis was the twin sister to Apollo and was the daughter of Zeus and Leto. Both Apollo and Artemis took revenge against anyone who attempted to harm their mother. Apollo and Artemis slew the giant Tityus and killed the children of the mortal woman Niobe','Hunting, Moon, and Maidenhood','Bowmanship, and healing'),
('Cernunnos','Celtic god associated with fertility, animals, wealth, and the underworld.','Fertility and Nature','Fertility, transformation'),
('Dagda','Important god in Irish mythology, associated with agriculture, fertility, and protection, known for his strength and magical club.','Fertility and Protection','Strength, plant control'),
('Dionysus','Dionysus is called twice-born because he was born from Semele and then, while she was dying, Zeus saved him by sewing him up in his thigh and keeping him there until he reached maturity. He then \"gave birth\" to Dionysus, thus making him twice-born.','Wine, Festivity, and Fertility','Vine manipulation, insanity'),
('Enki','Mesopotamian god of water, knowledge, mischief, crafts, and creation.','Water and Wisdom','Water manipulation, wisdom'),
('Enlil','Mesopotamian god of wind, air, earth, and storms, considered one of the chief gods in the Mesopotamian pantheon.','Wind and Storms','Weather control'),
('Osiris','God of the deceased, was the son and oldest child of Geb, the Earth deity and Nut, the sky goddess. His wife and sister was Isis, goddess of motherhood, magic, fertility, death, healing, and rebirth.','Underground and Afterlife',' Telepathy'),
('Shiva','Shiva holds one of the most prominent roles in Hinduism as the god of destruction. He is one of the three most important gods, alongside Brahma (the creator) and Vishnu (the preserver). The sect of Shaivism holds that Shiva is the Supreme Being which all other gods are aspects of','Destruction','Destruction, creation'),
('Sun Wukong','A monkey who was born out of stone and possesses magical powers and strength. The legend of the Monkey King explains how he helped protect Xuan Zang, a monk, on their journey to India in order to bring back Buddhist holy books to China.','Trickery','Transformation'),
('Thor','A prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.','Thunder','Thunder control, strength'),
('Trickster Coyote','Trickster figure in Native American mythology, known for his cunning and playful nature.','Trickery and Chaos','Shape-shifting, trickery'),
('Zeus','Zeus was the king of the Greek gods. He became the king of the gods after he rescued his siblings from their father, the Titan Cronus. Cronus swallowed all but one of his children. Zeus\"s mother Rhea rescued her son from the wrath of his father Cronus','The sky and thunder','Weather control');

INSERT INTO Mortal VALUES 
('Achilles','Achilles was the strongest warrior and hero in the Greek army during the Trojan War. He was the son of Peleus, king of the Myrmidons, and Thetis, a sea nymph',NULL,' Greek Warrior'),
('Arthur','The King of Britain, Uther Pendragon, dies, leaving no heir to the throne. As his most powerful knights fight to decide who will succeed, a mysterious sword appears in a stone. Whoever pulls the sword from the stone will be the next king. Arthur pulls the sword','King','King of Medieval England'),
('Cú Chulainn','Legendary hero of Irish mythology known for his unmatched prowess in battle.',NULL,'Warrior'),
('Daedalus','Daedalus is Icarus\"s father, and a brilliant architect, sculptor, and inventor. He was credited with building for King Minos of Crete the Labyrinth in which the Minotaur was kept',NULL,'Inventor'),
('Gilgamesh','King of Uruk and central character of the Epic of Gilgamesh, known for his strength and adventures.',NULL,'King'),
('Hiawatha','Legendary figure in Native American folklore, known for his role in uniting the Iroquois tribes.',NULL,'Leader'),
('Icarus','son of the inventor Daedalus who perished by flying too near the Sun with waxen wings. See Daedalus',NULL,NULL),
('Patroclus','Patroclus was a hero of the Trojan War and is widely known for being the childhood friend and close wartime companion of the hero Achilles. Legends either say that he has a blood relation to Achilles, or was Achilles\" lover.',NULL,'Greek Warrior');

INSERT INTO Creature VALUES 
('Arachne', 'A proud woman turned into a spider creature as divine punishment', 'web weaving', 'Giant Spider'),
('Demon Bull King','He is the scourge of the Netherworld and the archenemy of the Monkey King','Brute Strength','Giant white bull'),
('Jormungandr','Midgard Serpent (also World Serpent) in Norse mythology who encircles the realm of Midgard. He is the son of the god Loki and the giantess Angrboða and brother of the great wolf Fenrir and Hel, Queen of the Dead. At Ragnarök, the Twilight of the Gods, he slays and is slain by the god Thor.','Virtual invulnerability','World Serpent'),
('Kelpie','Water spirit in Celtic folklore, often appearing as a horse and known for drowning travellers.','Water manipulation','Water spirit'),
('Kraken','A legendary sea monster of enormous size, etymologically akin to a squid or octopus, said to appear in the sea between Norway and Iceland',NULL,'Sea mCharactersonster'),
('Lamassu','A protective figure from Mesopotamian mythology, Lamassus are depicted with a human head, the body of a bull or lion, wings, and sometimes eagle’s talons','Protection','Mythical creature'),
('Medusa','A woman with living snakes in place of hair; her appearance was so hideous that anyone who looked upon her was turned to stone','Stonification','Gorgon'),
('Minotaur','Half man half bull, born to the wife of king Minos and a bull, imprisoned in the Labyrinth due to King Minos\"s shame','Strength','Hybrid Man and Bull'),
('Thunderbird','Powerful creature in Native American mythology, often associated with storms and thunder.','Control over thunder and storms','Mythical bird Creature');

INSERT INTO Represents VALUES 
('Atef crown','Osiris'),
('Golden Headband','Sun Wukong'),
('Hammer of Thor','Thor'),
('Creation','Shiva'),
('Moon','Artemis'),
('Sun','Apollo');

INSERT INTO Ritual VALUES 
('Coyote\"s Dance of Chaos',1,'Trickster Coyote','anywhere','anytime'),
('Delphi Rituals',1,'Apollo','Delphi','classical antiquity'),
('Dionysian Mysteries',1,'Dionysus','anywhere','anytime'),
('Enuma Elish',1,'Enlil','anywhere','anytime'),
('Feast of Samhain',1,'Dagda','anywhere','anytime'),
('Kharisteria',1,'Artemis','Athens','classical antiquity'),
('Maha Shivaratri',1,'Shiva','Nepal','modern'),
('Olympic Ritual',1,'Zeus','Olympia','classical antiquity');

INSERT INTO Tale VALUES 
('Enlil and the Tablets of Destiny','Power and destiny should not be taken for granted','Mesopotamian'),
('Myth of Niobe','Do not get carried away in your own hubris','Greek'),
('Quest for Immortality','Boldness and talent can only carry one so far. To achieve goals, it takes hubris, persistence and a lot of teammates','Chinese'),
('Rebellion of the Demon Bull King','Even the mightiest forces can be tamed by wisdom and courage.','Chinese'),
('Story of Achilles','Everyone has a weakness','Greek'),
('Story of Orpheus and Eurydice','Be patient and keep one\"s faith','Greek'),
('Tale of Arachne','Do not get carried away in your own hubris','Greek'),
('Tale of Dagda and the Cauldron','Do not underestimate the consequences of greed and betrayal','Celtic'),
('Tale of Narcissus','Pride and vanity are dangerous','Greek'),
('Tale of Trickster Coyote','Wisdom can be found in unexpected place','Native American'),
('The Binding of Jormungandr','The most fierce creatures can be bound, but not without consequence.','Norse'),
('The Cattle Raid of Cooley','True heroism is shown through courage and loyalty to one\"s community','Celtic'),
('The Death and Rebirth of Osiris','Pride and vanity are dangerous','Egyptian'),
('The Deceptive Kelpie','Beauty and charm can hide danger, leading the unwary to their doom.','Celtic'),
('The Epic of Gilgamesh','Understanding and accepting one\"s mortality enriches the human experience.','Mesopotamian'),
('The Fate of Patroclus','The bonds of friendship can drive one to the heights of heroism or the depths of tragedy.','Greek'),
('The Gorgon Medusa','Even the most dreadful form can house a gentle soul, and the most beautiful can house deceit.','Greek'),
('The Guardian Lamassu','Guardians not only protect the physical realm but also guide the moral compass of civilizations.','Mesopotamian'),
('The Legend of King Arthur','Leadership and valor in the pursuit of justice and peace define true kingship.','Welsh'),
('The Legendary Adventures of Thor','The source of our ability to overcome the challenges in life doesn\"t come from our possessions - it resides within us','Norse'),
('The Myth of Daedalus and Icarus','Do not get carried away in your own hubris','Greek'),
('The myth of Tantalus','Selfish actions could have enduring consequences that may be unpredictable at the time','Greek'),
('The Myth of the Minotaur','Power without wisdom leads only to destruction.','Greek'),
('The Thunderbird and the Whale','Balance and respect for nature are essential for harmony.','Native American'),
('The Twilight of the Gods','In the end, even gods and monsters meet their fate.','Norse'),
('The Wrath of the Kraken','Unchecked natures fury can bring even the mightiest to their knees.','Norse');

INSERT INTO StoryEvent VALUES 
('Enlil and the Tablets of Destiny','Tablets of Destiny are stolen','Anzu, a monstrous bird, steals the tablet from Enlil, who is entrusted with it because he is the chief of the gods. Enlil embarks on a journey to retrieve the powerful tablets','Mesopotamia','classical antiquity'),
('Rebellion of the Demon Bull King','Confrontation at the Flaming Mountains','The Demon Bull King battles Sun Wukong at the Flaming Mountains, only to be subdued and taught the values of humility and service.','Flaming Mountains','Tang Dynasty'),
('Story of Achilles','Achilles becomes invulnerable','As a baby Achilles is dipped into the river Styx by his mother who holds him by his heel, rendering him invulnerable','River Styx','anytime'),
('Story of Achilles','Achilles gets shot','Guided by Apollo, Paris shoots Achilles in his single vulnerable spot, his heel','Troy','classical antiquity'),
('Story of Achilles','Achilles goes to war','Achilles joins the Trojan war on the side of the Greeks','Troy','classical antiquity'),
('Story of Achilles','Death of Hector','After a one-on-one fight, Achilles avenges his friend Patroclus by killing Hector','Troy','classical antiquity'),
('Story of Achilles','Death of Patroclus','After his wits were removed by Apollo, Hector kills Patroclus in battle with a spear stab to the stomach','Troy','classical antiquity'),
('Tale of Dagda and the Cauldron','Dagda retrieves her Cauldron','After the Cauldron of Dagna is stolen by Fomorians, Dagda sets out on a quest to retrieve her cauldron.','Mt. Olympus','anytime'),
('Tale of Trickster Coyote','Creation of the Dreamcatcher','Coyote creates the Dreamcatcher to protect people from bad dreams by filtering them through his web, allowing only good dreams to pass through','North America','modern'),
('The Cattle Raid of Cooley','Cú Chulainn\"s Stand at the Ford','Cú Chulainn fights off the invading forces at a strategic river crossing, showcasing his prowess and the supernatural abilities granted by his ríastrad (battle frenzy).','Ulster','Iron Age'),
('The Deceptive Kelpie','Escape from the Kelpie','A clever child escapes the Kelpies grasp by outwitting it, reminding us that wit can triumph over brawn.','Scottish Lochs','pre-medieval'),
('The Deceptive Kelpie','The Kelpies Lure','A Kelpie transforms into a handsome steed, tempting travelers to ride on its back before dragging them into the loch.','Scottish Lochs','pre-medieval'),
('The Epic of Gilgamesh','Gilgamesh and Enkidu Slay Humbaba','Gilgamesh and Enkidu journey to the Cedar Forest to confront and slay Humbaba, defying the gods to secure their fame.','Cedar Forest','early dynastic period'),
('The Epic of Gilgamesh','The Death of Enkidu','Enkidu dies as punishment from the gods for slaying Humbaba and the Bull of Heaven, prompting Gilgameshs quest for immortality.','Uruk','early dynastic period'),
('The Epic of Gilgamesh','The Quest for Immortality','Gilgamesh embarks on a journey to find Utnapishtim and learn the secret of eternal life.','Mashu','early dynastic period'),
('The Epic of Gilgamesh','The Return to Uruk','Having learned the lesson of human mortality, Gilgamesh returns to Uruk, where he rules wisely until his death.','Uruk','early dynastic period'),
('The Fate of Patroclus','The Death of Patroclus','Patroclus is slain by Hector, with the gods interference sealing his fate, sparking Achilles return to combat.','Troy','classical antiquity'),
('The Fate of Patroclus','The Decision of Patroclus','Wearing Achilles armor, Patroclus enters the battlefield in his stead, driven by a desire to turn the tide for the Greeks.','Troy','classical antiquity'),
('The Gorgon Medusa','Birth of Pegasus','From the blood of Medusa springs forth Pegasus, the winged horse.','Island of Sarpedon','classical antiquity'),
('The Gorgon Medusa','Perseus encounters Medusa','Perseus, aided by the gods, beheads Medusa while she sleeps.','Island of Sarpedon','classical antiquity'),
('The Guardian Lamassu','Creation of the Lamassu','The Lamassu are created by the gods to guard the cities of Mesopotamia, standing as symbols of protection and power.','Gates of Assyria','ancient'),
('The Guardian Lamassu','The Lamassus Wisdom','A Lamassu imparts ancient wisdom to a lost king, guiding him to rule with justice and mercy.','Gates of Assyria','ancient'),
('The Legend of King Arthur','The Battle of Camlann','The final battle where Arthur is mortally wounded, leading to his departure to Avalon.','Avalon','medieval'),
('The Legend of King Arthur','The Establishment of the Round Table','Arthur establishes the Round Table, gathering the most honorable knights in the land to seek justice and peace.','Camelot','medieval'),
('The Legend of King Arthur','The Quest for the Holy Grail','Arthur and his knights embark on the quest for the Holy Grail, the symbol of divine grace and the ultimate quest of Arthurian legend.','Camelot','medieval'),
('The Legend of King Arthur','The Sword in the Stone','Arthur pulls the magical sword, Excalibur, from the stone, proving his right to the throne.','Camelot','medieval'),
('The Myth of Daedalus and Icarus','Icarus loses his wings','After flying too close to the sun, the wax on Icaruss wings melts, leaving him featherless and unable to fly','Crete','classic antiquity'),
('The Myth of the Minotaur','The Birth of the Minotaur','The Minotaur is born as a result of a curse on Minoss wife, Pasiphae, and is subsequently imprisoned in the Labyrinth.','Labyrinth of Crete','bronze age'),
('The Myth of the Minotaur','The death of the Minotaur','Theseus kills the Minotaur with the help of Ariadnes thread, finding his way out of the maze.','Labyrinth of Crete','bronze age'),
('The Myth of the Minotaur','Theseus enters the Labyrinth','Theseus, the prince of Athens, ventures into the Labyrinth to slay the Minotaur.','Labyrinth of Crete','bronze age'),
('The Thunderbird and the Whale','Victory of the Thunderbird','With a mighty clash that shakes the earth, the Thunderbird defeats the whale, thus stopping the floods and restoring balance to the land.','Great Plains','anytime'),
('The Twilight of the Gods','The battle of Ragnarök','Jormungandr emerges from the sea and poisons the sky, fighting Thor to mutual destruction.','Midgard','viking age'),
('The Wrath of the Kraken','Confrontation with the Kraken','Sailors and heroes alike attempt to confront the Kraken, only to realize its immense power.','Northern Seas','viking age'),
('The Wrath of the Kraken','The Kraken Awakens','A colossal sea monster awakens from the depths, causing whirlpools and dragging ships to the abyss.','Northern Seas','viking age');

INSERT INTO BelongsTo VALUES 
('Shield of Achilles','Achilles'),
('Arachne"s Tapestry','Arachne'),
('Excalibur','Arthur'),
('Gáe Bolga','Cú Chulainn'),
('Cauldron of Dagda','Dagda'),
('Demon Bull Kings Cudgel','Demon Bull King'),
('Tablets of Destiny','Enlil'),
('Wings of Icarus','Icarus'),
('Osiris"s Coffin','Osiris'),
('Armor of Achilles','Patroclus'),
('Ruyi Jingu Bagn','Sun Wukong'),
('Sun Wukong"s Golden Headband','Sun Wukong'),
('Mjollnir','Thor'),
('Dreamcatcher','Trickster Coyote');

INSERT INTO AppearsIn VALUES 
('Mjollnir', 'The Legendary Adventures of Thor'),
('Arachne"s Tapestry', 'Tale of Arachne'),
('Shield of Achilles', 'Story of Achilles'),
('Wings of Icarus', 'The Myth of Daedalus and Icarus'),
('Osiris"s Coffin', 'The Death and Rebirth of Osiris'),
('Sun Wukong"s Golden Headband', 'Quest for Immortality'),
('Ruyi Jingu Bagn', 'Quest for Immortality'),
('Cauldron of Dagda', 'Tale of Dagda and the Cauldron' ),
('Tablets of Destiny', 'Enlil and the Tablets of Destiny'),
('Dreamcatcher', 'Tale of Trickster Coyote'),
('Demon Bull Kings Cudgel', 'Rebellion of the Demon Bull King');

INSERT INTO PartOf VALUES 
('Sun Wukong','Quest for Immortality'),
('Demon Bull King','Rebellion of the Demon Bull King'),
('Achilles','Story of Achilles'),
('Apollo','Story of Achilles'),
('Jormungandr','The Binding of Jormungandr'),
('Osiris','The Death and Rebirth of Osiris'),
('Medusa','The Gorgon Medusa'),
('Icarus','The Myth of Daedalus and Icarus'),
('Minotaur','The Myth of the Minotaur');