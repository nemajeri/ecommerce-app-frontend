# ecommerce-app-fronted

This is a React project for a ecommerce web application developed by me.

After registering as a new user, you will be redirected to log in. JWT token is stored in Local Storage and will be deleted after deleting.

When adding images in local environment, it will be stored in database as a string and webpack will find this in src/assets folder. That means that the image should be added to assets folder first.

Description has constraint of 255 characters per default when Hibernate maps Product model to database table and that isnt changed in application. Keep that in mind.
