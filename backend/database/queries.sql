-- GROUP BY: calculate the number of story events for each tale, then group the tales by its culture, to get a total count of story events (per tale) per culture (in our database)

SELECT Tale.Culture, Tale.TaleName, COUNT(StoryEvents.EventName) AS EventCount
FROM Tale
JOIN StoryEvents ON Tale.TaleName = StoryEvents.TaleName
GROUP BY Tale.Culture, Tale.TaleName;
SELECT: retrieving all characters from a particular culture
SELECT * FROM Character WHERE Culture = 'Greek';

-- GROUP BY: calculate the number of story events for each tale, then group the tales by its culture, to get a total count of story events (per tale) per culture (in our database)

SELECT Tale.Culture, Tale.TaleName, COUNT(StoryEvents.EventName) AS EventCount
FROM Tale
JOIN StoryEvents ON Tale.TaleName = StoryEvents.TaleName
GROUP BY Tale.Culture, Tale.TaleName;

-- PROJECTION: selecting specific columns (ex. names and description of characters)
SELECT CharacterName, CharacterDescription FROM Character;

-- JOIN: connecting tales with their corresponding morals and cultures
SELECT Tale.TaleName, Tale.MoralLesson, Pantheon.Culture
FROM Tale
JOIN Pantheon ON Tale.Culture = Pantheon.Culture;

-- AGGREGATION (group by): counting the number of deity per culture
SELECT Culture, COUNT(*) AS NumberOfDeities
FROM Deity
GROUP BY Culture;

-- HAVING: find all pantheons HAVING more than 2 deities with supernatural ability ‘superstrength’

SELECT Pantheon, COUNT(*) AS NumberOfDeity
FROM Deity
WHERE SupernaturalAbility IN ('superstrength')
GROUP BY Pantheon
HAVING COUNT(*) > 2;

-- HAVING: find all pantheons HAVING more than 2 deities with supernatural ability ‘superstrength’

SELECT Pantheon, COUNT(*) AS NumberOfDeity
FROM Deity
WHERE SupernaturalAbility IN ('superstrength')
GROUP BY Pantheon
HAVING COUNT(*) > 2;

-- HAVING: finding cultures with more than 1 deity
SELECT Culture
FROM Deity
GROUP BY Culture
HAVING COUNT(*) > 1;

-- Nested GROUP BY: count the number of story events for each tale, group by culture
SELECT Tale.Culture, Tale.TaleName, COUNT(StoryEvents.EventName) AS NumberOfEvents
FROM Tale
JOIN StoryEvents ON Tale.TaleName = StoryEvents.TaleName
GROUP BY Tale.Culture, Tale.TaleName;
