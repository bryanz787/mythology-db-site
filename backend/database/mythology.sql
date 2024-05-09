
CREATE TABLE Location(
	LocationName VARCHAR(32),
	AreaDescription VARCHAR(512),
	TimePeriod VARCHAR(32) DEFAULT 'anytime',
	PRIMARY KEY (LocationName, TimePeriod)
);

CREATE TABLE Ritual (
   	RitualName VARCHAR(32),
	Recurring BOOLEAN,
    CharacterName VARCHAR(32) NOT NULL,
    LocationName VARCHAR(32) DEFAULT 'anywhere',
	TimePeriod VARCHAR(32) DEFAULT 'anytime',
	PRIMARY KEY (RitualName),
	FOREIGN KEY (CharacterName) REFERENCES Deity(CharacterName) ON DELETE CASCADE
   	FOREIGN KEY (LocationName, TimePeriod) REFERENCES Location(LocationName, TimePeriod) ON DELETE CASCADE
);

CREATE TABLE Tale (
	TaleName VARCHAR(32),
	MoralLesson VARCHAR(128) NOT NULL DEFAULT 'inconclusive',
	Culture VARCHAR(32) NOT NULL,
	PRIMARY KEY (TaleName),
	FOREIGN KEY (Culture) REFERENCES Pantheon(Culture) ON DELETE CASCADE
);

CREATE TABLE StoryEvent (
	TaleName VARCHAR(32),
	EventName VARCHAR(32),
    EventDescription VARCHAR(512),
    LocationName VARCHAR(32),
	TimePeriod VARCHAR(32) DEFAULT 'anytime',
    PRIMARY KEY (TaleName, EventName),
    FOREIGN KEY (TaleName) REFERENCES Tale(TaleName) ON DELETE CASCADE,
    FOREIGN KEY (LocationName, TimePeriod) REFERENCES Location(LocationName, 
	TimePeriod) ON DELETE CASCADE
);

CREATE TABLE Pantheon(
	Culture CHAR(32),
	PantheonName VARCHAR(32),
	PRIMARY KEY (Culture)
);
	
CREATE TABLE Artifact(
	ArtifactName VARCHAR(32),
	Origin VARCHAR(512),
	PRIMARY KEY(ArtifactName)
);

CREATE TABLE BelongsTo (
	ArtifactName VARCHAR(32),
	CharacterName VARCHAR(32),
	PRIMARY KEY (ArtifactName, CharacterName),
	FOREIGN KEY (ArtifactName) REFERENCES Artifact,
	FOREIGN KEY (CharacterName) REFERENCES Character)

CREATE TABLE AppearsIn (
	ArtifactName VARCHAR(32),
	TaleName VARCHAR(32),
	PRIMARY KEY (ArtifactName, TaleName),
	FOREIGN KEY (ArtifactName) REFERENCES Artifact,
	FOREIGN KEY (TaleName) REFERENCES Tale
);

CREATE TABLE Symbol (
	SymbolName VARCHAR(32),
	Origin VARCHAR(512),
	PRIMARY KEY (SymbolName)
);
CREATE TABLE Deity (
	DeityName VARCHAR(32),
	CharacterDescription VARCHAR(512),
	Domain VARCHAR(32),
	SupernaturalAbility VARCHAR(32),
	Culture VARCHAR(32),
	PRIMARY KEY (CharacterName),
	FOREIGN KEY (RitualName) REFERENCES Ritual
);

CREATE TABLE Mortal (
	CharacterName VARCHAR(32),
	CharacterDescription VARCHAR(512),
	Title VARCHAR(32),
	Profession VARCHAR(32),
	ChildName VARCHAR(32) DEFAULT NULL,
	Culture VARCHAR(32),
	PRIMARY KEY (CharacterName),
	FOREIGN KEY (ChildName) REFERENCES Mortal (CharacterName),
	FOREIGN KEY (Culture) REFERENCES Pantheon 
);

CREATE TABLE Creature (
	CharacterName VARCHAR(32),
	CharacterDescription VARCHAR(512),
	SupernaturalAbility VARCHAR(32),
	Species VARCHAR(32),
	Culture VARCHAR(32),
	PRIMARY KEY (CharacterName),
	FOREIGN KEY (CharacterName) REFERENCES Character,
	FOREIGN KEY (Culture) REFERENCES Pantheon 
);
CREATE TABLE Represents (
	SymbolName VARCHAR(32),
	CharacterName VARCHAR(32),
	PRIMARY KEY (SymbolName),
	FOREIGN KEY (SymbolName) REFERENCES Symbol
);

CREATE TABLE PartOf(
	CharacterName VARCHAR(32)
	TaleName VARCHAR(32)
	PRIMARY KEY (CharacterName)
	FOREIGN KEY (CharacterName) REFERENCES Character
	FOREIGN KEY (TaleName) REFERENCES Tale
);


