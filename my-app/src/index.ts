import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/hello', (c) => {
  c.header('X-message', 'Hi!')
  return c.text('Hola mundito', 200)
})

app.post('/posts', (c) => c.text('Created!', 201))
app.put('/posts/:id', (c) => c.text(`${c.req.param('id')} is updated!`, 200))

app.patch('/posts/:id', (c) => c.text(`${c.req.param('id')} is partial updated!`, 200))

app.delete('/posts/:id', (c) => c.text(`${c.req.param('id')} is deleted!`, 200))


const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
