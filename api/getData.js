import { Pool } from './';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM aluraplay');
    const rows = result.rows;
    client.release();
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
}