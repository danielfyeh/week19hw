# week19hw

Overview

In this activity, you'll create a new React-based rendition of the New York Times Article Search application. This assignment requires you to create React components, work with helper functions, and utilize the React mounting lifecycle to query and display articles based on user searches. You'll also use Node, Express and MongoDB so that users can save articles to read later. You will be fully capable of completing this application by the end of 19.3.
Instructions

Check out this mockup image. This explains how your site's components should function.
Create a MongoDB database called nytreact.
Using mongoose, then create an Article schema and model
Articles should have each of the following fields:
title (Title of the stored article from nytimes.com)
date (publish date and time of the article)
url (URL of the article on nytimes.com)
Creating documents in your articles collection similar to
 {
   title: 'Ali Sells Jersey House And Moves to Chicago',
   date: '1974-07-18T00:00:00Z',
   url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
 }
Create a Node/Express/Handlebars/MongoDB/ReactJS app called nytreact. This will be a recreation of the NYT Articles Search exercise application we built back in Week 6. Running this application will:
Create a Bootstrap layout similar to that displayed in HW_Assignment.png. This should be a SPA (Single Page Application) that uses react-router to navigate, hide and show your React components without changing the route within Express.
If you want to try out another CSS framework, feel free to use an alternative to Bootstrap.
You'll need several Express routes for your app:
 * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles

 * `/api/saved` (post) - your components will use this to save an article to the database

 * `/api/saved` (delete) - your components will use this to delete a saved article in the database

 * `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes