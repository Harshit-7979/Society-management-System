import Role from '../model/role.model.js';
import mongoose from 'mongoose';

const roles = [
  {
    role: 'admin',
    roleDescription:
      'Manage users , assign flat to resident , generate bills , manage complaints',
  },
  {
    role: 'resident',
    roleDescription:
      'Raise complaints , track their complaints , accept visitor entry',
  },
  {
    role: 'security_guard',
    roleDescription: 'Visitor log , accept vistor entry',
  },
];

const seedRoles = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb://harshitchoudhary7979_db_user:cHdGY3ak4xKnyeDs@ac-tz4di2y-shard-00-00.cwy9kyw.mongodb.net:27017,ac-tz4di2y-shard-00-01.cwy9kyw.mongodb.net:27017,ac-tz4di2y-shard-00-02.cwy9kyw.mongodb.net:27017/sms?ssl=true&replicaSet=atlas-bkn4st-shard-0&authSource=admin&appName=Cluster0'
    );
    console.log('connection is up');

    const newRoles = await Role.insertMany(roles);
    console.log(newRoles);
  } catch (error) {
    console.log(error);
  }
};

seedRoles();