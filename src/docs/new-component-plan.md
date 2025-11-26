New Component Plan – Smart Library API
Component Chosen: Email Notification System

For my new component, I am adding an Email Notification System to the Smart Library API. This feature will automatically send emails to members when they borrow a book and later remind them when a book becomes overdue. This component improves communication in the library system and makes the application feel more realistic and useful.

1. What This Component Will Do

The email notification system will handle two main tasks:

A. Borrow Confirmation Email

When a member borrows a book, the system will automatically send them an email.
The email will include:

The book title

Borrow date

Due date

Member name

This helps the member remember what they borrowed and when it is due.

B. Overdue Reminder Email (Future Enhancement)

The system will later be expanded to automatically check for overdue books.
If a borrow record has:

returnedAt = null

dueAt is earlier than today

Then an email reminder will be sent to the member telling them the book is overdue.

This is a common feature in real library systems.

2. Why I Chose This Component

I selected this feature because it adds practical value to the API.
Libraries always notify users about borrowing and overdue books, so this component makes the Smart Library API more realistic.

It is also a good feature for the assignment because:

It integrates a new external service (email API)

It demonstrates planning and research

It is not too difficult but still meaningful

It connects smoothly with my existing Borrow Records system

The data I already have (bookId, memberId, borrowedAt, and dueAt) makes it easy to send accurate emails.

3. Technology Selected

I researched three email options: Nodemailer, AWS SES, and SendGrid.
I chose SendGrid Email API because:

It has a free plan

It is very easy to use with Node.js + TypeScript

It has good documentation

It only requires one API key to send emails

Nodemailer needs its own SMTP server, which can be unreliable.
AWS SES is powerful but harder to set up and unnecessary for this project.

Final Choice: SendGrid because it is simple, fast, and perfect for this assignment.