const express = require('express');
const activityRoutes = require('./routes/activityRoutes');
const app = express();

app.use(express.json());

app.use('/api/activities', activityRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
