const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/activities.json');

const readData = () => JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const writeData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

const getActivities = (req, res) => {
  const activities = readData();
  res.status(200).json(activities);
};

const addActivity = (req, res) => {
  const { user, activity } = req.body;
  if (!user || !activity) {
    return res.status(400).json({ error: 'User and activity are required' });
  }

  const activities = readData();
  const newActivity = {
    id: Date.now().toString(),
    user,
    activity,
    timestamp: new Date().toISOString(),
  };
  activities.push(newActivity);
  writeData(activities);

  res.status(201).json(newActivity);
};

const deleteActivity = (req, res) => {
  const { id } = req.params;
  const activities = readData();
  const updatedActivities = activities.filter((item) => item.id !== id);

  if (activities.length === updatedActivities.length) {
    return res.status(404).json({ error: 'Activity not found' });
  }

  writeData(updatedActivities);
  res.status(200).json({ message: 'Activity deleted' });
};

module.exports = {
  getActivities,
  addActivity,
  deleteActivity,
};
