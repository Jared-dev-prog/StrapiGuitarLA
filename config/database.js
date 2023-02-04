module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ce7nh9la4992f3n525ug-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_7lzk'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'AqKyvGlFCzxztXyGl8elGMfGaHYdq3W2'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
