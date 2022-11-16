FROM cypress/base:18.11.0

# make directory inside
RUN mkdir /app
WORKDIR /app

# copy cypress code from host to container
COPY . /app

# execute the tests
RUN yarn install

#run test frontend-server && backend-server
#CMD yarn start && yarn run start-server

RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --env host=http://localhost:3000