# Stage 1 #
FROM kubevged.azurecr.io/base/node:12.10.0-alpine as builder

COPY package.json package-lock.json ./

RUN npm ci \
    && mkdir /ng-app \
    && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run ng build -- --prod --output-path=dist

# Stage 2 #
FROM kubevged.azurecr.io/base/nginx:1.17.3-alpine

COPY nginx/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]