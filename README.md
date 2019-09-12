# Hacktoberfest - Joinville

[![CircleCI](https://circleci.com/gh/hacktoberfest-joinville/hacktoberfest-joinville.github.io.svg?style=svg)](https://circleci.com/gh/hacktoberfest-joinville/hacktoberfest-joinville.github.io)

## Adicionando eventos

As informações dos eventos pode ser encontrada em [`src/assets/content/meetings.json`](src/assets/content/meetings.json) e devem ser adicionadas seguindo a estrutura abaixo:

```json
{
  "title": "Nome do evento",
  "date": "dd/MM",
  "startTime": "hh:mm",
  "endTime": "hh:mm",
  "location": "Local do evento",
  "locationLink": "URL do local do evento no Google Maps",
  "externalLink": "URL da página do evento com mais informações"
}
```

## Project setup

```bash
# Install dependencies
yarn install

# Compiles and hot-reloads for development
yarn run serve

# Compiles and minifies for production
yarn run build

# Run your tests
yarn run test

# Lints and fixes files
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