INSERT INTO Location VALUES
('Mount Olympus', 'Mount Olympus is the mythological home of the gods. It is snowy-peaked and scattered with the palaces of the gods',  'anytime'),
('Labyrinth of Crete', 'A prison constructed under Crete built to hide the Minotaur from the world', 'bronze age'),
('Ithaca', 'The island birthplace of Odysseus',  'classical antiquity'),
('Troy', 'The city of Troy, site of the Trojan war',  'classical antiquity'),
('Serifos', 'Cyclops island, home to Poseidon"s children',  'classical antiquity'),
('Athens', 'A city in modern day Greece', 'modern');
('Athens', 'A city in ancient Greece, home to many myths', 'classical antiquity'),
('Olympia', 'A city of ancient Greece, birthplace of the Olympics', 'classical antiquity'),
('Delphi', 'A city of Ancient Greece, home to the Delphi Oracle and worshippers of Apollo', 'classical antiquity'),
('Nepal', 'A landlocked country in South Asia, home to the Himalayan Mountain range', 'modern'),
('River Styx', 'A river running through the Greek underworld, separating the dead from the living', 'anytime'),
('Crete', 'A city of ancient Greece, home to King Minos and the Labyrinth', 'classic antiquity'),
('Celtic Lands', 'The collection of Celtic territories, encompassing Ireland, Scotland, Wales and England', 'pre-medieval'),
('Mesopotamia', 'An ancient region located in the eastern Mediterranian, known as the land between the rivers', '6000 years ago'),
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
('Mashu', 'The twin-peaked mountain with the gate leading to the Cedar Forest, through which Gilgamesh passes on his quest for immortality.', 'early dynastic period'),
('Mount Kailash', 'Considered the abode of Lord Shiva, Mount Kailash is revered as a sacred mountain and a pilgrimage destination in Hinduism, Buddhism, Jainism, and Bon.', 'timeless'),
('Himalayas', 'A mountain range in South Asia, which is home to the world''s highest peaks, including Mount Everest and K2', 'timeless'),
('Varanasi', 'One of the oldest living cities in the world, located along the banks of the Ganges River in India. Varanasi is considered a holy city in Hinduism, dedicated to Lord Shiva.', 'anytime'),
('Caucasus Mountains', 'A mountain system in Eurasia between the Black Sea and the Caspian Sea, where Prometheus was punished by Zeus.', 'classical antiquity'),
('Brauron', 'An ancient Greek sanctuary on the eastern coast of Attica dedicated to Artemis Brauronia, a place of worship and rites for young girls.', 'classical antiquity'),
('Ortygia', 'A small island near Delos, legendary birthplace of Artemis and Apollo, sacred to both.', 'classical antiquity'),
('Abydos', 'An ancient city and significant cult center of Osiris, believed to be the gateway to the afterlife.', 'anytime'),
('Duat', 'The mythical realm of the dead in Egyptian mythology, overseen by Osiris as the judge of souls.', 'timeless'),
('Memphis', 'An ancient capital of Egypt, Memphis was a major religious and cultural center, home to important temples dedicated to Osiris.', 'ancient'),
('Eridu', 'One of the earliest cities in ancient Mesopotamia, Eridu is considered the city of the god Enki, associated with creation, water, and wisdom.', 'ancient times');


INSERT INTO Ritual VALUES
('Dionysian Mysteries', TRUE,  'Dionysus', 'anywhere', 'anytime'),
('Kharisteria', TRUE, 'Artemis', 'Athens', 'classical antiquity'),
('Olympic Games', TRUE, 'Zeus', 'Olympia', 'classical antiquity'),
('Delphi Rituals', TRUE, 'Apollo', 'Delphi', 'classical antiquity'),
('Maha Shivaratri', TRUE, 'Shiva', 'Nepal', 'modern'),
('Feast of Samhain', TRUE, 'Dagda', 'anywhere', 'anytime'),
('Enuma Elish', TRUE, 'Enlil', 'anywhere', 'anytime'),
('Coyote"s Dance of Chaos', TRUE, 'Trickster Coyote', 'anywhere', 'anytime'),
('Festival of the Apsu', TRUE, 'Enki', 'Eridu', 'ancient times'),
('Beltane Celebrations', TRUE, 'Cernunnos', 'Celtic Lands', 'Iron Age'),
('Pythian Games', TRUE, 'Apollo', 'Delphi', 'classical antiquity'),
('Feast of Apollo', TRUE, 'Apollo', 'Delphi', 'anytime'),
('Brauronia', TRUE, 'Artemis', 'Brauron', 'classical antiquity'),
('Dionysia', TRUE, 'Dionysus', 'Athens', 'classical antiquity'),
('Osiris Mysteries', TRUE, 'Osiris', 'Abydos', 'anytime');


