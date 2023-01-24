# 🗺 Middle-Earth Map

🔗 Link: [middleearthmap.app](https://middleearthmap.app/)

Web application of a Middle-Earth interactive map. **This is a fan-made application**.

Discover Middle-Earth and all the places and events that J.R.R. Tolkien told us about in The Hobbit and Lords of the
Rings.

# 🔨 Development

## Stack

This app is designed with **HTML/SASS/Javascript**. It uses **Vite** as a development/build environment.

This project uses [LeafLet library](https://leafletjs.com) for the interactive map part.

## How to use

You'll need **node** and **npm** installed on your machine.

Download the sources, then go to the project folder and run :

```
npm install
```

You can now run the project in a dev environment :

```
npm run dev
```

You can also build and preview the build app:

```
npm run build && npm run preview
```

## Structure

The structure is straightforward, but it may be subject to change during development.

- 📁./styles/ - All SCSS/CSS files of the project
- 📁./assets/ - All static assets : images, icons, fonts, json files containing data
- 📁./public/ - Everything that needs to be delivered in production as it is. In this case, contains Leaflet 1.9.3 and
  leaflet.smooth_marker_bouncing library.

I am open to any ideas to make this app even cooler, feel free to contact me if you have any.

# 🤝 Credits

This project is open to anyone who wants to help ! Feel free to fork and pull request or to mail me at
**yohann.bethoule@gmail.com**.

Thanks and support to Leaflet team in Ukraine.

Similar projects you might like :

- 🔗 [rop-map.com](https://middleearthmap.app/) : An interactive map for Amazon show Rings of Power.
- 🔗 [lotrproject.com/](https://lotrproject.com/) : A very comprehensive project about LotR, also embedding an
  interactive map. 