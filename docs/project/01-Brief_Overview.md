# Brief Overview

A more flexible, useful, and cooler ATT&CK CTI utility with team-wide collaboration is here!

The Mitre-Assistant surfaced as a collaboration tool amongst many people and skillsets that needed to work with The Mitre Corporation's ATT&CK Matrix.

We needed to expedite both tactical and strategic business plans between security experts and business leaders to support both customers and security community forums. We realized the ecosystem of utilities in the public domain were incomplete, or not capable of offering us the flexibility we were looking for in the pursuit of our security and business objectives.

The main purpose of this utility is to reduce friction between business professionals and the ATT&CK Matrix.

## What does it do?

It parses the public dataset provided by the Mitre Corporation that represents the ATT&CK matrix. It then uses this parsed information and exposes a query/search capability that allows you to be explore and render the information you are seeking in more flexible and intuitive ways than what you will find publicly.

Both **CSV** and **JSON** formats are first class citizens to enable `etl` pipelines and developers to craft their own custom applications.

<br />

## How does it help?

:::note

If you are in a particular industry, for example in Finance, and you need to quickly know all of the FIN adversaries according to the ATT&CK Matrix, what do they do, which malware do they use, and what techniques are attributed to these for your own emulation plans, then please don't waste time, look at this below.

```bash title="Example Query"
$> mitre-assistant search -m enterprise -t "fin4,fin5,fin6,fin7,fin8,fin10"
```

This query above will bring you all of the existing information for all of those adversaries, and produce a table like this below.

![fin_query](https://user-images.githubusercontent.com/11415591/95679475-1b43cb00-0ba1-11eb-8988-d26b29d3960f.png)