INSERT INTO Tale VALUES
('Tale of Arachne', 'Do not get carried away in your own hubris', 'Greek'),
('Story of Achilles', 'Everyone has a weakness', 'Greek'),
('The myth of Tantalus', 'Selfish actions could have enduring consequences that may be unpredictable at the time', 'Greek'),
('Tale of Narcissus', 'Pride and vanity are dangerous', 'Greek'),
('The Myth of Daedalus and Icarus', 'Do not get carried away in your own hubris', 'Greek'),
('Story of Orpheus and Eurydice', 'Be patient and keep one"s faith', 'Greek'),
('Myth of Niobe', 'Do not get carried away in your own hubris', 'Greek'),
('The Death and Resurrection of Osiris', 'Pride and vanity are dangerous', 'Egyptian'),
('Sun Wukong"s Quest for Immortality', 'Boldness and talent can only carry one so far. To achieve goals, it takes hubris, persistence and a lot of teammates', 'Chinese'),
('The Legend of King Arthur', 'Leadership and valor in the pursuit of justice and peace define true kingship.', 'Welsh'),
('Tale of Dagda and the Cauldron', 'Do not underestimate the consequences of greed and betrayal', 'Celtic'),
('Tale of Enlil and the Tablets of Destiny', 'Power and destiny should not be taken for granted', 'Mesopotamian'),
('Tale of Trickster Coyote', 'Wisdom can be found in unexpected place', 'Native American'),
('The Gorgon Medusa', 'Even the most dreadful form can house a gentle soul, and the most beautiful can house deceit.', 'Greek'),
('The Binding of Jormungandr', 'The most fierce creatures can be bound, but not without consequence.', 'Norse'),
('The Twilight of the Gods', 'In the end, even gods and monsters meet their fate.', 'Norse'),
('The Rebellion of the Demon Bull King', 'Even the mightiest forces can be tamed by wisdom and courage.', 'Chinese'),
('The Myth of the Minotaur', 'Power without wisdom leads only to destruction.', 'Greek'),
('The Wrath of the Kraken', 'Unchecked nature"s fury can bring even the mightiest to their knees.', 'Norse'),
('The Deceptive Kelpie', 'Beauty and charm can hide danger, leading the unwary to their doom.', 'Celtic'),
('The Guardian Lamassu', 'Guardians not only protect the physical realm but also guide the moral compass of civilizations.', 'Mesopotamian'),
('The Thunderbird and the Whale', 'Balance and respect for nature are essential for harmony.', 'Native American'),
('The Fate of Patroclus', 'The bonds of friendship can drive one to the heights of heroism or the depths of tragedy.', 'Greek'),
('The Cattle Raid of Cooley', 'True heroism is shown through courage and loyalty to one"s community', 'Celtic'),
('The Epic of Gilgamesh', 'Understanding and accepting one"s mortality enriches the human experience.', 'Mesopotamian'),
('Enki and the World Order', 'The importance of wisdom and order in creation', 'Mesopotamian'),
('Enki Saves Humanity', 'Compassion and cunning can avert disaster', 'Mesopotamian'),
('Cernunnos and the Cycle of Life', 'Life, death, and rebirth are interconnected and essential for the balance of the world', 'Celtic'),
('The Birth of Apollo', 'Even gods are bound by fate', 'Greek'),
('Apollo and Daphne', 'Unrequited love can lead to transformation and new beginnings', 'Greek'),
('Apollo and the Python', 'Bravery and duty can overcome darkness and chaos', 'Greek'),
('Shiva and the Cosmic Dance', 'The universe is a cycle of creation, preservation, and dissolution', 'Hindu'),
('The Marriage of Shiva and Parvati', 'Devotion and perseverance lead to fulfillment of desires', 'Hindu'),
('Shiva and the Ganges', 'The power of devotion can tame even the most potent forces', 'Hindu'),
('The Birth of Zeus', 'The destined rise of new order over chaos', 'Greek'),
('Zeus and the Titans', 'The triumph of the Olympian gods over the old powers', 'Greek'),
('Zeus and Prometheus', 'The consequences of defying divine authority', 'Greek'),
('Artemis and Actaeon', 'Respect the privacy and sanctity of the divine', 'Greek'),
('The Birth of Artemis', 'The divine can manifest with strength and autonomy from the moment of birth', 'Greek'),
('Artemis and Orion', 'Even the divine can feel the pangs of love and loss', 'Greek'),
('The Birth of Dionysus', 'Even in adversity, divinity finds a way to thrive', 'Greek'),
('Dionysus and the Pirates', 'Disrespecting the divine leads to punishment and transformation', 'Greek'),
('The Return of Dionysus', 'Acceptance and recognition of all aspects of life, including the irrational, are essential', 'Greek'),
('Osiris and the Contest of the Throne', 'Legitimacy and righteousness will ultimately triumph over deceit and malice', 'Egyptian'),
('Thor"s Battle with Jörmungandr', 'Courage in the face of the inevitable is the highest form of valor', 'Norse'),
('The Theft of Mjölnir', 'Cleverness and strength can overcome deceit and treachery', 'Norse'),
('Thor and the Skrymir', 'Appearances can be deceiving, and humility is a virtue', 'Norse'),
('Sun Wukong"s Rebellion against Heaven', 'Even the most powerful beings must face the consequences of their actions', 'Chinese');


