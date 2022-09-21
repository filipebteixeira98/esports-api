import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

const prisma = new PrismaClient({
  log: ['query'],
});

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.json(games);
});

app.get('/ads', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
  const gameId = request.params.id;

  console.log(gameId);

  return response.json([]);
});

app.get('/ads/:id/discord', (request, response) => {
  const adId = request.params.id;

  console.log(adId);

  return response.json([]);
});

app.listen(3333, () => {
  console.log('🚀 Server is running at http://127.0.0.1/3333');
});
