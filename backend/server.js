require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

var cors = require('cors');
const { spec } = require('node:test/reporters');

app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

// Insert data into MySQL
app.post('/api/insert/Artifact', (req, res) => {
    console.log('Insert Artifact called');
    const { artifactName, origin } = req.body;
    const query = `INSERT INTO Artifact (artifactName, origin) VALUES (?, ?)`;
    db.query(query, [artifactName, origin], (err, result) => {
      if (err) {
        console.error('Error inserting Artifact data:', err);
        res.status(500).send('Error inserting Artifact data');
        return;
      }
      console.log('Artifact data inserted successfully');
      res.send('Artifact data inserted successfully');
    });
});

app.post('/api/insert/AppearsIn', (req, res) => {
    console.log('Insert AppearsIn called');
    const { artifactName, taleName } = req.body;
    const query = `INSERT INTO AppearsIn (artifactName, taleName) VALUES (?, ?)`;
    db.query(query, [artifactName, taleName], (err, result) => {
      if (err) {
        console.error('Error inserting AppearsIn data:', err);
        res.status(500).send('Error inserting AppearsIn data');
        return;
      }
      console.log('AppearsIn data inserted successfully');
      res.send('AppearsIn data inserted successfully');
    });
  });

app.post('/api/insert/BelongsTo', (req, res) => {
  console.log('Insert BelongsTo called');
  const { artifactName, characterName } = req.body;
  const query = `INSERT INTO BelongsTo (artifactName, characterName) VALUES (?, ?)`;
  db.query(query, [artifactName, characterName], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into BelongsTo table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into BelongsTo table' });
  });
});

app.post('/api/insert/Creature', (req, res) => {
    console.log('Insert Creature called');
    const { characterName, characterDescription, supernaturalAbility, species } = req.body;
    const query1 = 'INSERT INTO Characters (characterName, characterDescription) VALUES (?, ?)';
    const query2 = `INSERT INTO Creature (characterName, characterDescription, supernaturalAbility, species) VALUES (?, ?, ?, ?)`;
    db.query(query1, [characterName, characterDescription], (err, results1) => {
      if (err) {
        console.error('Error inserting data into Characters table:', err);
        res.status(500).json({ error: 'Error inserting data into Characters table' });
        return;
      }
  
      // Execute the second query to insert data into Mortal table
      db.query(query2, [characterName, characterDescription, title, profession], (err, results2) => {
        if (err) {
          console.error('Error inserting data into Creature table:', err);
          res.status(500).json({ error: 'Error inserting data into Creature table' });
          return;
        }
  
        // If both insertions were successful, send a success response
        res.status(200).json({ message: 'Data inserted successfully into database' });
      });
    });
  });

app.post('/api/insert/Deity', (req, res) => {
  console.log('Insert Deity called');
  const { deityName, characterDescription, domain, supernaturalAbility, culture } = req.body;
  const query1 = 'INSERT INTO Characters (characterName, characterDescription) VALUES (?, ?)';
  const query2 = `INSERT INTO Deity (deityName, characterDescription, domain, supernaturalAbility) VALUES (?, ?, ?, ?)`;
  db.query(query1, [characterName, characterDescription], (err, results1) => {
    if (err) {
      console.error('Error inserting data into Characters table:', err);
      res.status(500).json({ error: 'Error inserting data into Characters table' });
      return;
    }

    // Execute the second query to insert data into Mortal table
    db.query(query2, [characterName, characterDescription, title, profession], (err, results2) => {
      if (err) {
        console.error('Error inserting data into Deity table:', err);
        res.status(500).json({ error: 'Error inserting data into Deity table' });
        return;
      }

      // If both insertions were successful, send a success response
      res.status(200).json({ message: 'Data inserted successfully into database' });
    });
  });
});

app.post('/api/insert/Location', (req, res) => {
    console.log('Insert Location called');
    const { locationName, areaDescription, timePeriod } = req.body;
    const query = `INSERT INTO Location (locationName, areaDescription, timePeriod) VALUES (?, ?, ?)`;
    db.query(query, [locationName, areaDescription, timePeriod], (err, result) => {
        if (err) {
            console.error('Error inserting Location data:', err);
            res.status(500).send('Error inserting Location data');
            return;
        }
      console.log('Location data inserted successfully');
      res.send('Location data inserted successfully');
    });
});