INSERT INTO StoryEvent VALUES
('Story of Achilles', 'Achilles becomes invulnerable', 'As a baby Achilles is dipped into the river Styx by his mother who holds him by his heel, rendering him invulnerable', 'River Styx', 'classical antiquity'),
('Story of Achilles', 'Achilles goes to war', 'Achilles joins the Trojan war on the side of the Greeks', 'Troy', 'classical antiquity'),
('Story of Achilles', 'Death of Patroclus', 'After his wits were removed by Apollo, Hector kills Patroclus in battle with a spear stab to the stomach', 'Troy', 'classical antiquity');
('Story of Achilles', 'Death of Hector', 'After a one-on-one fight, Achilles avenges his friend Patroclus by killing Hector', 'Troy', 'classical antiquity'),
('Story of Achilles', 'Achilles gets shot', 'Guided by Apollo, Paris shoots Achilles in his single vulnerable spot, his heel', 'Troy', 'classical antiquity'),
('The Myth of Daedalus and Icarus', 'Icarus loses his wings', 'After flying too close to the sun, the wax on Icarus"s wings melts, leaving him featherless and unable to fly', 'Crete', 'classical antiquity'),
('Tale of Dagda and the Cauldron', 'Dagda retrieves her Cauldron', 'After the Cauldron of Dagna is stolen by Fomorians, Dagda sets out on a quest to retrieve her cauldron.', 'Mount Olympus', 'classical antiquity'),
('Tale of Enlil and the Tablets of Destiny', 'The Tablets of Destiny are stolen', 'Anzu, a monstrous bird, steals the tablet from Enlil, who is entrusted with it because he is the chief of the gods. Enlil embarks on a journey to retrieve the powerful tablets', 'Mesopotamia', 'classical antiquity'),
('Trickster Coyote and the Dreamcatcher', 'Creation of the Dreamcatcher', 'Coyote creates the Dreamcatcher to protect people from bad dreams by filtering them through his web, allowing only good dreams to pass through', 'North America', 'classical antiquity'),
('The Gorgon Medusa', 'Perseus encounters Medusa', 'Perseus, aided by the gods, beheads Medusa while she sleeps.', 'Island of Sarpedon', 'classical antiquity'),
('The Gorgon Medusa', 'Birth of Pegasus', 'From the blood of Medusa springs forth Pegasus, the winged horse.', 'Island of Sarpedon', 'classical antiquity'),
('The Twilight of the Gods', 'The battle of Ragnarök', 'Jormungandr emerges from the sea and poisons the sky, fighting Thor to mutual destruction.', 'Midgard', 'viking age'),
('The Rebellion of the Demon Bull King', 'Confrontation at the Flaming Mountains', 'The Demon Bull King battles Sun Wukong at the Flaming Mountains, only to be subdued and taught the values of humility and service.', 'Flaming Mountains', 'Tang Dynasty'),
('The Myth of the Minotaur', 'The Birth of the Minotaur', 'The Minotaur is born as a result of a curse on Minos"s wife, Pasiphae, and is subsequently imprisoned in the Labyrinth.', 'Labyrinth of Crete', 'bronze age'),
('The Myth of the Minotaur', 'Theseus enters the Labyrinth', 'Theseus, the prince of Athens, ventures into the Labyrinth to slay the Minotaur.', 'Labyrinth of Crete', 'bronze age'),
('The Myth of the Minotaur', 'The death of the Minotaur', 'Theseus kills the Minotaur with the help of Ariadne"s thread, finding his way out of the maze.', 'Labyrinth of Crete', 'bronze age'),
('The Wrath of the Kraken', 'The Kraken Awakens', 'A colossal sea monster awakens from the depths, causing whirlpools and dragging ships to the abyss.', 'Northern Seas', 'viking age'),
('The Wrath of the Kraken', 'Confrontation with the Kraken', 'Sailors and heroes alike attempt to confront the Kraken, only to realize its immense power.', 'Northern Seas', 'viking age'),
('The Deceptive Kelpie', 'The Kelpie''s Lure', 'A Kelpie transforms into a handsome steed, tempting travelers to ride on its back before dragging them into the loch.', 'Scottish Lochs', 'pre-medieval'),
('The Deceptive Kelpie', 'Escape from the Kelpie', 'A clever child escapes the Kelpie''s grasp by outwitting it, reminding us that wit can triumph over brawn.', 'Scottish Lochs', 'pre-medieval'),
('The Guardian Lamassu', 'Creation of the Lamassu', 'The Lamassu are created by the gods to guard the cities of Mesopotamia, standing as symbols of protection and power.', 'Gates of Assyria', 'ancient'),
('The Guardian Lamassu', 'The Lamassu''s Wisdom', 'A Lamassu imparts ancient wisdom to a lost king, guiding him to rule with justice and mercy.', 'Gates of Assyria', 'ancient'),
('The Thunderbird and the Whale', 'Victory of the Thunderbird', 'With a mighty clash that shakes the earth, the Thunderbird defeats the whale, thus stopping the floods and restoring balance to the land.', 'Great Plains', 'anytime'),
('The Legend of King Arthur', 'The Sword in the Stone', 'Arthur pulls the magical sword, Excalibur, from the stone, proving his right to the throne.', 'Camelot', 'medieval'),
('The Legend of King Arthur', 'The Establishment of the Round Table', 'Arthur establishes the Round Table, gathering the most honorable knights in the land to seek justice and peace.', 'Camelot', 'medieval'),
('The Legend of King Arthur', 'The Quest for the Holy Grail', 'Arthur and his knights embark on the quest for the Holy Grail, the symbol of divine grace and the ultimate quest of Arthurian legend.', 'Camelot', 'medieval'),
('The Legend of King Arthur', 'The Battle of Camlann', 'The final battle where Arthur is mortally wounded, leading to his departure to Avalon.', 'Avalon', 'medieval'),
('The Fate of Patroclus', 'The Decision of Patroclus', 'Wearing Achilles" armor, Patroclus enters the battlefield in his stead, driven by a desire to turn the tide for the Greeks.', 'Troy', 'bronze age'),
('The Fate of Patroclus', 'The Death of Patroclus', 'Patroclus is slain by Hector, with the gods" interference sealing his fate, sparking Achilles" return to combat.', 'Troy', 'bronze age'),
('The Cattle Raid of Cooley (Táin Bó Cúailnge)', 'Cú Chulainn"s Stand at the Ford', 'Cú Chulainn fights off the invading forces at a strategic river crossing, showcasing his prowess and the supernatural abilities granted by his ríastrad (battle frenzy).', 'Ulster', 'Iron Age'),
('The Epic of Gilgamesh', 'Gilgamesh and Enkidu Slay Humbaba', 'Gilgamesh and Enkidu journey to the Cedar Forest to confront and slay Humbaba, defying the gods to secure their fame.', 'Cedar Forest', 'early dynastic period'),
('The Epic of Gilgamesh', 'The Death of Enkidu', 'Enkidu dies as punishment from the gods for slaying Humbaba and the Bull of Heaven, prompting Gilgamesh"s quest for immortality.', 'Uruk', 'early dynastic period'),
('The Epic of Gilgamesh', 'The Quest for Immortality', 'Gilgamesh embarks on a journey to find Utnapishtim and learn the secret of eternal life.', 'Mashu', 'early dynastic period'),
('The Epic of Gilgamesh', 'The Return to Uruk', 'Having learned the lesson of human mortality, Gilgamesh returns to Uruk, where he rules wisely until his death.', 'Uruk', 'early dynastic period'),
('Enki and the World Order', 'Creation of the Rivers', 'Enki orders the world, creating the Tigris and Euphrates to bring fertility to Mesopotamia.', 'Mesopotamia', 'ancient times'),
('Enki Saves Humanity', 'The Dream Warning', 'Enki warns Atrahasis of the gods’ plan to send a great flood, advising him to build an ark.', 'Mesopotamia', 'ancient times'),
('Enki Saves Humanity', 'The Flood Subsides', 'The flood waters recede, and Atrahasis offers sacrifices to the gods, who regret their actions.', 'Mesopotamia', 'ancient times'),
('Cernunnos and the Cycle of Life', 'The Awakening of the Forest', 'Cernunnos walks the earth at the onset of spring, awakening the forest from its winter slumber.', 'Celtic Lands', 'Iron Age'),
('Cernunnos and the Cycle of Life', 'Guidance to the Lost Child', 'Cernunnos guides a lost child back to their village, teaching them the sacredness of all life forms along the way.', 'Celtic Lands', 'Iron Age'),
('Cernunnos and the Cycle of Life', 'The Sacred Hunt', 'Cernunnos leads a ritual hunt that honors the animals and ensures the forest remains plentiful and balanced.', 'Celtic Lands', 'Iron Age'),
('The Birth of Apollo', 'Escape to Delos', 'Leto, pregnant with Zeus''s children, finds refuge on Delos to give birth to Apollo and Artemis, despite Hera''s jealousy.', 'Delos', 'classical antiquity'),
('Apollo and Daphne', 'The Chase', 'Apollo, struck by Eros''s arrow, falls hopelessly in love with Daphne, who flees from him, desiring to remain untouched and free.', 'anywhere', 'anytime'),
('Apollo and Daphne', 'Transformation of Daphne', 'Daphne, desperate to escape Apollo''s advances, prays to her father, the river god Peneus, who transforms her into a laurel tree.', 'anywhere', 'anytime'),
('Apollo and the Python', 'Slaying the Python', 'Apollo slays Python, a monstrous earth-dragon that guarded the oracle at Delphi, establishing his own shrine there.', 'Delphi', 'classical antiquity'),
('Shiva and the Cosmic Dance', 'Nataraja"s Dance', 'Shiva performs the Ananda Tandava, the dance of bliss, symbolizing the cosmic cycles of creation and destruction.', 'Mount Kailash', 'timeless'),
('The Marriage of Shiva and Parvati', 'Parvati"s Penance', 'Parvati undergoes severe penance to win Shiva"s affection, demonstrating her unwavering devotion.', 'Himalayas', 'timeless'),
('The Marriage of Shiva and Parvati', 'The Divine Marriage', 'Shiva marries Parvati in a grand ceremony attended by gods, goddesses, and sages, symbolizing the union of the divine masculine and feminine.', 'Mount Kailash', 'timeless'),
('Shiva and the Ganges', 'Descent of the Ganges', 'Shiva releases the river Ganges from his hair, allowing her to descend to earth and bring life-giving water to humanity.', 'Mount Kailash', 'timeless'),
('The Birth of Zeus', 'Zeus is Hidden in Crete', 'To save Zeus from being swallowed by Cronus, Rhea hides him in a cave on the island of Crete, where he is raised in secret.', 'Crete', 'classical antiquity'),
('Zeus and the Titans', 'The Battle of the Titans', 'Zeus leads the Olympian gods in a ten-year-long battle against the Titans, culminating in their defeat and imprisonment in Tartarus.', 'Mount Olympus', 'classical antiquity'),
('Zeus and Prometheus', 'The Punishment of Prometheus', 'For defying Zeus and giving fire to humanity, Prometheus is chained to a rock where an eagle feasts on his liver daily, only to have it regenerate to be eaten again.', 'Caucasus Mountains', 'classical antiquity'),
('Artemis and Actaeon', 'Actaeon"s Transgression', 'Actaeon stumbles upon Artemis bathing, and for this violation of her privacy, she transforms him into a stag to be torn apart by his own hounds.', 'anywhere', 'classical antiquity'),
('The Birth of Artemis', 'Artemis is Born', 'Artemis is born on the island of Ortygia, immediately assisting with the birth of her twin brother, Apollo, showcasing her independence and maternal protectiveness.', 'Ortygia', 'classical antiquity'),
('Artemis and Orion', 'The Death of Orion', 'Orion, a close companion of Artemis, is killed under mysterious circumstances often attributed to Artemis herself or to Apollo"s trickery.', 'anywhere', 'classical antiquity'),
('The Birth of Dionysus', 'Zeus"s Lightning', 'Dionysus is born from Zeus"s thigh, symbolizing his immortality and dual heritage.', 'Mount Olympus', 'classical antiquity'),
('Dionysus and the Pirates', 'Transformation at Sea', 'Pirates who capture Dionysus are turned into dolphins as punishment for their ignorance and hubris.', 'anywhere', 'classical antiquity'),
('The Return of Dionysus', 'Dionysus"s Triumph', 'Dionysus returns to Greece, spreading his cult and teachings across the land, signifying the acceptance of his divinity.', 'Greece', 'classical antiquity'),
('The Death and Resurrection of Osiris', 'Osiris is Betrayed', 'Osiris is tricked and killed by his brother Set, who then scatters his body pieces across Egypt.', 'anywhere', 'ancient'),
('The Death and Resurrection of Osiris', 'The Search of Isis', 'Isis searches for and reassembles Osiris''s body, using her magic to resurrect him.', 'anywhere', 'ancient'),
('The Death and Resurrection of Osiris', 'Osiris, Lord of the Afterlife', 'Resurrected, Osiris becomes the lord of the afterlife, judging the souls of the dead.', 'Duat', 'timeless'),
('Thor"s Battle with Jörmungandr', 'The Ultimate Encounter', 'Thor engages in a final battle with the world serpent, Jörmungandr, during Ragnarök, leading to their mutual destruction.', 'Midgard', 'End of the world'),
('The Theft of Mjölnir', 'Mjölnir is Stolen', 'Thor wakes to find his precious hammer Mjölnir stolen by giants, sparking a quest to retrieve it.', 'Jotunheim', 'Viking Age'),
('The Theft of Mjölnir', 'The Wedding Ruse', 'Thor disguises himself as the goddess Freyja to trick the giants and recover Mjölnir.', 'Jotunheim', 'Viking Age'),
('Thor and the Skrymir', 'A Night with the Giant', 'Thor and his companions spend a night in what they later learn is the giant Skrymir’s glove, teaching them a lesson on humility.', 'Jotunheim', 'Viking Age'),
('Sun Wukong"s Rebellion against Heaven', 'Battle at the Heavenly Gates', 'Sun Wukong fights the armies of heaven to demand recognition and equality for himself and his monkey subjects.', 'Heaven', 'ancient times');

