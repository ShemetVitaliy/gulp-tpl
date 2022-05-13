#### Installation

- > nvm use 14+
- > npm i

#### Development

- > npm run dev

#### Add fonts

- > if otf font convert to ttf
- > add ttf fonts to src/fonts
- > gulp
- > uncomment @import "fonts" from src/scss/_index.scss

#### Start server on the 4200 port

- > gulp/tasks/server.js -> port: 4200
- > http://localhost:4200/

#### Create zip

- > npm run zip

#### Build

- > npm run build

#### Deploy to FTP

- > Add config to gulp/config/ftp.js
- > npm run deploy
