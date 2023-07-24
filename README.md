code snippets for each route, including the error handling information:

# Dium API

## Registration Route

Creates a user account with the provided username and password.

### Request

POST /register

{
“username”: “john_doe”,
“password”: “secretpassword”
}

### Response

- 201 Created: User account successfully created.

- 400 Bad Request: Missing or empty username/password fields.

{
“error”: “Missing username or password”
}

- 409 Conflict: Username already taken.

{
“error”: “Username already taken”
}

## Product Route

Retrieves all products available.

### Request

GET /products

### Response

- 200 OK: Successfully fetched products.

{
“products”: […]
}

- if error occures
{
“error”: “msg”
}

## New Password Route

Updates the user's password with the provided OTP.

### Request

POST /new-password

{
“username”: “john_doe”,
“otp”: 123456, --- must be a Number
“password”: “newsecretpassword”
}

### Response

- 200 OK: Password successfully updated.

- 400 Bad Request: Missing or empty username/OTP/password fields.

{
“error”: “Missing username, OTP, or password”
}

- 401 Unauthorized: Invalid or expired OTP.

{
“error”: “invalid credentials”
}

## Reset Route

Sends an OTP to the user's email for password reset.

### Request

POST /reset

{
“username”: “john_doe”,
“email”: “john.doe@example.com”
}

### Response

- 200 OK: OTP sent successfully.

- 400 Bad Request: Missing or empty username/email fields.

{
“error”: “Missing username or email”
}

## Get Orders

Retrieves a list of all orders.

### Request

GET /orders

### Response

- 200 OK: Successfully fetched orders.

{
“orders”: […]
}

- 404 Not Found: No orders found.

{
“error”: “No orders found”
}

## Login Route

Creates an access token for the user to access protected routes.

### Request

POST /login

{
“username”: “john_doe”,
“password”: “secretpassword”
}

### Response

- 200 OK: Login successful.

{
“access_token”: “your_access_token_here”
}

- 400 Bad Request: Missing or empty username/password fields.

{
“error”: “Missing username or password”
}

- 401 Unauthorized: Invalid username/password combination.

{
“error”: “Invalid username/password”
}

#Routes and Images
<h3>Registration Route</h3>:Here the user account is created the route receives username and a password then creates a user with these details

![Alt text](<Screenshot 2023-07-21 075033.png>)
  ![Alt text](<Screenshot 2023-07-21 075004.png>) 

<h3>Product Route</h3>: This is a get route it sends the all products when fetched.

![Alt text](<Screenshot 2023-07-21 073611.png>)   ![Alt text](<Screenshot 2023-07-21 073523.png>)


<h3>New Password Route</h3>: On this route you send the username the otp recieved via email and the new password to set for the user and a new password is created which the user can login with
and also invalidates the otp ensuring it can only be used once.

![Alt text](<Screenshot 2023-07-21 073951.png>) 
![Alt text](<Screenshot 2023-07-21 074524.png>)
 ![Alt text](<Screenshot 2023-07-21 074601.png>)

<br>

<h3>Reset route</h3>: This takes the username and email and sends an otp to email, this otp has an expiration time making sure it can not be used after said time .

![Alt text](<Screenshot 2023-07-21 074210.png>) 
![Alt text](<Screenshot 2023-07-21 074417.png>) 

<h3>Get Orders</h3>:This returns a list of all orders.

 ![Alt text](<Screenshot 2023-07-21 074901.png>)
 


  <h3>Login Route</h3>:This takes a username and password and creates an access token for this user to enable the user gain personalized experience and access to protected routes.

  ![Alt text](<Screenshot 2023-07-21 073338.png>) 
  
# About Dium


Welcome to Duim, where passion meets exceptional products and services. My name is David, a full-stack developer with a strong focus on backend development. I am a proud graduate of the ALX Software Engineering program, where I honed my skills and expertise.

At Dium, we are dedicated to providing outstanding customer service and support. We understand that your experience with our product is essential, and we are here to assist you every step of the way.

Customer Commitment is at the core of our business. We believe that you are not just a customer, but a valuable member of our community. As a member of our community, you have access to 24/7 support and assistance. Whether you have questions, encounter any issues, or need guidance on how to use our products effectively, our team is available round the clock to provide the help you need.

We genuinely believe in the value of your feedback. Your insights and suggestions play a crucial role in shaping our products and services. We encourage you to reach out to us with any comments, concerns, or ideas you may have. Together, we can continually improve and tailor our offerings to better meet your needs.

When you choose Dium, you become a part of our family. We are committed to creating a welcoming and inclusive environment where everyone feels valued and supported. We aim to foster long-lasting relationships with our customers, built on trust, transparency, and mutual respect.

Your success is our success. We are genuinely invested in your satisfaction and will go above and beyond to ensure that you have a positive experience working with and using our products. We are dedicated to your success, and we celebrate your achievements as if they were our own.

Thank you for being a part of our community and choosing Dium. We are honored to have you with us, and we look forward to serving you and providing you with the support you deserve