INSERT INTO Pantheon VALUES
('Norse', 'Asgardian Gods'),
('Greek', 'Gods of Olympus'), 
('Egyptian', 'Egyptian Gods and Goddesses'),
('Chinese', 'Chinese Mythology'),
('Hindu', 'Hindu Mythology'),
('Welsh', 'Arthurian Legends'),
('Celtic', 'Deities and Spirits of Celtic Mythology'),
('Mesopotamian', 'Gods and Mythical Creatures of Mesopotamia'),
('Native American', 'Native American Mythology');

INSERT INTO Artifact VALUES 
('Mjollnir', 'Forged for Thor by a dwarf named Sindri'),
('Arachne"s Tapestry', 'The tapestry forged in Arachne"s weaving competition with Athena that won. This tapestry was torn to pieces because Athena was envious of Arachne"s skills, but it still stands that Arachne"s Tapestry was magnificent enough to beat the Gods'),
('Shield of Achilles', 'Achilles lends Patroclus his armor in order to lead the Achaean army into battle. Ultimately, Patroclus is killed in battle by Hector, and Achilles" armor is stripped from his body and taken by Hector as spoils. The loss of his companion prompts Achilles to return to battle, and the god Hephaestus forges Achilles a shield with spectacular decorative imagery.'),
('Wings of Icarus', 'Daedalus, Icarus"s father,  studied the movements of birds and built a device mimicking them. He then laid down multiple feathers in a row from shortest to longest and tied them together using beeswax and thread. However, Daedalus warned Icarus not to fly too high, because the heat of the sun would melt the beeswax (holding his feathers together) and the wings would break, nor too low, because the sea foam would soak the feathers and make them heavy and he would fall'),
('Osiris"s Coffin', 'A beautifully carved coffin made by Set. Osiris was tricked by Set, his brother, to enter the chest, and was enclosed inside it by 72 accomplices of Set. Set flung the coffer in the Nile so that it would drift far away.'),
('Sun Wukong"s Golden Headband', 'The circlet is a heaven-sent magic treasure designed to reign in the immortals" unruly, rebellious nature'),
('Ruyi Jingu Bagn', 'The staff of Sun Wukong, which could alter its size from a tiny needle to a mighty pillar'),
('Excalibur', 'Excalibur is the mythical sword of King Arthur that may possess magical powers or be associated with the rightful sovereignty of Britain.'),
('Cauldron of Dagda', 'A magical cauldron owned by the Celtic god Dagda. It is said to be bottomless and always full of food and drink. There are rumors that it also possess healing powers'),
('Tablets of Destiny', 'A set of clay tablets inscribed with writing believed to control the fate of the universe'),
('Dreamcatcher', 'Protects the sleeper from bad dreams and nightmares by filtering them out during sleep'),
('Jormungandr"s Scales', 'Scales shed by Jormungandr, said to possess protective properties against harm.'),
('Thor''s Fishing Hook', 'The hook used by Thor in his attempt to catch Jormungandr.', 'Norse'),
('Palm-Leaf Fan', 'A magical fan belonging to Princess Iron Fan, capable of quenching the flames of the Flaming Mountains. Stolen and used by Sun Wukong in his quest to subdue the Demon Bull King.', 'Chinese'),
('Demon Bull King''s Cudgel', 'A weapon wielded by the Demon Bull King, heavy enough to shake the mountains, symbolizing his brute strength.', 'Chinese'),
('Ariadne"s Thread', 'A long thread given to Theseus by Ariadne, which he used to navigate the complex Labyrinth.', 'Greek'),
('The Anchor of the Kraken', 'A mythical anchor believed to be the only artifact capable of holding the Kraken at bay, lost in the Northern Seas.', 'Norse'),
('Lamassu Sculpture', 'A massive stone sculpture depicting the Lamassu, believed to protect cities from invaders and evil spirits.', 'Mesopotamian'),
('Armor of Achilles', 'The armor worn by Patroclus in his attempt to inspire the Greeks and intimidate the Trojans, leading to his tragic death.', 'Greek'),
('Gáe Bolga', 'Cú Chulainn"s legendary spear, given to him by his teacher Scáthach, known for its deadly ability to inflict mortal wounds from which no enemy could recover.', 'Celtic'),
('Goat-drawn Chariot', 'The chariot pulled by the goats Tanngrisnir and Tanngnjóstr that allows Thor to travel across the skies.'),
('Belt of Strength', 'A magical belt worn by Thor that doubles his strength when buckled on.'),
('Golden Chain Mail', 'Magical armor worn by Sun Wukong, offering him protection.'),
('Phoenix Feather Cap', 'A cap worn by Sun Wukong that helps him in his transformations.'),
('Thyrsus', 'A staff bound with ivy and topped with a pinecone, carried by Dionysus and his followers, symbolizing fertility and pleasure.'),
('Spear of Achilles', 'A spear wielded by Achilles, known for its unmatched sharpness and strength, a gift from the god Hephaestus to Achilles');


