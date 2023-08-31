# The React Movie List

### Docs 🧾
Things you have to do first:
1. Run the npm i in your terminal
2. Create an .env file that consist your TMDB credential, following the example given
3. npm run start

### Components Docs 🧩
There are components that could be reused, located in /components, that contain:
1. MainCard - could be used as base of your page with title (String) and children (node) props
2. ComponentCard - could be used as thumbnails, with title, date, img and id (All String) as props
3. FilterCard - smaller cards that has title (String) and children (node) as a props, used for placing filters and search
4. LoadingCard - card component as big as MainCard with shimmering element that could be used as a Loader with React Suspense
