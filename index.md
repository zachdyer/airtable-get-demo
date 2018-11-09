---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Airtable Api
---

This is a proof of concept of how it's possible to retrieve data from an airtable using only javascript. 

This connects to the Airtable API and gets the data from it then displays it
in a dom container. There is only 1 record in the `Users` table so it only brings
back 1 record. The data it collects is the time the record was created, the user name,
and the image src for the avatar of the user.

<section id="airtable"></section>
