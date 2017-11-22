# NodeJS Exercise

Create basic GET APIs in NodeJS and parse queryParams

## Exercise:

### Create the following APIs:

LOGIN API -  http://localhost:3008/login
> get hardcoded token

NAME API - http://localhost:3008/name?token="TOKEN FROM LOGIN"
>check token and return "john" if token is correct. If token incorrect, return "WRONG TOKEN"

DOB API - http://localhost:3008/dob?token="TOKEN FROM LOGIN"
>check token and return "16/01/1993" if token is correct. If token incorrect, return "WRONG TOKEN"

PHONE API - http://localhost:3008/phone?token="TOKEN FROM LOGIN"
>check token and return "987654321" if token is correct. If token incorrect, return "WRONG TOKEN"

LOGOUT API - http://localhost:3008/logout?token="TOKEN FROM LOGIN"
>check token and return "LOGOUT SUCCESS". If token incorrect, return "WRONG TOKEN"

## Getting started

1. Do npm install
2. Open requestHandler.js and start coding
