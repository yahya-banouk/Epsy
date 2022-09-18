FROM node:17-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
ENV REACT_APP_LINK=http://localhost:9090
RUN npm install --force
RUN npm run build
CMD ["npm", "run", "start"]