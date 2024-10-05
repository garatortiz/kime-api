export default () => ({
  port: Number.isNaN(Number.parseInt(process.env.PORT))
    ? 3000
    : Number.parseInt(process.env.PORT),
  database: {
    host: process.env.DATABASE_HOST,
    port: Number.isNaN(Number.parseInt(process.env.DATABASE_PORT))
      ? 5432
      : Number.parseInt(process.env.DATABASE_PORT),
  },
});
