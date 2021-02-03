FROM node:12
COPY pack* ./
RUN npm install
COPY container.js .
EXPOSE 3000
CMD ["node","container.js"]
