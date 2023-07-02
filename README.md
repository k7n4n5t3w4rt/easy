# Easy: An easy server-side JSON store

## Setup

[1] Clone the repo

```
git clone git@github.com:k7n4n5t3w4rt/goodthing.git mysite
```

[2] Remove `/.git`

```
cd mysite && rm -rf .git
```

[3] Install NodeJS modules

```
npm i
```

[4] Update the ES modules with [Snowpack](https://www.snowpack.dev/)

```
npm run snowpack
```

NOTE: Currently you need to remove this line from `package.json` before running `npm run snowpack` - and then restore the line to `package.json`.

```
"type": "module"
```

[5] Set generous read/write permissions on the `database.json` file. Probably not this generous.

```
chmod 777 ./database.json
```
[6] Preview your site at <http://localhost:5000> during development

```
npm start
```

## Getting Started

[1] Save some data:

http://localhost:5000/set/?key=KEY&sid=SESSION_ID&dvalue=%7B%22key%22%3A%20%7B%20%22value%22%3A%201%7D%7D (```{"key": { "dvalue": 1}}```)
