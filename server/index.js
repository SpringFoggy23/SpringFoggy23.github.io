import express from 'express';
import cors from 'cors';
import { Firestore } from '@google-cloud/firestore';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080; // Cloud Run prefers 8080 by default

app.use(cors());
app.use(express.json());

// Initialize Firestore
// Note: When running on Cloud Run, this automatically picks up
// the default service account credentials. When running locally,
// you need to set GOOGLE_APPLICATION_CREDENTIALS environment variable.
const firestore = new Firestore();

app.get('/api/visit', async (req, res) => {
  try {
    const statsRef = firestore.collection('site_stats').doc('visitors');

    // Run a transaction to safely increment the visitor count
    const newCount = await firestore.runTransaction(async (transaction) => {
      const doc = await transaction.get(statsRef);
      let count = 0;

      if (doc.exists) {
        count = doc.data().count || 0;
      }

      count += 1;
      transaction.set(statsRef, { count });
      return count;
    });

    // Log additional details: IP and time
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown IP';
    const nycTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'medium',
      timeStyle: 'medium'
    });

    const visitEntry = {
      ip: ip,
      timestamp: new Date().toISOString(),
      nycTime: nycTime
    };

    // Save detailed visit to a collection
    await firestore.collection('visitor_details').add(visitEntry);

    res.json({ visitors: newCount });
  } catch (error) {
    console.error('Error logging visit:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, comment } = req.body;

    if (!name || !comment) {
      return res.status(400).json({ error: 'Name and comment are required' });
    }

    const commentEntry = {
      name,
      email: email || 'N/A',
      comment,
      timestamp: new Date().toISOString()
    };

    // Save comment to Firestore
    await firestore.collection('comments').add(commentEntry);

    res.json({ success: true, message: 'Comment saved successfully' });
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
