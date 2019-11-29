import express from 'express';

import homePageRoutes from './routes/homepage';

const app = express();

app.use(homePageRoutes);

export default app;