# localhost setup guide
## step 1: installing mysql
go to this link<br>
https://dev.mysql.com/downloads/file/?id=510039<br>
select "no thanks, just start my download".<br>
leave ip as localhost and port as 3306.<br>
to follow tutorial, set name as "root" and password as "Passw0rd"~~its a ZERO, not the letter "O"~~.<br>
## step 2: setting up .env file
this is what the DATABASE_URL should contain: mysql://johndoe:mypassword@localhost:5432/mydb?schema=user<br>
using our example, it should change to mysql://root:Passw0rd@localhost:3306/mydb?schema=user<br>
## step 3: setting up prisma
schema.prisma contains the schema for database migrations.
run "npx prisma migrate dev --name init" to make the first migration.<br>
running "npx prisma migrate deploy" creates an instance of the data model to prisma.<br>
running "npx prisma db seed" will seed data to the prisma database.<br>
(optional) running "npx prisma studio" will open a web page of the database with its containing data.<br>
## step 4: running localhost
run "npm run dev" to start localhost server at http://localhost:3000