INSERT INTO BelongsTo VALUES 
('Mjollnir', 'Thor'),
('Arachne"s Tapestry', 'Arachne'),
('Shield of Achilles', 'Achilles'),
('Spear of Achilles', 'Achilles')
('Wings of Icarus', 'Icarus'),
('Osiris"s Coffin', 'Osiris'),
('Sun Wukong"s Golden Headband', 'Sun Wukong'),
('Ruyi Jingu Bagn', 'Sun Wukong'),
('Excalibur', 'Arthur'),
('Cauldron of Dagda', 'Dagda'),
('Tablets of Destiny', 'Enlil'),
('Dreamcatcher', 'Trickster Coyote'),
('Demon Bull King"s Cudgel', 'Demon Bull King'),
('Armor of Achilles', 'Patroclus'),
('Gáe Bolga', 'Cú Chulainn'),
('Goat-drawn Chariot', 'Thor'),
('Belt of Strength', 'Thor'),
('Golden Chain Mail', 'Sun Wukong'),
('Phoenix Feather Cap', 'Sun Wukong'),
('Thyrsus', 'Dionysus'),
('Jormungandr"s Scales', 'Jormungandr'),
('Thor"s Fishing Hook', 'Thor');

INSERT INTO AppearsIn VALUES 
('Arachne"s Tapestry', 'Tale of Arachne'),
('Shield of Achilles', 'Story of Achilles'),
('Wings of Icarus', 'The Myth of Daedalus and Icarus'),
('Osiris"s Coffin', 'The Death and Resurrection of Osiris'),
('Sun Wukong"s Golden Headband', 'Sun Wukong"s Quest for Immortality'),
('Ruyi Jingu Bagn', 'Sun Wukong"s Quest for Immortality'),
('Excalibur', 'The Sword in the Stone'),
('Cauldron of Dagda', 'Tale of Dagda and the Cauldron' ),
('Tablets of Destiny', 'Tale of Enlil and the Tablets of Destiny'),
('Dreamcatcher', 'Trickster Coyote and the Dreamcatcher'),
('Demon Bull King"s Cudgel', 'The Rebellion of the Demon Bull King'),
('Mjollnir', 'Thor"s Battle with Jormungandr'),
('Mjollnir', 'The Theft of Mjölnir'),
('Goat-drawn Chariot', 'Thor and the Skrymir'),
('Belt of Strength', 'Thor"s Battle with Jormungandr'),
('Thyrsus', 'The Birth of Dionysus'),
('Thyrsus', 'Dionysus and the Pirates'),
('Thyrsus', 'The Return of Dionysus'),
('Golden Chain Mail', 'Sun Wukong"s Quest for Immortality'),
('Phoenix Feather Cap', 'Sun Wukong"s Quest for Immortality'),
('Palm-Leaf Fan', 'The Rebellion of the Demon Bull King'),
('Jormungandr"s Scales', 'Thor"s Battle with Jörmungandr'),
('Jormungandr"s Scales', 'The Twilight of the Gods'),
('Ariadne"s Thread', 'The Myth of the Minotaur'),
('The Anchor of the Kraken', 'The Wrath of the Kraken');