app.post('/api/insert/Mortal', (req, res) => {
  console.log('Insert Mortal called');
  const { characterName, characterDescription, title, profession } = req.body;
  const query1 = 'INSERT INTO Characters (characterName, characterDescription) VALUES (?, ?)';
  const query2 = 'INSERT INTO Mortal (characterName, characterDescription, title, profession) VALUES (?, ?, ?, ?)';
  
  // Execute the first query to insert data into Characters table
  db.query(query1, [characterName, characterDescription], (err, results1) => {
    if (err) {
      console.error('Error inserting data into Characters table:', err);
      res.status(500).json({ error: 'Error inserting data into Characters table' });
      return;
    }

    // Execute the second query to insert data into Mortal table
    db.query(query2, [characterName, characterDescription, title, profession], (err, results2) => {
      if (err) {
        console.error('Error inserting data into Mortal table:', err);
        res.status(500).json({ error: 'Error inserting data into Mortal table' });
        return;
      }

      // If both insertions were successful, send a success response
      res.status(200).json({ message: 'Data inserted successfully into database' });
    });
  });
});

app.post('/api/insert/Pantheon', (req, res) => {
    console.log('Insert Pantheon called');
    const { culture, pantheonName } = req.body;
    const query = `INSERT INTO Pantheon (culture, pantheonName) VALUES (?, ?)`;
    db.query(query, [culture, pantheonName], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data into Pantheon table' });
        return;
      }
      res.status(200).json({ message: 'Data inserted successfully into Pantheon table' });
    });
});

app.post('/api/insert/PartOf', (req, res) => {
  console.log('Insert PartOf called');
  const { characterName, taleName } = req.body;
  const query = `INSERT INTO PartOf (characterName, taleName) VALUES (?, ?)`;
  db.query(query, [characterName, taleName], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into PartOf table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into PartOf table' });
  });
});

app.post('/api/insert/Represents', (req, res) => {
  console.log('Insert Represents called');
  const { symbolName, characterName } = req.body;
  const query = `INSERT INTO Represents (symbolName, characterName) VALUES (?, ?)`;
  db.query(query, [symbolName, characterName], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into Represents table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into Represents table' });
  });
});

app.post('/api/insert/Ritual', (req, res) => {
    console.log('Insert Ritual called');
    const { ritualName, recurring, characterName, locationName, timePeriod } = req.body;
    const query = `INSERT INTO Ritual (ritualName, recurring, characterName, locationName, timePeriod) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [ritualName, recurring, characterName, locationName, timePeriod], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data into Ritual table' });
        return;
      }
      res.status(200).json({ message: 'Data inserted successfully into Ritual table' });
    });
  });

app.post('/api/insert/StoryEvent', (req, res) => {
  console.log('Insert StoryEvent called');
  const { taleName, eventName, eventDescription, locationName, timePeriod } = req.body;
  const query = `INSERT INTO StoryEvent (taleName, eventName, eventDescription, locationName, timePeriod) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [taleName, eventName, eventDescription, locationName, timePeriod], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into StoryEvent table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into StoryEvent table' });
  });
});

app.post('/api/insert/Symbol', (req, res) => {
  console.log('Insert Symbol called');
  const { symbolName, origin } = req.body;
  const query = `INSERT INTO Symbol (symbolName, origin) VALUES (?, ?)`;
  db.query(query, [symbolName, origin], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into Symbol table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into Symbol table' });
  });
});

app.post('/api/insert/Tale', (req, res) => {
  console.log('Insert Tale called');
  const { taleName, moralLesson, culture } = req.body;
  const query = `INSERT INTO Tale (taleName, moralLesson, culture) VALUES (?, ?, ?)`;
  db.query(query, [taleName, moralLesson, culture], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into Tale table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into Tale table' });
  });
});

