# Accuracy

## Overview

This project was submitted to the FBLA (Future Business Leaders of America) Website Design competition.  It was built over the course of 2 - 3 months during the winter of 2018 using ReactJS.  It was (and currently is being) hosted on Google's Firebase cloud platform.  Firebase's database and authentication features were also used for the employee dashboard and contact form.

To see the final submission you can [click here.](https://accuracy-fbla.web.app)

## Requirements

The following is the prompt that gave the brief and some requirements for the site:

> Accuracy is a new accounting firm that specializes in performing accounting responsibilities
such as bookkeeping, taxes, audits, annual reports, and more for private and independent
entrepreneurial businesses. Accuracy has hired you to create a website and must include the
following components:
> * Introduction to the website using a Flash or Flash-type animation
> * Company overview to include its mission statement, services it offers, company
history, staff information, and one other item generally found on a company's
website
> * Customer service information
> * Interactive calendar to view and schedule appointments and meetings with clients
> * Links, site map, FAQs, pricing/rates, and a "contact us" option

## Technologies

This site was built using the ReactJS javascript framework, and was started using the `create-react-app` repository.  Firebase was used to host the site, store client communications from the contact form, and to authenticate employees signing into the business dashboard.

## Navigation

Navigation of the site should be pretty self-explanitory, with links and buttons taking you around the client-side aspects of the website.  In addition to this, there is a business-only aspect of the site which is (intentionally) inaccessible through the main site.  To access this, go [accuracy-fbla.web.app/auth](https://accuracy-fbla.web.app) and sign in using the following credentials:
  
  Username: drew@accuracy.com  
  Password: password

This logs the user into the dashboard, where they can view and respond to client communications that were left using the contact form.
