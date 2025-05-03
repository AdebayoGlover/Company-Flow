const pool = require('../../backend/src/config/database');
const fs = require('fs').promises;
const path = require('path');

async function runMigrations() {
  try {
    const connection = await pool.getConnection();

    // Create migrations table if it doesn't exist
    await connection.query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Get all migration files
    const migrationFiles = await fs.readdir(
      path.join(__dirname, '../migrations')
    );

    // Get executed migrations
    const [executed] = await connection.query('SELECT name FROM migrations');
    const executedMigrations = new Set(executed.map((row) => row.name));

    // Run pending migrations
    for (const file of migrationFiles) {
      if (!executedMigrations.has(file)) {
        const migration = require(`../migrations/${file}`);

        console.log(`Running migration: ${file}`);
        await migration.up(connection);

        await connection.query('INSERT INTO migrations (name) VALUES (?)', [
          file,
        ]);
        console.log(`Completed migration: ${file}`);
      }
    }

    connection.release();
    console.log('All migrations completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigrations();
