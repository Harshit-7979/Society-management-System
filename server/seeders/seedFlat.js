import mongoose from 'mongoose';
import Flat from '../model/flat.model.js';

const flats = [];

// Generating 30 documents
const blocks = ['A', 'B', 'C'];

let isOccupiedToggle = false; // 👈 toggle variable

for (const block of blocks) {
  for (let floor = 1; floor <= 5; floor++) {
    for (let num = 1; num <= 2; num++) {
      isOccupiedToggle = !isOccupiedToggle; // flip value each time

      flats.push({
        flatNumber: floor * 100 + num,
        block: block,
        floor: floor,
        isOccupied: isOccupiedToggle
      });
    }
  }
}

const seedFlats = async () => {
  try {
    await mongoose.connect(
      'mongodb://harshitchoudhary7979_db_user:cHdGY3ak4xKnyeDs@ac-tz4di2y-shard-00-00.cwy9kyw.mongodb.net:27017,ac-tz4di2y-shard-00-01.cwy9kyw.mongodb.net:27017,ac-tz4di2y-shard-00-02.cwy9kyw.mongodb.net:27017/sms?ssl=true&replicaSet=atlas-bkn4st-shard-0&authSource=admin&appName=Cluster0'
    );

    console.log('Connection is up');

    await Flat.deleteMany({});
    console.log('Existing flats cleared');

    const newFlats = await Flat.insertMany(flats);

    console.log(`Successfully seeded ${newFlats.length} flats.`);
    process.exit(0);

  } catch (error) {
    console.error('Error seeding flats:', error);
    process.exit(1);
  }
};

seedFlats();