// Fetch data in MySQL
app.get('/api/fetch/Pantheon', (req, res) => {
  console.log('Fetch Pantheon called');
  const query = "SELECT * FROM Pantheon;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Pantheon data:', err);
      res.status(500).send('Error fetching Pantheon data');
    } else {
      console.log('Pantheon data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/AppearsIn', (req, res) => {
  console.log('Fetch AppearsIn called');
  const query = "SELECT * FROM AppearsIn;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching AppearsIn data:', err);
      res.status(500).send('Error fetching AppearsIn data');
    } else {
      console.log('AppearsIn data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Artifact', (req, res) => {
  console.log('Fetch Artifact called');
  const query = "SELECT * FROM Artifact;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Artifact data:', err);
      res.status(500).send('Error fetching Artifact data');
    } else {
      console.log('Artifact data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/ArtifactCulture', (req, res) => {
  console.log('Fetch Artifact called');
  const query = "SELECT A1.ArtifactName, T.Culture, A1.Origin FROM Artifact A1, AppearsIn a2, Tale T WHERE A1.ArtifactName = A2.ArtifactName AND A2.TaleName = T.TaleName;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Artifact data:', err);
      res.status(500).send('Error fetching Artifact data');
    } else {
      console.log('Artifact data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/BelongsTo', (req, res) => {
  console.log('Fetch BelongsTo called');
  const query = "SELECT * FROM BelongsTo;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching BelongsTo data:', err);
      res.status(500).send('Error fetching BelongsTo data');
    } else {
      console.log('BelongsTo data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Creature', (req, res) => {
  console.log('Fetch Creature called');
  const query = "SELECT * FROM Creature;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Creature data:', err);
      res.status(500).send('Error fetching Creature data');
    } else {
      console.log('Creature data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Deity', (req, res) => {
  console.log('Fetch Deity called');
  const query = "SELECT * FROM Deity;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Deity data:', err);
      res.status(500).send('Error fetching Deity data');
    } else {
      console.log('Deity data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/DeityNoDesc', (req, res) => {
  console.log('Fetch Deity called');
  const query = "SELECT CharacterName, Domain, SupernaturalAbility, Culture FROM Deity;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Deity data:', err);
      res.status(500).send('Error fetching Deity data');
    } else {
      console.log('Deity data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Location', (req, res) => {
  console.log('Fetch Location called');
  const query = "SELECT * FROM Location;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Location data:', err);
      res.status(500).send('Error fetching Location data');
    } else {
      console.log('Location data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Mortal', (req, res) => {
  console.log('Fetch Mortal called');
  const query = "SELECT * FROM Mortal;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Mortal data:', err);
      res.status(500).send('Error fetching Mortal data');
    } else {
      console.log('Mortal data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/PartOf', (req, res) => {
  console.log('Fetch PartOf called');
  const query = "SELECT * FROM PartOf;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching PartOf data:', err);
      res.status(500).send('Error fetching PartOf data');
    } else {
      console.log('PartOf data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/PartOfAlpha', (req, res) => {
  console.log('Fetch PartOf called');
  const query = "SELECT * FROM PartOf ORDER BY CharacterName ASC;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching PartOf data:', err);
      res.status(500).send('Error fetching PartOf data');
    } else {
      console.log('PartOf data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/PartOfCulture', (req, res) => {
  console.log('Fetch PartOf called');
  const query = "SELECT PartOf.CharacterName, PartOf.TaleName, Tale.Culture FROM PartOf, Tale WHERE PartOf.TaleName = Tale.TaleName GROUP BY Tale.Culture, PartOf.CharacterName, PartOf.TaleName ORDER BY Tale.Culture ASC;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching PartOf data:', err);
      res.status(500).send('Error fetching PartOf data');
    } else {
      console.log('PartOf data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Represents', (req, res) => {
  console.log('Fetch Represents called');
  const query = "SELECT * FROM Represents;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Represents data:', err);
      res.status(500).send('Error fetching Represents data');
    } else {
      console.log('Represents data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Ritual', (req, res) => {
  console.log('Fetch Ritual called');
  const query = "SELECT * FROM Ritual;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Ritual data:', err);
      res.status(500).send('Error fetching Ritual data');
    } else {
      console.log('Ritual data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/StoryEvent', (req, res) => {
  console.log('Fetch StoryEvent called');
  const query = "SELECT * FROM StoryEvent;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching StoryEvent data:', err);
      res.status(500).send('Error fetching StoryEvent data');
    } else {
      console.log('StoryEvent data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Symbol', (req, res) => {
  console.log('Fetch Symbol called');
  const query = "SELECT * FROM Symbol;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Symbol data:', err);
      res.status(500).send('Error fetching Symbol data');
    } else {
      console.log('Symbol data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Tale', (req, res) => {
  console.log('Fetch Tale called');
  const query = "SELECT * FROM Tale;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Tale data:', err);
      res.status(500).send('Error fetching Tale data');
    } else {
      console.log('Tale data fetched successfully');
      res.json(results);
    }
  });
});

// Update data in MySQL
// done need double check tho
app.put('/api/update/Pantheon', (req, res) => {
  console.log('Update Pantheon called');
  const { culture, newPantheonName } = req.body;
  const query = 'UPDATE Pantheon SET pantheonName = ? WHERE culture = ?;';
  db.query(query, [newPantheonName, culture], (err, result) => {
    if (err) {
      console.error("Error updating Pantheon data: ", err);
      res.status(500).send('Error updating Pantheon data');
      return;
    }
    console.log("Pantheon data updated successfully");
    res.send('Pantheon data updated successfully');
  });
});

app.put('/api/update/Artifact', (req, res) => {
  console.log('Update Artifact called');
  const { artifactName, newOrigin } = req.body;
  const query = 'UPDATE Artifact SET origin = ? WHERE artifactName = ?;';
  db.query(query, [newOrigin, artifactName], (err, result) => {
    if (err) {
      console.error("Error updating Artifact data: ", err);
      res.status(500).send('Error updating Aritfact data');
      return;
    }
    console.log("Artifact data updated successfully");
    res.send('Artifact data updated successfully');
  });
});

app.put('/api/update/Symbol', (req, res) => {
  console.log('Update Symbol called');
  const { symbolName, newOrigin } = req.body;
  const query = 'UPDATE Symbol SET origin = ? WHERE symbolName = ?;';
  db.query(query, [newOrigin, symbolName], (err, result) => {
    if (err) {
      console.error("Error updating Symbol data: ", err);
      res.status(500).send('Error updating Aritfact data');
      return;
    }
    console.log("Symbol data updated successfully");
    res.send('Symbol data updated successfully');
  });
});

app.put('/api/update/PartOf', (req, res) => {
  console.log('Update PartOf called');
  const { characterName, newTaleName } = req.body;
  const query = 'UPDATE PartOf SET taleName = ? WHERE characterName = ?;';
  db.query(query, [newTaleName, characterName], (err, result) => {
    if (err) {
      console.error("Error updating PartOf data: ", err);
      res.status(500).send('Error updating PartOf data');
      return;
    }
    console.log("PartOf data updated successfully");
    res.send('PartOf data updated successfully');
  });
});

app.put('/api/update/Represents', (req, res) => {
  console.log('Update Represents called');
  const { symbolName, newDeityName } = req.body;
  const query = 'UPDATE Represents SET characterName = ? WHERE symbolName = ?;';
  db.query(query, [newDeityName, symbolName], (err, result) => {
    if (err) {
      console.error("Error updating Represents data: ", err);
      res.status(500).send('Error updating Represents data');
      return;
    }
    console.log("Represents data updated successfully");
    res.send('Represents data updated successfully');
  });
});

app.put('/api/update/Deity', (req, res) => {
  console.log('Update Deity called');
  const { characterName, newCharacterDescription, newDomain, newSupernaturalAbility } = req.body;

  const query1 = `
    UPDATE Characters
    SET 
      characterDescription = ?
    WHERE characterName = ?;
  `;
  const query2 = `
    UPDATE Deity
    SET 
      characterDescription = ?,
      domain = ?,
      supernaturalAbility = ?
    WHERE deityName = ?;
  `;

  db.query1(query1, [newCharacterDescription, characterName], (err, result) => {
    if (err) {
      console.error("Error updating Deity data: ", err);
      res.status(500).send('Error updating Deity data');
      return;
    }
  });

  db.query2(query2, [newCharacterDescription, newDomain, newSupernaturalAbility, characterName], (err, result) => {
    if (err) {
      console.error("Error updating Deity data: ", err);
      res.status(500).send('Error updating Deity data');
      return;
    }

    console.log("Deity data updated successfully");
    res.send('Deity data updated successfully');
    res.status(200).json({ message: 'Data updated successfully into database' });
  });
});

app.put('/api/update/Creature', (req, res) => {
  console.log('Update Creature called');
  const { characterName, newCharacterDescription, newSupernaturalAbility, newSpecies } = req.body;

  const query1 = `
    UPDATE Characters
    SET 
      characterDescription = ?
    WHERE characterName = ?;
  `;
  const query2 = `
    UPDATE Creature
    SET 
      characterDescription = ?,
      superNaturalAbility = ?,
      species = ?
    WHERE creatureName = ?;
  `;

  db.query1(query1, [newCharacterDescription, characterName], (err, result) => {
    if (err) {
      console.error("Error updating Creature data: ", err);
      res.status(500).send('Error updating Creature data');
      return;
    }
  });

  db.query2(query2, [newCharacterDescription, newSupernaturalAbility, newSpecies, characterName], (err, result) => {
    if (err) {
      console.error("Error updating Creature data: ", err);
      res.status(500).send('Error updating Creature data');
      return;
    }

    console.log("Creature data updated successfully");
    res.send('Creature data updated successfully');
    res.status(200).json({ message: 'Data updated successfully into database' });
  });
});

app.put('/api/update/Location', (req, res) => {
  console.log('Update Location called');
  const { locationName, timePeriod, newAreaDescription } = req.body;

  const query = `
    UPDATE Location
    SET 
      areaDescription = ?
    WHERE locationName = ? AND timePeriod = ?;
  `;

  db.query(query, [newAreaDescription, locationName, timePeriod], (err, result) => {
    if (err) {
      console.error("Error updating Location data: ", err);
      res.status(500).send('Error updating Location data');
      return;
    }
    console.log("Location data updated successfully");
    res.send('Location data updated successfully');
  });
});

app.put('/api/update/Mortal', (req, res) => {
  console.log('Update Mortal called');
  const { characterName, newCharacterDescription, newTitle, newProfession } = req.body;

  const query1 = `
    UPDATE Characters
    SET 
      characterDescription = ?
    WHERE characterName = ?;
  `;
  const query2 = `
    UPDATE Mortal
    SET 
      characterDescription = ?,
      title = ?,
      profession = ?
    WHERE mortalName = ?;
  `;

  db.query1(query1, [newCharacterDescription, characterName], (err, result) => {
    if (err) {
      console.error("Error updating Mortal data: ", err);
      res.status(500).send('Error updating Mortal data');
      return;
    }
  });

  db.query2(query2, [newCharacterDescription, newTitle, newProfession, characterName], (err, result) => {
    if (err) {
      console.error("Error updating Mortal data: ", err);
      res.status(500).send('Error updating Mortal data');
      return;
    }

    console.log("Mortal data updated successfully");
    res.send('Mortal data updated successfully');
    res.status(200).json({ message: 'Data updated successfully into database' });
  });
});

app.put('/api/update/Ritual', (req, res) => {
  console.log('Update Ritual called');
  const { ritualName, recurring, characterName, location, timePeriod } = req.body;

  const query = `
    UPDATE Ritual
    SET 
      Recurring = ?,
      CharacterName = ?,
      Location = ?,
      TimePeriod = ?
    WHERE RitualName = ?;
  `;

  db.query(query, [recurring === 'true', characterName, location, timePeriod, ritualName], (err, result) => {
    if (err) {
      console.error("Error updating Ritual data: ", err);
      res.status(500).send('Error updating Ritual data');
      return;
    }
    console.log("Ritual data updated successfully");
    res.send('Ritual data updated successfully');
  });
});

app.put('/api/update/Tale', (req, res) => {
  console.log('Update Tale called');
  const { taleName, newMoralLesson, newCulture } = req.body;

  const query = `
    UPDATE Tale
    SET 
      moralLesson = ?,
      culture = ?
    WHERE taleName = ?;
  `;

  db.query(query, [newMoralLesson, newCulture, taleName], (err, result) => {
    if (err) {
      console.error("Error updating Tale data: ", err);
      res.status(500).send('Error updating Tale data');
      return;
    }
    console.log("Tale data updated successfully");
    res.send('Tale data updated successfully');
  });
});

app.put('/api/update/StoryEvent', (req, res) => {
  console.log('Update StoryEvent called');
  const { taleName, eventName, newEventDescription, newLocationName, newTimePeriod } = req.body;

  const query = `
    UPDATE StoryEvent
    SET 
      eventDescription = ?,
      locationName = ?,
      timePeriod = ?
    WHERE taleName = ? AND eventName = ?;
  `;

  db.query(query, [newEventDescription, newLocationName, newTimePeriod, taleName, eventName], (err, result) => {
    if (err) {
      console.error("Error updating StoryEvent data: ", err);
      res.status(500).send('Error updating StoryEvent data');
      return;
    }
    console.log("StoryEvent data updated successfully");
    res.send('StoryEvent data updated successfully');
  });
});


// DELETE data in MySQL
app.delete('/api/delete/Pantheon', (req, res) => {
  console.log('Delete Pantheon called');
  const { culture } = req.body;

  const query = 'DELETE FROM Pantheon WHERE culture = ?;';
  db.query(query, [culture], (err, result) => {
    if (err) {
      console.error("Error deleting Pantheon entry: ", err);
      res.status(500).send('Error deleting Pantheon entry');
      return;
    }
    console.log("Pantheon entry deleted successfully");
    res.send('Pantheon entry deleted successfully');
  });
});

app.delete('/api/delete/Artifact', (req, res) => {
  console.log('Delete Artifact called');
  const { artifactName } = req.body;

  const query = 'DELETE FROM Artifact WHERE artifactName = ?;';
  db.query(query, [artifactName], (err, result) => {
    if (err) {
      console.error("Error deleting Artifact entry: ", err);
      res.status(500).send('Error deleting Artifact entry');
      return;
    }
    console.log("Artifact entry deleted successfully");
    res.send('Artifact entry deleted successfully');
  });
});

app.delete('/api/delete/Ritual', (req, res) => {
  console.log('Delete Ritual called');
  const { ritualName } = req.body;

  const query = 'DELETE FROM Ritual WHERE ritualName = ?;';
  db.query(query, [ritualName], (err, result) => {
    if (err) {
      console.error("Error deleting Ritual entry: ", err);
      res.status(500).send('Error deleting Ritual entry');
      return;
    }
    console.log("Ritual entry deleted successfully");
    res.send('Ritual entry deleted successfully');
  });
});

app.delete('/api/delete/Symbol', (req, res) => {
  console.log('Delete Symbol called');
  const { symbolName } = req.body;

  const query = 'DELETE FROM Symbol WHERE symbolName = ?;';
  db.query(query, [symbolName], (err, result) => {
    if (err) {
      console.error("Error deleting Symbol entry: ", err);
      res.status(500).send('Error deleting Symbol entry');
      return;
    }
    console.log("Symbol entry deleted successfully");
    res.send('Symbol entry deleted successfully');
  });
});

app.delete('/api/delete/Tale', (req, res) => {
  console.log('Delete Tale called');
  const { taleName } = req.body;

  const query = 'DELETE FROM Tale WHERE taleName = ?;';
  db.query(query, [taleName], (err, result) => {
    if (err) {
      console.error("Error deleting Tale entry: ", err);
      res.status(500).send('Error deleting Tale entry');
      return;
    }
    console.log("Tale entry deleted successfully");
    res.send('Tale entry deleted successfully');
  });
});


app.delete('/api/delete/Creature', (req, res) => {
  console.log('Delete Creature called');
  const { characterName } = req.body;

  const query = 'DELETE FROM Character WHERE characterName = ?;';
  db.query(query, [characterName], (err, result) => {
    if (err) {
      console.error("Error deleting Creature entry: ", err);
      res.status(500).send('Error deleting Creature entry');
      return;
    }
    console.log("Creature entry deleted successfully");
    res.send('Creature entry deleted successfully');
  });
});

app.delete('/api/delete/Deity', (req, res) => {
  console.log('Delete Deity called');
  const { characterName } = req.body;

  const query = 'DELETE FROM Character WHERE characterName = ?;';
  db.query(query, [characterName], (err, result) => {
    if (err) {
      console.error("Error deleting Deity entry: ", err);
      res.status(500).send('Error deleting Deity entry');
      return;
    }
    console.log("Deity entry deleted successfully");
    res.send('Deity entry deleted successfully');
  });
});

app.delete('/api/delete/Mortal', (req, res) => {
  console.log('Delete Mortal called');
  const { characterName } = req.body;

  const query = 'DELETE FROM Character WHERE characterName = ?;';
  db.query(query, [characterName], (err, result) => {
    if (err) {
      console.error("Error deleting Mortal entry: ", err);
      res.status(500).send('Error deleting Mortal entry');
      return;
    }
    console.log("Mortal entry deleted successfully");
    res.send('Mortal entry deleted successfully');
  });
});


app.delete('/api/delete/PartOf', (req, res) => {
  console.log('Delete PartOf called');
  const { characterName } = req.body;

  const query = 'DELETE FROM PartOf WHERE characterName = ?;';
  db.query(query, [characterName], (err, result) => {
    if (err) {
      console.error("Error deleting PartOf entry: ", err);
      res.status(500).send('Error deleting PartOf entry');
      return;
    }
    console.log("PartOf entry deleted successfully");
    res.send('PartOf entry deleted successfully');
  });
});

app.delete('/api/delete/Represents', (req, res) => {
  console.log('Delete Represents called');
  const { symbolName } = req.body;

  const query = 'DELETE FROM Represents WHERE symbolName = ?;';
  db.query(query, [symbolName], (err, result) => {
    if (err) {
      console.error("Error deleting Represents entry: ", err);
      res.status(500).send('Error deleting Represents entry');
      return;
    }
    console.log("Represents entry deleted successfully");
    res.send('Represents entry deleted successfully');
  });
});

app.delete('/api/delete/BelongsTo', (req, res) => {
  console.log('Delete BelongsTo entry called');
  const { artifactName, characterName } = req.body;

  const query = `
    DELETE FROM BelongsTo 
    WHERE artifactName = ? AND characterName = ?;
  `;

  db.query(query, [artifactName, characterName], (err, result) => {
    if (err) {
      console.error("Error deleting BelongsTo entry: ", err);
      res.status(500).send('Error deleting BelongsTo entry');
      return;
    }
    console.log("BelongsTo entry deleted successfully");
    res.send('BelongsTo entry deleted successfully');
  });
});


app.delete('/api/delete/AppearsIn', (req, res) => {
  console.log('Delete AppearsIn entry called');
  const { artifactName, taleName } = req.body;

  const query = `
    DELETE FROM AppearsIn 
    WHERE artifactName = ? AND taleName = ?;
  `;

  db.query(query, [artifactName, taleName], (err, result) => {
    if (err) {
      console.error("Error deleting AppearsIn entry: ", err);
      res.status(500).send('Error deleting AppearsIn entry');
      return;
    }
    console.log("AppearsIn entry deleted successfully");
    res.send('AppearsIn entry deleted successfully');
  });
});

app.delete('/api/delete/Location', (req, res) => {
  console.log('Delete Location entry called');
  const { locationName, areaDescription } = req.body;

  const query = `
    DELETE FROM Location 
    WHERE locationName = ? AND areaDescription = ?;
  `;

  db.query(query, [locationName, areaDescription], (err, result) => {
    if (err) {
      console.error("Error deleting Location entry: ", err);
      res.status(500).send('Error deleting Location entry');
      return;
    }
    console.log("Location entry deleted successfully");
    res.send('Location entry deleted successfully');
  });
});

// HAVING data in MySQL
// moral context character count > 70
app.get('/api/having/CharacterCount', (req, res) => {
  console.log('Having CharacterCount called');
  const query = "SELECT LENGTH(MoralLesson) as CharacterCount, TaleName FROM Tale WHERE LENGTH(MoralLesson) > 70 GROUP BY TaleName";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving data from the database");
    } else {
      res.json(results);
    }
  });
});
// PROJECT location data in MySQL
app.get('/api/project/Location', (req, res) => {
  console.log('Project Location called');
  const query = "SELECT LocationName, AreaDescription, TimePeriod FROM Location";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    } else {
      const taleNames = results.map(result => result.taleName);
      res.json(taleNames);
    }
  });
});

app.get('/api/fetch/TaleHaving', (req, res) => {
  console.log('Fetch Tale called');
  const query = "SELECT p.Culture, p.PantheonName FROM Pantheon p, Tale t WHERE p.Culture = t.Culture GROUP BY p.Culture HAVING COUNT(t.taleName) >= 2;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Tale data:', err);
      res.status(500).send('Error fetching Tale data');
    } else {
      console.log('Tale data fetched successfully');
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
