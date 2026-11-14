<img src="doc/landing-page.png">

Digits is a simple contact manager built with [Next.js](https://nextjs.org/), [React Bootstrap](https://react-bootstrap.github.io/), [Prisma](https://www.prisma.io/), and [PostgreSQL](https://www.postgresql.org/). Each user keeps their own list of business contacts, can add and edit them, and can attach timestamped notes to each contact. Admins can see every user's contacts.

## Installation

1. Install [Node.js](https://nodejs.org/) (LTS version) and [PostgreSQL](https://www.postgresql.org/download/).

2. Create a database for the app:

   ~~~
   createdb -U postgres digits
   ~~~

3. Clone the repository and install the dependencies:

   ~~~
   git clone https://github.com/JZu808/digits.git
   cd digits
   npm install
   ~~~

4. Copy `sample.env` to `.env`, then edit the `DATABASE_URL` line so it uses your PostgreSQL username, password, and the `digits` database:

   ~~~
   DATABASE_URL="postgresql://postgres:your-password@localhost:5432/digits?schema=public"
   ~~~

5. Create the tables and load the sample users and contacts:

   ~~~
   npx prisma migrate dev
   npm run seed
   ~~~

6. Start the app and open [http://localhost:3000](http://localhost:3000):

   ~~~
   npm run dev
   ~~~

The seed creates two accounts, both with the password `changeme`: `john@foo.com` (a regular user) and `admin@foo.com` (an admin).

## Walkthrough

### Landing page

The landing page (shown at the top) describes what Digits does: it supports multiple users, stores contact details, and keeps timestamped notes. Use the **Login** menu in the top right to sign in or sign up.

### Sign in

<img src="doc/signin-page.png">

Sign in with an existing account, or choose **Sign up** from the Login menu to register a new one.

### List Contacts

<img src="doc/list-contacts-page.png">

After signing in, **List Contacts** shows a card for each of your contacts with their picture, name, address, and description. You only see the contacts you created. Each card lists its notes with the date they were added, has a form to add a new timestamped note, and has an **Edit** link.

### Add Contact

<img src="doc/add-contact-page.png">

**Add Contact** lets you create a new contact by entering a first name, last name, address, image URL, and description. After you submit, you return to List Contacts with the new card.

### Edit Contact

<img src="doc/edit-contact-page.png">

Clicking **Edit** on a card opens this form with the contact's current information filled in. Change any field and submit to save it, or click **Reset** to undo your changes.

### Admin

<img src="doc/admin-page.png">

Users with the admin role get an **Admin** link that shows every user's contacts and notes, with the owner's email on each card.
