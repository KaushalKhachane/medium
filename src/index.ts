import { Hono } from 'hono';

// Create the main Hono app
const app = new Hono();

app.post('/api/v1/signup', (c) => {
	return c.text('signup route')
})

app.post('/api/v1/signin', (c) => {
	return c.text('signin route')
})

app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

app.post('/api/v1/blog',   (c) => {

	return c.text('signin route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('signin route')
})

export default app;


// postgres://avnadmin:AVNS_z5nVNCHV5nTaAoz9nrL@pg-32a37f80-khachaneks22-fa0c.b.aivencloud.com:11227/defaultdb?sslmode=require

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZGIxNGUwZmYtYzA3MS00NTVlLTkxOWUtYzVjMTVhNjUzYzQxIiwidGVuYW50X2lkIjoiZWUyN2ViN2VmNTFkMzhjYjQ3MTE0Y2U0M2I0ZjA4Y2QzYzE0NzI2YzgyMDIyMTExZDRlMGE2YTU0YjQzN2FkMiIsImludGVybmFsX3NlY3JldCI6IjViMmUwYWI0LTVmZDEtNDI5Zi05MDVjLThjOGVkYWExMTkyNiJ9.p6ATZzId33SESPAQydho1aQhN8QN8wAe2Cjh41k14Oo"