# ProvenirCoffee
`Sometimes you want coffee, but sometimes you just want to test someone on their coding skills`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).


## Interpretation of Requirements
### Required
[✓] Angular

[✓] Material Design Lite

[✓] Reactive Forms

[✓] "Refresh the page, I still have my cups"


### Good to Have
[✓] Routing

[ ] Lazy loading (Easy to add)

[✓] Flexible design (probably overabstracted)

[✓] Modal

[✓] Responsive


### Pages
[✓] Login

[✓] Coffee Cup list

[✓] Add/Edit Coffee Cup

[✓] Coffee Cup details


### Bonus
[ ] Images

[✓] Redux

[✓] Nx


### Out of Scope
[ ] Data service abstraction (easy to connect to api)

[ ] Login/Data storage API (dynamoDB/API Gateway)

[ ] Login security (JWT)


### Would have liked to add/fix
[ ] @angular-mdl/select dropdown display value

[ ] Use a mock SQL database to auto-generate IDs and store cup/flavor types instead of hardcoding

[ ] Probably should have maintained login status in the state

[ ] Separate item details page with some fancy pictures

[ ] Properly abstract localStorage

[ ] Actual tests


## Design Choices
The target was to create an application to showcase certain features while being easy to develop.

#### Nx
I chose to use Nx (https://nrwl.io/) which extends Angular CLI to generate opinionated enterprise boilerplate.  In particular, it makes it easy to add Ngrx (which requires a lot of code), and also I wanted to try it out.  It also can add Jest support very easily, which in hindsight would have made testing very easy and quick shallow renders.  Unfortunately, it is best geared towards large project, as the Nx workspace sets up a monorepo and generates a lot of boilerplate which I would never use in the scope of this project.

#### angular2-mdl
I also used angular2-mdl (https://github.com/mseemann/angular2-mdl), which is an Angular implementation of MDL.  It was pretty complete and bug-free throughout my usage in this project, so fortunately I didn't have to do much with MDL itself.

#### Storage
For persistent storage, I used LocalStorage and SessionStorage because they are globally available, so it's easy to use.  I didn't use a mock DB because I am not familiar with any and strays a little too far from original requirements.