INSERT INTO Mortal VALUES
('Achilles', 'Achilles was the strongest warrior and hero in the Greek army during the Trojan War. He was the son of Peleus, king of the Myrmidons, and Thetis, a sea nymph',  NULL, ' Greek Warrior', 'Neoptolemus', 'Greek'),
('Icarus', 'son of the inventor Daedalus who perished by flying too near the Sun with waxen wings. See Daedalus',  NULL, NULL, NULL, 'Greek'),
('Daedalus', 'Daedalus is Icarus"s father, and a brilliant architect, sculptor, and inventor. He was credited with building for King Minos of Crete the Labyrinth in which the Minotaur was kept', NULL, 'Inventor', 'Icarus', 'Greek'),
('Arthur', 'The King of Britain, Uther Pendragon, dies, leaving no heir to the throne. As his most powerful knights fight to decide who will succeed, a mysterious sword appears in a stone. Whoever pulls the sword from the stone will be the next king. Arthur pulls the sword',  'King', 'King of Medieval England', 'Mordred', 'Welsh'),
('Patroclus', 'Patroclus was a hero of the Trojan War and is widely known for being the childhood friend and close wartime companion of the hero Achilles. Legends either say that he has a blood relation to Achilles, or was Achilles" lover.', NULL, 'Greek Warrior', NULL, 'Greek'),
('Cú Chulainn', 'Legendary hero of Irish mythology known for his unmatched prowess in battle.', NULL, 'Warrior', NULL, 'Celtic'),
('Gilgamesh', 'King of Uruk and central character of the Epic of Gilgamesh, known for his strength and adventures.', NULL, 'King', NULL, 'Mesopotamian'),
('Hiawatha', 'Legendary figure in Native American folklore, known for his role in uniting the Iroquois tribes.', NULL, 'Leader', NULL, 'Native American');

INSERT INTO Deity VALUES
('Thor', 'A prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.',  'Thunder', 'Superstrength', 'Norse'),
('Osiris', 'God of the deceased, was the son and oldest child of Geb, the Earth deity and Nut, the sky goddess. His wife and sister was Isis, goddess of motherhood, magic, fertility, death, healing, and rebirth.',  'Underground and Afterlife', ' Telepathy', 'Egyptian'),
('Sun Wukong', 'A monkey who was born out of stone and possesses magical powers and strength. The legend of the Monkey King explains how he helped protect Xuan Zang, a monk, on their journey to India in order to bring back Buddhist holy books to China.',  'Trickery', 'Transformation', 'Chinese'),
('Dionysus', 'Dionysus is called twice-born because he was born from Semele and then, while she was dying, Zeus saved him by sewing him up in his thigh and keeping him there until he reached maturity. He then "gave birth" to Dionysus, thus making him twice-born.',  'Wine, Festivity, and Fertility', 'Vine manipulation, causing insanity, transformation', 'Greek'),
('Artemis', 'Artemis was the twin sister to Apollo and was the daughter of Zeus and Leto. Both Apollo and Artemis took revenge against anyone who attempted to harm their mother. Apollo and Artemis slew the giant Tityus and killed the children of the mortal woman Niobe',   'Archery, Hunting, Moon, and Maidenhood', 'Bowmanship, transformation, and healing', 'Greek'),
('Zeus', 'Zeus was the king of the Greek gods. He became the king of the gods after he rescued his siblings from their father, the Titan Cronus. Cronus swallowed all but one of his children. Zeus"s mother Rhea rescued her son from the wrath of his father Cronus',  'The sky and thunder', 'Superstrength', 'Greek'),
('Apollo', 'He communicated the will of his father Zeus, made humans aware of their guilt and purified them of it, presided over religious and civil law, and foretold the future. His bow symbolized distance, death, terror, and awe; his lyre symbolized music, poetry, and dance.', 'Archery, Arts, Prophecy, and Sun', 'Bowmanship, transformation, healing, singing, dancing', 'Greek'),
('Shiva', 'Shiva holds one of the most prominent roles in Hinduism as the god of destruction. He is one of the three most important gods, alongside Brahma (the creator) and Vishnu (the preserver). The sect of Shaivism holds that Shiva is the Supreme Being which all other gods are aspects of', 'Destruction', 'Strength, destruction, creation, transformation', 'Hindu'),
('Enlil', 'Mesopotamian god of wind, air, earth, and storms, considered one of the chief gods in the Mesopotamian pantheon.', 'Wind and Storms', 'Control over wind and storms', 'Mesopotamian'),
('Dagda', 'Important god in Irish mythology, associated with agriculture, fertility, and protection, known for his strength and magical club.', 'Fertility and Protection', 'Superstrength', 'Celtic'),
('Cernunnos', 'Celtic god associated with fertility, animals, wealth, and the underworld.', 'Fertility and Nature', 'Fertility, transformation', 'Celtic'),
('Enki', 'Mesopotamian god of water, knowledge, mischief, crafts, and creation.', 'Water and Wisdom', 'Water manipulation, wisdom', 'Mesopotamian'),
('Trickster Coyote', 'Trickster figure in Native American mythology, known for his cunning and playful nature.', 'Trickery and Chaos', 'Shape-shifting, trickery', 'Native American');

