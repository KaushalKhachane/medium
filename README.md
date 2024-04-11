# Medium-Blog


## Installation

Initialize a `hono` based cloudflare worker app 

```
npm create hono@latest 
```

First, install Prisma using npm:

```bash
npm install prisma
```

Next, initialize Prisma in your project directory:

```bash
npx prisma init
```

## Configuring Database Pooling

### 0. Obtained Database url from avien or neon

```
postgresql://test_owner:OBj4vad6NYXb@ep-late-night-a5ehdd4z.us-east-2.aws.neon.tech/mediumblog?sslmode=require
```

### 1. Obtain a Pooling URL from Prisma Accelerate [Project: Funny Orange Orangutan environments]

After initializing Prisma, you'll receive a pooling URL from Prisma Accelerate. Make sure to copy this URL as it will be used to connect to your database.

```
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNDU2NDU0ZDMtM2RjNC00OTcyLTk3MGUtODIzNTIwZmQ0N2IzIiwidGVuYW50X2lkIjoiOWNjYzA4YjI4MzdjZTY1YzBiNWY2MTg4ZjFjNzg4ODk0ZTdkMjczNDQ4ZWY0MzY4MzNhN2I3ZTMwYzhhYWFhYyIsImludGVybmFsX3NlY3JldCI6IjJmYWI0MWUyLTFiNzItNDQ4Zi04ZGZkLTQyMTllMDI2MTFkYSJ9.-iQpHZ4QzQQtII4yyumHO4ojF6HWs0M1qQWR_Sx_CDU"
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory of your project and paste the database URL obtained from Prisma Accelerate:

```
DATABASE_URL=<your_database_url_here>
```

Replace `<your_database_url_here>` with the pooling URL you obtained from Prisma.

### 3. Configure `wrangle.toml`

Open the `wrangle.toml` file in your project directory and set the `pooling_url` to the pooling URL you obtained from Prisma Accelerate:

```toml
[vars]
DATABASE_URL = "<your_database_url_here>"
```

Replace `<Prisma_Accelerated_PoolingURL>` with the pooling URL you obtained from Prisma.

![](./screenshots/wrangle.png)


### 4. Add User, Post Schema Under schema.prisma and migrate prisma

```
npx prisma migrate dev --name init_schema
```