const pretty = require('pretty')

const resume = require('./resume.json')

const head = `<head>
    <meta charset="utf-8">
    <title>${resume.name} - ${resume.title} Resume</title>

    <meta name="viewport" content="width=device-width">
    <meta name="Description" content="${resume.about[0]}">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">

    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,600' rel='stylesheet' type='text/css'>
</head>
`

const header = `<header>
  <h1>
    ${resume.name}
  </h1>
  <h2>
    ${resume.title}
  </h2>
</header>
`

const contact = `<section id="contact">
  <h3>Contact</h3>
</section>
`

const intro = ``

const skills = ``

const work = ``

const education = ``

const main = `<main>
  ${contact}
  ${intro}
  ${skills}
  ${work}
  ${education}
</main>
`

const body = `<body>
  ${header}
  ${main}
</body>
`

const html = `<html>
  ${header}
  ${body}
</html>
`

console.log(pretty(html));
