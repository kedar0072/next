import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import mongoose from 'mongoose';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

const dbURL = 'mongodb://localhost:27017/practice-user-hono';
mongoose.connect(dbURL).then(() => console.log('conneted to db'));

app.get('/:id', (c) => {
  return c.json({ message: 'hello' });
});

export const GET = handle(app);
export const POST = handle(app);
