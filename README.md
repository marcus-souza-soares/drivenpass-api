
# DRIVENPASS ROUTES

**To create a new user**

> Type: post <br>
Route: /register <br>

> header: {} <br>
body: 
{<br>
  "name": "My name",<br>
  "email": "email@teste.com",<br>
  "password": "LoremIpsun"<br>
}<br>

**To login**

> Type: post <br>
Route: /login <br>

> header: {} <br>
body: 
{<br>
  "email": "email@teste.com",<br>
  "password": "LoremIpsun"<br>
}<br>

**-----------------------------------------------------------------------------------------------------------------------------------------** <br>

**To create a credential**

> Type: post <br>
Route: /insert/credential <br>

> header: { "Authrization": "Bearer Token" } <br>
body: 
{<br>
  "username": "My Name",<br>
  "password": "Loren",<br>
  "title": "Any title",<br>
  "url": "http://exemple.com"<br>
}<br>

**To list all Credentials**

> Type: get <br>
Route: /credentials <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>


**To list a Credential**

> Type: get <br>
Route: /credential/:id <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>


**To delete a Credential**

> Type: delete <br>
Route: /credential/delete/:id <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>


**-----------------------------------------------------------------------------------------------------------------------------------------** <br>

**To create a Note**

> Type: post <br>
Route: /insert/credential <br>

> header: { "Authrization": "Bearer Token" } <br>
body: 
{<br>
  "title": "New note",<br>
  "text": "LorenIpsun Lorem"<br>
}<br>

**To list all Notes**

> Type: get <br>
Route: /notes <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>


**To list a Note**

> Type: get <br>
Route: /note/:id <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>


**To delete a Note**

> Type: delete <br>
Route: /note/delete/:id <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>

**-----------------------------------------------------------------------------------------------------------------------------------------** <br>

**To create a Card**

> Type: post <br>
Route: /insert/card <br>

> header: { "Authrization": "Bearer Token" } <br>
body: 
{<br>
  "title": "Title of card",<br>
  "number": "1234 1234 1234 1234",<br>
  "name": "FULANO D S CICRANO",<br>
  "cvc": "000",<br>
  "expirationDate": "09/27",<br>
  "password": "9999",<br>
  "isVirtual": false, *(Boolean)*<br>
  "type": "credit" *("credit", "debit", "credit/debt")*<br>
}<br>

**To list all Cards**

> Type: get <br>
Route: /cards <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>


**To list a Card**

> Type: get <br>
Route: /card/:id <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>


**To delete a Card**

> Type: delete <br>
Route: /card/delete/:id <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>

**-----------------------------------------------------------------------------------------------------------------------------------------** <br>

**To create a Wifi**

> Type: post <br>
Route: /insert/card <br>

> header: { "Authrization": "Bearer Token" } <br>
body: 
{<br>
  "bssid": "My wifi bssid",<br>
  "password": "password",<br>
  "title": "Principal"<br>
}<br>

**To list all Wifi**

> Type: get <br>
Route: /cards <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>


**To list a Wifi**

> Type: get <br>
Route: /card/:id <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>


**To delete a Wifi**

> Type: delete <br>
Route: /card/delete/:id <br>

> header: { "Authorization": "Bearer Token" } <br>
body: {
}<br>





