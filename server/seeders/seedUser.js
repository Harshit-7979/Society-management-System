import Role from '../model/role.model.js';
import User from '../model/user.model.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserData = {
  name: 'System Admin',
  email: 'Harshitchoudhary7979@gmail.com',
  password: await bcrypt.hash('Harshit@123', 12),
  role: '69f3137662d2c2a4e1ecefac',
};

const seedUser = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb://harshitchoudhary7979_db_user:cHdGY3ak4xKnyeDs@ac-tz4di2y-shard-00-00.cwy9kyw.mongodb.net:27017,ac-tz4di2y-shard-00-01.cwy9kyw.mongodb.net:27017,ac-tz4di2y-shard-00-02.cwy9kyw.mongodb.net:27017/sms?ssl=true&replicaSet=atlas-bkn4st-shard-0&authSource=admin&appName=Cluster0'
    );
    console.log('connection is up');

    const newUser = await User.insertOne(UserData);
    console.log(newUser);
  } catch (error) {
    console.log(error);
  }
};

seedUser();