INSERT INTO Creature VALUES
('Jormungandr', 'Midgard Serpent (also World Serpent) in Norse mythology who encircles the realm of Midgard. He is the son of the god Loki and the giantess Angrboða and brother of the great wolf Fenrir and Hel, Queen of the Dead. At Ragnarök, the Twilight of the Gods, he slays and is slain by the god Thor.',  'Virtual invulnerability', 'World Serpent', 'Norse'),
('Medusa', 'A woman with living snakes in place of hair; her appearance was so hideous that anyone who looked upon her was turned to stone', 'Stonification', 'Gorgon', 'Greek')
('Demon Bull King', 'He is the scourge of the Netherworld and the archenemy of the Monkey King', 'Brute Strength', 'Giant white bull', 'Chinese'),
('Minotaur', 'Half man half bull, born to the wife of king Minos and a bull, imprisoned in the Labyrinth due to King Minos"s shame', 'Strength', 'Hybrid Man and Bull', 'Greek');
('Kraken', 'A legendary sea monster of enormous size, etymologically akin to a squid or octopus, said to appear in the sea between Norway and Iceland', NULL, 'Norse'),
('Kelpie', 'Water spirit in Celtic folklore, often appearing as a horse and known for drowning travellers.', 'Water manipulation', 'Water spirit', 'Celtic'),
('Lamassu', 'A protective figure from Mesopotamian mythology, Lamassus are depicted with a human head, the body of a bull or lion, wings, and sometimes eagle’s talons', 'Protection', 'Mythical creature', 'Mesopotamian'),
('Thunderbird', 'Powerful creature in Native American mythology, often associated with storms and thunder.', 'Control over thunder and storms', 'Mythical bird', 'Native American');

INSERT INTO Symbol VALUES
('Weaving Loom', 'Her background as a mortal in the past'),
('Shield', 'Shield used in his battle against Hector represents Greece"s fight against Troy'),
('Hammer of Thor', 'derived from Thor"s hammer which has the power of lightning'),
('Atef crown', 'Osiris had worn it as the ruler of the underworld'),
('Man with wings', 'Shows man"s overreaching ambition'),
('Golden Headband', 'A painfully tightening fillet given to the hero in case of any unsavoury behaviour'),
('Golden Dragon', 'A family coat borne by King Arthur"s father, Uther Pendragon'),
('Grapevine', 'Represents wine, festivity, and the agricultural aspect of Dionysus’s domain.'),
('Leopard', 'An animal sacred to Dionysus, often depicted with him, symbolizing the god’s wild and untamed nature.'),
('Ivy', 'Evergreen ivy is associated with Dionysus, symbolizing eternal life and revelry.'),
('Theater Masks', 'Symbolize the connection of Dionysus to the arts, especially the theater, reflecting the dual nature of comedy and tragedy in human experience.'),
('Crook and Flail', 'Symbols of the pharaonic authority, representing Osiris as the shepherd of the dead.'),
('Djed Pillar', 'Symbolizing stability, it is closely associated with Osiris and often represented in his iconography.'),
('Green Skin', 'Depicting fertility and rebirth, Osiris is often portrayed with green skin, symbolizing life through death.');

INSERT INTO Represents VALUES
('Hammer of Thor', 'Thor'),
('Weaving Loom', 'Arachne'),
('Arachne', 'Null', 'Spider', 'Greek'),
('Shield', 'Achilles'),
('Man with Wings', 'Icarus'),
('Atef crown', 'Osiris'),
('Golden Headband', 'Sun Wukong'),
('Golden Dragon', 'Arthur'),
('Ouroboros', 'Jormungandr'),
('Gorgoneion', 'Medusa'),
('Thyrsus', 'Dionysus'),
('Grapevine', 'Dionysus'),
('Leopard', 'Dionysus'),
('Ivy', 'Dionysus'),
('Theater Masks', 'Dionysus'),
('Crook and Flail', 'Osiris'),
('Djed Pillar', 'Osiris'),
('Green Skin', 'Osiris');

INSERT INTO PartOf VALUES
('Achilles', 'Story of Achilles'),
('Osiris', 'The Death and Resurrection of Osiris'),
('Sun Wukong', 'Sun Wukong"s Quest for Immortality')
('Icarus', 'The Myth of Daedalus and Icarus')
('Apollo', 'Story of Achilles'),
('Medusa', 'The Gorgon Medusa'),
('Jormungandr', 'The Twilight of the Gods'),
('Jormungandr', 'The Binding of Jormungandr'),
('Demon Bull King', 'The Rebellion of the Demon Bull King'),
('Minotaur', 'The Myth of the Minotaur'),
('Trickster Coyote', 'Tale of Trickster Coyote'),
('Enki', 'Enki and the World Order'),
('Enki', 'Enki Saves Humanity'),
('Cernunnos', 'Cernunnos and the Cycle of Life'),
('Apollo', 'The Birth of Apollo'),
('Apollo', 'Apollo and Daphne'),
('Apollo', 'Apollo and the Python'),
('Shiva', 'Shiva and the Cosmic Dance'),
('Shiva', 'The Marriage of Shiva and Parvati'),
('Shiva', 'Shiva and the Ganges'),
('Zeus', 'The Birth of Zeus'),
('Zeus', 'Zeus and the Titans'),
('Zeus', 'Zeus and Prometheus'),
('Artemis', 'Artemis and Actaeon'),
('Artemis', 'The Birth of Artemis'),
('Artemis', 'Artemis and Orion'),
('Dionysus', 'The Birth of Dionysus'),
('Dionysus', 'Dionysus and the Pirates'),
('Dionysus', 'The Return of Dionysus'),
('Thor', 'Thor"s Battle with Jörmungandr'),
('Jormungandr', 'Thor"s Battle with Jörmungandr'),
('Thor', 'The Theft of Mjölnir'),
('Thor', 'Thor and the Skrymir'),
('Sun Wukong', 'Sun Wukong’s Rebellion against Heaven');

